/**
 * Middleware to check if the user is authenticated
 * @param request
 * @constructors
 */
const AuthMiddleware = (request: Request, env: Env) => {
	const token = request.headers.get('Authorization');

	// Strict check for token existence
	if (!env.EMAIL_API_TOKEN || env.EMAIL_API_TOKEN.length === 0) {
		return new Response('You must set the EMAIL_API_TOKEN environment variable.', {
			status: 401,
		});
	}

	if (token !== env.EMAIL_API_TOKEN) {
		return new Response('Unauthorized', { status: 401 });
	}
};

export default AuthMiddleware;
