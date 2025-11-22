import { z } from 'zod';
import { parseBooleanQueryParam } from '../../../../utils/helpers.js';

export const path = {
	regionId: z.string().optional().transform((val) => val === '' ? null : val).default(null),
};

export const query = {
	show_archived: parseBooleanQueryParam(),
	force_refresh: parseBooleanQueryParam(),
};

export const body = {

};

export default {
  path,
  query,
  body
};
