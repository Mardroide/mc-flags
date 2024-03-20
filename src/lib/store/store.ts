import { writable } from 'svelte/store';

// Written inputs
export const serverJar = writable({ name: 'server.jar', valid: true });
export const serverRam = writable({ amount: '1024', valid: true });

// Settings toggles
export const guiCheckbox = writable(false);
export const autoStartCheckbox = writable(false);

// Dropdowns
export const serverFlags = writable('none');
