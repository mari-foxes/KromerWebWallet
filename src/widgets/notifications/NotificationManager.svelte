<script>
	import { notifications, removeNotification } from '$lib/store/notifications.js';
	import Notification from './Notification.svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="fixed bottom-4 right-4 flex flex-col gap-4">
	{#each $notifications as notif (notif.id)}
		<div
			in:fly={{ y: 300, duration: 400 }}
			out:fly={{ y: 300, duration: 400 }}
			on:outroend={() => removeNotification(notif.id)}
		>
			<Notification 
				{...notif} 
				on:timeout={() => removeNotification(notif.id)}
			/>
		</div>
	{/each}
</div>
