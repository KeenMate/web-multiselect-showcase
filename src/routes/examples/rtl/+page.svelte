<script lang="ts">
	import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let basicRTLSelect: any;
	let arabicSelect: any;
	let hebrewSelect: any;
	let pillsTopRTL: any;
	let pillsBottomRTL: any;
	let pillsLeftRTL: any;
	let pillsRightRTL: any;
	let countRTL: any;
	let comparisonLTR: any;
	let comparisonRTL: any;
	let nestedRTL: any;

	onMount(() => {
		const techOptions = [
			{ value: 'js', label: 'JavaScript', icon: '🟨' },
			{ value: 'ts', label: 'TypeScript', icon: '🔷' },
			{ value: 'python', label: 'Python', icon: '🐍' },
			{ value: 'java', label: 'Java', icon: '☕' },
			{ value: 'csharp', label: 'C#', icon: '💜' },
			{ value: 'php', label: 'PHP', icon: '🐘' },
			{ value: 'ruby', label: 'Ruby', icon: '💎' },
			{ value: 'go', label: 'Go', icon: '🐹' }
		];

		// Arabic technology terms (transliterated)
		const arabicOptions = [
			{ value: 'js', label: 'جافا سكريبت', icon: '🟨' },
			{ value: 'ts', label: 'تايب سكريبت', icon: '🔷' },
			{ value: 'python', label: 'بايثون', icon: '🐍' },
			{ value: 'java', label: 'جافا', icon: '☕' },
			{ value: 'react', label: 'ري أكت', icon: '⚛️' },
			{ value: 'vue', label: 'فيو', icon: '💚' },
			{ value: 'angular', label: 'أنجولار', icon: '🅰️' },
			{ value: 'svelte', label: 'سفيلت', icon: '🧡' }
		];

		// Hebrew technology terms (transliterated)
		const hebrewOptions = [
			{ value: 'js', label: 'ג\'אווה סקריפט', icon: '🟨' },
			{ value: 'ts', label: 'טייפסקריפט', icon: '🔷' },
			{ value: 'python', label: 'פייתון', icon: '🐍' },
			{ value: 'java', label: 'ג\'אווה', icon: '☕' },
			{ value: 'react', label: 'ריאקט', icon: '⚛️' },
			{ value: 'vue', label: 'וויו', icon: '💚' },
			{ value: 'angular', label: 'אנגולר', icon: '🅰️' },
			{ value: 'svelte', label: 'סוולט', icon: '🧡' }
		];

		if (basicRTLSelect) {
			basicRTLSelect.options = techOptions;
			basicRTLSelect.setSelected(['js', 'ts']);
		}

		if (arabicSelect) {
			arabicSelect.options = arabicOptions;
			arabicSelect.setSelected(['js', 'react']);
		}

		if (hebrewSelect) {
			hebrewSelect.options = hebrewOptions;
			hebrewSelect.setSelected(['python', 'vue']);
		}

		if (pillsTopRTL) {
			pillsTopRTL.options = techOptions;
			pillsTopRTL.setSelected(['js', 'ts', 'python']);
		}

		if (pillsBottomRTL) {
			pillsBottomRTL.options = techOptions;
			pillsBottomRTL.setSelected(['js', 'ts', 'python']);
		}

		if (pillsLeftRTL) {
			pillsLeftRTL.options = techOptions;
			pillsLeftRTL.setSelected(['js', 'ts']);
		}

		if (pillsRightRTL) {
			pillsRightRTL.options = techOptions;
			pillsRightRTL.setSelected(['js', 'ts']);
		}

		if (countRTL) {
			countRTL.options = techOptions;
			countRTL.setSelected(['js', 'ts', 'python', 'java']);
			// Custom RTL count callback (Arabic style)
			countRTL.getCountPillCallback = (count: number) => {
				return `${count} محدد`; // "selected" in Arabic
			};
		}

		if (comparisonLTR) {
			comparisonLTR.options = techOptions;
			comparisonLTR.setSelected(['js', 'ts']);
		}

		if (comparisonRTL) {
			comparisonRTL.options = techOptions;
			comparisonRTL.setSelected(['js', 'ts']);
		}

		if (nestedRTL) {
			nestedRTL.options = arabicOptions;
			nestedRTL.setSelected(['js', 'react']);
		}
	});
</script>

