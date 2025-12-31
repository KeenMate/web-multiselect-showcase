<script lang="ts">
	import { DocLayout } from '@keenmate/svelte-docs';
</script>

<DocLayout
	titleText="Properties"
	descriptionText="Complete list of all HTML attributes and configuration options">

	<div class="py-4">
		<!-- Member Properties -->
		<section class="mb-5">
			<h2 class="mb-4">Member Properties</h2>
			<p class="lead">Map object properties to component features using member attributes:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>value-member</code></td>
							<td>string</td>
							<td>-</td>
							<td>Property name for extracting unique ID/value from items</td>
						</tr>
						<tr>
							<td><code>display-value-member</code></td>
							<td>string</td>
							<td>-</td>
							<td>Property name for extracting display text from items</td>
						</tr>
						<tr>
							<td><code>search-value-member</code></td>
							<td>string</td>
							<td>-</td>
							<td>Property name for extracting searchable text from items</td>
						</tr>
						<tr>
							<td><code>icon-member</code></td>
							<td>string</td>
							<td>-</td>
							<td>Property name for extracting icon/emoji from items</td>
						</tr>
						<tr>
							<td><code>subtitle-member</code></td>
							<td>string</td>
							<td>-</td>
							<td>Property name for extracting subtitle/description from items</td>
						</tr>
						<tr>
							<td><code>group-member</code></td>
							<td>string</td>
							<td>-</td>
							<td>Property name for extracting group name from items</td>
						</tr>
						<tr>
							<td><code>disabled-member</code></td>
							<td>string</td>
							<td>-</td>
							<td>Property name for determining if item is disabled</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Value Formatting -->
		<section class="mb-5">
			<h2 class="mb-4">Value Formatting</h2>
			<p class="lead">Control how selected values are serialized:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>value-format</code></td>
							<td>'json' | 'csv' | 'array'</td>
							<td>'json'</td>
							<td>Format for serializing selected values. See <a href="/features/value-format">Value Format examples</a></td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="small text-muted mt-2">
				Note: The <code>getValueFormatCallback</code> property (not HTML attribute) allows custom serialization logic.
			</p>
		</section>

		<!-- Form Integration -->
		<section class="mb-5">
			<h2 class="mb-4">Form Integration</h2>
			<p class="lead">Configure HTML form integration with hidden inputs:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>name</code></td>
							<td>string</td>
							<td>-</td>
							<td>HTML form field name for hidden input(s). See <a href="/features/form-integration">Form Integration examples</a></td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="small text-muted mt-2">
				Hidden inputs are created automatically and use the format specified by <code>value-format</code>.
			</p>
		</section>

		<!-- Boolean Options -->
		<section class="mb-5">
			<h2 class="mb-4">Boolean Options</h2>
			<p class="lead">Enable or disable features:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>multiple</code></td>
							<td>boolean</td>
							<td>true</td>
							<td>Allow multiple selections</td>
						</tr>
						<tr>
							<td><code>enable-search</code></td>
							<td>boolean</td>
							<td>true</td>
							<td>Enable search/filtering functionality</td>
						</tr>
						<tr>
							<td><code>allow-groups</code></td>
							<td>boolean</td>
							<td>true</td>
							<td>Enable grouping of options</td>
						</tr>
						<tr>
							<td><code>show-checkboxes</code></td>
							<td>boolean</td>
							<td>true</td>
							<td>Show checkboxes next to options</td>
						</tr>
						<tr>
							<td><code>sticky-actions</code></td>
							<td>boolean</td>
							<td>true</td>
							<td>Keep action buttons fixed at top of dropdown</td>
						</tr>
						<tr>
							<td><code>close-on-select</code></td>
							<td>boolean</td>
							<td>false</td>
							<td>Close dropdown after selecting an option</td>
						</tr>
						<tr>
							<td><code>lock-placement</code></td>
							<td>boolean</td>
							<td>true</td>
							<td>Lock dropdown placement after first open</td>
						</tr>
						<tr>
							<td><code>allow-add-new</code></td>
							<td>boolean</td>
							<td>false</td>
							<td>Allow adding new options not in the list</td>
						</tr>
						<tr>
							<td><code>show-counter</code></td>
							<td>boolean</td>
							<td>false</td>
							<td>Show counter next to toggle icon</td>
						</tr>
						<tr>
							<td><code>keep-options-on-search</code></td>
							<td>boolean</td>
							<td>false</td>
							<td>Keep all options visible during search (used with search-mode='navigate')</td>
						</tr>
						<tr>
							<td><code>should-keep-search-on-close</code></td>
							<td>boolean</td>
							<td>false</td>
							<td>Keep search text when closing dropdown</td>
						</tr>
						<tr>
							<td><code>enable-badge-tooltips</code></td>
							<td>boolean</td>
							<td>false</td>
							<td>Enable tooltips on selected item badges. See <a href="/features/advanced-features">Advanced Features</a></td>
						</tr>
						<tr>
							<td><code>show-debug-info</code></td>
							<td>boolean</td>
							<td>false</td>
							<td>Display debug information panel showing component state (development tool)</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Text Options -->
		<section class="mb-5">
			<h2 class="mb-4">Text Options</h2>
			<p class="lead">Customize text labels and messages:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>search-placeholder</code></td>
							<td>string</td>
							<td>'Search...'</td>
							<td>Placeholder text for search input</td>
						</tr>
						<tr>
							<td><code>search-hint</code></td>
							<td>string</td>
							<td>-</td>
							<td>Hint text shown above input when focused</td>
						</tr>
						<tr>
							<td><code>empty-message</code></td>
							<td>string</td>
							<td>'No results found'</td>
							<td>Message shown when no results found</td>
						</tr>
						<tr>
							<td><code>loading-message</code></td>
							<td>string</td>
							<td>'Loading...'</td>
							<td>Message shown while loading async data</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="small text-muted mt-2">
				Note: For count text formatting with i18n/pluralization, use the <code>getCounterCallback</code> property (JavaScript callback: <code>(count: number, moreCount?: number) => string</code>). When <code>moreCount</code> is provided, it's for the "+X more" badge in partial mode.
			</p>
		</section>

		<!-- Display Options -->
		<section class="mb-5">
			<h2 class="mb-4">Display Options</h2>
			<p class="lead">Control visual appearance and layout:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>badges-display-mode</code></td>
							<td>'badges' | 'count' | 'compact' | 'partial' | 'none'</td>
							<td>'badges'</td>
							<td>How to display selected items in the badges area</td>
						</tr>
						<tr>
							<td><code>badges-position</code></td>
							<td>'top' | 'bottom' | 'left' | 'right'</td>
							<td>'bottom'</td>
							<td>Where to place badges relative to input</td>
						</tr>
						<tr>
							<td><code>badges-threshold</code></td>
							<td>number</td>
							<td>null</td>
							<td>Trigger threshold mode after N selections</td>
						</tr>
						<tr>
							<td><code>badges-threshold-mode</code></td>
							<td>'count' | 'partial'</td>
							<td>'count'</td>
							<td>Behavior when threshold exceeded: 'count' shows counter, 'partial' shows limited badges + more indicator. See <a href="/features/advanced-features">Advanced Features</a></td>
						</tr>
						<tr>
							<td><code>badges-max-visible</code></td>
							<td>number</td>
							<td>3</td>
							<td>Maximum badges to show in partial mode (used with badges-threshold-mode='partial')</td>
						</tr>
						<tr>
							<td><code>badge-tooltip-placement</code></td>
							<td>'top' | 'bottom' | 'left' | 'right'</td>
							<td>'top'</td>
							<td>Tooltip placement relative to badge (requires enable-badge-tooltips="true")</td>
						</tr>
						<tr>
							<td><code>remove-button-tooltip-text</code></td>
							<td>string</td>
							<td>'Remove'</td>
							<td>Tooltip text for badge remove button</td>
						</tr>
						<tr>
							<td><code>search-input-mode</code></td>
							<td>'normal' | 'readonly' | 'hidden'</td>
							<td>'normal'</td>
							<td>Search input display mode</td>
						</tr>
						<tr>
							<td><code>search-mode</code></td>
							<td>'filter' | 'navigate'</td>
							<td>'filter'</td>
							<td>Search behavior: 'filter' hides non-matching, 'navigate' keeps all visible and jumps to matches</td>
						</tr>
						<tr>
							<td><code>actions-layout</code></td>
							<td>'nowrap' | 'wrap'</td>
							<td>'nowrap'</td>
							<td>Action buttons layout: 'nowrap' single row, 'wrap' allows multiple rows</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Sizing Options -->
		<section class="mb-5">
			<h2 class="mb-4">Sizing Options</h2>
			<p class="lead">Control dimensions and limits:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>dropdown-min-width</code></td>
							<td>string (CSS value)</td>
							<td>-</td>
							<td>Minimum width for dropdown (e.g., '20rem', '300px')</td>
						</tr>
						<tr>
							<td><code>dropdown-max-width</code></td>
							<td>string (CSS value)</td>
							<td>-</td>
							<td>Maximum width for dropdown (e.g., '30rem', '500px')</td>
						</tr>
						<tr>
							<td><code>max-height</code></td>
							<td>string (CSS value)</td>
							<td>'20rem'</td>
							<td>Maximum height for dropdown options list</td>
						</tr>
						<tr>
							<td><code>min-search-length</code></td>
							<td>number</td>
							<td>0</td>
							<td>Minimum characters required before loading data</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="small text-muted mt-2">
				Note: For input sizing, use CSS classes (<code>ms__input--xs</code>, <code>--sm</code>, <code>--md</code>, <code>--lg</code>, <code>--xl</code>) or the <code>--ms-rem</code> CSS variable. See <a href="/features/custom-styling">Custom Styling</a>.
			</p>
		</section>

		<!-- Virtual Scrolling -->
		<section class="mb-5">
			<h2 class="mb-4">Virtual Scrolling</h2>
			<p class="lead">Optimize performance for large datasets:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>enable-virtual-scroll</code></td>
							<td>boolean</td>
							<td>false</td>
							<td>Enable virtual scrolling for better performance with large lists</td>
						</tr>
						<tr>
							<td><code>virtual-scroll-threshold</code></td>
							<td>number</td>
							<td>100</td>
							<td>Number of items that triggers automatic virtual scrolling</td>
						</tr>
						<tr>
							<td><code>option-height</code></td>
							<td>number</td>
							<td>40</td>
							<td>Fixed height (px) of each option for virtual scroll calculations</td>
						</tr>
						<tr>
							<td><code>badge-height</code></td>
							<td>number</td>
							<td>28</td>
							<td>Fixed height (px) of each badge for virtual scroll in popover</td>
						</tr>
						<tr>
							<td><code>virtual-scroll-buffer</code></td>
							<td>number</td>
							<td>5</td>
							<td>Number of extra items to render above/below visible area</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="small text-muted mt-2">
				Virtual scrolling only renders visible items, dramatically improving performance for lists with thousands of options. See <a href="/features/virtual-scrolling">Virtual Scrolling</a>.
			</p>
		</section>

		<!-- Initial Values -->
		<section class="mb-5">
			<h2 class="mb-4">Initial Values</h2>
			<p class="lead">Set default selected values:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Attribute</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>initial-values</code></td>
							<td>string (JSON array)</td>
							<td>-</td>
							<td>Initial selected values as JSON array (e.g., '[1,2,3]')</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Important Notes -->
		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">💡 Usage Tips</h3>
			<ul class="mb-0">
				<li><strong>Boolean Attributes:</strong> Set to "false" to disable (e.g., <code>multiple="false"</code>)</li>
				<li><strong>Kebab-case:</strong> All attributes use kebab-case in HTML (e.g., <code>pills-display-mode</code>)</li>
				<li><strong>Member vs Callback:</strong> Use member attributes for simple property mapping, callbacks for complex logic</li>
				<li><strong>Initial Values:</strong> Must be valid JSON array when using <code>initial-values</code> attribute</li>
				<li><strong>CSS Values:</strong> Sizing attributes accept any valid CSS unit (px, rem, em, %, etc.)</li>
			</ul>
		</div>
	</div>
</DocLayout>
