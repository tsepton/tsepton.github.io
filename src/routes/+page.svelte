<script lang="ts">
	import Lorem from '$lib/components/Lorem.svelte';
</script>

<div class="container">
	<div>
		<h1>About me</h1>
		<Lorem></Lorem>
	</div>

	<div class="sub-titles">
		<div>
			<h2>Interests</h2>
			<Lorem></Lorem>
		</div>

		<div>
			<h2>Education</h2>
			<Lorem></Lorem>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 5em;
	}

	.container > .sub-titles {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 2em;
	}

	h1 {
		font-size: 3em;
		font-weight: 300;
		margin-top: 0;
	}

	h2 {
		margin-top: 0;
		font-size: 2em;
		font-weight: 200;
	}
</style>
