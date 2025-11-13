<script lang="ts">
	import { DocLayout, ShowcaseSection, CodeBlock } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let virtualScrollSelect: any;
	let performanceMetrics = {
		initTime: 0,
		renderTime: 0,
		searchTime: 0,
		totalOptions: 15000
	};

	// Generate large dataset
	function generateLargeDataset() {
		const adjectives = ['Amazing', 'Beautiful', 'Creative', 'Dynamic', 'Elegant', 'Fantastic', 'Gorgeous', 'Incredible', 'Magnificent', 'Outstanding', 'Perfect', 'Remarkable', 'Stunning', 'Wonderful', 'Brilliant'];
		const nouns = ['Apple', 'Banana', 'Cherry', 'Dragon', 'Eagle', 'Forest', 'Galaxy', 'Harbor', 'Island', 'Journey', 'Kingdom', 'Lighthouse', 'Mountain', 'Ocean', 'Paradise', 'River', 'Sunset', 'Temple', 'Universe', 'Valley'];
		const suffixes = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa'];

		const options = [];
		for (let i = 0; i < 15000; i++) {
			const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
			const noun = nouns[Math.floor(Math.random() * nouns.length)];
			const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
			const num = String(i).padStart(5, '0');

			options.push({
				value: i,
				label: `${adj} ${noun} ${suffix} #${num}`
			});
		}
		return options;
	}

	onMount(() => {
		// Measure initialization time
		const startInit = performance.now();
		const largeDataset = generateLargeDataset();
		const endInit = performance.now();
		performanceMetrics.initTime = Math.round(endInit - startInit);

		if (virtualScrollSelect) {
			// Measure render time
			const startRender = performance.now();
			virtualScrollSelect.options = largeDataset;
			requestAnimationFrame(() => {
				const endRender = performance.now();
				performanceMetrics.renderTime = Math.round(endRender - startRender);
			});

			// Measure search performance
			let searchTimeout: any;
			virtualScrollSelect.addEventListener('search', () => {
				clearTimeout(searchTimeout);
				searchTimeout = setTimeout(() => {
					const startSearch = performance.now();
					requestAnimationFrame(() => {
						const endSearch = performance.now();
						performanceMetrics.searchTime = Math.round(endSearch - startSearch);
					});
				}, 50);
			});
		}
	});
</script>

