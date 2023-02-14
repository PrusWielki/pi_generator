<script>
	import DarkModeButton from '../components/dark_mode_button/dark_mode_button.svelte';

	// Components
	import Header from '../components/header/header.svelte';
	import PiMainContainer from '../components/pi/pi_main_container/pi_main_container.svelte';
	// Content
	import { HEADER_TITLE, HEADER_DESCRIPTION } from '../content/header/header_content';
</script>

<div class="flex h-screen w-full flex-col dark:bg-stone-800 transition-colors duration-700">
	<Header title={HEADER_TITLE} description={HEADER_DESCRIPTION} />
	<DarkModeButton/>
	<PiMainContainer />
</div>
