<script lang="ts">
	import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let githubSelect: any;
	let productSelect: any;
	let countrySelect: any;

	onMount(() => {

		// GitHub Users Search
		if (githubSelect) {
			const mockUsers = [
				{ login: 'octocat', id: 583231 },
				{ login: 'torvalds', id: 1024025 },
				{ login: 'gaearon', id: 810438 }
			];

			githubSelect.searchCallback = async (searchTerm: string) => {
				try {
					const response = await fetch(
						`https://api.github.com/search/users?q=${searchTerm}&per_page=10`
					);

					if (!response.ok) {
						return mockUsers.map((user) => ({
							value: user.login,
							label: user.login,
							subtitle: `ID: ${user.id}`,
							icon: '👤'
						}));
					}

					const data = await response.json();
					if (!data.items) return mockUsers.map((user) => ({
						value: user.login,
						label: user.login,
						subtitle: `ID: ${user.id}`,
						icon: '👤'
					}));

					return data.items.map((user: any) => ({
						value: user.login,
						label: user.login,
						subtitle: `ID: ${user.id}`,
						icon: '👤'
					}));
				} catch (error) {
					return mockUsers.map((user) => ({
						value: user.login,
						label: user.login,
						subtitle: `ID: ${user.id}`,
						icon: '👤'
					}));
				}
			};
		}

		// Product Search
		if (productSelect) {
			const products = [
				{ id: 1, name: 'Laptop Pro', price: 1299, category: 'Electronics' },
				{ id: 2, name: 'Wireless Mouse', price: 29, category: 'Electronics' },
				{ id: 3, name: 'Office Chair', price: 299, category: 'Office' },
				{ id: 4, name: 'Desk Lamp', price: 45, category: 'Office' }
			];

			productSelect.searchCallback = async (searchTerm: string) => {
				await new Promise((resolve) => setTimeout(resolve, 300));

				return products
					.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
					.map((p) => ({
						value: p.id,
						label: p.name,
						subtitle: `$${p.price} - ${p.category}`,
						icon: p.category === 'Electronics' ? '💻' : '🏢'
					}));
			};
		}

		// Country Search
		if (countrySelect) {
			const countries = [
				{ code: 'us', name: 'United States', flag: '🇺🇸' },
				{ code: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
				{ code: 'de', name: 'Germany', flag: '🇩🇪' },
				{ code: 'fr', name: 'France', flag: '🇫🇷' },
				{ code: 'jp', name: 'Japan', flag: '🇯🇵' }
			];

			countrySelect.searchCallback = async (searchTerm: string) => {
				await new Promise((resolve) => setTimeout(resolve, 200));

				return countries
					.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
					.map((c) => ({
						value: c.code,
						label: c.name,
						icon: c.flag
					}));
			};
		}
	});
</script>

<DocLayout
	titleText="Async Search"
	descriptionText="Load data dynamically with async search callbacks">

	<div class="py-4">
		<ShowcaseSection
			titleText="GitHub User Search"
			subtitleText="Real API integration with error handling and fallback"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Implementation">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={githubSelect}
						value-member="value"
						display-value-member="label"
						subtitle-member="subtitle"
						icon-member="icon"
						search-placeholder="Search GitHub users..."
						loading-message="Searching GitHub..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Try searching for: "octocat", "torvalds", "gaearon"
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Type a GitHub username to search.</p>
					<p>The component automatically debounces input and shows loading state.</p>
					<p>Falls back to mock data if API fails.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>searchCallback</h5>
					<p>Set async function:</p>
					<code>select.searchCallback = async (term) => &#123; ... &#125;</code>
					<p>Return array of objects with value, label, subtitle, icon properties.</p>
					<p>Always implement error handling!</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Product Search with Delay"
			subtitleText="Simulated API call with 300ms delay"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Implementation">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={productSelect}
						value-member="value"
						display-value-member="label"
						subtitle-member="subtitle"
						icon-member="icon"
						search-placeholder="Search products..."
						loading-message="Loading products..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Try searching for: "laptop", "mouse", "chair"
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Simulated delay shows loading behavior.</p>
					<p>Results filtered client-side after fetch.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Delayed Search</h5>
					<code>await delay(300);</code>
					<p>Simulates real API latency.</p>
					<p>Component shows loading message during wait.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Country Lookup"
			subtitleText="Search countries with flag emojis"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Implementation">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={countrySelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Search countries..."
						loading-message="Searching..."
					></web-multiselect>
					<p class="text-muted small mt-2">
						Try searching for: "united", "germany", "japan"
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Fast local search with flag emojis.</p>
					<p>200ms delay simulates network latency.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Client Filtering</h5>
					<p>Filter local array asynchronously.</p>
					<code>countries.filter(c => c.name.includes(term))</code>
					<p>Great for static lists with async UX.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">💡 Best Practices</h3>
			<ul class="mb-0">
				<li><strong>Debouncing:</strong> The component automatically debounces search input to reduce API calls</li>
				<li><strong>Loading State:</strong> Use loading-message to show feedback during search</li>
				<li><strong>Error Handling:</strong> Always implement proper error handling with fallback data</li>
				<li><strong>Minimum Length:</strong> Use min-search-length to prevent searching with very short terms</li>
				<li><strong>Rate Limits:</strong> Be aware of API rate limits and implement appropriate fallbacks</li>
			</ul>
		</div>
	</div>
</DocLayout>
