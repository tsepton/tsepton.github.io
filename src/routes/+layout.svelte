<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import windowSize, { smallScreen } from '$lib/utils/windowSize.js';
	import { fly } from 'svelte/transition';

	export let data;

	let innerWidth: number;

	$: windowSize.set(innerWidth);
</script>

<svelte:window bind:innerWidth />

<div class="menu-container" class:reduced={$smallScreen}>
	<Menu></Menu>
</div>

{#key data.url}
	<div
		class="content-container"
		class:reduced={$smallScreen}
		in:fly={{ y: 50, duration: 200, delay: 300 }}
		out:fly={{ y: 50, duration: 200 }}
	>
		<slot></slot>
	</div>
{/key}

<style>
	.menu-container {
		position: fixed;
		padding: 1em;
		height: 100%;
		box-sizing: border-box;
		width: 18.5em;
	}

	.menu-container.reduced {
		position: relative;
		width: 100%;
	}

	.content-container {
		height: 100%;
		margin-left: 18.5em;
		padding: 1em;
		box-sizing: border-box;
	}

	.content-container.reduced {
		margin-left: 0;
	}
</style>
