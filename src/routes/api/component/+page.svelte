<script lang="ts">
	import { DocLayout, CodeBlock } from '@keenmate/svelte-docs';
</script>

<DocLayout
	titleText="Component API"
	descriptionText="Complete API reference for the MultiSelect web component">

	<div class="py-4">
		<!-- Overview -->
		<section class="mb-5">
			<h2 class="mb-3">Overview</h2>
			<p class="lead">
				The <code>&lt;multi-select&gt;</code> web component provides a rich, accessible multiselect interface with extensive customization options.
			</p>
		</section>

		<!-- Public Properties -->
		<section class="mb-5">
			<h2 class="mb-4">Public Properties</h2>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Property</th>
							<th>Type</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>options</code></td>
							<td><code>T[]</code></td>
							<td>Array of items to display in the dropdown</td>
						</tr>
						<tr>
							<td><code>selectedValue</code></td>
							<td><code>string | number | (string | number)[] | null</code></td>
							<td>Get selected value(s). Returns single value in single-select mode, array in multi-select mode</td>
						</tr>
						<tr>
							<td><code>selectedItem</code></td>
							<td><code>T | null</code></td>
							<td>Get the first selected item object</td>
						</tr>
					</tbody>
				</table>
			</div>

			<CodeBlock
				codeContent={`const select = document.querySelector('multi-select');

// Set options
select.options = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' }
];

// Get selected values
console.log(select.selectedValue); // [1, 2] or 1
console.log(select.selectedItem);  // { id: 1, name: 'Option 1' }`}
				languageType="javascript"
				titleText="Properties Example"
			/>
		</section>

		<!-- Public Methods -->
		<section class="mb-5">
			<h2 class="mb-4">Public Methods</h2>

			<div class="mb-4">
				<h3 class="h5"><code>getValue()</code></h3>
				<p>Returns the current selected value(s) in a form-ready format.</p>
				<ul>
					<li><strong>Returns:</strong> <code>string | number | (string | number)[] | null</code></li>
					<li><strong>Behavior:</strong> Mode-dependent. Returns single value in single-select mode, array in multi-select mode</li>
				</ul>
				<CodeBlock
					codeContent={`const select = document.querySelector('multi-select');
const value = select.getValue();
console.log(value); // [1, 2, 3] or 1`}
					languageType="javascript"
				/>
			</div>

			<div class="mb-4">
				<h3 class="h5"><code>getSelected()</code></h3>
				<p>Returns array of selected item objects.</p>
				<ul>
					<li><strong>Returns:</strong> <code>T[]</code></li>
					<li><strong>Behavior:</strong> Always returns an array of full item objects</li>
				</ul>
				<CodeBlock
					codeContent={`const select = document.querySelector('multi-select');
const items = select.getSelected();
console.log(items); // [{ id: 1, name: 'Option 1' }, ...]`}
					languageType="javascript"
				/>
			</div>

			<div class="mb-4">
				<h3 class="h5"><code>setSelected(values)</code></h3>
				<p>Set selected values programmatically.</p>
				<ul>
					<li><strong>Parameters:</strong> <code>values: (string | number)[]</code></li>
					<li><strong>Returns:</strong> <code>void</code></li>
				</ul>
				<CodeBlock
					codeContent={`const select = document.querySelector('multi-select');
select.setSelected([1, 2, 3]); // Select items with values 1, 2, 3`}
					languageType="javascript"
				/>
			</div>

			<div class="mb-4">
				<h3 class="h5"><code>destroy()</code></h3>
				<p>Clean up the component and remove all event listeners.</p>
				<ul>
					<li><strong>Returns:</strong> <code>void</code></li>
				</ul>
				<CodeBlock
					codeContent={`const select = document.querySelector('multi-select');
select.destroy(); // Cleanup when removing from DOM`}
					languageType="javascript"
				/>
			</div>
		</section>

		<!-- Callback Properties -->
		<section class="mb-5">
			<h2 class="mb-4">Callback Properties</h2>
			<p>Set these properties to customize data extraction and behavior:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Property</th>
							<th>Type</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>getValueCallback</code></td>
							<td><code>(item: T) =&gt; string | number</code></td>
							<td>Extract unique ID from item</td>
						</tr>
						<tr>
							<td><code>getDisplayValueCallback</code></td>
							<td><code>(item: T) =&gt; string</code></td>
							<td>Extract display text from item</td>
						</tr>
						<tr>
							<td><code>getSearchValueCallback</code></td>
							<td><code>(item: T) =&gt; string</code></td>
							<td>Extract searchable text from item</td>
						</tr>
						<tr>
							<td><code>getIconCallback</code></td>
							<td><code>(item: T) =&gt; string</code></td>
							<td>Extract icon/emoji from item</td>
						</tr>
						<tr>
							<td><code>getSubtitleCallback</code></td>
							<td><code>(item: T) =&gt; string</code></td>
							<td>Extract subtitle/description from item</td>
						</tr>
						<tr>
							<td><code>getGroupCallback</code></td>
							<td><code>(item: T) =&gt; string</code></td>
							<td>Extract group name from item</td>
						</tr>
						<tr>
							<td><code>getDisabledCallback</code></td>
							<td><code>(item: T) =&gt; boolean</code></td>
							<td>Determine if item is disabled</td>
						</tr>
						<tr>
							<td><code>getFormValueCallback</code></td>
							<td><code>(values: (string | number)[]) =&gt; string</code></td>
							<td>Custom form value formatting</td>
						</tr>
						<tr>
							<td><code>searchCallback</code></td>
							<td><code>(searchTerm: string) =&gt; Promise&lt;T[]&gt;</code></td>
							<td>Async function to load data</td>
						</tr>
						<tr>
							<td><code>addNewCallback</code></td>
							<td><code>(value: string) =&gt; T | Promise&lt;T&gt;</code></td>
							<td>Create new option when adding</td>
						</tr>
						<tr>
							<td><code>selectCallback</code></td>
							<td><code>(option: T) =&gt; void</code></td>
							<td>Called when option is selected</td>
						</tr>
						<tr>
							<td><code>deselectCallback</code></td>
							<td><code>(option: T) =&gt; void</code></td>
							<td>Called when option is deselected</td>
						</tr>
						<tr>
							<td><code>changeCallback</code></td>
							<td><code>(selectedOptions: T[]) =&gt; void</code></td>
							<td>Called when selection changes</td>
						</tr>
					</tbody>
				</table>
			</div>

			<CodeBlock
				codeContent={`const select = document.querySelector('multi-select');

// Set callbacks
select.getValueCallback = (item) => item.userId;
select.getDisplayValueCallback = (item) => item.fullName;
select.getSubtitleCallback = (item) => item.email;

select.searchCallback = async (searchTerm) => {
  const response = await fetch(\`/api/search?q=\${searchTerm}\`);
  return await response.json();
};

select.changeCallback = (selectedItems) => {
  console.log('Selection changed:', selectedItems);
};`}
				languageType="javascript"
				titleText="Callbacks Example"
			/>
		</section>

		<!-- Events -->
		<section class="mb-5">
			<h2 class="mb-4">Custom Events</h2>
			<p>The component dispatches these custom events:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Event</th>
							<th>Detail Type</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>select</code></td>
							<td><code>MultiSelectEventDetail&lt;T&gt;</code></td>
							<td>Dispatched when an option is selected</td>
						</tr>
						<tr>
							<td><code>deselect</code></td>
							<td><code>MultiSelectEventDetail&lt;T&gt;</code></td>
							<td>Dispatched when an option is deselected</td>
						</tr>
						<tr>
							<td><code>change</code></td>
							<td><code>MultiSelectEventDetail&lt;T&gt;</code></td>
							<td>Dispatched when selection changes</td>
						</tr>
					</tbody>
				</table>
			</div>

			<CodeBlock
				codeContent={`const select = document.querySelector('multi-select');

select.addEventListener('select', (event) => {
  console.log('Selected:', event.detail.option);
  console.log('All selected:', event.detail.selectedOptions);
  console.log('Selected values:', event.detail.selectedValues);
});

select.addEventListener('change', (event) => {
  console.log('Selection changed:', event.detail.selectedOptions);
});`}
				languageType="javascript"
				titleText="Events Example"
			/>
		</section>

		<!-- TypeScript Support -->
		<section class="mb-5">
			<h2 class="mb-4">TypeScript Support</h2>
			<p>The component is fully typed with generic support:</p>

			<CodeBlock
				codeContent={`import type { MultiSelectElement } from '@keenmate/web-multiselect';

interface User {
  id: number;
  name: string;
  email: string;
}

const select = document.querySelector<MultiSelectElement<User>>('multi-select');

if (select) {
  select.options = [
    { id: 1, name: 'John Doe', email: 'john@example.com' }
  ];

  select.getValueCallback = (user) => user.id;
  select.getDisplayValueCallback = (user) => user.name;

  const selected = select.getSelected(); // Type: User[]
}`}
				languageType="typescript"
				titleText="TypeScript Example"
			/>
		</section>

		<!-- Global API -->
		<section class="mb-5">
			<h2 class="mb-4">Global API</h2>
			<p class="lead">
				Access component functionality through the global API namespace <code>window.keenmate.multiselect</code>:
			</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Method / Property</th>
							<th>Returns</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>version()</code></td>
							<td>string</td>
							<td>Returns the component version</td>
						</tr>
						<tr>
							<td><code>config</code></td>
							<td>object</td>
							<td>Package metadata (name, version, author, license, repository, homepage)</td>
						</tr>
						<tr>
							<td><code>register()</code></td>
							<td>void</td>
							<td>Manually register the custom element (if not auto-registered)</td>
						</tr>
						<tr>
							<td><code>getInstances()</code></td>
							<td>HTMLElement[]</td>
							<td>Get all active multiselect instances on the page</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3 class="h5 mt-4 mb-3">Usage Examples</h3>

			<div class="mb-3">
				<h4 class="h6">Check Component Version</h4>
				<CodeBlock
					codeContent={`// Get the version string
const version = window.keenmate.multiselect.version();
console.log('MultiSelect Version:', version); // "1.0.0-rc02"

// Access config object
const config = window.keenmate.multiselect.config;
console.log('Package:', config.name);
console.log('Author:', config.author);
console.log('License:', config.license);`}
					languageType="javascript"
					titleText="Version Info"
				/>
			</div>

			<div class="mb-3">
				<h4 class="h6">Get All Instances</h4>
				<CodeBlock
					codeContent={`// Get all multiselect instances on the page
const allInstances = window.keenmate.multiselect.getInstances();
console.log(\`Found \${allInstances.length} multiselect(s)\`);

// Iterate through instances
allInstances.forEach((instance, index) => {
  const selected = instance.getSelected();
  console.log(\`Instance \${index} has \${selected.length} selected items\`);
});

// Clear all selections
allInstances.forEach(instance => {
  instance.setSelected([]);
});`}
					languageType="javascript"
					titleText="Instance Management"
				/>
			</div>

			<div class="mb-3">
				<h4 class="h6">Manual Registration</h4>
				<CodeBlock
					codeContent={`// Component auto-registers on import, but you can manually register if needed
window.keenmate.multiselect.register();

// Useful for dynamic imports or lazy loading
import('@keenmate/web-multiselect').then(() => {
  if (!customElements.get('multi-select')) {
    window.keenmate.multiselect.register();
  }
});`}
					languageType="javascript"
					titleText="Manual Registration"
				/>
			</div>

			<div class="mt-4 p-3 bg-info bg-opacity-10 border border-info rounded">
				<strong>💡 Use Cases:</strong>
				<ul class="mb-0 mt-2">
					<li><strong>Version Detection:</strong> Check component version in bundled projects</li>
					<li><strong>Global State:</strong> Access all instances for batch operations</li>
					<li><strong>Debugging:</strong> Inspect instances in browser console</li>
					<li><strong>Testing:</strong> Programmatically interact with all instances</li>
				</ul>
			</div>
		</section>

		<!-- Important Notes -->
		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">📝 Important Notes</h3>
			<ul class="mb-0">
				<li><strong>Generic Types:</strong> Component supports any data structure via <code>T</code> parameter</li>
				<li><strong>Reactive:</strong> All properties are reactive - changes update the UI automatically</li>
				<li><strong>Shadow DOM:</strong> Component uses Shadow DOM for encapsulation</li>
				<li><strong>Form Integration:</strong> Works seamlessly with HTML forms via hidden inputs</li>
				<li><strong>Cleanup:</strong> Always call <code>destroy()</code> when removing from DOM</li>
			</ul>
		</div>
	</div>
</DocLayout>
