# Project rules

## Accessibility: WCAG 2.2 AA is a hard requirement
This site is destined for the Byram Hills district website, so every change must
keep it at WCAG 2.2 Level AA. Check these on every edit:

- Text contrast 4.5:1 (3:1 for 18.66px+ bold / 24px+). UI borders and icons 3:1.
- Every interactive target at least 24x24 CSS px (44px preferred for nav/tabs).
- Visible focus indicator on everything focusable — never `outline: none` without
  a replacement.
- Icon-only controls get an `aria-label` that names the thing acted on
  ("Save to my list: Duke University"), not just "Save".
- Toggles carry `aria-pressed`; disclosures carry `aria-expanded` + `aria-controls`;
  the current tab carries `aria-current="page"`.
- Result counts and other async updates live in an `aria-live="polite"` region.
- Language toggle must update `document.documentElement.lang`.
- Keep the skip link first in the DOM and the `#mainContent` target on each view.
- Respect `prefers-reduced-motion`.
- Don't convey meaning by color alone; don't rely on hover-only affordances.

Before delivering, do a keyboard-only pass (Tab through every control) and confirm
the layout reflows at 320px wide and survives 200% zoom.
