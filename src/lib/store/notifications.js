import { writable } from 'svelte/store';

export const notifications = writable([]);

// Adds a new notification to the queue
export function notify({ title, description, type = 'success', time = 5 }) {
	notifications.update(n => [
		...n,
		{ id: crypto.randomUUID(), title, description, type, time }
	]);
}

// Removes a notification by ID
export function removeNotification(id) {
	notifications.update(n => n.filter(notif => notif.id !== id));
}
