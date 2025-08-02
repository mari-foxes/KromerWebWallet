<script>
    // Widgets
    import Back from "$widgets/back.svelte";
    
    // Variables
    let pageTitle = "All Transactions"
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Back pageTitle={pageTitle}/>