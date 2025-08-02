<script>
	import { ArrowLeft } from "@lucide/svelte";
	import { goto } from "$app/navigation";

    export let pageTitle = ""

	const handleBack = () => {
		goto("/dashboard");
	};
</script>


<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div
	class="flex flex-col text-3xl font-bold text-[color:var(--accent-3)] transition-colors duration-200">
	<span class="hover:text-[color:var(--hover)] cursor-pointer" on:click={handleBack}>Go back</span>
    <span class="text-xs italic">{pageTitle}</span>
</div>
