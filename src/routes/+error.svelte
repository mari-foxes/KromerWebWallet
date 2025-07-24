<script>
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';

  let animate = $state(false);

    onMount(() => {
    const timer = setTimeout(() => {
      animate = true;
    }, 1); 

    return () => clearTimeout(timer);
  });
</script>

<div class="w-full h-full flex flex-row items-center justify-center min-h-screen ">
  {#if animate}
  <div class="text-center" transition:fly={{y: 200, duration: 400, easing:cubicOut }}>
    <span class="text-5xl font-semibold text-[var(--logo)]">¯\_(ツ)_/¯</span>
    <br>
    <br>
    <span class="text-2xl font-semibold font-mono text-[var(--accent-3)]">{$page.status}: {$page.error.message}</span>
  </div>
  {/if}
</div>