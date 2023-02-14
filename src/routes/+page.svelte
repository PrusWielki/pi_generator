<script lang="ts">
	

	// Components
	import Header from '../components/header/header.svelte';
	import PiMainContainer from '../components/pi/pi_main_container/pi_main_container.svelte';
	import DarkModeButton from '../components/dark_mode_button/dark_mode_button.svelte';
	// Content
	import { HEADER_TITLE, HEADER_DESCRIPTION } from '../content/header/header_content';
	// Assets

	// Stores
	import { theme } from '../stores/main_store';

	let subsTheme: string;

	theme.subscribe(value => {
		subsTheme = value;
	});

</script>

<div class={`flex h-screen w-full flex-col bg-cover transition-colors duration-700 ${subsTheme==='dark'?"bg-[url('bg-wave.svg')]":"bg-[url('bg-wave-light.svg')]"}`} >
	<Header title={HEADER_TITLE} description={HEADER_DESCRIPTION} />
	<DarkModeButton/>
	<PiMainContainer />
</div>
