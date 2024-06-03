<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
</script>

<main>
	<div class="menu-container">
		<Menu></Menu>
	</div>

	<div class="content-container">
		<slot></slot>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 4fr;
		height: 100vh;
	}

	.menu-container {
		background-color: #f0f0f0;
		height: 100%;
	}

	.content-container {
		height: 100%;
	}
</style>
