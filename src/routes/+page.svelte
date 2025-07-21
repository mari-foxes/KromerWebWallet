<script>
    import { onMount } from 'svelte';
    import { makeAddress } from '$lib/wallet/algorithm';
    onMount(() => {
        makeAddress("test").then(address => {
            console.log("API Address:", address);
            // check against krist.club - works i guess.
        });
    });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
