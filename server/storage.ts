import { db } from "./db";
import {
  users, programs, enrollments, sessions,
  type User, type InsertUser,
  type Program, type InsertProgram,
  type Enrollment, type InsertEnrollment,
  type Session, type InsertSession
} from "@shared/schema";
import { eq, and } from "drizzle-orm";
// Import auth storage to reuse its methods or extend
import { authStorage, type IAuthStorage } from "./replit_integrations/auth/storage";

export interface IStorage extends IAuthStorage {
  // Programs
  getPrograms(): Promise<Program[]>;
  getProgram(id: number): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;

  // Enrollments
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
  getUserEnrollments(userId: string): Promise<(Enrollment & { program: Program })[]>;
  
  // Sessions
  getUserSessions(userId: string): Promise<Session[]>; // In reality, this would join enrollments
  createSession(session: InsertSession): Promise<Session>;
}

export class DatabaseStorage implements IStorage {
  // Reuse Auth Methods
  async getUser(id: string): Promise<User | undefined> {
    return authStorage.getUser(id);
  }
  async upsertUser(user: any): Promise<User> {
    return authStorage.upsertUser(user);
  }

  // Programs
  async getPrograms(): Promise<Program[]> {
    return await db.select().from(programs);
  }

  async getProgram(id: number): Promise<Program | undefined> {
    const [program] = await db.select().from(programs).where(eq(programs.id, id));
    return program;
  }

  async createProgram(program: InsertProgram): Promise<Program> {
    const [newProgram] = await db.insert(programs).values(program).returning();
    return newProgram;
  }

  // Enrollments
  async createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment> {
    const [newEnrollment] = await db.insert(enrollments).values(enrollment).returning();
    return newEnrollment;
  }

  async getUserEnrollments(userId: string): Promise<(Enrollment & { program: Program })[]> {
    const rows = await db.select()
      .from(enrollments)
      .innerJoin(programs, eq(enrollments.programId, programs.id))
      .where(eq(enrollments.userId, userId));
    
    return rows.map(row => ({
      ...row.enrollments,
      program: row.programs
    }));
  }

  // Sessions
  async createSession(session: InsertSession): Promise<Session> {
    const [newSession] = await db.insert(sessions).values(session).returning();
    return newSession;
  }

  async getUserSessions(userId: string): Promise<Session[]> {
    // Get programs user is enrolled in
    const userEnrollments = await this.getUserEnrollments(userId);
    const programIds = userEnrollments.map(e => e.programId);

    if (programIds.length === 0) return [];

    // Find sessions for these programs
    // Note: Drizzle's `inArray` would be better here, but for now filtering in JS or simple query
    // Let's use a raw query or simple iteration if list is small. 
    // Actually, let's just fetch all sessions for these programs.
    // Ideally: .where(inArray(sessions.programId, programIds))
    
    // For simplicity in this mock-up style storage, let's fetch all and filter. 
    // (In production, use proper SQL 'IN' clause)
    const allSessions = await db.select().from(sessions);
    return allSessions.filter(s => s.programId && programIds.includes(s.programId));
  }
}

export const storage = new DatabaseStorage();
