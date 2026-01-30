import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { setupAuth, registerAuthRoutes, isAuthenticated } from "./replit_integrations/auth";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // === AUTH SETUP ===
  await setupAuth(app);
  registerAuthRoutes(app);

  // === API ROUTES ===

  // Programs
  app.get(api.programs.list.path, async (req, res) => {
    const programs = await storage.getPrograms();
    res.json(programs);
  });

  app.get(api.programs.get.path, async (req, res) => {
    const program = await storage.getProgram(Number(req.params.id));
    if (!program) return res.status(404).json({ message: "Program not found" });
    res.json(program);
  });

  // Enrollments (Protected)
  app.post(api.enrollments.create.path, isAuthenticated, async (req: any, res) => {
    try {
      const input = api.enrollments.create.input.parse(req.body);
      const enrollment = await storage.createEnrollment({
        userId: req.user.claims.sub,
        programId: input.programId,
        status: 'active' // Auto-activate for now (or 'pending')
      });
      res.status(201).json(enrollment);
    } catch (err) {
      res.status(400).json({ message: "Invalid request" });
    }
  });

  app.get(api.enrollments.list.path, isAuthenticated, async (req: any, res) => {
    const enrollments = await storage.getUserEnrollments(req.user.claims.sub);
    res.json(enrollments);
  });

  // Sessions (Protected)
  app.get(api.sessions.list.path, isAuthenticated, async (req: any, res) => {
    const sessions = await storage.getUserSessions(req.user.claims.sub);
    res.json(sessions);
  });

  // === SEED DATA ===
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingPrograms = await storage.getPrograms();
  if (existingPrograms.length === 0) {
    console.log("Seeding database...");
    
    // Beginner
    await storage.createProgram({
      title: "Beginner Level (Arambha Avastha) - 3 Month Program",
      description: "Systematic introduction to yogic practice. Focus on body awareness, alignment, and breath coordination.",
      category: "Sadhana",
      level: "Beginner",
      duration: "3 Months",
      format: "Group",
      price: "₹3000 / month",
      features: ["Gentle Asana", "Basic Pranayama", "Simple Mudras", "Guided Relaxation"]
    });

    await storage.createProgram({
      title: "Daily Practice Sessions (Beginner)",
      description: "Live guided daily sadhana for habit formation and regularity.",
      category: "Sadhana",
      level: "Beginner",
      duration: "Ongoing",
      format: "Group",
      price: "₹1500 / month",
      features: ["Daily Live Class", "Consistency Building", "Morning Ritual"]
    });

    // Intermediate
    await storage.createProgram({
      title: "Intermediate Level (Madhyama Avastha) - 3 Month Program",
      description: "Progressive strength and flexibility training with deeper pranayama understanding.",
      category: "Sadhana",
      level: "Intermediate",
      duration: "3 Months",
      format: "Group",
      price: "₹3500 / month",
      features: ["Flow-based Asana", "Intermediate Pranayama", "Bandha Awareness", "Dharana"]
    });

    // Therapy
    await storage.createProgram({
      title: "Disease Management - Yoga Chikitsa",
      description: "Therapeutic protocols for specific conditions like Thyroid, Diabetes, Back Pain, etc.",
      category: "Therapy",
      level: "All",
      duration: "Custom",
      format: "One-on-One",
      price: "Consultation based",
      features: ["Personalized Assessment", "Condition Specific Asanas", "Healing Pranayama", "Lifestyle Guidance"]
    });

     // Seed some sessions for demo (need a program ID first, but we just created them. 
     // For robustness, we'd fetch them back, but let's assume IDs 1-4 for now or skip sessions seeding until real usage)
     // Actually, let's create a session for the first program found.
     const programs = await storage.getPrograms();
     if (programs.length > 0) {
       await storage.createSession({
         programId: programs[0].id,
         title: "Morning Alignment & Breath",
         startTime: new Date(Date.now() + 86400000), // Tomorrow
         endTime: new Date(Date.now() + 86400000 + 3600000), // +1 hour
         instructor: "Shadyuktha Lead Teacher",
         meetingLink: "https://meet.google.com/abc-defg-hij"
       });
     }
  }
}
