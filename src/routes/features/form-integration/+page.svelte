<script lang="ts">
	import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let jsonFormatSelect: any;
	let csvFormatSelect: any;
	let arrayFormatSelect: any;

	let jsonFormData = $state<any>({});
	let csvFormData = $state<any>({});
	let arrayFormData = $state<any>({});

	onMount(() => {

		const options = [
			{ value: 'js', label: 'JavaScript', icon: '🟨' },
			{ value: 'ts', label: 'TypeScript', icon: '🔷' },
			{ value: 'py', label: 'Python', icon: '🐍' },
			{ value: 'rb', label: 'Ruby', icon: '💎' },
			{ value: 'go', label: 'Go', icon: '🔵' }
		];

		// JSON Format
		if (jsonFormatSelect) {
			jsonFormatSelect.options = options;
			jsonFormatSelect.addEventListener('change', () => updateFormData('json'));
		}

		// CSV Format
		if (csvFormatSelect) {
			csvFormatSelect.options = options;
			csvFormatSelect.addEventListener('change', () => updateFormData('csv'));
		}

		// Array Format
		if (arrayFormatSelect) {
			arrayFormatSelect.options = options;
			arrayFormatSelect.addEventListener('change', () => updateFormData('array'));
		}
	});

	function updateFormData(type: string) {
		let select: any;
		let formId: string;

		switch(type) {
			case 'json':
				select = jsonFormatSelect;
				formId = 'json-form';
				break;
			case 'csv':
				select = csvFormatSelect;
				formId = 'csv-form';
				break;
			case 'array':
				select = arrayFormatSelect;
				formId = 'array-form';
				break;
			default:
				return;
		}

		if (!select) return;

		const form = document.getElementById(formId) as HTMLFormElement;
		if (!form) return;

		const formData = new FormData(form);
		const data: any = {};
		const hiddenInputs: any[] = [];

		for (let [key, value] of formData.entries()) {
			if (key.endsWith('[]')) {
				const cleanKey = key.replace('[]', '');
				if (!data[cleanKey]) {
					data[cleanKey] = [];
				}
				data[cleanKey].push(value);
			} else {
				data[key] = value;
			}
		}

		// Get hidden inputs
		const hiddenElements = form.querySelectorAll('input[type="hidden"]');
		hiddenElements.forEach((input: any) => {
			hiddenInputs.push({
				name: input.name,
				value: input.value
			});
		});

		const result = {
			FormData: data,
			'Hidden Inputs': hiddenInputs
		};

		switch(type) {
			case 'json':
				jsonFormData = result;
				break;
			case 'csv':
				csvFormData = result;
				break;
			case 'array':
				arrayFormData = result;
				break;
		}
	}

	function handleSubmit(event: Event, type: string) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		alert(`Form submitted!\n\nForm data:\n${Array.from(formData.entries()).map(([k, v]) => `${k}: ${v}`).join('\n')}`);
	}
</script>

