import { z } from 'zod';

export const success = z.object({
	ready: z.boolean(),
	database: z.enum(['connected', 'not configured']),
	timestamp: z.string(), // ISO date string
});

export const error = z.object({
	statusCode: z.number(),
	message: z.string(),
});

export default {
	success,
	error,
};
