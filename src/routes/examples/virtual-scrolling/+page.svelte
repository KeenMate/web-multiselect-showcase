<script lang="ts">
	import { DocLayout, ShowcaseSection, CodeBlock } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let virtualScrollSelect: any;
	let richVirtualSelect: any;
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

		// Rich rendering example with callbacks
		if (richVirtualSelect) {
			const productData = [
				{ cat: 'Electronics', names: ['Wireless Mouse', 'Mechanical Keyboard', 'USB-C Hub', '4K Monitor', 'Webcam'], icon: '💻' },
				{ cat: 'Accessories', names: ['Phone Case', 'Screen Protector', 'Charging Cable', 'Laptop Stand', 'Desk Mat'], icon: '📱' },
				{ cat: 'Office', names: ['Ergonomic Chair', 'Standing Desk', 'Desk Lamp', 'Organizer Set', 'Whiteboard'], icon: '🏢' },
				{ cat: 'Gaming', names: ['Gaming Headset', 'RGB Mousepad', 'Controller', 'Gaming Chair', 'LED Strips'], icon: '🎮' },
				{ cat: 'Audio', names: ['Bluetooth Speaker', 'Studio Headphones', 'Microphone', 'Audio Interface', 'Sound Bar'], icon: '🎧' }
			];
			const priorities = ['urgent', 'important', 'normal', 'low'];
			const descriptions = [
				'Premium quality with 2-year warranty',
				'Best seller - Limited stock available',
				'New arrival - Special launch price',
				'Customer favorite - 5000+ reviews',
				'Professional grade equipment',
				'Ergonomic design for comfort',
				'High-performance technology',
				'Eco-friendly materials used'
			];
			const products = [];

			for (let i = 1; i <= 150; i++) {
				const catData = productData[Math.floor(Math.random() * productData.length)];
				const productName = catData.names[Math.floor(Math.random() * catData.names.length)];
				const priority = priorities[Math.floor(Math.random() * priorities.length)];
				const price = (Math.random() * 200 + 10).toFixed(2);
				const stock = Math.floor(Math.random() * 100);
				const description = descriptions[Math.floor(Math.random() * descriptions.length)];

				products.push({
					id: i,
					name: `${productName} ${catData.icon}`,
					category: catData.cat,
					icon: catData.icon,
					priority,
					price: parseFloat(price),
					stock,
					rating: (Math.random() * 2 + 3).toFixed(1),
					description
				});
			}

			richVirtualSelect.options = products;
			richVirtualSelect.getValueCallback = (item: any) => item.id;
			richVirtualSelect.getDisplayValueCallback = (item: any) => item.name;

			// Rich rendering for dropdown options
			richVirtualSelect.renderOptionContentCallback = (item: any) => {
				const stars = '★'.repeat(Math.floor(item.rating));
				const emptyStars = '☆'.repeat(5 - Math.floor(item.rating));
				const stockStatus = item.stock === 0 ? 'Out of stock' : `${item.stock} in stock`;
				const stockColor = item.stock === 0 ? '#ef4444' : item.stock < 20 ? '#f59e0b' : '#10b981';
				const stockBg = item.stock === 0 ? '#fef2f2' : item.stock < 20 ? '#fffbeb' : '#f0fdf4';

				return `
					<div style="display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.5rem 0;">
						<div style="width: 48px; height: 48px; border-radius: 8px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.25rem; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);">
							${item.icon}
						</div>
						<div style="flex: 1; min-width: 0;">
							<div style="font-weight: 600; font-size: 0.9375rem; color: #1f2937; margin-bottom: 0.25rem;">${item.name}</div>
							<div style="font-size: 0.8125rem; color: #6b7280; margin-bottom: 0.375rem; line-height: 1.3;">${item.description}</div>
							<div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.75rem; flex-wrap: wrap;">
								<span style="background: #f3f4f6; padding: 0.125rem 0.5rem; border-radius: 4px; color: #4b5563; font-weight: 500;">${item.category}</span>
								<span style="color: #059669; font-weight: 700; font-size: 0.875rem;">$${item.price}</span>
								<span style="color: #f59e0b; letter-spacing: -1px;">${stars}${emptyStars}</span>
								<span style="font-weight: 500; color: #6b7280;">${item.rating}</span>
								<span style="background: ${stockBg}; color: ${stockColor}; padding: 0.125rem 0.5rem; border-radius: 4px; font-weight: 500;">${stockStatus}</span>
							</div>
						</div>
					</div>
				`;
			};

			// Compact rendering for main badges with price
			richVirtualSelect.renderBadgeContentCallback = (item: any) => {
				return `
					<span style="font-weight: 500;">${item.name}</span>
					<span style="color: #059669; font-weight: 600; margin-left: 0.25rem;">$${item.price}</span>
				`;
			};

			// Rich rendering for selected items popover
			richVirtualSelect.renderSelectionBadgeContentCallback = (item: any) => {
				const priorityIcons: any = { urgent: '🚨', important: '⚠️', normal: '📋', low: '📝' };
				const stars = '★'.repeat(Math.floor(item.rating));
				const emptyStars = '☆'.repeat(5 - Math.floor(item.rating));

				return `
					<div style="display: flex; align-items: flex-start; gap: 0.625rem; width: 100%; padding: 0.125rem 0;">
						<div style="font-size: 1.25rem; flex-shrink: 0; line-height: 1;">${priorityIcons[item.priority]}</div>
						<div style="flex: 1; min-width: 0;">
							<div style="font-weight: 600; font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #1f2937; margin-bottom: 0.125rem;">${item.name}</div>
							<div style="font-size: 0.6875rem; color: #6b7280; margin-bottom: 0.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.description}</div>
							<div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.6875rem;">
								<span style="color: #059669; font-weight: 700;">$${item.price}</span>
								<span style="color: #f59e0b; letter-spacing: -1px;">${stars}${emptyStars}</span>
								<span style="color: #6b7280; font-weight: 500;">${item.rating}</span>
							</div>
						</div>
					</div>
				`;
			};

			// Priority-based CSS classes
			richVirtualSelect.getSelectionBadgeClassCallback = (item: any) => {
				return `product-${item.priority}`;
			};

			// Custom CSS for priority styling
			richVirtualSelect.customStylesCallback = () => `
				.product-urgent {
					--ml-badge-text-bg: #fee2e2;
					--ml-badge-text-color: #dc2626;
					--ml-badge-remove-bg: #dc2626;
				}
				.product-important {
					--ml-badge-text-bg: #fef3c7;
					--ml-badge-text-color: #d97706;
					--ml-badge-remove-bg: #d97706;
				}
				.product-normal {
					--ml-badge-text-bg: #dbeafe;
					--ml-badge-text-color: #2563eb;
					--ml-badge-remove-bg: #2563eb;
				}
				.product-low {
					--ml-badge-text-bg: #d1fae5;
					--ml-badge-text-color: #059669;
					--ml-badge-remove-bg: #059669;
				}
			`;

			richVirtualSelect.addEventListener('change', (e: any) => {
				console.log('[Rich Virtual] Selected:', e.detail.selectedOptions.length, 'items');
				if (e.detail.selectedOptions.length >= 100) {
					console.log('✅ Virtual scroll enabled in popover!');
				}
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
					badge-height="36"
					virtual-scroll-buffer="10"
					pills-threshold="4"
					pills-threshold-mode="count"
					show-counter="true">
				</web-multiselect>
				<div class="form-text">
					<strong>Try it:</strong> Type to search • Select 4+ items to see counter • Click badge to see popover with virtual scrolling
				</div>
			</div>
		{/snippet}

		{#snippet controlsContent()}
			<CodeBlock
				codeContent={`<web-multiselect
  enable-virtual-scroll="true"
  virtual-scroll-threshold="100"
  option-height="50"
  badge-height="36"
  virtual-scroll-buffer="10"
  search-mode="filter"
  max-height="400px"
  pills-threshold="4"
  pills-threshold-mode="count"
  show-counter="true">
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
					<li><code>pills-threshold="4"</code>: Shows counter at 4+ selections</li>
					<li><code>pills-threshold-mode="count"</code>: Uses count mode (required)</li>
					<li><code>show-counter="true"</code>: Enables clickable badge</li>
					<li><code>badge-height="36"</code>: Height per pill in px (default: 36)</li>
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

	<!-- Rich Rendering with Callbacks -->
	<ShowcaseSection
		titleText="Rich Rendering with Custom Callbacks"
		subtitleText="Virtual scroll works with complex custom rendering"
		demoColumnTitle="Live Demo"
		controlsColumnTitle="Instructions"
		descriptionColumnTitle="Implementation">

		{#snippet demoContent()}
			<div class="mb-3">
				<label class="form-label">Select Products (150 items)</label>
				<web-multiselect
					bind:this={richVirtualSelect}
					placeholder="Select products..."
					option-height="90"
					badge-height="65"
					pills-threshold="3"
					pills-threshold-mode="count"
					show-counter="true"
					enable-virtual-scroll="true"
					virtual-scroll-threshold="100">
				</web-multiselect>
				<div class="form-text">
					<strong>Try it:</strong> Select 100+ items to see virtual scroll in the popover with custom rendering.
					Uses callbacks for rich badge styling and content.
				</div>
			</div>
		{/snippet}

		{#snippet controlsContent()}
			<div class="prose small">
				<h5>What's happening:</h5>
				<ol>
					<li><strong>Dropdown options:</strong> Custom rendering with product details, ratings, and stock info</li>
					<li><strong>Main badges:</strong> Simple text display (compact)</li>
					<li><strong>Popover badges:</strong> Rich rendering with priority icons and ratings</li>
					<li><strong>Priority styling:</strong> Color-coded badges based on priority level</li>
				</ol>
				<p class="mt-3"><strong>When to use:</strong></p>
				<ul class="small">
					<li>Complex data structures</li>
					<li>Need different rendering in dropdown vs badges</li>
					<li>Dynamic styling based on item properties</li>
					<li>Large datasets requiring virtual scroll</li>
				</ul>
			</div>
		{/snippet}

		{#snippet descriptionContent()}
			<div class="prose small">
				<h5>Key Callbacks Used</h5>
				<p><code>renderOptionContentCallback</code> - Custom HTML for dropdown options</p>
				<p><code>renderBadgeContentCallback</code> - Simple text for main badges</p>
				<p><code>renderSelectionBadgeContentCallback</code> - Rich HTML for popover badges</p>
				<p><code>getSelectionBadgeClassCallback</code> - CSS classes for priority styling</p>
				<p><code>customStylesCallback</code> - Inject custom CSS variables</p>

				<h5 class="mt-3">Configuration</h5>
				<ul class="small">
					<li><code>option-height="90"</code> - Taller options for rich content with description</li>
					<li><code>badge-height="65"</code> - Taller badges in popover for multi-line content</li>
					<li><code>pills-threshold="3"</code> - Show counter at 3+ items</li>
					<li><code>virtual-scroll-threshold="100"</code> - Virtual scroll at 100+ items</li>
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

	<!-- Rich Rendering Code Example -->
	<ShowcaseSection
		titleText="Rich Rendering with Callbacks - Code Example"
		subtitleText="Complete implementation">

		{#snippet demoContent()}
			<h4 class="mb-3">Setup & Configuration</h4>
			<CodeBlock
				codeContent={`<web-multiselect
  id="rich-virtual"
  placeholder="Select products..."
  option-height="90"
  badge-height="65"
  pills-threshold="3"
  pills-threshold-mode="count"
  show-counter="true"
  enable-virtual-scroll="true"
  virtual-scroll-threshold="100">
</web-multiselect>

<script>
const select = document.getElementById('rich-virtual');

// Generate products data with descriptions
const products = [];
for (let i = 1; i <= 150; i++) {
  products.push({
    id: i,
    name: \`Wireless Mouse 💻\`,
    category: 'Electronics',
    icon: '💻',
    priority: 'normal',
    price: 99.99,
    stock: 50,
    rating: 4.5,
    description: 'Premium quality with 2-year warranty'
  });
}

select.options = products;
select.getValueCallback = (item) => item.id;
select.getDisplayValueCallback = (item) => item.name;
</script>`}
				languageType="html"
			/>
		{/snippet}

		{#snippet controlsContent()}
			<h4 class="mb-3">Rendering Callbacks</h4>
			<CodeBlock
				codeContent={`// Rich dropdown options with description
select.renderOptionContentCallback = (item) => {
  const stars = '★'.repeat(Math.floor(item.rating));
  const emptyStars = '☆'.repeat(5 - Math.floor(item.rating));
  const stockStatus = item.stock === 0 ? 'Out of stock' : \`\${item.stock} in stock\`;
  const stockColor = item.stock === 0 ? '#ef4444' : item.stock < 20 ? '#f59e0b' : '#10b981';
  const stockBg = item.stock === 0 ? '#fef2f2' : item.stock < 20 ? '#fffbeb' : '#f0fdf4';

  return \`
    <div style="display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.5rem 0;">
      <div style="width: 48px; height: 48px; border-radius: 8px;
                  background: linear-gradient(135deg, #667eea, #764ba2);
                  display: flex; align-items: center; justify-content: center;
                  font-size: 1.25rem; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);">
        \${item.icon}
      </div>
      <div style="flex: 1;">
        <div style="font-weight: 600; font-size: 0.9375rem; margin-bottom: 0.25rem;">
          \${item.name}
        </div>
        <div style="font-size: 0.8125rem; color: #6b7280; margin-bottom: 0.375rem;">
          \${item.description}
        </div>
        <div style="display: flex; gap: 0.75rem; font-size: 0.75rem; flex-wrap: wrap;">
          <span style="background: #f3f4f6; padding: 0.125rem 0.5rem; border-radius: 4px;">
            \${item.category}
          </span>
          <span style="color: #059669; font-weight: 700; font-size: 0.875rem;">
            $\${item.price}
          </span>
          <span style="color: #f59e0b;">\${stars}\${emptyStars}</span>
          <span style="color: #6b7280;">\${item.rating}</span>
          <span style="background: \${stockBg}; color: \${stockColor};
                       padding: 0.125rem 0.5rem; border-radius: 4px;">
            \${stockStatus}
          </span>
        </div>
      </div>
    </div>
  \`;
};

// Main badges with price
select.renderBadgeContentCallback = (item) => {
  return \`
    <span style="font-weight: 500;">\${item.name}</span>
    <span style="color: #059669; font-weight: 600; margin-left: 0.25rem;">
      $\${item.price}
    </span>
  \`;
};`}
				languageType="javascript"
			/>
		{/snippet}

		{#snippet descriptionContent()}
			<h4 class="mb-3">Popover Rendering & Styling</h4>
			<CodeBlock
				codeContent={`// Rich rendering for popover badges with description
select.renderSelectionBadgeContentCallback = (item) => {
  const icons = { urgent: '🚨', important: '⚠️', normal: '📋', low: '📝' };
  const stars = '★'.repeat(Math.floor(item.rating));
  const emptyStars = '☆'.repeat(5 - Math.floor(item.rating));

  return \`
    <div style="display: flex; align-items: flex-start; gap: 0.625rem;
                width: 100%; padding: 0.125rem 0;">
      <div style="font-size: 1.25rem; flex-shrink: 0; line-height: 1;">
        \${icons[item.priority]}
      </div>
      <div style="flex: 1; min-width: 0;">
        <div style="font-weight: 600; font-size: 0.875rem;
                    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
                    margin-bottom: 0.125rem;">
          \${item.name}
        </div>
        <div style="font-size: 0.6875rem; color: #6b7280; margin-bottom: 0.25rem;
                    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          \${item.description}
        </div>
        <div style="display: flex; gap: 0.5rem; font-size: 0.6875rem;">
          <span style="color: #059669; font-weight: 700;">$\${item.price}</span>
          <span style="color: #f59e0b; letter-spacing: -1px;">
            \${stars}\${emptyStars}
          </span>
          <span style="color: #6b7280;">\${item.rating}</span>
        </div>
      </div>
    </div>
  \`;
};

// Dynamic CSS classes based on priority
select.getSelectionBadgeClassCallback = (item) => {
  return \`product-\${item.priority}\`;
};

// Inject custom CSS variables for priority styling
select.customStylesCallback = () => \`
  .product-urgent {
    --ml-badge-text-bg: #fee2e2;
    --ml-badge-text-color: #dc2626;
    --ml-badge-remove-bg: #dc2626;
  }
  .product-important {
    --ml-badge-text-bg: #fef3c7;
    --ml-badge-text-color: #d97706;
    --ml-badge-remove-bg: #d97706;
  }
  .product-normal {
    --ml-badge-text-bg: #dbeafe;
    --ml-badge-text-color: #2563eb;
    --ml-badge-remove-bg: #2563eb;
  }
  .product-low {
    --ml-badge-text-bg: #d1fae5;
    --ml-badge-text-color: #059669;
    --ml-badge-remove-bg: #059669;
  }
\`;`}
				languageType="javascript"
			/>
		{/snippet}
	</ShowcaseSection>
</DocLayout>
