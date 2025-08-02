<script>
    export let address = ""
    export let balance = ""
    export let alias = ""
</script>

<div class="bg-[var(--logo)] hover:bg-[var(--hover)] transition px-4 py-3 w-full text-white">
  <div class="flex items-center justify-between">
    <div class="text-base font-medium truncate">{alias}</div>
    <div class="text-sm font-semibold text-gray-200">{balance}</div>
  </div>
  <div class="text-xs text-gray-400 break-all pl-[1px]">{address}</div>
</div>