<DocLayout
	titleText="RTL Support"
	descriptionText="Right-to-Left language support with automatic detection">

	<div class="py-4">
		<ShowcaseSection
			titleText="Basic RTL"
			subtitleText="Auto-detected from dir='rtl' attribute"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Details">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={basicRTLSelect}
						dir="rtl"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="...بحث"
					></multi-select>
					<p class="text-muted small mt-2">
						Toggle icon on left, text right-aligned
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>RTL mode is automatically detected when <code>dir="rtl"</code> is set.</p>
					<ul>
						<li>Toggle icon moves to left side</li>
						<li>Text aligns to the right</li>
						<li>Dropdown options flow right-to-left</li>
						<li>Pills remove button on left side</li>
					</ul>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Auto-Detection</h5>
					<p>Set <code>dir="rtl"</code> on the component or any parent element.</p>
					<p>All UI elements automatically mirror for RTL languages.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Arabic Text Example"
			subtitleText="Real Arabic language sample"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Details">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={arabicSelect}
						dir="rtl"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="البحث عن التقنيات..."
					></multi-select>
					<p class="text-muted small mt-2">
						Arabic technology terms
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Example with Arabic text demonstrating:</p>
					<ul>
						<li>Right-to-left text rendering</li>
						<li>Proper icon placement</li>
						<li>Correct pill layout</li>
						<li>RTL search behavior</li>
					</ul>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Arabic Support</h5>
					<p>Full support for Arabic language and script.</p>
					<p>Text flows naturally from right to left.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Hebrew Text Example"
			subtitleText="Real Hebrew language sample"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Details">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={hebrewSelect}
						dir="rtl"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="...חפש טכנולוגיות"
					></multi-select>
					<p class="text-muted small mt-2">
						Hebrew technology terms
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Example with Hebrew text demonstrating:</p>
					<ul>
						<li>Right-to-left text rendering</li>
						<li>Hebrew character support</li>
						<li>Proper alignment and spacing</li>
						<li>Natural reading flow</li>
					</ul>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Hebrew Support</h5>
					<p>Full support for Hebrew language and script.</p>
					<p>All UI elements properly mirrored.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="RTL Pills Positions"
			subtitleText="Logical position mirroring (left↔right)"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Details">

			{#snippet demoContent()}
				<div class="multiselect-demo mb-4">
					<label class="small mb-2">Pills Top (stays top)</label>
					<multi-select
						bind:this={pillsTopRTL}
						dir="rtl"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-position="top"
						search-placeholder="...بحث"
					></multi-select>
				</div>

				<div class="multiselect-demo mb-4">
					<label class="small mb-2">Pills Bottom (stays bottom)</label>
					<multi-select
						bind:this={pillsBottomRTL}
						dir="rtl"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-position="bottom"
						search-placeholder="...בחיפוש"
					></multi-select>
				</div>

				<div class="multiselect-demo mb-4">
					<label class="small mb-2">Pills Left (becomes right in RTL)</label>
					<multi-select
						bind:this={pillsLeftRTL}
						dir="rtl"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-position="left"
						search-placeholder="...بحث"
					></multi-select>
				</div>

				<div class="multiselect-demo">
					<label class="small mb-2">Pills Right (becomes left in RTL)</label>
					<multi-select
						bind:this={pillsRightRTL}
						dir="rtl"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-position="right"
						search-placeholder="...בחיפוש"
					></multi-select>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p><strong>Logical positioning</strong> - positions automatically mirror:</p>
					<ul>
						<li><code>top</code> and <code>bottom</code> stay the same</li>
						<li><code>left</code> becomes physically right in RTL</li>
						<li><code>right</code> becomes physically left in RTL</li>
					</ul>
					<p>This ensures pills appear in the correct logical position for RTL languages.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Position Mirroring</h5>
					<p>Pills positions use <strong>logical</strong> not physical positioning.</p>
					<p>Left/right automatically mirror in RTL mode.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="RTL Count Mode"
			subtitleText="Count badge on left side in RTL"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Details">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<multi-select
						bind:this={countRTL}
						dir="rtl"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						pills-display-mode="count"
						show-count-badge="true"
						search-placeholder="...بحث"
					></multi-select>
					<p class="text-muted small mt-2">
						Count text in Arabic with badge on left
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Count mode in RTL:</p>
					<ul>
						<li>Count badge appears on left side</li>
						<li>Count text right-aligned</li>
						<li>Custom callback for i18n (Arabic: "4 محدد")</li>
					</ul>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Count Display RTL</h5>
					<p>Badge and count text properly positioned for RTL.</p>
					<p>Use <code>getCountPillCallback</code> for RTL text.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="LTR vs RTL Comparison"
			subtitleText="Side-by-side comparison of LTR and RTL layouts"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Differences"
			descriptionColumnTitle="Details">

			{#snippet demoContent()}
				<div class="row">
					<div class="col-md-6 mb-3">
						<label class="small mb-2">LTR (Left-to-Right)</label>
						<multi-select
							bind:this={comparisonLTR}
							value-member="value"
							display-value-member="label"
							icon-member="icon"
							search-placeholder="Search..."
						></multi-select>
					</div>
					<div class="col-md-6 mb-3">
						<label class="small mb-2">RTL (Right-to-Left)</label>
						<multi-select
							bind:this={comparisonRTL}
							dir="rtl"
							value-member="value"
							display-value-member="label"
							icon-member="icon"
							search-placeholder="...بحث"
						></multi-select>
					</div>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p><strong>Key differences:</strong></p>
					<ul>
						<li><strong>Toggle:</strong> Right side (LTR) → Left side (RTL)</li>
						<li><strong>Text:</strong> Left-aligned (LTR) → Right-aligned (RTL)</li>
						<li><strong>Pills:</strong> Remove button right (LTR) → left (RTL)</li>
						<li><strong>Dropdown:</strong> Left-aligned (LTR) → Right-aligned (RTL)</li>
					</ul>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Layout Comparison</h5>
					<p>Complete UI mirroring for RTL languages.</p>
					<p>All elements properly positioned.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Nested RTL (Inherited)"
			subtitleText="Component inherits dir='rtl' from parent"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Details">

			{#snippet demoContent()}
				<div dir="rtl" class="p-3 border rounded bg-light">
					<p class="small mb-2">This container has dir="rtl"</p>
					<multi-select
						bind:this={nestedRTL}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="البحث عن التقنيات..."
					></multi-select>
					<p class="text-muted small mt-2">
						Component inherits RTL from parent
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>RTL mode is inherited from parent elements.</p>
					<p>You can set <code>dir="rtl"</code> on:</p>
					<ul>
						<li>The component itself</li>
						<li>Any parent container</li>
						<li>The <code>&lt;body&gt;</code> or <code>&lt;html&gt;</code> tag</li>
					</ul>
					<p>The component will automatically detect and apply RTL styles.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Inheritance</h5>
					<p>RTL detection checks the component and all ancestors.</p>
					<p>No explicit configuration needed.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Configuration Table -->
		<div class="mt-5">
			<h2 class="mb-4">RTL Configuration</h2>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Feature</th>
							<th>LTR Behavior</th>
							<th>RTL Behavior</th>
							<th>Auto-Mirror</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Toggle Icon</td>
							<td>Right side</td>
							<td>Left side</td>
							<td>✅</td>
						</tr>
						<tr>
							<td>Text Alignment</td>
							<td>Left-aligned</td>
							<td>Right-aligned</td>
							<td>✅</td>
						</tr>
						<tr>
							<td>Pills Remove Button</td>
							<td>Right side of pill</td>
							<td>Left side of pill</td>
							<td>✅</td>
						</tr>
						<tr>
							<td>Pills Flow</td>
							<td>Left-to-right</td>
							<td>Right-to-left</td>
							<td>✅</td>
						</tr>
						<tr>
							<td>Position: <code>left</code></td>
							<td>Physically left</td>
							<td>Physically right</td>
							<td>✅</td>
						</tr>
						<tr>
							<td>Position: <code>right</code></td>
							<td>Physically right</td>
							<td>Physically left</td>
							<td>✅</td>
						</tr>
						<tr>
							<td>Position: <code>top</code></td>
							<td>Above input</td>
							<td>Above input</td>
							<td>-</td>
						</tr>
						<tr>
							<td>Position: <code>bottom</code></td>
							<td>Below input</td>
							<td>Below input</td>
							<td>-</td>
						</tr>
						<tr>
							<td>Count Badge</td>
							<td>Right side</td>
							<td>Left side</td>
							<td>✅</td>
						</tr>
						<tr>
							<td>Dropdown Options</td>
							<td>Checkbox left, text left</td>
							<td>Checkbox right, text right</td>
							<td>✅</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Important Notes -->
		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">🌍 RTL Language Support</h3>
			<ul class="mb-0">
				<li><strong>Auto-Detection:</strong> Set <code>dir="rtl"</code> on component or parent - no JavaScript needed</li>
				<li><strong>Logical Positioning:</strong> Left/right positions automatically mirror for natural RTL layout</li>
				<li><strong>Full UI Mirroring:</strong> All elements (toggle, badges, pills, dropdown) properly positioned</li>
				<li><strong>Text Direction:</strong> Native browser RTL text rendering for proper script display</li>
				<li><strong>Languages Supported:</strong> Arabic, Hebrew, Persian, Urdu, and other RTL languages</li>
				<li><strong>Mixed Content:</strong> Works correctly even with mixed LTR/RTL content (numbers, Latin text)</li>
			</ul>
		</div>
	</div>
</DocLayout>
