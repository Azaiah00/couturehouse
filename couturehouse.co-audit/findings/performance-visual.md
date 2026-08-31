# Performance and Visual Findings

## Lab results

- Mobile performance: 95-98 across five routes.
- Desktop performance: 99 across five routes.
- Accessibility: 95 across five routes.
- Best practices: 96 across five routes.

## Strengths

- Mobile layout is visually strong at 390 by 844.
- No observed horizontal overflow.
- Video and audio loading is mostly deferred appropriately.
- Video preview images now match their source footage.

## Risks

- Desktop hero video is 10.4 MB even though only seconds 3-15 are used.
- All 75 rendered images lack intrinsic dimensions and responsive sources.
- Several PNG assets exceed 1 MB.
- Fixed soundtrack UI crowds the bottom of mobile viewports.
- Lab scores do not replace real-user CrUX/Core Web Vitals.
