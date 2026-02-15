# Specification

## Summary
**Goal:** Extend the site with additional AQI/air-health educational sections and update navigation/footer so users can reach them, plus add a contact line at the very bottom of the footer.

**Planned changes:**
- Add a new final footer-bottom line after the existing copyright that reads exactly: "For more information contact 9315576318".
- Create at least two new full-width content section components under `frontend/src/components/sections/` with substantial English content relevant to AirHealth/AQI, and render them in `frontend/src/App.tsx` after the current last section (`RequestChangeSection`).
- Update header navigation (desktop and mobile) and footer “Quick Links” to include smooth-scroll links to each new section id.
- Extend the “Request a Change” form’s “Related Section” dropdown to include the newly added section names.

**User-visible outcome:** The page is longer with new informative sections users can navigate to from the header/footer, the change-request form can reference the new sections, and the footer ends with the provided contact sentence.
