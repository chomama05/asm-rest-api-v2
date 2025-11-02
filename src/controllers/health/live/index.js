import { formatSuccessResponse, formatErrorResponse, validateIncomingParameters } from '../../../utils/helpers';
import * as requestValidationSchema from "./request";
import * as responseValidationSchema from "./response";

export default async (request) => {
	try{
		const { path, query, body } = await validateIncomingParameters(request, requestValidationSchema);

		return formatSuccessResponse(request, {
			data: {
				alive: true,
				timestamp: new Date().toISOString(),
			},
			responseSchema: responseValidationSchema.success,
		});
	} catch (error) {
		console.error(error);
		return formatErrorResponse(request, error);
	}
};
