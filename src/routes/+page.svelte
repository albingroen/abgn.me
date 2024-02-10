<script lang="ts">
	import {
		BOULDER_WEBSITE,
		DEMANDO_WEBSITE,
		GITHUB,
		LAYERS,
		NOTARY,
		PRISMABUILDER,
		REACT_CMDK
	} from '$lib/constants/links';

	const foo: string = 'hej';
</script>

<div class="markdown">
	<header>
		<h1>abgn.me</h1>

		<p>
			Hej, my name is Albin! I work a software developer at a startup in Stockholm called
			<a target="_blank" href={DEMANDO_WEBSITE}>Demando</a>. I live outside of Stockholm in a city
			called Västerås with my girlfriend Linnéa.
		</p>

		<p>
			Ony my spare time I enjoy travelling, rock climbing, eating good food, taking photos, hanging
			out with my girlfriend, and fiddling with tech and design.
		</p>
	</header>

	<section id="links">
		<h2>Links</h2>

		<ul>
			<li>
				<a target="_blank" href={GITHUB}>GitHub ↗</a>
			</li>

			<li>
				<a target="_blank" href={LAYERS}>Layers ↗</a>
			</li>
		</ul>
	</section>

	<section id="projects">
		<h2>Active projects</h2>

		<ul>
			<li>
				<a target="_blank" href={PRISMABUILDER}>Prismabuilder ↗</a>
				(Visual editor for creating Prisma database schemas)
			</li>

			<li>
				<a target="_blank" href={REACT_CMDK}>react-cmdk ↗</a>
				(React component for creating command-palettes)
			</li>

			<li>
				<a target="_blank" href={NOTARY}>Notary ↗</a>
				(Vim-friendly macOS markdown editor)
			</li>
		</ul>
	</section>
</div>
