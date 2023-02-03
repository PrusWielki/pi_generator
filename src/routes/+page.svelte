<script>
	// Components
	import Header from '../components/header/header.svelte';
	import PiMainContainer from '../components/pi/pi_main_container/pi_main_container.svelte';
	// Content
	import { HEADER_TITLE, HEADER_DESCRIPTION } from '../content/header/header_content';
</script>

<div class="flex max-h-screen w-full flex-col">
	<Header title={HEADER_TITLE} description={HEADER_DESCRIPTION} />
	<PiMainContainer />
</div>