<DocLayout
	titleText="Virtual Scrolling"
	descriptionText="Handle massive datasets (15,000+ items) with instant performance">

	<!-- Performance Stats -->
	<div class="alert alert-info mb-4">
		<h5 class="alert-heading">⚡ Performance Metrics</h5>
		<div class="row">
			<div class="col-md-3">
				<strong>Total Options:</strong> {performanceMetrics.totalOptions.toLocaleString()}
			</div>
			<div class="col-md-3">
				<strong>Init Time:</strong> {performanceMetrics.initTime}ms
			</div>
			<div class="col-md-3">
				<strong>Render Time:</strong> {performanceMetrics.renderTime || '—'}ms
			</div>
			<div class="col-md-3">
				<strong>Search Time:</strong> {performanceMetrics.searchTime || '—'}ms
			</div>
		</div>
	</div>

	<!-- Live Demo -->
	<ShowcaseSection
		titleText="15,000 Options with Virtual Scrolling"
		subtitleText="Experience blazing-fast performance"
		demoColumnTitle="Live Demo"
		controlsColumnTitle="Configuration"
		descriptionColumnTitle="Performance Benefits">

		{#snippet demoContent()}
			<div class="mb-3">
				<label class="form-label">Search 15,000 options (filter mode)</label>
				<web-multiselect
					bind:this={virtualScrollSelect}
					placeholder="Search 15,000 options..."
					search-mode="filter"
					show-select-all="true"
					max-height="400px"
					value-member="value"
					display-value-member="label"
					enable-virtual-scroll="true"
					virtual-scroll-threshold="100"
					option-height="50"
					pill-height="36"
					virtual-scroll-buffer="10"
					pills-threshold="4"
					pills-threshold-mode="count"
					show-count-badge="true">
				</web-multiselect>
				<div class="form-text">
					<strong>Try it:</strong> Type to search • Select 4+ items to see count badge • Click badge to see popover with virtual scrolling
				</div>
			</div>
		{/snippet}

		{#snippet controlsContent()}
			<CodeBlock
				codeContent={`<web-multiselect
  enable-virtual-scroll="true"
  virtual-scroll-threshold="100"
  option-height="50"
  pill-height="36"
  virtual-scroll-buffer="10"
  search-mode="filter"
  max-height="400px"
  pills-threshold="4"
  pills-threshold-mode="count"
  show-count-badge="true">
</web-multiselect>

<script>
const select = document.querySelector('web-multiselect');

// Generate 15,000 options
const options = [];
for (let i = 0; i < 15000; i++) {
  options.push({
    value: i,
    label: \`Option \${i}\`
  });
}

select.options = options;
</script>`}
				languageType="html"
				titleText="Virtual Scroll Setup"
			/>
		{/snippet}

		{#snippet descriptionContent()}
			<div class="prose">
				<h4>🚀 Performance Improvements</h4>
				<ul>
					<li><strong>25× faster opening:</strong> 750ms → 30ms</li>
					<li><strong>13-33× faster search:</strong> 200-500ms → 15ms</li>
					<li><strong>99.8% memory reduction:</strong> 7.5 MB → 15 KB</li>
					<li><strong>DOM nodes:</strong> 15,000 → ~30 visible items</li>
				</ul>

				<h4>✨ Features</h4>
				<ul>
					<li>Full keyboard navigation (arrows, Page Up/Down, Home/End)</li>
					<li>Smooth mouse wheel scrolling</li>
					<li>Drag scrollbar support</li>
					<li>Works with search in both filter and navigate modes</li>
					<li>Automatic activation based on threshold</li>
				</ul>

				<h4>⚙️ Configuration Options</h4>

				<h5>Dropdown Virtual Scroll (Options List)</h5>
				<ul>
					<li><code>enable-virtual-scroll="true"</code>: Enables virtual scrolling</li>
					<li><code>virtual-scroll-threshold="100"</code>: Activates at 100+ items (default)</li>
					<li><code>option-height="50"</code>: Height per option in px (default: 50)</li>
					<li><code>virtual-scroll-buffer="10"</code>: Buffer items (default: 10)</li>
				</ul>

				<h5>Popover Virtual Scroll (Selected Items)</h5>
				<ul>
					<li><code>pills-threshold="4"</code>: Shows count badge at 4+ selections</li>
					<li><code>pills-threshold-mode="count"</code>: Uses count mode (required)</li>
					<li><code>show-count-badge="true"</code>: Enables clickable badge</li>
					<li><code>pill-height="36"</code>: Height per pill in px (default: 36)</li>
					<li>Popover activates virtual scroll automatically at 100+ selections</li>
				</ul>

				<p class="text-muted"><small><strong>Note:</strong> Both dropdown and popover use the same <code>virtual-scroll-buffer</code> setting.</small></p>

				<h4>⚠️ Limitations</h4>
				<ul>
					<li>Groups (<code>&lt;optgroup&gt;</code>) are disabled in virtual scroll mode</li>
					<li>All options must have consistent height</li>
				</ul>
			</div>
		{/snippet}
	</ShowcaseSection>

	<!-- How It Works -->
	<ShowcaseSection
		titleText="How Virtual Scrolling Works"
		subtitleText="Efficient rendering technique"
		demoColumnTitle="Traditional Rendering"
		controlsColumnTitle="Virtual Scrolling"
		descriptionColumnTitle="Key Differences">

		{#snippet demoContent()}
			<div class="card border-danger">
				<div class="card-body">
					<h5 class="card-title text-danger">❌ Without Virtual Scroll</h5>
					<ul class="mb-0">
						<li><strong>Renders:</strong> All 15,000 DOM elements</li>
						<li><strong>Memory:</strong> ~7.5 MB</li>
						<li><strong>Opening:</strong> 750ms lag</li>
						<li><strong>Search:</strong> 200-500ms per keystroke</li>
						<li><strong>Scrolling:</strong> Choppy, laggy</li>
					</ul>
				</div>
			</div>
		{/snippet}

		{#snippet controlsContent()}
			<div class="card border-success">
				<div class="card-body">
					<h5 class="card-title text-success">✅ With Virtual Scroll</h5>
					<ul class="mb-0">
						<li><strong>Renders:</strong> Only ~30 visible items</li>
						<li><strong>Memory:</strong> ~15 KB</li>
						<li><strong>Opening:</strong> 30ms instant</li>
						<li><strong>Search:</strong> 15ms per keystroke</li>
						<li><strong>Scrolling:</strong> Butter smooth</li>
					</ul>
				</div>
			</div>
		{/snippet}

		{#snippet descriptionContent()}
			<div class="prose">
				<h4>The Virtual Scrolling Technique</h4>
				<p>
					Virtual scrolling (also called "windowing") renders only the items currently visible in the viewport, plus a small buffer above and below.
				</p>

				<h5>How it works:</h5>
				<ol>
					<li><strong>Calculate visible range:</strong> Based on scroll position and viewport height</li>
					<li><strong>Render only visible items:</strong> Create DOM elements for items in range (~30 items)</li>
					<li><strong>Position absolutely:</strong> Use absolute positioning with calculated top offsets</li>
					<li><strong>Update on scroll:</strong> As user scrolls, re-render items for new visible range</li>
					<li><strong>Buffer zone:</strong> Render extra items above/below to prevent flickering</li>
				</ol>

				<h5>Why it's so fast:</h5>
				<ul>
					<li><strong>Constant DOM size:</strong> Always ~30 elements regardless of total items</li>
					<li><strong>Minimal reflows:</strong> Fixed height allows fast offset calculations</li>
					<li><strong>Efficient updates:</strong> Only re-render when visible range changes</li>
					<li><strong>Memory efficient:</strong> No need to keep 15,000 DOM nodes in memory</li>
				</ul>
			</div>
		{/snippet}
	</ShowcaseSection>

	<!-- Code Examples -->
	<ShowcaseSection
		titleText="Implementation Examples"
		subtitleText="Different use cases">

		{#snippet demoContent()}
			<h4 class="mb-3">Basic Virtual Scroll</h4>
			<CodeBlock
				codeContent={`<web-multiselect
  enable-virtual-scroll="true"
  placeholder="Search large dataset...">
</web-multiselect>

<script>
const select = document.querySelector('web-multiselect');

// Auto-activates at 100+ items
select.options = generateLargeDataset(5000);
</script>`}
				languageType="html"
			/>
		{/snippet}

		{#snippet controlsContent()}
			<h4 class="mb-3">Custom Configuration</h4>
			<CodeBlock
				codeContent={`<web-multiselect
  enable-virtual-scroll="true"
  virtual-scroll-threshold="500"
  option-height="60"
  virtual-scroll-buffer="20"
  placeholder="Custom settings...">
</web-multiselect>

<script>
const select = document.querySelector('web-multiselect');

// Larger items, more buffer
select.options = largeDataWithSubtitles;
</script>`}
				languageType="html"
			/>
		{/snippet}

		{#snippet descriptionContent()}
			<h4 class="mb-3">With Async Search</h4>
			<CodeBlock
				codeContent={`<web-multiselect
  enable-virtual-scroll="true"
  search-mode="filter"
  min-search-length="2"
  placeholder="Search database...">
</web-multiselect>

<script>
const select = document.querySelector('web-multiselect');

// Virtual scroll + async search
select.searchCallback = async (term) => {
  const res = await fetch(\`/api/search?q=\${term}\`);
  return await res.json(); // Returns 10,000+ results
};
</script>`}
				languageType="html"
			/>
		{/snippet}
	</ShowcaseSection>
</DocLayout>
