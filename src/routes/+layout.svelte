<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<div class="menu-container">
	<Menu></Menu>
</div>

{#key data.url}
	<div
		class="content-container"
		in:fly={{ y: 50, duration: 200, delay: 200 }}
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
		width: 25vw;
	}

	.content-container {
		height: 100%;
		margin-left: 25vw;
		padding: 1em;
	}
</style>
