<script>
    import { page } from "$app/stores";
    import { derived } from "svelte/store";

    const routes = [
        // Personal
        {name: 'Dashboard', href: '/dashboard', section: ''},
        {name: 'Settings', href: '/dashboard/settings', section: ''},
        {name: 'My Wallets', href: '/dashboard/wallets', section: 'Personal'},
        {name: 'My Address Book', href: '/dashboard/contacts', section: 'Personal'},
        {name: 'My Transactions', href: '/dashboard/transactions', section: 'Personal'},
        {name: 'My Names', href: '/dashboard/names', section: 'Personal'},
        // Global
        {name: 'All Transactions', href: '/all/transactions', section: 'Global'},
        {name: 'All Names', href: '/all/names', section: 'Global'}
    ];

    const activePath = derived(page, ($page) => $page.url.pathname);

    // Group routes by section
    // Group routes with section
    const sectionedRoutes = Array.from(
        routes
          .filter(route => route.section)
          .reduce((acc, route) => {
              if (!acc.has(route.section)) acc.set(route.section, []);
              acc.get(route.section).push(route);
              return acc;
          }, new Map())
    );

    // Routes without a section
    const noSectionRoutes = routes.filter(route => !route.section);
</script>

<nav class="flex flex-col h-screen w-84 bg-[var(--accent-2)] text-neutral-100 shadow-2xl shadow-stone-900">
    <!-- Header -->
    <div>
        <div class="h-5"></div>
        <span class="text-4xl font-semibold pl-4 text-[var(--logo)]">KromerWallet</span>
    </div>

    {#if noSectionRoutes.length > 0}
        <div class="pl-4">
            <ul>
                {#each noSectionRoutes as route}
                    <li class="flex flex-col">
                        <a 
                            class="text-xl transition hover:bg-[var(--hover)] {($activePath === route.href) ? 'font-bold' : ''}" 
                            href={route.href}>
                            {route.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    {/if}

    <!-- Navigation links -->
    <div class="flex-1 mt-1 pl-4"> 
        {#each sectionedRoutes as [section, links]}
            <div class="mt-4">
                <span class="text-2xl font-semibold text-[var(--logo)]">{section}</span>
                <ul class="mt-1">
                    {#each links as route}
                        <li class="flex flex-col">
                            <a 
                                class="text-xl transition hover:bg-[var(--hover)] {($activePath === route.href) ? 'font-bold' : ''}" 
                                href={route.href}>
                                {route.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>

    <!-- Social links -->
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