<DocLayout
	titleText="Form Integration"
	descriptionText="Seamlessly integrate with HTML forms using hidden inputs">

	<div class="py-4">
		<!-- Setup Instructions -->
		<div class="mb-5 p-4 bg-primary bg-opacity-10 border border-primary rounded">
			<h3 class="h5 mb-3">⚙️ Setup for Form Integration</h3>
			<p>To integrate the multiselect with HTML forms, you need to set the <code>name</code> attribute:</p>
			<pre><code>{`<form action="/submit" method="POST">
  <web-multiselect
    name="languages"         <!-- Required: form field name -->
    value-format="json"      <!-- Optional: json (default), csv, or array -->
    value-member="value"
    display-value-member="label">
  </web-multiselect>
  <button type="submit">Submit</button>
</form>`}</code></pre>
			<p class="mt-3 mb-0"><strong>What happens:</strong> Hidden input(s) are automatically created and updated as you select/deselect items. The hidden inputs are submitted with your form using the specified <code>name</code>.</p>
		</div>

		<ShowcaseSection
			titleText="FI01 JSON Format (Default)"
			subtitleText="Hidden input with JSON array value"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Form Data"
			descriptionColumnTitle="How It Works">

			{#snippet demoContent()}
				<div class="form-demo">
					<form id="json-form" onsubmit={(e) => handleSubmit(e, 'json')}>
						<web-multiselect
							bind:this={jsonFormatSelect}
							name="languages"
							value-format="json"
							value-member="value"
							display-value-member="label"
							icon-member="icon"
							search-placeholder="Select languages..."
						></web-multiselect>
						<button type="submit" class="btn btn-primary mt-3">Submit Form</button>
					</form>

					{#if Object.keys(jsonFormData).length > 0}
						<div class="form-result mt-3">
							<strong>Form Data Preview:</strong>
							<pre>{JSON.stringify(jsonFormData, null, 2)}</pre>
						</div>
					{/if}
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Select items to see how the hidden input updates.</p>
					<p>Click "Submit Form" to see standard form submission.</p>
					<p class="mt-3"><strong>Server-side parsing (Node.js):</strong></p>
					<pre><code>{`app.post('/submit', (req, res) => {
  const langs = JSON.parse(req.body.languages);
  // langs = ['js', 'ts', 'py']
});`}</code></pre>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>JSON Format</h5>
					<p><code>value-format="json"</code></p>
					<p>Creates a single hidden input:</p>
					<pre><code>{`<input type="hidden"
       name="languages"
       value='["js","ts","py"]'>`}</code></pre>
					<p>Best for modern backends that expect JSON.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="FI02 CSV Format"
			subtitleText="Hidden input with comma-separated values"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Form Data"
			descriptionColumnTitle="How It Works">

			{#snippet demoContent()}
				<div class="form-demo">
					<form id="csv-form" onsubmit={(e) => handleSubmit(e, 'csv')}>
						<web-multiselect
							bind:this={csvFormatSelect}
							name="technologies"
							value-format="csv"
							value-member="value"
							display-value-member="label"
							icon-member="icon"
							search-placeholder="Select technologies..."
						></web-multiselect>
						<button type="submit" class="btn btn-primary mt-3">Submit Form</button>
					</form>

					{#if Object.keys(csvFormData).length > 0}
						<div class="form-result mt-3">
							<strong>Form Data Preview:</strong>
							<pre>{JSON.stringify(csvFormData, null, 2)}</pre>
						</div>
					{/if}
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>CSV format creates a simple comma-separated string.</p>
					<p class="mt-3"><strong>Server-side parsing (PHP):</strong></p>
					<pre><code>{`<?php
$techs = $_POST['technologies'];
$array = explode(',', $techs);
// $array = ['js', 'ts', 'py']
?>`}</code></pre>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>CSV Format</h5>
					<p><code>value-format="csv"</code></p>
					<p>Creates a single hidden input:</p>
					<pre><code>{`<input type="hidden"
       name="technologies"
       value="js,ts,py">`}</code></pre>
					<p>Simple format for basic backends.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="FI03 Array Format"
			subtitleText="Multiple hidden inputs for standard array parsing"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Form Data"
			descriptionColumnTitle="How It Works">

			{#snippet demoContent()}
				<div class="form-demo">
					<form id="array-form" onsubmit={(e) => handleSubmit(e, 'array')}>
						<web-multiselect
							bind:this={arrayFormatSelect}
							name="skills"
							value-format="array"
							value-member="value"
							display-value-member="label"
							icon-member="icon"
							search-placeholder="Select skills..."
						></web-multiselect>
						<button type="submit" class="btn btn-primary mt-3">Submit Form</button>
					</form>

					{#if Object.keys(arrayFormData).length > 0}
						<div class="form-result mt-3">
							<strong>Form Data Preview:</strong>
							<pre>{JSON.stringify(arrayFormData, null, 2)}</pre>
						</div>
					{/if}
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Array format creates multiple inputs - one per selected item.</p>
					<p class="mt-3"><strong>Server-side parsing (Express):</strong></p>
					<pre><code>{`app.post('/submit', (req, res) => {
  const skills = req.body['skills[]'];
  // skills = ['js', 'ts', 'py']
});`}</code></pre>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Array Format</h5>
					<p><code>value-format="array"</code></p>
					<p>Creates multiple hidden inputs:</p>
					<pre><code>{`<input type="hidden" name="skills[]" value="js">
<input type="hidden" name="skills[]" value="ts">
<input type="hidden" name="skills[]" value="py">`}</code></pre>
					<p>Standard HTML form array convention.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">📌 How It Works</h3>
			<ul class="mb-0">
				<li><strong>name attribute (Required):</strong> Set <code>name="fieldname"</code> to specify the form field name. This is what your server will use to access the value (e.g., <code>req.body.fieldname</code>).</li>
				<li><strong>value-format attribute (Optional):</strong> Choose <code>json</code> (default), <code>csv</code>, or <code>array</code> to control how values are serialized in the hidden input(s).</li>
				<li><strong>Automatic Updates:</strong> Hidden inputs are created and updated automatically when selection changes - no JavaScript needed!</li>
				<li><strong>Light DOM:</strong> Hidden inputs are appended to the component's light DOM (outside Shadow DOM) so FormData can access them.</li>
				<li><strong>Standard Forms:</strong> Works with traditional HTML form submission (POST/GET), AJAX form submission, or FormData API.</li>
			</ul>
		</div>

		<div class="mt-3 p-4 bg-info bg-opacity-10 border border-info rounded">
			<h3 class="h5 mb-3">🔗 Related</h3>
			<p class="mb-2">For SPA usage and value serialization without forms, see <a href="/features/value-format">Value Formatting</a>.</p>
			<p class="mb-0">The same formats (json/csv/array/custom) can be used outside of form contexts.</p>
		</div>
	</div>
</DocLayout>
