import { z } from 'zod';

// Health endpoint response schema
export const health = z.object({
	health: z.literal('ok'),
	timestamp: z.string(), // ISO date string
});

// Health ready endpoint response schema
export const ready = z.object({
	ready: z.boolean(),
	database: z.enum(['connected', 'not configured']),
	timestamp: z.string(), // ISO date string
});

// Health live endpoint response schema
export const live = z.object({
	alive: z.boolean(),
	timestamp: z.string(), // ISO date string
});

export default {
	health,
	ready,
	live,
};

