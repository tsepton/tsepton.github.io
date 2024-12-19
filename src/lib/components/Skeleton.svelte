<script lang="ts">
	export let width: string = '100%';
	export let height: string = '100%';
</script>

<div class="skeleton" style="--width: {width}; --height: {height};"></div>

<style>
	.skeleton {
		width: var(--width);
		height: var(--height);
		background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
		background-size: 200% 100%;
		animation: shimmer 1.5s infinite;
		
		top: 0;
		left: 0;
		position: absolute;
		z-index: 100;
		opacity: 85%;
	}

	@keyframes shimmer {
		from {
			background-position: -200% 0;
		}
		to {
			background-position: 200% 0;
		}
	}
</style>
