<script>
import { DocLayout, CodeBlock } from '@keenmate/svelte-docs'
</script>

<DocLayout
	titleText="Debug Logging"
	descriptionText="Category-based debug logging system for troubleshooting multiselect component issues">

	<div class="py-1">
		<!-- Introduction -->
		<section class="mb-5">
			<h2 class="mb-4">Overview</h2>
			<p class="lead">
				The component includes a comprehensive debug logging system based on the <code>loglevel</code> library.
				It provides category-based logging with color-coded output and timestamps to help you troubleshoot
				component issues during development.
			</p>
			<div class="alert alert-info">
				The logging system has zero overhead when disabled - logs are complete no-ops at the silent level.
				Enable it only during development for debugging purposes.
			</div>
		</section>

		<!-- Quick Start -->
		<section class="mb-5">
			<h2 class="mb-4">Quick Start</h2>
			<p>Enable all debug logging in your <code>main.js</code> before mounting your app:</p>

			<CodeBlock
				codeContent={`// main.js
import { enableLogging } from '@keenmate/web-multiselect'

if (import.meta.env.DEV) {
  enableLogging()  // Sets all categories to debug level
}

// Mount your app...`}
				languageType="javascript"
				titleText="Enable debug logging"
			/>

			<p class="mt-3">
				This will show all component debug messages in your browser console with color-coded output:
			</p>

			<div class="alert alert-secondary">
				<code style="color: blue;">[14:23:45.123] [DEBUG] [MULTISELECT:INIT] Initialized [instance-abc123]</code><br/>
				<code style="color: green;">[14:23:45.234] [INFO] [MULTISELECT:UI] Dropdown opened</code><br/>
				<code style="color: darkorange;">[14:23:45.345] [WARN] [MULTISELECT:DATA] Failed to load options</code><br/>
				<code style="color: red;">[14:23:45.456] [ERROR] [MULTISELECT:INTERACTION] Invalid option value</code>
			</div>
		</section>

		<!-- Logging Categories -->
		<section class="mb-5">
			<h2 class="mb-4">Logging Categories</h2>
			<p>The component uses 4 hierarchical logging categories:</p>

			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Category</th>
						<th>Description</th>
						<th>Use Case</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>MULTISELECT:INIT</code></td>
						<td>Component initialization and configuration</td>
						<td>Debug initialization issues, RTL detection, component lifecycle</td>
					</tr>
					<tr>
						<td><code>MULTISELECT:DATA</code></td>
						<td>Data loading, async operations, option parsing</td>
						<td>Debug async data loading, option parsing errors, dynamic options</td>
					</tr>
					<tr>
						<td><code>MULTISELECT:UI</code></td>
						<td>UI updates, rendering, dropdown/popover/tooltip operations</td>
						<td>Debug dropdown positioning, badges rendering, tooltip display</td>
					</tr>
					<tr>
						<td><code>MULTISELECT:INTERACTION</code></td>
						<td>User interactions, clicks, selections, keyboard events</td>
						<td>Debug click handlers, option selection, keyboard navigation</td>
					</tr>
				</tbody>
			</table>
		</section>

		<!-- Configuration API -->
		<section class="mb-5">
			<h2 class="mb-4">Configuration API</h2>

			<h4>Enable All Logging</h4>
			<CodeBlock
				codeContent={`import { enableLogging } from '@keenmate/web-multiselect'

enableLogging()  // Sets all categories to 'debug' level`}
				languageType="javascript"
				titleText="enableLogging()"
			/>

			<h4 class="mt-4">Disable All Logging</h4>
			<CodeBlock
				codeContent={`import { disableLogging } from '@keenmate/web-multiselect'

disableLogging()  // Sets all categories to 'silent' level`}
				languageType="javascript"
				titleText="disableLogging()"
			/>

			<h4 class="mt-4">Set Global Log Level</h4>
			<CodeBlock
				codeContent={`import { setLogLevel } from '@keenmate/web-multiselect'

setLogLevel('warn')  // Only show warnings and errors
// Levels: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent'`}
				languageType="javascript"
				titleText="setLogLevel(level)"
			/>

			<h4 class="mt-4">Set Per-Category Log Level</h4>
			<CodeBlock
				codeContent={`import { disableLogging, setCategoryLevel } from '@keenmate/web-multiselect'

disableLogging()  // Disable all

// Enable only specific categories
setCategoryLevel('MULTISELECT:UI', 'debug')
setCategoryLevel('MULTISELECT:DATA', 'info')
setCategoryLevel('MULTISELECT:INTERACTION', 'warn')`}
				languageType="javascript"
				titleText="setCategoryLevel(category, level)"
			/>
		</section>

		<!-- Browser Console API -->
		<section class="mb-5">
			<h2 class="mb-4">Browser Console API</h2>
			<p class="lead">
				The component exposes a global API at <code>window.components['web-multiselect']</code> for runtime
				debugging and introspection directly from your browser's DevTools console.
			</p>

			<div class="alert alert-info">
				<strong>No code changes required!</strong> Toggle logging, check versions, and debug issues
				in production builds without modifying or rebuilding your application.
			</div>

			<h4 class="mt-4">Check Library Version</h4>
			<p>Get the current component version at runtime:</p>
			<CodeBlock
				codeContent={`// Browser console
window.components['web-multiselect'].version()
// "1.0.0"`}
				languageType="javascript"
				titleText="Check version in production"
			/>

			<h4 class="mt-4">View Package Metadata</h4>
			<CodeBlock
				codeContent={`// Browser console
window.components['web-multiselect'].config

// Returns:
// {
//   name: "@keenmate/web-multiselect",
//   version: "1.0.0",
//   author: "Keenmate",
//   license: "MIT",
//   repository: "https://github.com/keenmate/web-multiselect",
//   homepage: "https://github.com/keenmate/web-multiselect#readme"
// }`}
				languageType="javascript"
				titleText="Package metadata"
			/>

			<h4 class="mt-4">Enable Logging from Console</h4>
			<p>Toggle debug logging on and off without code changes:</p>
			<CodeBlock
				codeContent={`// Enable all debug logging
window.components['web-multiselect'].logging.enableLogging()

// Disable all logging
window.components['web-multiselect'].logging.disableLogging()

// Set global log level
window.components['web-multiselect'].logging.setLogLevel('debug')
window.components['web-multiselect'].logging.setLogLevel('warn')
window.components['web-multiselect'].logging.setLogLevel('silent')`}
				languageType="javascript"
				titleText="Toggle logging from console"
			/>

			<h4 class="mt-4">Control Specific Categories</h4>
			<CodeBlock
				codeContent={`// Enable UI logging only
window.components['web-multiselect'].logging.setCategoryLevel('MULTISELECT:UI', 'debug')

// Enable data with warnings only
window.components['web-multiselect'].logging.setCategoryLevel('MULTISELECT:DATA', 'warn')

// Disable interaction logging
window.components['web-multiselect'].logging.setCategoryLevel('MULTISELECT:INTERACTION', 'silent')`}
				languageType="javascript"
				titleText="Per-category control from console"
			/>

			<h4 class="mt-4">List Available Categories</h4>
			<CodeBlock
				codeContent={`// Get all logging categories
window.components['web-multiselect'].logging.getCategories()

// Returns:
// [
//   "MULTISELECT:INIT",
//   "MULTISELECT:DATA",
//   "MULTISELECT:UI",
//   "MULTISELECT:INTERACTION"
// ]`}
				languageType="javascript"
				titleText="List all categories"
			/>

			<h4 class="mt-4">Get All Component Instances</h4>
			<CodeBlock
				codeContent={`// Get all multiselect instances on the page
window.components['web-multiselect'].getInstances()

// Returns array of all <web-multiselect> elements
// You can then inspect or manipulate them:
const instances = window.components['web-multiselect'].getInstances()
instances[0].getValue()  // Get first instance's value
instances[0].setValue(['option1', 'option2'])  // Set value`}
				languageType="javascript"
				titleText="Get component instances"
			/>

			<h4 class="mt-4">Practical Use Cases</h4>

			<div class="alert alert-secondary">
				<strong>Debug Production Issues:</strong><br/>
				User reports dropdown not appearing? Open console and enable UI logging:
				<code class="d-block mt-2">window.components['web-multiselect'].logging.setCategoryLevel('MULTISELECT:UI', 'debug')</code>
			</div>

			<div class="alert alert-secondary">
				<strong>Test Async Data Loading:</strong><br/>
				Testing async data loading? Enable data logging on the fly:
				<code class="d-block mt-2">window.components['web-multiselect'].logging.setCategoryLevel('MULTISELECT:DATA', 'debug')</code>
			</div>

			<div class="alert alert-secondary">
				<strong>Version Compatibility:</strong><br/>
				Check if the deployed version matches your expectations:
				<code class="d-block mt-2">window.components['web-multiselect'].version()</code>
			</div>

			<div class="alert alert-secondary">
				<strong>Inspect Live Instances:</strong><br/>
				Find all multiselect instances on the page and check their values:
				<code class="d-block mt-2">window.components['web-multiselect'].getInstances().map(el => el.getValue())</code>
			</div>

			<h4 class="mt-4">Benefits</h4>
			<ul>
				<li><strong>No rebuild required</strong> - Toggle logging in production builds</li>
				<li><strong>Runtime version checking</strong> - Verify deployed library version</li>
				<li><strong>Quick troubleshooting</strong> - Enable logging during user sessions</li>
				<li><strong>Instance inspection</strong> - Find and inspect all component instances</li>
				<li><strong>TypeScript support</strong> - Full autocompletion in browser console</li>
				<li><strong>SSR-safe</strong> - Only available in browser environment</li>
				<li><strong>Namespace-safe</strong> - Uses <code>window.components</code> shared namespace</li>
			</ul>

			<div class="alert alert-warning">
				<strong>Note:</strong> The global API is available only in browser environments.
				It will be <code>undefined</code> during server-side rendering (SSR).
			</div>
		</section>

		<!-- Common Debugging Scenarios -->
		<section class="mb-5">
			<h2 class="mb-4">Common Debugging Scenarios</h2>

			<h4>Debug Initialization Issues</h4>
			<CodeBlock
				codeContent={`import { setCategoryLevel } from '@keenmate/web-multiselect'

// Enable initialization logging
setCategoryLevel('MULTISELECT:INIT', 'debug')

// You'll see logs like:
// [DEBUG] [MULTISELECT:INIT] Initialized [instance-abc123] with options: {...}
// [DEBUG] [MULTISELECT:INIT] RTL mode detected: true
// [DEBUG] [MULTISELECT:INIT] Component mounted and ready`}
				languageType="javascript"
				titleText="Initialization debugging"
			/>

			<h4 class="mt-4">Debug Dropdown and UI Issues</h4>
			<CodeBlock
				codeContent={`import { setCategoryLevel } from '@keenmate/web-multiselect'

// Enable UI logging
setCategoryLevel('MULTISELECT:UI', 'debug')

// Track dropdown and UI operations
// [DEBUG] [MULTISELECT:UI] Dropdown opened
// [DEBUG] [MULTISELECT:UI] Rendering badges: 3 selected
// [DEBUG] [MULTISELECT:UI] Popover shown with overflow items`}
				languageType="javascript"
				titleText="UI debugging"
			/>

			<h4 class="mt-4">Debug Async Data Loading</h4>
			<CodeBlock
				codeContent={`import { setCategoryLevel } from '@keenmate/web-multiselect'

// Enable data logging
setCategoryLevel('MULTISELECT:DATA', 'debug')

// See data loading operations
// [DEBUG] [MULTISELECT:DATA] Loading options via searchCallback
// [INFO] [MULTISELECT:DATA] Loaded 42 options
// [WARN] [MULTISELECT:DATA] Failed to parse option data`}
				languageType="javascript"
				titleText="Data loading debugging"
			/>

			<h4 class="mt-4">Debug User Interactions</h4>
			<CodeBlock
				codeContent={`import { setCategoryLevel } from '@keenmate/web-multiselect'

// Enable interaction logging
setCategoryLevel('MULTISELECT:INTERACTION', 'debug')

// Track user interactions
// [DEBUG] [MULTISELECT:INTERACTION] Option clicked: { value: 'option1' }
// [DEBUG] [MULTISELECT:INTERACTION] Badge removed: option2
// [DEBUG] [MULTISELECT:INTERACTION] Keyboard navigation: ArrowDown`}
				languageType="javascript"
				titleText="Interaction debugging"
			/>
		</section>

		<!-- Output Format -->
		<section class="mb-5">
			<h2 class="mb-4">Output Format</h2>
			<p>All log messages follow a consistent format:</p>

			<div class="alert alert-secondary">
				<code>[HH:MM:SS.mmm] [LEVEL] [CATEGORY] message</code>
			</div>

			<ul>
				<li><strong>Timestamp</strong>: High-resolution time in <code>[HH:MM:SS.mmm]</code> format</li>
				<li><strong>Level</strong>: TRACE, DEBUG, INFO, WARN, ERROR</li>
				<li><strong>Category</strong>: Hierarchical category name (e.g., MULTISELECT:UI)</li>
				<li><strong>Message</strong>: Descriptive log message with relevant data</li>
			</ul>

			<h4 class="mt-4">Color Coding</h4>
			<table class="table table-sm">
				<thead>
					<tr>
						<th>Level</th>
						<th>Color</th>
						<th>Use Case</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>DEBUG</td>
						<td><span style="color: blue;">■</span> Blue</td>
						<td>Detailed diagnostic information</td>
					</tr>
					<tr>
						<td>INFO</td>
						<td><span style="color: green;">■</span> Green</td>
						<td>General informational messages</td>
					</tr>
					<tr>
						<td>WARN</td>
						<td><span style="color: darkorange;">■</span> Orange</td>
						<td>Warning messages (potential issues)</td>
					</tr>
					<tr>
						<td>ERROR</td>
						<td><span style="color: red;">■</span> Red</td>
						<td>Error messages (actual problems)</td>
					</tr>
				</tbody>
			</table>
		</section>

		<!-- Best Practices -->
		<section class="mb-5">
			<h2 class="mb-4">Best Practices</h2>

			<h4>1. Enable Only in Development</h4>
			<CodeBlock
				codeContent={`// main.js
import { enableLogging } from '@keenmate/web-multiselect'

if (import.meta.env.DEV) {
  enableLogging()
}

// Or with Vite:
if (import.meta.env.MODE === 'development') {
  enableLogging()
}`}
				languageType="javascript"
			/>

			<h4 class="mt-4">2. Use Category-Specific Logging</h4>
			<p>Instead of enabling all logging, enable only the categories you need:</p>
			<CodeBlock
				codeContent={`import { disableLogging, setCategoryLevel } from '@keenmate/web-multiselect'

// Start with all logging disabled
disableLogging()

// Enable only what you need to debug
if (import.meta.env.DEV) {
  setCategoryLevel('MULTISELECT:UI', 'debug')
  setCategoryLevel('MULTISELECT:DATA', 'info')
}`}
				languageType="javascript"
			/>

			<h4 class="mt-4">3. Different Levels for Different Categories</h4>
			<CodeBlock
				codeContent={`// Show everything for UI debugging
setCategoryLevel('MULTISELECT:UI', 'debug')

// Show only important data events
setCategoryLevel('MULTISELECT:DATA', 'info')

// Show only interaction warnings/errors
setCategoryLevel('MULTISELECT:INTERACTION', 'warn')`}
				languageType="javascript"
			/>

			<h4 class="mt-4">4. Use Direct Logger Imports for Custom Logging</h4>
			<p>
				If you need to add custom log messages in your code, you can import the logger objects directly:
			</p>
			<CodeBlock
				codeContent={`import { dataLogger, uiLogger } from '@keenmate/web-multiselect'

// Add custom debug messages
dataLogger.debug('Custom data operation:', myData)
uiLogger.info('Custom UI update:', element)`}
				languageType="javascript"
			/>
		</section>

		<!-- Performance Notes -->
		<section class="mb-5">
			<h2 class="mb-4">Performance</h2>
			<div class="alert alert-success">
				<strong>Zero overhead when disabled:</strong> When logging is disabled (default state or
				<code>disableLogging()</code>), all log calls are complete no-ops with negligible performance impact.
			</div>

			<p>The logger uses the lightweight <code>loglevel</code> library (~1KB minified) with the
			<code>loglevel-plugin-prefix</code> extension for timestamps and formatting.</p>

			<ul>
				<li>Library size: ~1KB (loglevel) + ~500B (prefix plugin)</li>
				<li>Runtime overhead when disabled: &lt;1μs per log call</li>
				<li>No bundle size impact - tree-shaken in production builds</li>
			</ul>
		</section>

		<!-- Implementation Details -->
		<section class="mb-5">
			<h2 class="mb-4">Implementation Details</h2>

			<h4>Library Choice</h4>
			<p>
				The component uses <code>loglevel</code> as its logging foundation because it:
			</p>
			<ul>
				<li>Is tiny (~1KB) and well-tested</li>
				<li>Has zero dependencies</li>
				<li>Supports log levels with proper filtering</li>
				<li>Works identically in all browsers</li>
				<li>Has excellent TypeScript support</li>
			</ul>

			<h4>Vendored Dependencies</h4>
			<p>
				The <code>loglevel</code> and <code>loglevel-plugin-prefix</code> libraries are vendored
				in <code>src/vendor/loglevel/</code> to ensure consistent behavior across all environments.
			</p>

			<h4>Logger Structure</h4>
			<p>All logger instances are exported from <code>src/logger.ts</code>:</p>
			<CodeBlock
				codeContent={`// logger.ts exports
export const initLogger = log.getLogger('MULTISELECT:INIT')
export const dataLogger = log.getLogger('MULTISELECT:DATA')
export const uiLogger = log.getLogger('MULTISELECT:UI')
export const interactionLogger = log.getLogger('MULTISELECT:INTERACTION')

// Public API
export { enableLogging, disableLogging, setLogLevel, setCategoryLevel }
export const LOGGING_CATEGORIES = [
  'MULTISELECT:INIT',
  'MULTISELECT:DATA',
  'MULTISELECT:UI',
  'MULTISELECT:INTERACTION'
]`}
				languageType="typescript"
			/>
		</section>

		<!-- Troubleshooting -->
		<section class="mb-5">
			<h2 class="mb-4">Troubleshooting</h2>

			<h4>Logs Not Appearing</h4>
			<ul>
				<li>Verify logging is enabled: <code>enableLogging()</code> or <code>setCategoryLevel(...)</code></li>
				<li>Check browser console filters - ensure "Debug" level is visible</li>
				<li>Verify import path: <code>@keenmate/web-multiselect</code></li>
				<li>Check that you're calling logging config before component initialization</li>
			</ul>

			<h4>Too Many Logs</h4>
			<ul>
				<li>Use <code>setLogLevel('info')</code> to reduce verbosity</li>
				<li>Enable only specific categories with <code>setCategoryLevel()</code></li>
				<li>Disable categories you don't need</li>
			</ul>

			<h4>Import Examples</h4>
			<CodeBlock
				codeContent={`// Import logging utilities
import {
  enableLogging,
  disableLogging,
  setLogLevel,
  setCategoryLevel
} from '@keenmate/web-multiselect'

// Import logger objects for custom logging
import {
  initLogger,
  dataLogger,
  uiLogger,
  interactionLogger
} from '@keenmate/web-multiselect'`}
				languageType="javascript"
			/>
		</section>

		<!-- Related Documentation -->
		<section class="mb-5">
			<h2 class="mb-4">Related Documentation</h2>
			<ul>
				<li><a href="/api/component">Component API</a> - Complete component API reference</li>
				<li><a href="/api/events">Events</a> - Component event system</li>
				<li><a href="/features/advanced-features">Advanced Features</a> - Advanced usage examples</li>
			</ul>
		</section>
	</div>
</DocLayout>
