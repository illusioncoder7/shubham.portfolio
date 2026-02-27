# Navigation icons

Icons used in the top nav bar of this portfolio site (Shubham Tiwari — Blockchain Engineer).

## Files (SVG, transparent)

| File | Section |
|------|--------|
| `nav-top.svg` | Home |
| `nav-experience.svg` | Experience |
| `nav-tech-stacks.svg` | My Skills |
| `nav-education.svg` | Education |
| `nav-contact.svg` | Contact |

All icons use the site accent color `#41ccc0` and are drawn as outlines with no fill background so they work on the dark nav card. Size is controlled in CSS (`.v4-nav-icon`; max 26×26px).

## Replacing icons

- Edit or replace the `.svg` files above; the app loads them by path in `App.jsx` (e.g. `/icons/nav-top.svg` for Home).
- For GitHub Pages the paths are prefixed with the site base (e.g. `/shubham.portfolio/icons/...`).
- Optional: add PNG versions with the same names if you want to switch the app to use `.png` instead of `.svg`.
