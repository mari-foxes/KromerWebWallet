<script>
    import WalletCard from "$widgets/dashboard/walletCard.svelte";
    import { Plus } from "@lucide/svelte";

    import { goto } from "$app/navigation";
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="grid grid-cols-2 grid-rows-2 gap-4 h-full">
  <!-- Left Column: Top - My Wallets -->
  <div class="flex flex-col gap-4 bg-[var(--accent-2)] text-white p-4">
    <span class="text-2xl font-bold">My Wallets</span>
      <div class="flex flex-col overflow-auto gap-4 max-h-74 min-h-74">
      <WalletCard alias="meow" balance="120 KRO" address="kru3958"></WalletCard>
      <WalletCard alias="meow" balance="120 KRO" address="kru3958"></WalletCard>
      <WalletCard alias="meow" balance="120 KRO" address="kru3958"></WalletCard>
      <WalletCard alias="meow" balance="120 KRO" address="kru3958"></WalletCard>
      <WalletCard alias="meow" balance="120 KRO" address="kru3958"></WalletCard>
      <WalletCard alias="meow" balance="120 KRO" address="kru3958"></WalletCard>
      <WalletCard alias="meow" balance="120 KRO" address="kru3958"></WalletCard>
    </div>
    <button class="w-full bg-[var(--accent-1)] h-full text-white hover:bg-[var(--accent-3)] cursor-pointer transition flex items-center justify-center gap-2 text-sm font-medium" on:click={() => goto('/dashboard/wallets')}>
        <Plus class="inline w-4 h-4" />
        Add wallet
    </button>
  </div>

  <!-- Right Column: Span 2 Rows - My Transactions -->
  <div class="bg-[var(--accent-2)] text-white p-4 row-span-2">
    <span class="text-2xl font-bold">My Transactions</span>
    <div class="flex flex-col items-center align-baseline mt-4">
      <span>¯\_(ツ)_/¯</span>
    </div>
  </div>

  <!-- Left Column: Bottom - MOTD -->
  <div class="bg-[var(--accent-2)] text-white p-4">
    <span class="text-2xl font-bold">MOTD</span>
  </div>
</div>
