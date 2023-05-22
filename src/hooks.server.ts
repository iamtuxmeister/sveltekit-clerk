import Clerk from '@clerk/clerk-js';
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.clerk = new Clerk(PUBLIC_CLERK_PUBLISHABLE_KEY);
	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
