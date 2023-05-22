// See https://kit.svelte.dev/docs/types#app

import type Clerk from '@clerk/clerk-js';
import type { Session } from '@clerk/clerk-js';
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			clerk: Clerk;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Platform {}
	}
}

export {};
