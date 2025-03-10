<script lang="ts">
	export let events: { description: string; date: Date; authors?: string; repository?: string }[];
</script>

<div class="container">
	<div class="line"></div>

	<div class="cards">
		{#each events as event}
			<div class="card">
				<h4>{event.date.toISOString().split('T')[0]}</h4>
				<p>{event.description}</p>
				{#if !!event.authors}
					<h5>Authors: {event.authors}</h5>
				{/if}
				{#if !!event.repository}
					<h6>
						<a href={event.repository} target="_blank">See repository</a>
					</h6>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.container {
		display: flex;
		height: max-content;
	}

	.line {
		width: 2px;
		background: #d1d6e6;
	}

	.cards {
		margin-left: 10px;
	}

	.cards .card {
		width: fit-content;
		min-height: fit-content;
		padding-top: 1em;
		padding-bottom: 1em;
		padding-right: 1em;
		background: #ffffff;
		border-radius: 10px;
		margin-bottom: 1em;
		background-color: #f0f0f0;
	}

	.cards .card::before {
		content: '';
		position: absolute;
		transform: translateX(-17.5px);
		background: #d1d6e6;
		width: 14px;
		height: 14px;
		border-radius: 10px;
	}

	.cards .card h4,
	.cards .card h6 {
		font-weight: 500;
		padding-bottom: 0.5em;
		margin-left: 1.5em;
		font-size: small;
	}

	.cards .card h6 {
		margin-top: 0.5em;
	}

	.cards .card p {
		margin-left: 1.5em;
		font-size: small;
	}

	.cards .card h5 {
		font-weight: 400;
		padding-top: 0.5em;
		margin-left: 1.5em;
		font-size: smaller;
	}
</style>
