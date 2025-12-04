<script lang="ts">
	import { base } from '$app/paths';

	import { largeScreen } from '$lib/utils/windowSize';
</script>

<div class="main">
	<h1>Ph.D complementary resources</h1>

	<h2>Document</h2>
	<div style="padding: 1rem;">Will be uploaded soon.</div>

	<h2>Repositories</h2>
	<div style="padding: 1rem;">List of all GitLab and GitHub repositories. Will be uploaded soon.</div>

	<h2>Videos</h2>
	<div class="videos-container" class:larger={!$largeScreen}>
		<div class="video-item" class:larger={!$largeScreen}>
			WiM prototype
			<video controls>
				<source src={`${base}/videos/phd-demo-wim.mp4`} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>

		<div class="video-item" class:larger={!$largeScreen}>
			VOICE
			<video controls>
				<source src={`${base}/videos/phd-demo-voice.mp4`} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
		<div class="video-item" class:larger={!$largeScreen}>
			ThighTouchI
			<video controls>
				<source src={`${base}/videos/phd-demo-thightouchi.mp4`} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
</div>

<style>
	.main {
		overflow: hidden;
		padding-left: 1rem;
		padding-right: 1rem;
		height: 100%;
	}
	.videos-container.larger {
		display: flex;
		overflow-x: scroll;
	}
	.video-item {
		font-weight: 200;
		margin-right: 1rem;
	}
	.video-item.larger {
		width: 25vw;
		margin-right: 1rem;
	}
	video {
		width: 100%;
		margin-top: 0.5rem;
	}
</style>
