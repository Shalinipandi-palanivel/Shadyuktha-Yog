import { pgTable, text, serial, integer, boolean, timestamp, jsonb, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Re-export auth models
export * from "./models/auth";
import { users } from "./models/auth";

// === PROGRAMS (The 5 Pillars Content) ===
export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'sadhana', 'therapy', 'teacher_training', etc.
  level: text("level"), // 'beginner', 'intermediate', 'advanced', 'all'
  duration: text("duration"), // '3 months', 'ongoing', 'per session'
  format: text("format"), // 'group', 'one-on-one'
  price: text("price"), // Display text for price
  features: jsonb("features").$type<string[]>().default([]),
});

// === ENROLLMENTS ===
export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(), // References users.id (varchar from auth)
  programId: integer("program_id").notNull().references(() => programs.id),
  status: text("status").notNull().default('pending'), // 'active', 'pending', 'completed'
  enrolledAt: timestamp("enrolled_at").defaultNow(),
});

// === SCHEDULE / SESSIONS ===
export const sessions = pgTable("sessions", {
  id: serial("id").primaryKey(),
  programId: integer("program_id").references(() => programs.id),
  title: text("title").notNull(),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  meetingLink: text("meeting_link"),
  instructor: text("instructor").default("Shadyuktha Instructor"),
});

// === RELATIONS ===
export const programsRelations = relations(programs, ({ many }) => ({
  enrollments: many(enrollments),
  sessions: many(sessions),
}));

export const enrollmentsRelations = relations(enrollments, ({ one }) => ({
  program: one(programs, {
    fields: [enrollments.programId],
    references: [programs.id],
  }),
  user: one(users, {
    fields: [enrollments.userId],
    references: [users.id],
  }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  program: one(programs, {
    fields: [sessions.programId],
    references: [programs.id],
  }),
}));

// === ZOD SCHEMAS ===
export const insertProgramSchema = createInsertSchema(programs).omit({ id: true });
export const insertEnrollmentSchema = createInsertSchema(enrollments).omit({ id: true, enrolledAt: true });
export const insertSessionSchema = createInsertSchema(sessions).omit({ id: true });

// === TYPES ===
export type Program = typeof programs.$inferSelect;
export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type Enrollment = typeof enrollments.$inferSelect;
export type InsertEnrollment = z.infer<typeof insertEnrollmentSchema>;
export type Session = typeof sessions.$inferSelect;

// Request/Response Types
export type CreateEnrollmentRequest = { programId: number };
