<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import windowSize, { smallScreen } from '$lib/utils/windowSize.js';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let data;

	let innerWidth: number;

	$: windowSize.set(innerWidth);

	onMount(() => {
		windowSize.set(innerWidth);
	});
</script>

<svelte:window bind:innerWidth />

<div class="menu-container" class:enlarged={!$smallScreen}>
	<Menu></Menu>
</div>

{#key data.url}
	<div
		class="content-container"
		class:enlarged={!$smallScreen}
		in:fly={{ y: 50, duration: 200, delay: 300 }}
		out:fly={{ y: 50, duration: 200 }}
	>
		<slot></slot>
	</div>
{/key}

<style>
	.menu-container {
		position: relative;
		height: 100%;
		box-sizing: border-box;
		width: 100%;
	}
	
	.menu-container.enlarged {
		position: fixed;
		width: 18.5em;
	}

	.content-container {
		height: 100%;
		margin-left: 0;
		box-sizing: border-box;
	}
	
	.content-container.enlarged {
		margin-left: 18.5em;
	}
</style>
