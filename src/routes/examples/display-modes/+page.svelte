<script lang="ts">
	import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let pillsSelect: any;
	let countSelect: any;
	let compactSelect: any;
	let pillsTopSelect: any;
	let pillsLeftSelect: any;
	let thresholdSelect: any;

	onMount(() => {

		const options = [
			{ value: 'html', label: 'HTML', icon: '📄' },
			{ value: 'css', label: 'CSS', icon: '🎨' },
			{ value: 'js', label: 'JavaScript', icon: '🟨' },
			{ value: 'ts', label: 'TypeScript', icon: '🔷' },
			{ value: 'react', label: 'React', icon: '⚛️' },
			{ value: 'vue', label: 'Vue', icon: '💚' },
			{ value: 'svelte', label: 'Svelte', icon: '🧡' },
			{ value: 'node', label: 'Node.js', icon: '🟢' }
		];

		if (pillsSelect) pillsSelect.options = options;
		if (countSelect) countSelect.options = options;
		if (compactSelect) compactSelect.options = options;
		if (pillsTopSelect) pillsTopSelect.options = options;
		if (pillsLeftSelect) pillsLeftSelect.options = options;
		if (thresholdSelect) thresholdSelect.options = options;
	});
</script>

<DocLayout
	titleText="Display Modes"
	descriptionText="Different ways to display selected items">

	<div class="py-4">
		<ShowcaseSection
			titleText="Pills Mode (Default)"
			subtitleText="Show selected items as removable pills"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Mode">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={pillsSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-display-mode="pills"
						search-placeholder="Select technologies..."
					></multi-select>
					<p class="text-muted small mt-2">
						Pills show below the search input by default
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Click X on each pill to remove selections individually.</p>
					<p>Pills provide visual feedback and easy removal.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Pills Mode</h5>
					<p><code>display-mode="pills"</code></p>
					<p>Default mode showing removable pills for each selected item.</p>
					<p>Best for visual representation.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Count Mode"
			subtitleText="Show count of selected items with badge"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Mode">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={countSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-display-mode="count"
							show-count-badge="true"
						search-placeholder="Select technologies..."
					></multi-select>
					<p class="text-muted small mt-2">
						Compact display showing only count
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Select items to see count update.</p>
					<p>Saves space when many items selected.</p>
					<p>Badge shows count next to dropdown toggle.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Count Mode</h5>
					<p><code>pills-display-mode="count"</code></p>
					<p>Use <code>getCountPillCallback</code> for i18n/pluralization</p>
					<p><code>show-count-badge="true"</code> - Show badge</p>
					<p>Best for limited space.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Compact Mode"
			subtitleText="Minimal display showing first item + count"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Mode">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={compactSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-display-mode="compact"
						search-placeholder="Select technologies..."
					></multi-select>
					<p class="text-muted small mt-2">
						Shows first item and count of others
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>First selected item shown with count of remaining items.</p>
					<p>Good balance between detail and space.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Compact Mode</h5>
					<p><code>pills-display-mode="compact"</code></p>
					<p>Shows: "First Item (+2 more)"</p>
					<p>Compromise between pills and count.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Pills Position: Top"
			subtitleText="Place pills above the search input"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Position">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={pillsTopSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-position="top"
						search-placeholder="Select technologies..."
					></multi-select>
					<p class="text-muted small mt-2">
						Pills appear above the input
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Pills shown above input field.</p>
					<p>Useful for certain UI layouts.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Pills Position</h5>
					<p><code>pills-position="top"</code></p>
					<p>Other options: bottom, left, right</p>
					<p>Default: bottom</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Pills Position: Left"
			subtitleText="Place pills to the left of the input"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Position">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={pillsLeftSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-position="left"
						search-placeholder="Select technologies..."
					></multi-select>
					<p class="text-muted small mt-2">
						Pills appear inline to the left
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Pills shown inline to the left of input.</p>
					<p>Creates horizontal layout.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Inline Position</h5>
					<p><code>pills-position="left"</code></p>
					<p>Pills flow horizontally with input.</p>
					<p>Requires sufficient width.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Pills Threshold"
			subtitleText="Auto-switch to count mode after threshold"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Threshold">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={thresholdSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-threshold="3"
							search-placeholder="Select technologies..."
					></multi-select>
					<p class="text-muted small mt-2">
						Switches to count mode after 3 selections
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Select more than 3 items to see automatic switch to count mode.</p>
					<p>Combines benefits of both modes.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Smart Threshold</h5>
					<p><code>pills-threshold="3"</code></p>
					<p>Shows pills up to threshold, then switches to count.</p>
					<p>Optimal UX for varying selection sizes.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Configuration Table -->
		<div class="mt-5">
			<h2 class="mb-4">Display Mode Configuration</h2>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Values</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>display-mode</code></td>
							<td><code>pills</code> | <code>count</code> | <code>compact</code></td>
							<td><code>pills</code></td>
							<td>How to display selected items</td>
						</tr>
						<tr>
							<td><code>pills-position</code></td>
							<td><code>top</code> | <code>bottom</code> | <code>left</code> | <code>right</code></td>
							<td><code>bottom</code></td>
							<td>Where to place pills relative to input</td>
						</tr>
						<tr>
							<td><code>pills-threshold</code></td>
							<td>number</td>
							<td><code>null</code></td>
							<td>Auto-switch to count after N selections</td>
						</tr>
						<tr>
							<td><code>getCountPillCallback</code></td>
							<td>(count: number, moreCount?: number) => string</td>
							<td><code>(count, more?) => more ? `+$&#123;more&#125; more` : `$&#123;count&#125; selected`</code></td>
							<td>Callback for count pill text (i18n/pluralization). Used for both count mode and partial mode "+X more" badge.</td>
						</tr>
						<tr>
							<td><code>show-count-badge</code></td>
							<td><code>true</code> | <code>false</code></td>
							<td><code>false</code></td>
							<td>Show badge next to toggle icon</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Important Notes -->
		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">📐 Display Tips</h3>
			<ul class="mb-0">
				<li><strong>Pills Mode:</strong> Best for visual representation and easy removal of selections</li>
				<li><strong>Count Mode:</strong> Best when space is limited or many items are selected</li>
				<li><strong>Compact Mode:</strong> Good compromise showing first item plus count</li>
				<li><strong>Threshold:</strong> Combine pills and count modes for optimal UX</li>
				<li><strong>Position:</strong> Adjust pills position based on your layout requirements</li>
			</ul>
		</div>
	</div>
</DocLayout>
