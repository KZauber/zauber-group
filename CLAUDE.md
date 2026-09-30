# Zauber Group — build protocol

Rules for any site, page, or visual deliverable built in this repo or for a client.
These exist because they were broken. Follow them without being asked.

## Before showing the user anything

1. **Render it and look at it.** Screenshot the page and read the screenshot. Never
   present, publish, or describe a build you have not seen rendered.
2. **Check it at phone width.** If the tooling cannot render narrow, measure instead
   (`document.documentElement.scrollWidth` vs `clientWidth`) and say plainly that a
   real device check is still outstanding.
3. **Audit against the brief.** Grep for every required element and every banned one.
   Report the result, including what failed. Do not claim compliance from memory.

## Design floor

Work below this line does not get shown.

- **Three type roles minimum.** A display face with character, a body face, and a
  data/label face. One family at different weights is not a type system.
- **Do not put the same card on every block.** Border, fill, shadow and radius each
  say "separate object". Spend them by role. Rules, bands and whitespace separate
  things without turning the page into a grid of identical boxes.
- **Motion is part of the build.** Restrained, purposeful, and starting from a
  visible resting state so the page reads with JavaScript disabled.
- **Alternate bands.** A single background colour top to bottom reads as a template.
- **Numbers get monospace and tabular figures.** Always.
- **Both themes, every time.** Tokens on bare `:root`, redefined under
  `prefers-color-scheme` and `[data-theme]`. No colour defined only inside a
  media query.

## Client content

- **Never reuse another company's copy.** Not paraphrased, not restructured. Check
  the client's supplied text against competitor sites before building on it.
- **Never assert a third party's prices.** Cite a public published source, or let
  the visitor enter their own figures. Nothing else.
- **Mark every placeholder visibly** so the client can see what they still owe.
- **No claim the business cannot evidence today.** No borrowed history, no implied
  fleet, no locations that do not exist.
- **Licence every image, or do not use it.** Imagery that implies assets the client
  does not own is a credibility problem before it is a legal one.

## Delivery

- Ship the file, not only a link. Artifacts are private by default.
- Hand over a deployable folder: `index.html`, assets, `robots.txt`, `_redirects`.
- Demos get `noindex`. A sample for a business that is not trading must never rank.
- State what is unverified. Never imply a check that was not run.

## Scope and money

- Phase the work so a client's missing information never strands an unfinished build.
- Name the exclusions in writing, and add one change-control line: anything outside
  the listed scope is quoted separately before it is built.
- Take a deposit before work starts, friends included.
