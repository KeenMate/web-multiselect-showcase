<script lang="ts">
	import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let partialPillsSelect: any;
	let partialComparePartialSelect: any;
	let partialCompareCountSelect: any;
	let tooltipsBasicSelect: any;
	let tooltipsCustomSelect: any;
	let tooltipsStyledSelect: any;
	let combinedSelect: any;

	onMount(() => {

		// Options for partial pills examples
		const technologies = [
			{ value: 'js', label: 'JavaScript', icon: '🟨' },
			{ value: 'ts', label: 'TypeScript', icon: '🔷' },
			{ value: 'py', label: 'Python', icon: '🐍' },
			{ value: 'java', label: 'Java', icon: '☕' },
			{ value: 'cpp', label: 'C++', icon: '⚡' },
			{ value: 'rust', label: 'Rust', icon: '🦀' },
			{ value: 'go', label: 'Go', icon: '🔵' },
			{ value: 'ruby', label: 'Ruby', icon: '💎' },
			{ value: 'php', label: 'PHP', icon: '🐘' },
			{ value: 'swift', label: 'Swift', icon: '🍎' },
			{ value: 'kotlin', label: 'Kotlin', icon: '🟣' },
			{ value: 'csharp', label: 'C#', icon: '🟪' }
		];

		// Options for tooltips examples
		const laptops = [
			{ value: '1', label: 'MacBook Pro 16"', subtitle: 'M3 Max, 36GB RAM, 1TB SSD' },
			{ value: '2', label: 'Dell XPS 15', subtitle: 'Intel i9, 32GB RAM, 512GB SSD' },
			{ value: '3', label: 'ThinkPad X1 Carbon', subtitle: 'Intel i7, 16GB RAM, 256GB SSD' },
			{ value: '4', label: 'Surface Laptop 5', subtitle: 'Intel i5, 8GB RAM, 256GB SSD' },
			{ value: '5', label: 'HP Spectre x360', subtitle: 'Intel i7, 16GB RAM, 512GB SSD' },
			{ value: '6', label: 'ASUS ZenBook 14', subtitle: 'AMD Ryzen 7, 16GB RAM, 512GB SSD' },
			{ value: '7', label: 'Lenovo Yoga 9i', subtitle: 'Intel i7, 16GB RAM, 1TB SSD' }
		];

		const users = [
			{ id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', department: 'Engineering' },
			{ id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Manager', department: 'Product' },
			{ id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'Developer', department: 'Engineering' },
			{ id: 4, name: 'Alice Williams', email: 'alice.w@example.com', role: 'Designer', department: 'Design' },
			{ id: 5, name: 'Charlie Brown', email: 'charlie.b@example.com', role: 'Developer', department: 'Engineering' },
			{ id: 6, name: 'Diana Prince', email: 'diana.p@example.com', role: 'QA Lead', department: 'Quality' }
		];

		// Setup partial pills mode
		if (partialPillsSelect) partialPillsSelect.options = technologies;
		if (partialComparePartialSelect) partialComparePartialSelect.options = technologies;
		if (partialCompareCountSelect) partialCompareCountSelect.options = technologies;

		// Setup basic tooltips
		if (tooltipsBasicSelect) tooltipsBasicSelect.options = laptops;

		// Setup custom tooltips
		if (tooltipsCustomSelect) {
			tooltipsCustomSelect.getValueCallback = (user) => user.id;
			tooltipsCustomSelect.getDisplayValueCallback = (user) => user.name;
			tooltipsCustomSelect.getSubtitleCallback = (user) => user.role;
			tooltipsCustomSelect.options = users;

			// Custom tooltip with detailed user info
			tooltipsCustomSelect.getBadgeTooltipCallback = (user) => {
				return `${user.name}\n${user.email}\n${user.role} - ${user.department}`;
			};
		}

		// Setup styled tooltips
		if (tooltipsStyledSelect) {
			tooltipsStyledSelect.options = laptops;
		}

		// Setup combined features
		if (combinedSelect) {
			combinedSelect.getValueCallback = (user) => user.id;
			combinedSelect.getDisplayValueCallback = (user) => user.name;
			combinedSelect.getSubtitleCallback = (user) => user.department;
			combinedSelect.options = users;

			combinedSelect.getBadgeTooltipCallback = (user) => {
				return `${user.name}\n${user.email}\n${user.role} - ${user.department}`;
			};
		}
	});
</script>

<svelte:head>
	<style>
		/* Custom tooltip styling example */
		web-multiselect#styled-tooltips {
			--ml-tooltip-bg: #667eea;
			--ml-tooltip-color: white;
			--ml-tooltip-padding: 0.75rem 1rem;
			--ml-tooltip-border-radius: 8px;
			--ml-tooltip-font-size: 0.9rem;
			--ml-tooltip-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
		}
	</style>
</svelte:head>

<DocLayout
	titleText="Advanced Features"
	descriptionText="Partial badges mode and tooltip system for enhanced UX">

	<div class="py-4">
		<!-- Intro Section -->
		<div class="mb-5 p-4 bg-info bg-opacity-10 border border-info rounded">
			<h3 class="h5 mb-3">🎯 New in Latest Version</h3>
			<p class="mb-2">Two powerful features for better user experience:</p>
			<ul class="mb-0">
				<li><strong>Partial Badges Mode:</strong> Show a limited number of badges with a "+X more" badge when selections exceed a threshold</li>
				<li><strong>Badge Tooltips:</strong> Display helpful information when hovering over badges, perfect for truncated text or additional context</li>
			</ul>
		</div>

		<!-- PARTIAL PILLS MODE -->
		<h2 class="h4 mb-4">Partial Badges Mode</h2>

		<ShowcaseSection
			titleText="Partial Badges with Threshold"
			subtitleText="Show limited badges + '+X more' badge when threshold exceeded"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Instructions"
			descriptionColumnTitle="Configuration">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={partialPillsSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-threshold="5"
						badges-threshold-mode="partial"
						badges-max-visible="3"
						search-placeholder="Select technologies (try selecting 6+)..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Select more than 5 items to see partial mode in action
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p><strong>Try this:</strong></p>
					<ol>
						<li>Select 1-5 items: All badges shown normally</li>
						<li>Select 6+ items: Shows 3 badges + "+X more" badge</li>
						<li>Click "+X more": Opens popover with all items</li>
						<li>Click remove on "+X more": Removes all hidden items</li>
					</ol>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Configuration</h5>
					<pre><code>&lt;web-multiselect
  badges-threshold="5"
  badges-threshold-mode="partial"
  badges-max-visible="3"
&gt;&lt;/web-multiselect&gt;</code></pre>
					<p><strong>badges-threshold:</strong> Trigger after N selections</p>
					<p><strong>badges-threshold-mode:</strong> 'partial' or 'count'</p>
					<p><strong>badges-max-visible:</strong> How many badges to show</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Compare: Partial vs Count Mode"
			subtitleText="See the difference between partial and count modes"
			demoColumnTitle="Partial Mode (badges-threshold-mode='partial')"
			controlsColumnTitle="Count Mode (badges-threshold-mode='count')"
			descriptionColumnTitle="Comparison">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={partialComparePartialSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-threshold="2"
						badges-threshold-mode="partial"
						badges-max-visible="1"
						search-placeholder="Partial mode..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Shows 1 badge + "+X more" badge
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={partialCompareCountSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-threshold="2"
						badges-threshold-mode="count"
						search-placeholder="Count mode..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Shows "X selected" badge only
					</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>When to Use Each</h5>
					<p><strong>Partial Mode:</strong></p>
					<ul class="small">
						<li>When users need to see some selections</li>
						<li>Better visual context</li>
						<li>Quick access to recent selections</li>
					</ul>
					<p><strong>Count Mode:</strong></p>
					<ul class="small">
						<li>When space is limited</li>
						<li>Many selections expected</li>
						<li>Compact display preferred</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- TOOLTIP SYSTEM -->
		<h2 class="h4 mb-4 mt-5">Badge Tooltips</h2>

		<ShowcaseSection
			titleText="Basic Tooltips"
			subtitleText="Default tooltips showing display value + subtitle"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Instructions"
			descriptionColumnTitle="Configuration">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={tooltipsBasicSelect}
						value-member="value"
						display-value-member="label"
						subtitle-member="subtitle"
						enable-badge-tooltips="true"
						badge-tooltip-placement="top"
						search-placeholder="Select laptops (hover badges for tooltips)..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Hover over badges to see full specifications
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p><strong>Tooltip features:</strong></p>
					<ul>
						<li>Hover over badge: Shows display value + subtitle</li>
						<li>Hover over remove button: Shows "Remove [name]"</li>
						<li>500ms delay before showing (configurable)</li>
						<li>Positioned with Floating UI (auto-flip)</li>
					</ul>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Basic Setup</h5>
					<pre><code>&lt;web-multiselect
  enable-badge-tooltips="true"
  badge-tooltip-placement="top"
  subtitle-member="subtitle"
&gt;&lt;/web-multiselect&gt;</code></pre>
					<p>Default content: display value + subtitle</p>
					<p>Placement options: top, bottom, left, right</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Custom Tooltip Content"
			subtitleText="Use getBadgeTooltipCallback for custom content"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Callback Code"
			descriptionColumnTitle="Details">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={tooltipsCustomSelect}
						enable-badge-tooltips="true"
						badge-tooltip-placement="top"
						search-placeholder="Select users (custom tooltips)..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Tooltips show name, email, role, and department
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p><strong>Custom callback:</strong></p>
					<pre><code>select.getBadgeTooltipCallback = (user) => &#123;
  return `$&#123;user.name&#125;
$&#123;user.email&#125;
$&#123;user.role&#125; - $&#123;user.department&#125;`;
&#125;;</code></pre>
					<p>Return a string or HTMLElement for rich content.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Custom Content</h5>
					<p>The callback receives the full data item and can return:</p>
					<ul class="small">
						<li><strong>String:</strong> Simple text (supports \n)</li>
						<li><strong>HTMLElement:</strong> Rich HTML content</li>
					</ul>
					<p>Perfect for showing additional data not visible in the badge.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Styled Tooltips"
			subtitleText="Customize appearance with CSS variables"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="CSS Variables"
			descriptionColumnTitle="Customization">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						id="styled-tooltips"
						bind:this={tooltipsStyledSelect}
						value-member="value"
						display-value-member="label"
						subtitle-member="subtitle"
						enable-badge-tooltips="true"
						search-placeholder="Styled tooltips..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Purple tooltips with custom styling
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p><strong>CSS Variables:</strong></p>
					<pre><code>web-multiselect &#123;
  &#45;&#45;ml-tooltip-bg: #667eea;
  &#45;&#45;ml-tooltip-color: white;
  &#45;&#45;ml-tooltip-padding: 0.75rem 1rem;
  &#45;&#45;ml-tooltip-border-radius: 8px;
  &#45;&#45;ml-tooltip-font-size: 0.9rem;
  &#45;&#45;ml-tooltip-shadow: 0 4px 12px ...;
&#125;</code></pre>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Available CSS Variables</h5>
					<ul class="small">
						<li><code>--ml-tooltip-bg</code></li>
						<li><code>--ml-tooltip-color</code></li>
						<li><code>--ml-tooltip-padding</code></li>
						<li><code>--ml-tooltip-border-radius</code></li>
						<li><code>--ml-tooltip-font-size</code></li>
						<li><code>--ml-tooltip-shadow</code></li>
						<li><code>--ml-tooltip-max-width</code></li>
						<li><code>--ml-tooltip-z-index</code></li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- COMBINED FEATURES -->
		<h2 class="h4 mb-4 mt-5">Combined Features</h2>

		<ShowcaseSection
			titleText="Partial Badges + Tooltips"
			subtitleText="Both features working together"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Best Practices">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={combinedSelect}
						enable-badge-tooltips="true"
						badge-tooltip-placement="top"
						badges-threshold="4"
						badges-threshold-mode="partial"
						badges-max-visible="2"
						search-placeholder="Select team members..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Partial mode with tooltips on visible badges
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p><strong>Combined setup:</strong></p>
					<ol>
						<li>Enable both features in attributes</li>
						<li>Tooltips work on visible badges only</li>
						<li>"+X more" badge has tooltip on remove button</li>
						<li>Popover items don't have tooltips (full info shown)</li>
					</ol>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Best Practices</h5>
					<p><strong>Use partial badges when:</strong></p>
					<ul class="small">
						<li>Users select 5-20 items typically</li>
						<li>Visual context is helpful</li>
						<li>Space allows 2-4 badges</li>
					</ul>
					<p><strong>Use tooltips when:</strong></p>
					<ul class="small">
						<li>Badges have truncated text</li>
						<li>Additional info is valuable</li>
						<li>Keyboard users need context</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Summary -->
		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">📚 Summary</h3>
			<div class="row">
				<div class="col-md-6">
					<h4 class="h6">Partial Badges Mode</h4>
					<ul class="small mb-3">
						<li>Better than count mode for moderate selections</li>
						<li>Provides visual context while saving space</li>
						<li>Interactive "+X more" badge opens popover</li>
						<li>Remove button clears all hidden items</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h4 class="h6">Badge Tooltips</h4>
					<ul class="small mb-0">
						<li>Shows full info on hover (500ms delay)</li>
						<li>Default: display value + subtitle</li>
						<li>Custom: use callback for rich content</li>
						<li>Fully customizable via CSS variables</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</DocLayout>
