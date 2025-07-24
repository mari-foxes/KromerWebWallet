<script>
    import { page } from "$app/stores";
    import { derived } from "svelte/store";

    const routes = [
        // Personal
        {name: 'Dashboard', href: '/dashboard'},
        {name: 'My Wallets', href: '/dashboard/wallets'},
        {name: 'Address Book', href: '/dashboard/contacts'},
        {name: 'My Transactions', href: '/dashboard/transactions'},
        {name: 'My Names', href: '/dashboard/names'},
        // Global
        {name: 'All Transactions', href: '/all/transactions'},
        {name: 'All Names', href: '/all/names'}
        
    ]

    const activePath = derived(page, ($page) => $page.url.pathname)
</script>


<nav class="flex flex-col h-screen w-84 bg-[var(--accent-2)] text-neutral-100  shadow-2xl shadow-stone-900">
    <!-- Header -->
    <div>
        <div class="h-5"></div>
        <span class="text-4xl font-semibold pl-4 text-[var(--logo)]">KromerWallet</span>
    </div>

    <!-- Navigation links -->
    <div class="flex-1 mt-1 pl-4"> 
        <ul>
            {#each routes as route}
                <li class="flex flex-col">
                    <a class="text-xl transition hover:bg-[var(--hover)]" href={route.href}>{route.name}</a>
                    {#if route.name == "Dashboard"}
                        <div class="h-3"></div>
                        <span class="text-2xl font-semibold text-[var(--logo)]">Personal</span>
                    {/if}
                    {#if route.name == "My Names"}
                        <div class="h-3"></div>
                        <span class="text-2xl font-semibold text-[var(--logo)]">Global</span>
                    {/if}
                </li>
            {/each}
        </ul>
    </div>

    <!-- Social shit -->
    <div class="w-full h-14 flex flex-col items-center">
        <span class="text-[var(--accent-3)]">Made by <a href="https://github.com/mari-foxes" class="italic text-[var(--accent-3)] hover:text-[var(--accent-4)] transition">mari-foxes</a></span>
        <ul>
          <li>
            <a class="italic text-[var(--accent-3)] hover:text-[var(--accent-4)] transition" href="https://github.com/mari-foxes/KromerWebWallet">github</a>
            <span class="text-[var(--accent-3)]">-</span>
            <a class="italic text-[var(--accent-3)] hover:text-[var(--accent-4)] transition" href="/credits">credits</a>
          </li>
        </ul>
    </div>
</nav>