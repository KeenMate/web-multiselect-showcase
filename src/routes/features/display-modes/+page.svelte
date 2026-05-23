<script lang="ts">
	import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let pillsSelect: any;
	let countSelect: any;
	let countOnlySelect: any;
	let badgeOnlySelect: any;
	let compactSelect: any;
	let noneSelect: any;
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
		if (countOnlySelect) countOnlySelect.options = options;
		if (badgeOnlySelect) badgeOnlySelect.options = options;
		if (compactSelect) compactSelect.options = options;
		if (noneSelect) noneSelect.options = options;
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
			titleText="DM01 Badges Mode (Default)"
			subtitleText="Show selected items as removable badges"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Mode">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={pillsSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-display-mode="badges"
						search-placeholder="Select technologies..."
					></web-multiselect>
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
					<h5>Badges Mode</h5>
					<p><code>badges-display-mode="badges"</code></p>
					<p>Default mode showing removable badges for each selected item.</p>
					<p>Best for visual representation.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="DM02 Count Mode + Badge"
			subtitleText="Count pill and badge (both options enabled)"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Mode">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={countSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-display-mode="count"
							show-counter="true"
						search-placeholder="Select technologies..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Shows count pill (clickable) + counter next to toggle icon
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>This example shows <strong>both</strong> count features enabled:</p>
					<ul>
						<li><strong>Count pill:</strong> Clickable "X selected" in input area</li>
						<li><strong>Count badge:</strong> [X] next to dropdown toggle</li>
					</ul>
					<p>You can use both together or separately (see examples below).</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Combined Count Display</h5>
					<p><code>badges-display-mode="count"</code></p>
					<p><code>show-counter="true"</code></p>
					<p>Both options work independently and can be combined for maximum visibility.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="DM03 Count Mode Only"
			subtitleText="Count pill without badge"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Mode">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={countOnlySelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-display-mode="count"
						search-placeholder="Select technologies..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Shows only the count pill (no badge)
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Only the count pill is shown in the input area.</p>
					<p>Click the count text to see selected items in a popover.</p>
					<p>Use <code>getCounterCallback</code> for i18n/pluralization.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Count Pill Only</h5>
					<p><code>badges-display-mode="count"</code></p>
					<p><code>show-counter="false"</code> (default)</p>
					<p>Compact display best for limited space.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="DM04 Counter Feature"
			subtitleText="Add [X] badge to any display mode"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Badge Info">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={badgeOnlySelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-display-mode="badges"
						show-counter="true"
						search-placeholder="Select technologies..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Pills mode with [X] badge added next to toggle icon
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p><strong>Important:</strong> The counter <code>[X]</code> is a <em>supplementary</em> feature, not a standalone display mode.</p>
					<p>It can be added to any display mode (pills, count, or compact).</p>
					<p>Badge provides quick visual feedback of total count, especially useful when pills scroll out of view.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Counter</h5>
					<p><code>show-counter="true"</code></p>
					<p>Works with any <code>badges-display-mode</code></p>
					<p><strong>Note:</strong> Cannot be used alone - must be combined with pills, count, or compact mode.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="DM05 Compact Mode"
			subtitleText="First item + count in a single removable pill"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Mode">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={compactSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-display-mode="compact"
						search-placeholder="Select technologies..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Shows first item with count in a single pill
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>First selected item shown with count of remaining items in a single removable pill.</p>
					<p>Example: <code>[JavaScript (+2 more) | x]</code></p>
					<p>Remove button clears ALL selections.</p>
					<p>Click pill text to see all selected items in popover.</p>
					<p>Automatically shows next item when selections change.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Compact Mode</h5>
					<p><code>badges-display-mode="compact"</code></p>
					<p>Shows: <code>JavaScript (+2 more)</code></p>
					<p>Good balance between detail and space.</p>
					<p>Uses <code>getBadgeDisplayCallback</code> for first item and <code>getCounterCallback</code> for count text.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="DM06 None Mode (Minimal Display)"
			subtitleText="No display in pills area - use with counter"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Mode">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={noneSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-display-mode="none"
						show-counter="true"
						search-placeholder="Select technologies..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Nothing shown in pills area - only [X] badge visible
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Most compact display possible - no pills or count text shown.</p>
					<p>Typically combined with <code>show-counter="true"</code> to show <code>[X]</code> indicator.</p>
					<p>Click the counter to see all selected items in popover.</p>
					<p>Or open the dropdown to see selections.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>None Mode</h5>
					<p><code>badges-display-mode="none"</code></p>
					<p><code>show-counter="true"</code></p>
					<p>Perfect for extremely space-constrained layouts.</p>
					<p>Pills container is empty and hidden via CSS.</p>
					<p><strong>Note:</strong> No callbacks are invoked in this mode (no display to render).</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="DM07 Badges Position: Top"
			subtitleText="Place pills above the search input"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Position">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={pillsTopSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-position="top"
						search-placeholder="Select technologies..."
					></web-multiselect>
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
					<p><code>badges-position="top"</code></p>
					<p>Other options: bottom, left, right</p>
					<p>Default: bottom</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="DM08 Badges Position: Left"
			subtitleText="Place pills to the left of the input"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Position">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={pillsLeftSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-position="left"
						search-placeholder="Select technologies..."
					></web-multiselect>
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
					<p><code>badges-position="left"</code></p>
					<p>Pills flow horizontally with input.</p>
					<p>Requires sufficient width.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="DM09 Badges Threshold"
			subtitleText="Auto-switch to count mode after threshold"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Threshold">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={thresholdSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						badges-threshold="3"
							search-placeholder="Select technologies..."
					></web-multiselect>
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
					<p><code>badges-threshold="3"</code></p>
					<p>Shows pills up to threshold, then switches to count.</p>
					<p>Optimal UX for varying selection sizes.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Callback Behavior Documentation -->
		<div class="mt-5 p-4 bg-warning bg-opacity-10 border border-warning rounded">
			<h2 class="h4 mb-3">🔧 Callback Behavior by Display Mode</h2>
			<p class="mb-4">Understanding when your callbacks are invoked is critical for proper implementation.</p>

			<h3 class="h5 mb-3">getBadgeDisplayCallback(item)</h3>
			<p class="small">Controls the text shown for individual selected items.</p>
			<div class="table-responsive mb-4">
				<table class="table table-sm table-bordered">
					<thead class="table-light">
						<tr>
							<th>Display Mode</th>
							<th>When Called</th>
							<th>Example</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>pills</code></td>
							<td>✅ For EACH selected item</td>
							<td>Called 5 times for 5 selections</td>
						</tr>
						<tr>
							<td><code>partial</code></td>
							<td>✅ For EACH visible pill only</td>
							<td>Called 3 times (shows "Item1", "Item2", "Item3" + "+2 more")</td>
						</tr>
						<tr>
							<td><code>compact</code></td>
							<td>✅ For ONLY the first item</td>
							<td>Called 1 time (shows "Item1 (+4 more)")</td>
						</tr>
						<tr>
							<td><code>count</code></td>
							<td>❌ NOT called</td>
							<td>No individual items shown</td>
						</tr>
						<tr>
							<td><code>none</code></td>
							<td>❌ NOT called</td>
							<td>No display</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="small text-muted mb-4">💡 <strong>Tip:</strong> Use this callback to show different text in pills vs dropdown (e.g., "John Doe" in pill, full details in dropdown)</p>

			<h3 class="h5 mb-3">getCounterCallback(count, moreCount?)</h3>
			<p class="small">Controls count text display. Signature: <code>(count: number, moreCount?: number) =&gt; string</code></p>
			<div class="table-responsive mb-4">
				<table class="table table-sm table-bordered">
					<thead class="table-light">
						<tr>
							<th>Display Mode</th>
							<th>When Called</th>
							<th>Parameters</th>
							<th>Example Output</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>pills</code></td>
							<td>❌ NOT called</td>
							<td>-</td>
							<td>No count text</td>
						</tr>
						<tr>
							<td><code>partial</code></td>
							<td>✅ For "+X more" badge</td>
							<td><code>count=5, moreCount=2</code></td>
							<td>"+2 more"</td>
						</tr>
						<tr>
							<td><code>compact</code></td>
							<td>✅ For "(+X more)" text</td>
							<td><code>count=5, moreCount=4</code></td>
							<td>"(+4 more)"</td>
						</tr>
						<tr>
							<td><code>count</code></td>
							<td>✅ For main count text</td>
							<td><code>count=5, moreCount=undefined</code></td>
							<td>"5 selected"</td>
						</tr>
						<tr>
							<td><code>none</code></td>
							<td>❌ NOT called</td>
							<td>-</td>
							<td>No display</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="small text-muted mb-4">💡 <strong>Tip:</strong> Check if <code>moreCount</code> is defined to handle both use cases:</p>
			<pre class="bg-light p-3 rounded"><code>{`getCounterCallback: (count, moreCount) => {
  if (moreCount !== undefined) {
    return \`+\${moreCount} more\`; // Partial/Compact mode
  }
  return \`\${count} selected\`; // Count mode
}`}</code></pre>

			<h3 class="h5 mb-3">Counter [X] (Independent Feature)</h3>
			<ul class="small mb-4">
				<li><strong>Always shows:</strong> Just the number in brackets <code>[5]</code></li>
				<li><strong>NOT affected by any callbacks</strong></li>
				<li><strong>Works with ALL display modes</strong> (including 'none')</li>
				<li><strong>Controlled by:</strong> <code>show-counter="true"</code> attribute</li>
			</ul>

			<h3 class="h5 mb-3">Quick Reference: What's Displayed</h3>
			<div class="table-responsive">
				<table class="table table-sm table-bordered">
					<thead class="table-light">
						<tr>
							<th>Mode</th>
							<th>Pills Area Shows</th>
							<th>Callbacks Used</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>pills</code></td>
							<td>Individual pills for all items</td>
							<td><code>getBadgeDisplayCallback</code> (each item)</td>
						</tr>
						<tr>
							<td><code>partial</code></td>
							<td>First N pills + "+X more" badge</td>
							<td><code>getBadgeDisplayCallback</code> (visible items), <code>getCounterCallback</code> (badge)</td>
						</tr>
						<tr>
							<td><code>compact</code></td>
							<td>Single pill: "FirstItem (+X more)"</td>
							<td><code>getBadgeDisplayCallback</code> (1st item), <code>getCounterCallback</code> (count)</td>
						</tr>
						<tr>
							<td><code>count</code></td>
							<td>"X selected" text + clear button</td>
							<td><code>getCounterCallback</code> (text)</td>
						</tr>
						<tr>
							<td><code>none</code></td>
							<td>Nothing (empty)</td>
							<td>None</td>
						</tr>
						<tr class="table-info">
							<td><code>badge [X]</code></td>
							<td>Always shows <code>[count]</code> next to toggle</td>
							<td>None (just shows number)</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

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
							<td><code>badges-display-mode</code></td>
							<td><code>badges</code> | <code>count</code> | <code>compact</code> | <code>partial</code> | <code>none</code></td>
							<td><code>badges</code></td>
							<td>How to display selected items. <code>compact</code>: first item + count in single pill. <code>none</code>: no display (use with counter).</td>
						</tr>
						<tr>
							<td><code>badges-position</code></td>
							<td><code>top</code> | <code>bottom</code> | <code>left</code> | <code>right</code></td>
							<td><code>bottom</code></td>
							<td>Where to place pills relative to input</td>
						</tr>
						<tr>
							<td><code>badges-threshold</code></td>
							<td>number</td>
							<td><code>null</code></td>
							<td>Auto-switch to count after N selections</td>
						</tr>
						<tr>
							<td><code>getCounterCallback</code></td>
							<td>(count: number, moreCount?: number) => string</td>
							<td><code>(count, more?) => more ? `+$&#123;more&#125; more` : `$&#123;count&#125; selected`</code></td>
							<td>Callback for count pill text (i18n/pluralization). Used for both count mode and partial mode "+X more" badge.</td>
						</tr>
						<tr>
							<td><code>show-counter</code></td>
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
				<li><strong>Badges Mode:</strong> Best for visual representation and easy removal of selections</li>
				<li><strong>Count Mode:</strong> Best when space is limited or many items are selected</li>
				<li><strong>Compact Mode:</strong> Good compromise showing first item plus count</li>
				<li><strong>Threshold:</strong> Combine pills and count modes for optimal UX</li>
				<li><strong>Position:</strong> Adjust pills position based on your layout requirements</li>
			</ul>
		</div>
	</div>
</DocLayout>
