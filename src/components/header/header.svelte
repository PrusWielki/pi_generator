<script>
	export let title = 'Title goes here';
	export let description = 'Description goes here';
</script>

<div class="flex w-full cursor-default flex-col items-center justify-center text-center font-mono">
	<div class="max-w-lg py-4 px-4">
		<div class="text-xl font-bold sm:text-2xl md:text-4xl">{title}</div>
		<div class="text-sm sm:text-lg">
			{description}
		</div>
	</div>
</div>
