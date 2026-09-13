# Zauber Group site

## Client assessments (`client/public/assessments/*.html`)

These reports go to real business owners who can check every claim. Rules for any session that writes or edits one:

1. **Search tests use queries a buyer would actually type.** Pattern: `<service> <city>` and `<modifier> <service> <city>`
   (`custom home builder Boerne`, `luxury home builder San Antonio`). Six words or fewer. Never combine several towns in
   one query. Never pad with "best", "recommendations", "who to hire", "top", or a year unless that exact phrase is what is
   being tested. A query that no human would type produces a result that no human will ever see.
2. **Every search claim is logged before it goes in a report:** query, engine, date, whether the client appeared, position,
   and the competitors returned. The log lives at `docs/assessments/<client>-search-log.md`. A claim with no log row does
   not ship.
3. **Report presence and position honestly.** "Listed #2" means second on that exact query on that engine. Do not
   generalize one town's position to "town searches". Do not report AI-assistant answers (ChatGPT, Perplexity) as
   search rankings, and do not cite them at all unless the exact prompt and the full answer are in the log.
4. **Verify every site claim against the live site.** Fetch the pages, sitemap, robots.txt, redirects and meta tags with
   curl; render with headless Chromium for anything visual (banners, overlays, layout). Never infer a site feature from
   a URL slug, a nav label, an old search snippet, or memory.
5. **Numbers must agree everywhere.** Scorecard, cover badge, stats, gap cards, outcome box and roadmap all trace to the
   same log rows. Change one, change all, then re-render the file and look at it.
6. Full methodology and pre-commit checklist: `docs/assessment-methodology.md`.
