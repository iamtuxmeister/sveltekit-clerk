import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { clerk } }) => {
	return {
		session: clerk.session
	};
};
