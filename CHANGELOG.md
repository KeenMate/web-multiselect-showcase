# Changelog

All notable changes to web-multiselect-showcase will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- **Updated @keenmate/web-multiselect** to `^1.6.1`
  - v1.6.1: Complete theming variable cascade fix (`--base-*` variables now properly cascade)
  - v1.6.1: Accent color theming fixes (checkboxes, badges, counters, focus rings use `--ms-accent-color`)
  - v1.6.1: Badge, checkbox, scrollbar theming improvements
  - v1.6.1: New accent color light variants (`--ms-accent-color-light`, `--ms-accent-color-light-hover`)
  - v1.6.0: SCSS to CSS migration, new features (shouldKeepSearchOnClose, border radius theme integration, input size variants)
  - **BREAKING**: Removed `-bg` alias variables - use `-background` instead:
    - `--ms-input-bg` → `--ms-input-background`
    - `--ms-dropdown-bg` → `--ms-dropdown-background`
    - `--ms-actions-bg` → `--ms-actions-background`
    - `--ms-hint-bg` → `--ms-hint-background`
    - `--ms-tooltip-bg` → `--ms-tooltip-background`
    - `--ms-selected-popover-bg` → `--ms-selected-popover-background`

- **Updated styling documentation** to use new `-background` variable names

- **Removed all SCSS documentation** - Main package migrated from SCSS to pure CSS in v1.6.0
  - `api/styling` page: Replaced "SCSS Approach (Recommended)" with CSS-only examples
  - `api/styling` page: Replaced "SCSS Color Palette" section with "Core Color Variables" (CSS custom properties)
  - `api/styling` page: Replaced "SCSS Integration" section with "Scaling System" (`--ms-rem` documentation)
  - `api/styling` page: Updated best practices - removed SCSS source tip, added scaling tip
  - Homepage: Changed "125+ CSS/SCSS variables" to "125+ CSS variables" (2 places)
  - Getting Started: Changed "125+ CSS/SCSS variables" to "125+ CSS variables"
  - Custom Styling: Replaced SCSS tip with `--ms-rem` scaling tip

### Added
- **Scaling System documentation** - New section in Styling API explaining `--ms-rem` for proportional scaling
- **Input Size Variants documentation** - Added xs, sm, md, lg, xl size variant information
- **Border Radius Theme Integration** - Documented `--ms-border-radius-sm/md/lg` variables

### Added
- **Example Index System** - Added prefix codes to all 51 examples across 11 pages for quick reference
  - Created `EXAMPLES.md` with complete lookup table and prefix reference
  - Prefixes: BU (Basic Usage), GR (Groups), FD (Flexible Data), VF (Value Format), FI (Form Integration), AS (Async Search), VS (Virtual Scrolling), CS (Custom Styling), DM (Display Modes), RTL (RTL Support), AF (Advanced Features)
  - Each `ShowcaseSection` title now includes its example code (e.g., "BU01 Basic Multiselect", "DM05 Compact Mode")

### Changed
- **Updated @keenmate/svelte-docs** from `1.0.0-rc08` to `1.0.0-rc09`
  - Migrated Plausible analytics from `app.html` to `analyticsScripts` config option

### Added
- **Groups Example Page** - New dedicated `/examples/groups` page documenting group customization features
  - Custom Group Labels section demonstrating `renderGroupLabelContentCallback` with string returns (emoji + uppercase)
  - Group Styling section showcasing all CSS variables for group appearance customization
  - Advanced Customization section combining callbacks + styling with HTMLElement returns (colored dot indicators)
  - Complete CSS variables reference for groups (`--ms-group-*` properties)
  - Code examples for both string and HTMLElement callback return patterns
