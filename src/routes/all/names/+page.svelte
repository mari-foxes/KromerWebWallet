<script>
    // Widgets
    import Back from "$widgets/back.svelte";
    
    // Variables
    let pageTitle = "All Names"
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Back pageTitle={pageTitle}/>