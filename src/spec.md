# Specification

## Summary
**Goal:** Add a user-facing Light/Dark theme toggle, persist the user’s choice, and ensure the UI remains readable and consistent across both themes.

**Planned changes:**
- Add a Light/Dark theme toggle control in the site header for both desktop and mobile layouts, with accessible labels reflecting the action (switch to dark/light).
- Persist the selected theme in localStorage and apply it as early as possible to avoid a flash of incorrect theme on initial load; default to system preference when no prior selection exists.
- Audit and update key section/component styles to use theme tokens (background/foreground/muted/card/border) instead of hard-coded colors so layouts, cards, gradients, and embedded containers render correctly in both themes.

**User-visible outcome:** Users can switch between light and dark mode from the header, and their chosen theme remains in effect after refresh with consistent, readable styling across the app.
