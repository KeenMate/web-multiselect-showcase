<script lang="ts">
	import { DocLayout, CodeBlock } from '@keenmate/svelte-docs';
</script>

<DocLayout
	titleText="Events"
	descriptionText="Custom events and callbacks for reacting to user interactions">

	<div class="py-4">
		<!-- Overview -->
		<section class="mb-5">
			<h2 class="mb-3">Overview</h2>
			<p class="lead">
				The MultiSelect component provides both custom events (for HTML event listeners) and callback properties (for JavaScript functions) to handle user interactions.
			</p>
		</section>

		<!-- Custom Events -->
		<section class="mb-5">
			<h2 class="mb-4">Custom Events</h2>
			<p>These events are dispatched as standard DOM CustomEvents that you can listen to using <code>addEventListener</code>:</p>

			<div class="table-responsive mb-4">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Event Name</th>
							<th>When Dispatched</th>
							<th>Cancelable</th>
							<th>Bubbles</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>select</code></td>
							<td>When an option is selected</td>
							<td>No</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td><code>deselect</code></td>
							<td>When an option is deselected</td>
							<td>No</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td><code>change</code></td>
							<td>When the selection changes</td>
							<td>No</td>
							<td>Yes</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3 class="h5 mb-3">Event Detail Structure</h3>
			<p>All events include a <code>detail</code> object with the following structure:</p>

			<CodeBlock
				codeContent={`interface MultiSelectEventDetail<T> {
  // The option that was selected/deselected (only in select/deselect events)
  option?: T;

  // Array of all currently selected option objects
  selectedOptions: T[];

  // Array of all currently selected values
  selectedValues: (string | number)[];
}`}
				languageType="typescript"
				titleText="Event Detail Type"
			/>

			<h3 class="h5 mb-3 mt-4">Usage Examples</h3>

			<div class="mb-4">
				<h4 class="h6">Select Event</h4>
				<CodeBlock
					codeContent={`const select = document.querySelector('web-multiselect');

select.addEventListener('select', (event) => {
  console.log('Option selected:', event.detail.option);
  console.log('All selected options:', event.detail.selectedOptions);
  console.log('Selected values:', event.detail.selectedValues);
});`}
					languageType="javascript"
				/>
			</div>

			<div class="mb-4">
				<h4 class="h6">Deselect Event</h4>
				<CodeBlock
					codeContent={`select.addEventListener('deselect', (event) => {
  console.log('Option deselected:', event.detail.option);
  console.log('Remaining selected:', event.detail.selectedOptions);
});`}
					languageType="javascript"
				/>
			</div>

			<div class="mb-4">
				<h4 class="h6">Change Event</h4>
				<CodeBlock
					codeContent={`select.addEventListener('change', (event) => {
  console.log('Selection changed');
  console.log('Current selection:', event.detail.selectedOptions);
  console.log('Current values:', event.detail.selectedValues);

  // Update form or trigger other actions
  updateForm(event.detail.selectedValues);
});`}
					languageType="javascript"
				/>
			</div>
		</section>

		<!-- Callback Properties -->
		<section class="mb-5">
			<h2 class="mb-4">Callback Properties</h2>
			<p>Alternative to event listeners, you can set callback functions directly on the component:</p>

			<div class="table-responsive mb-4">
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
							<td><code>selectCallback</code></td>
							<td><code>(option: T) =&gt; void</code></td>
							<td>Called when an option is selected</td>
						</tr>
						<tr>
							<td><code>deselectCallback</code></td>
							<td><code>(option: T) =&gt; void</code></td>
							<td>Called when an option is deselected</td>
						</tr>
						<tr>
							<td><code>changeCallback</code></td>
							<td><code>(selectedOptions: T[]) =&gt; void</code></td>
							<td>Called when selection changes</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3 class="h5 mb-3">Callback Examples</h3>

			<CodeBlock
				codeContent={`const select = document.querySelector('web-multiselect');

// Set callbacks
select.selectCallback = (option) => {
  console.log('Selected:', option);
};

select.deselectCallback = (option) => {
  console.log('Deselected:', option);
};

select.changeCallback = (selectedOptions) => {
  console.log('Selection changed:', selectedOptions);
  // Update UI or perform other actions
  updateDashboard(selectedOptions);
};`}
				languageType="javascript"
				titleText="Callback Properties"
			/>
		</section>

		<!-- Event vs Callback -->
		<section class="mb-5">
			<h2 class="mb-4">Events vs Callbacks</h2>
			<p>Both approaches work simultaneously - you can use either or both:</p>

			<div class="row g-4 mb-4">
				<div class="col-md-6">
					<div class="card h-100">
						<div class="card-body">
							<h3 class="h5 card-title">✅ Use Events When:</h3>
							<ul class="mb-0">
								<li>Working in HTML/vanilla JavaScript</li>
								<li>Multiple listeners needed</li>
								<li>Event delegation is useful</li>
								<li>Following standard DOM patterns</li>
								<li>Need event bubbling behavior</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card h-100">
						<div class="card-body">
							<h3 class="h5 card-title">✅ Use Callbacks When:</h3>
							<ul class="mb-0">
								<li>Simple single handler needed</li>
								<li>Working with frameworks (React, Vue, etc.)</li>
								<li>Prefer direct function assignment</li>
								<li>Need access to full item object</li>
								<li>Cleaner syntax for your use case</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<CodeBlock
				codeContent={`// Both can be used together
const select = document.querySelector('web-multiselect');

// Event listener (standard DOM approach)
select.addEventListener('change', (event) => {
  logToAnalytics(event.detail.selectedValues);
});

// Callback (direct assignment)
select.changeCallback = (selectedOptions) => {
  updateUI(selectedOptions);
};

// Both will be called when selection changes`}
				languageType="javascript"
				titleText="Using Both Approaches"
			/>
		</section>

		<!-- Framework Integration -->
		<section class="mb-5">
			<h2 class="mb-4">Framework Integration</h2>

			<div class="mb-4">
				<h3 class="h5">React</h3>
				<CodeBlock
					codeContent={`function MyComponent() {
  const selectRef = useRef(null);

  useEffect(() => {
    const handleChange = (event) => {
      console.log('Selection changed:', event.detail.selectedValues);
    };

    selectRef.current?.addEventListener('change', handleChange);

    return () => {
      selectRef.current?.removeEventListener('change', handleChange);
    };
  }, []);

  return <web-multiselect ref={selectRef} />;
}`}
					languageType="jsx"
				/>
			</div>

			<div class="mb-4">
				<h3 class="h5">Vue 3</h3>
				<CodeBlock
					codeContent={`<template>
  <web-multiselect ref="select" @change="handleChange" />
</template>

<script setup>
import { ref, onMounted } from 'vue';

const select = ref(null);

const handleChange = (event) => {
  console.log('Selection changed:', event.detail.selectedValues);
};

// Or use callback
onMounted(() => {
  select.value.changeCallback = (selectedOptions) => {
    console.log('Changed:', selectedOptions);
  };
});
</script>`}
					languageType="vue"
				/>
			</div>

			<div class="mb-4">
				<h3 class="h5">Svelte</h3>
				<CodeBlock
					codeContent={`<script>
  import { onMount } from 'svelte';

  let selectElement;

  function handleChange(event) {
    console.log('Selection changed:', event.detail.selectedValues);
  }

  onMount(() => {
    selectElement.addEventListener('change', handleChange);

    return () => {
      selectElement.removeEventListener('change', handleChange);
    };
  });
</script>

<web-multiselect bind:this={selectElement} on:change={handleChange} />`}
					languageType="svelte"
				/>
			</div>
		</section>

		<!-- Important Notes -->
		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">⚠️ Important Notes</h3>
			<ul class="mb-0">
				<li><strong>Event Detail:</strong> All event information is in <code>event.detail</code>, not <code>event.target</code></li>
				<li><strong>Callbacks Run First:</strong> Callback properties are executed before custom events are dispatched</li>
				<li><strong>Both Trigger:</strong> Setting a callback does NOT prevent the event from firing</li>
				<li><strong>Type Safety:</strong> Use TypeScript generic types for full type safety with callbacks</li>
				<li><strong>Cleanup:</strong> Remember to remove event listeners when component is destroyed</li>
			</ul>
		</div>
	</div>
</DocLayout>
