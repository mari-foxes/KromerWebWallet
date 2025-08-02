import { writable } from 'svelte/store';
/*
    @param {string} API_URL - Base URL for the API
*/
const stored = localStorage.getItem('API_URL');
export const API_URL = writable(stored || 'https://kromer.herrkatze.com/api/krist');

API_URL.subscribe(value => {
	localStorage.setItem('API_URL', value);
});


/*
    @param {string} API_INTERNAL_KEY - Internal key for testing the API
*/
export const API_INTERNAL_KEY = writable("dQw4w9WgXcQ")