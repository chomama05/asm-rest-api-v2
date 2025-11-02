import { z } from 'zod';

export const success = z.object({
	health: z.literal('ok'),
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
