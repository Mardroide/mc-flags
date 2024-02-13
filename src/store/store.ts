import { writable, get } from 'svelte/store';

// Written inputs
export const serverJar = writable({ name: 'server.jar', valid: true });
export const serverRam = writable({ amount: 1024, valid: true });

// Settings toggles
export const checkboxes = writable({ gui: false, autoStart: false });

// Contents
export const content = writable('');
