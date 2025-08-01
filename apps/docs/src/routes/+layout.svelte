<script lang="ts">
	import '../app.css';
	import { Footer, Header } from '@libs/ui';

	let { children } = $props();
</script>

<div class="grid grid-rows-[auto_1fr_auto] w-[100dvw] h-[100dvh]">
	<Header title="Docs Page" />
	<main class="flex flex-col w-full h-full justify-center items-center bg-primary-50">
		{@render children()}
	</main>
	<Footer caption="© 2025 Your Company. All rights reserved." />
</div>
