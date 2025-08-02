<script>
    import { client } from "$lib/kromer/rest/client";
    import { API_URL } from "$lib/store/configuration";
    import { notify } from '$lib/store/notifications.js';
    import SettingCard, { FieldType } from "$widgets/settings/settingCard.svelte";

    let pageTitle = "Settings";
    let inputURL;

    async function saveURL(URL) {
        const regex = /^(https?:\/\/)([\w.-]+)(:[0-9]+)?(\/[^\s]*)?$/i;
        const found = URL.match(regex);

        if (!found) {
            notify({
                title: 'Updating URL failed!',
                description: `Failed to set backend to: ${URL}, are you sure it's a proper URL?`,
                type: 'failure',
                time: 3
            });
            return;
        }


        try {
            const data = await client.api_get_status();
            API_URL.set(URL);
            if (!data.includes('200')) {
                notify({
                    title: 'API TEST',
                    description: `API responded with error status: ${JSON.stringify(data)}`,
                    type: 'failure',
                    time: 2
                });
                return;
            }

            notify({
                title: 'API TEST',
                description: `API responded with ${JSON.stringify(data)}`,
                type: 'success',
                time: 2
            });

            
        } catch (error) {
            console.error(error);
            notify({
                title: 'API TEST',
                description: `API request failed: ${error.message}`,
                type: 'failure',
                time: 2
            });
        }
    }
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<SettingCard
	title="Backend URL"
	description="Sets the API backend URL."
	type={FieldType.INPUT}
	placeholder={$API_URL}
	bind:value={inputURL}
	onInputEnter={saveURL}
>
	<button
		class="mt-2 bg-[var(--accent-1)] text-white px-4 py-2 rounded cursor-pointer"
		on:click={() => saveURL(inputURL)}
	>
		Test
	</button>
</SettingCard>
