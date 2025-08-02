<script context="module">
    export const FieldType = {
        INPUT: "input",
        CHECKBOX: "checkbox",
        SELECT: "select"
    }
</script>

<script>
    export let title = "";
    export let description = "";
    export let type = FieldType.INPUT;

    export let placeholder = "";
    export let options = [];

    // New bindable props
    export let value = "";           // for INPUT
    export let checked = false;      // for CHECKBOX
    export let selected = "";        // for SELECT

    export let onInputEnter = () => {};
    export let onCheckboxChange = () => {};
    export let onSelectChange = () => {};

    function handleInputKey(e) {
        if (e.key === "Enter") onInputEnter(value);
    }

    function handleCheckboxChange() {
        onCheckboxChange(checked);
    }

    function handleSelectChange() {
        onSelectChange(selected);
    }
</script>

<div class="flex flex-col bg-[var(--accent-2)] rounded-lg p-4">
    <span class="text-lg font-semibold">{title}</span>
    <span class="text-[var(--accent-4)]">{description}</span>

    {#if type === FieldType.INPUT}
        <input
            class="mt-2 p-2 rounded bg-[var(--accent-1)] text-white border-[var(--logo)]"
            placeholder={placeholder}
            bind:value
            on:keydown={handleInputKey}
        />
    {:else if type === FieldType.CHECKBOX}
        <label class="mt-2 flex items-center gap-2">
            <input type="checkbox" bind:checked on:change={handleCheckboxChange} />
            Checkbox
        </label>
    {:else if type === FieldType.SELECT}
        <select
            class="mt-2 p-2 rounded"
            bind:value={selected}
            on:change={handleSelectChange}
        >
            {#each options as opt}
                <option value={opt.value}>{opt.label}</option>
            {/each}
        </select>
    {/if}

    <slot />
</div>
