<script>
	import { onMount, createEventDispatcher } from 'svelte';
	export let title = "";
	export let description = "";
	export let type = "success";
	export let time = 5;

	let progress = 0;
	const dispatch = createEventDispatcher();

	$: bgColor =
		type === "success"
			? "bg-[var(--logo)]"
			: type === "failure"
			? "bg-[var(--failure)]"
			: "bg-gray-700";

	function easeOutCubic(t) {
		return 1 - Math.pow(1 - t, 3);
	}

	onMount(() => {
		let start;

		function animate(timestamp) {
			if (!start) start = timestamp;
			const elapsed = (timestamp - start) / 1000;
			let rawProgress = Math.min(1, elapsed / time);
			progress = easeOutCubic(rawProgress) * 100;

			if (rawProgress < 1) {
				requestAnimationFrame(animate);
			} else {
				progress = 100;
				dispatch('timeout');
			}
		}

		requestAnimationFrame(animate);
	});
</script>

<!-- Use bgColor in the class -->
<div class="{bgColor} text-white p-4 rounded shadow w-80 overflow-hidden">
	<strong class="block text-lg font-semibold">{title}</strong>
	<p class="text-sm">{description}</p>
	<div class="mt-5 h-1 bg-white/30 rounded overflow-hidden">
		<div
			class="h-full bg-white"
			style="width: {progress}%;"
		></div>
	</div>
</div>
