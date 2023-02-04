<script lang="ts">
	let text = 'XDXDXDDXD';
</script>

<div class="flex flex-col justify-items-center  gap-5">
	<div class="px-2 py-2">
		<textarea bind:value={text} class="h-36 w-full self-start border-2 border-black" />
	</div>
	<div class="px-2 py-2">
		<textarea bind:value={text} class="h-36 w-full self-end border-2 border-black" />
	</div>
</div>
