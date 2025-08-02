import { get } from 'svelte/store';
import { API_URL } from "$lib/store/configuration";

async function request(endpoint, options = {}) {
    const { statusOnly, ...fetchOptions } = options;
    const baseUrl = get(API_URL);
    const url = `${baseUrl}${endpoint}`;
    console.log(url);

    const response = await fetch(url, fetchOptions);

    if (statusOnly) {
        return response.ok 
            ? `${response.status}`
            : `${response.status}`;
    }

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
}

export const client = {
    async api_get_status(options = {statusOnly: true}) {
        return request('/motd', options); 
    }
};

