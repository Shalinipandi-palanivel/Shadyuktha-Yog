import { z } from 'zod';
import { insertProgramSchema, programs, enrollments, sessions, insertEnrollmentSchema } from './schema';

// Shared Error Schemas
export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  unauthorized: z.object({
    message: z.string(),
  }),
};

export const api = {
  programs: {
    list: {
      method: 'GET' as const,
      path: '/api/programs',
      input: z.object({
        category: z.string().optional(),
      }).optional(),
      responses: {
        200: z.array(z.custom<typeof programs.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/programs/:id',
      responses: {
        200: z.custom<typeof programs.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
  enrollments: {
    create: {
      method: 'POST' as const,
      path: '/api/enrollments',
      input: z.object({ programId: z.number() }),
      responses: {
        201: z.custom<typeof enrollments.$inferSelect>(),
        401: errorSchemas.unauthorized,
      },
    },
    list: { // User's enrollments
      method: 'GET' as const,
      path: '/api/my-enrollments',
      responses: {
        200: z.array(z.custom<typeof enrollments.$inferSelect & { program: typeof programs.$inferSelect }>()),
        401: errorSchemas.unauthorized,
      },
    },
  },
  sessions: {
    list: { // Upcoming sessions for user
      method: 'GET' as const,
      path: '/api/my-sessions',
      responses: {
        200: z.array(z.custom<typeof sessions.$inferSelect>()),
        401: errorSchemas.unauthorized,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
