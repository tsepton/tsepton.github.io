<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import innerWidth, { smallScreen } from '$lib/utils/windowSize';
</script>

<div class="menu">
	<div class="profile-pic" class:reduced={$smallScreen}>
		<div class="picture-container">
			<img src="{base}/me.jpg" alt="Thibaut" />
		</div>
		<p class="name">Thibaut Septon</p>
		<p class="about-me">Ph.D Candidate @ UNamur</p>
		<p class="mail">thibaut.septon@unamur.be</p>
		<div class="contact-logo-containers">
			<a href="https://github.com/tsepton/" target="_blank">
				<img class="logo" src="{base}/github.svg" alt="github logo" />
			</a>
			<a href="https://gitlab.com/tsepton" target="_blank">
				<img class="logo" src="{base}/gitlab.svg" alt="gitlab logo" />
			</a>
			<a href="https://www.linkedin.com/in/thibaut-septon-b425041a2/" target="_blank">
				<img class="logo" src="{base}/linkedin.svg" alt="linkedin logo" />
			</a>
		</div>
	</div>

	<div class:reduced={$smallScreen}>
		<div class="menu-item" class:reduced={$smallScreen}>
			<a class:active={$page.url.pathname === `${base}/`} href="{base}/">Research</a>
		</div>
		<div class="menu-item" class:reduced={$smallScreen}>
			<a class:active={$page.url.pathname === `${base}/photography`} href="{base}/photography">
				Photography
			</a>
		</div>
	</div>
</div>

<style>
	.menu {
		display: flex;
		flex-direction: column;
		height: 100%;
		border-radius: 10px;
		box-sizing: border-box;
		padding: 1em;
		background-color: #f0f0f0;
	}

	.profile-pic > .name {
		font-size: 1.1em;
		font-weight: 500;
		padding-bottom: 0;
		margin-bottom: 0;
	}

	.profile-pic > .about-me {
		font-size: 0.8em;
		font-weight: 300;
		margin-bottom: 0.3em;
	}

	.profile-pic > .mail {
		font-size: 0.8em;
		font-weight: 300;
		margin-top: 0;
		padding-top: 0;
	}

	.reduced {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.menu-item {
		padding: 10px;
		border-bottom: 1px solid #e0e0e0;
		text-align: right;
	}
	.menu-item a {
		text-decoration: none;
		color: #000;
	}
	.menu-item a:hover {
		color: #0070f3;
	}

	.active {
		color: #0070f3 !important;
	}

	.menu-item:last-child {
		border-bottom: none;
	}

	.menu-item.reduced {
		border-bottom: none !important;
	}

	.profile-pic {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 1px solid #e0e0e0;
		padding: 2em;
	}

	.profile-pic.reduced {
		border-bottom: none;
	}

	.picture-container {
		width: 8em;
		height: 8em;
		border-radius: 50%;
		overflow: hidden;
		filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
	}

	.picture-container > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.contact-logo-containers {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		max-width: 8em;
		margin-top: 0.8em;
	}

	.contact-logo-containers > a > .logo {
		width: 1.5em;
		height: 1.5em;
		margin-right: 0.5em;
	}
</style>
