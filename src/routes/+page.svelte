<script lang="ts">
	import { DocLayout, ShowcaseSection, FeatureCard, CodeBlock } from '@keenmate/svelte-docs';
</script>

<DocLayout
	titleText="Web MultiSelect Showcase"
	descriptionText="Lightweight multiselect web component with typeahead search, rich content support, and excellent keyboard navigation">

	<!-- Hero Section -->
	<div class="py-1">
		<div class="text-center mb-5">
			<h1 class="display-4 fw-bold mb-4">
				<span class="text-primary">@keenmate/web-multiselect</span>
			</h1>
			<p class="lead mb-4">
				A lightweight, framework-agnostic multiselect web component with typeahead search, rich content support, flexible data handling, and excellent keyboard navigation.
			</p>
			<div class="d-flex gap-3 justify-content-center flex-wrap">
				<a href="/getting-started" class="btn btn-primary btn-lg">
					🚀 Get Started
				</a>
				<a href="/examples/basic" class="btn btn-outline-primary btn-lg">
					🎨 View Examples
				</a>
				<a href="https://github.com/keenmate/web-multiselect" target="_blank" class="btn btn-outline-dark btn-lg">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" class="me-2">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
					</svg>
					GitHub
				</a>
			</div>
		</div>

		<!-- Key Features -->
		<div class="row g-4 mb-5">
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🎯"
					titleText="Framework Agnostic"
					descriptionText="Pure Web Component that works with vanilla JS, React, Vue, Angular, Svelte, and more"
					variantType="primary"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🔄"
					titleText="Flexible Data API"
					descriptionText="Works with any data structure using member properties or callbacks - objects, tuples, or custom types"
					variantType="success"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="📝"
					titleText="Form Integration"
					descriptionText="Native HTML form support with JSON, CSV, or array formats for seamless form submission"
					variantType="info"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🔍"
					titleText="Typeahead Search"
					descriptionText="Built-in search with async support, debouncing, and customizable minimum search length"
					variantType="warning"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🎨"
					titleText="Rich Content"
					descriptionText="Support for icons, subtitles, groups, and custom styling with 125+ CSS/SCSS variables and semantic color scales"
					variantType="danger"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="⌨️"
					titleText="Keyboard Navigation"
					descriptionText="Full keyboard support with arrow keys, Enter, Escape, and Tab for accessibility"
					variantType="secondary"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="⚡"
					titleText="Virtual Scrolling"
					descriptionText="Handle 15,000+ options instantly - 25× faster opening, 99.8% memory reduction with smooth mouse wheel and keyboard navigation"
					variantType="primary"
				/>
			</div>
		</div>

		<!-- Quick Install -->
		<ShowcaseSection
			titleText="Quick Installation"
			subtitleText="Get started in seconds"
			col1Title="Package Manager"
			col2Title="Import"
			col3Title="Usage">

			{#snippet demoContent()}
				<CodeBlock
					codeContent="npm install @keenmate/web-multiselect"
					languageType="bash"
					titleText="npm"
				/>
				<CodeBlock
					codeContent="pnpm add @keenmate/web-multiselect"
					languageType="bash"
					titleText="pnpm"
				/>
				<CodeBlock
					codeContent="yarn add @keenmate/web-multiselect"
					languageType="bash"
					titleText="yarn"
				/>
			{/snippet}

			{#snippet controlsContent()}
				<CodeBlock
					codeContent={`// Web Component (HTML)
<script type="module" src="dist/multiselect.js"></script>

// ES Module
import '@keenmate/web-multiselect';
import '@keenmate/web-multiselect/dist/style.css';`}
					languageType="javascript"
					titleText="Import component"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose">
					<h4>Simple to Use</h4>
					<p>
						Install the package using your preferred package manager, then use the web component in any framework or vanilla HTML.
					</p>
					<h4>Zero Dependencies</h4>
					<p>
						No framework lock-in. Works everywhere modern web components are supported. Built with TypeScript for excellent IDE support.
					</p>
					<h4>Highly Customizable</h4>
					<p>
						125+ CSS/SCSS variables with semantic color system (accent/neutral scales) for complete theming control. Override colors, spacing, borders, shadows, and more.
					</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Example Usage -->
		<div class="mt-5">
			<h2 class="mb-4">Example Usage</h2>
			<div class="row g-4">
				<div class="col-lg-6">
					<CodeBlock
						codeContent={`<!-- HTML Usage -->
<web-multiselect
  value-member="id"
  display-value-member="name"
  icon-member="icon"
  search-placeholder="Search items..."
></web-multiselect>

<script>
  const select = document.querySelector('multi-select');
  select.options = [
    { id: 1, name: 'JavaScript', icon: '🟨' },
    { id: 2, name: 'TypeScript', icon: '🔷' },
    { id: 3, name: 'Python', icon: '🐍' }
  ];
</script>`}
						languageType="html"
						titleText="Basic Usage"
					/>
				</div>
				<div class="col-lg-6">
					<CodeBlock
						codeContent={`<!-- Advanced with Form Integration -->
<form>
  <web-multiselect
    name="technologies"
    form-value-format="json"
    value-member="id"
    display-value-member="name"
    search-placeholder="Search..."
    allow-select-all="true"
    allow-clear-all="true"
  ></web-multiselect>
  <button type="submit">Submit</button>
</form>

<script>
  const select = document.querySelector('multi-select');
  select.searchCallback = async (term) => {
    const res = await fetch(\`/api/search?q=\${term}\`);
    return await res.json();
  };
</script>`}
						languageType="html"
						titleText="Advanced Features"
					/>
				</div>
			</div>
		</div>

		<!-- Stats/Features Icons -->
		<div class="row text-center mt-5 pt-5 border-top">
			<div class="col-md-3">
				<h3 class="display-6 fw-bold text-primary">🎯</h3>
				<p class="text-muted">Framework Agnostic</p>
			</div>
			<div class="col-md-3">
				<h3 class="display-6 fw-bold text-primary">⚡</h3>
				<p class="text-muted">Virtual Scrolling</p>
			</div>
			<div class="col-md-3">
				<h3 class="display-6 fw-bold text-primary">🔍</h3>
				<p class="text-muted">Async Search</p>
			</div>
			<div class="col-md-3">
				<h3 class="display-6 fw-bold text-primary">⌨️</h3>
				<p class="text-muted">Keyboard Navigation</p>
			</div>
		</div>
	</div>
</DocLayout>
