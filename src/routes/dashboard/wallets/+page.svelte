<script>
    // Widgets
    import Back from "$widgets/back.svelte";
    
    // Variables
    let pageTitle = "My Wallets"
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Back pageTitle={pageTitle}/>