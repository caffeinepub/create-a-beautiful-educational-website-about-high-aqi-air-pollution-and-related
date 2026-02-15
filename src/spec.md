# Specification

## Summary
**Goal:** Remove the Caffeine AI attribution/watermark from the website footer while keeping the rest of the footer unchanged.

**Planned changes:**
- Delete the footer line that says “Built with … using caffeine.ai” (including the caffeine.ai outbound link and any UTM parameters), while preserving remaining footer content and layout.
- Clean up now-unused frontend code related to that attribution (e.g., Heart icon import and any variables used only for the caffeine.ai link) to avoid unused import/variable build issues.

**User-visible outcome:** The footer no longer shows any “Built with/using/caffeine.ai” attribution (or related heart icon) and contains no outbound link to caffeine.ai, while the footer layout remains visually consistent.
