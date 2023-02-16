<script>
	// Components
	import Header from '../components/header/header.svelte';
	import PiMainContainer from '../components/pi/pi_main_container/pi_main_container.svelte';
	// Content
	import { HEADER_TITLE, HEADER_DESCRIPTION } from '../content/header/header_content';
</script>

<div class={`flex h-max min-h-screen w-full flex-col bg-cover transition-colors duration-700 ${subsTheme==='dark'?"bg-[url('bg-dark-new.svg')]":"bg-[url('bg-wave-light.svg')]"}`} >
	<Header title={HEADER_TITLE} description={HEADER_DESCRIPTION} />
	<PiMainContainer />
</div>
