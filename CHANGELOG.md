# Changelog

All notable changes to web-multiselect-showcase will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- **Updated @keenmate/web-multiselect** - Linked to local development version (`file:../web-multiselect`)
  - Testing new default center alignment for options

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
