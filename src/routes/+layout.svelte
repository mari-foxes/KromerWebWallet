<script>
	import '../app.css';
	import Navigation from "$widgets/navigation.svelte"
  import NotificationManager from '$widgets/notifications/NotificationManager.svelte';

	let { children } = $props();
</script>

<div class="flex bg-[var(--accent-1)] text-white">
  <Navigation />
  <NotificationManager />
  <!-- svelte-ignore slot_element_deprecated -->
  <main class="flex-1 p-6 overflow-y-auto">
    <slot />

  </main>
</div>