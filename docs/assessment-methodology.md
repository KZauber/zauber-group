# Assessment methodology

How a Zauber Group digital-presence assessment is researched, so that every claim in the report can be reproduced by
the client. This exists because the first Parker Kane draft tested search visibility with queries nobody types
("custom home builder Boerne Bulverde Fair Oaks Ranch Texas recommendations who to hire") and reported the result as
"#2 on town searches". Under real queries the client was 2nd in one town, 7th and 9th in the others, and absent from
every search containing the word "luxury".

## 1. Build the query set

Start from how the buyer searches, not from what would make a good headline.

| Intent | Pattern | Examples |
|---|---|---|
| Buyer has picked a town | `<service> <town>` | `custom home builder Boerne`, `custom home builder Fair Oaks Ranch` |
| Buyer has a bigger budget | `<modifier> <service> <town>` | `luxury home builder Boerne`, `luxury custom home builder Boerne` |
| Buyer searches the region | `<service> <region>`, `<modifier> <service> <region>` | `custom home builder San Antonio`, `luxury home builder Hill Country Texas` |
| Buyer is near the office | `<service> <home town> TX` | `custom home builder Mico TX` |

Rules:

- Six words or fewer. One town or one region per query.
- No "best", "top", "recommendations", "who to hire", "2026", or question phrasing unless that exact wording is the
  thing being tested, and then say so in the report.
- Run the two or three most important queries in a second wording (singular/plural, with and without "TX") to check
  the result is stable.
- Cover every area the client says they serve, from all of these sources, and note in the log which source each came from:
  - every town in the site's Service Areas menu or with its own page;
  - every town named in site copy, the footer, or project titles (a project in Castroville means they build there,
    page or not);
  - every service area listed on the Google Business Profile;
  - the town the office sits in;
  - the region the site claims (San Antonio, Texas Hill Country).
- Every town gets both forms: `custom home builder <town>` and `luxury home builder <town>`. The region gets both too.
- The report may showcase two searches as the headline contrast, but it must also show every search run, with the
  client's position on each, so the stats (0 / 7, 4 / 4) are visibly derived from the full set.

## 2. Run and log

- Use a real web search engine with US results. Record which one. If Google itself cannot be queried from the session,
  say "web search results" in the report, not "Google rankings".
- For each query record: date, engine, whether the client appeared, position among distinct domains, and the distinct
  competitor domains in order.
- Save the log at `docs/assessments/<client>-search-log.md` before writing the report section. The report's
  stats (0 / 7, 4 / 4, "listed #2") are computed from the log, and the log is the answer when the client asks
  "which searches?".
- AI assistants (ChatGPT, Perplexity, Gemini) are not search engines. Their answers change per run and per account.
  Only cite one if the exact prompt and full answer are pasted into the log, and label it as an AI answer, never as a
  ranking.

## 3. Verify the site itself

Every statement about the client's website is checked against the live site the same day:

- `curl` the homepage, every page in the sitemap, `robots.txt`, and any URL the report names. Record status codes and
  redirect targets. A "-2" slug or a duplicate-looking URL means nothing until the original URL has been fetched.
- Read `<title>`, `<meta name="description">` and `<meta name="robots">` for every sitemap page. Count the pages that
  have and lack a description; name the exceptions.
- List the scripts on the homepage and contact page: analytics, ad pixels, tag managers, chat and review widgets. Check
  what each third-party widget actually is before describing it.
- Render the homepage in headless Chromium and look at it before claiming anything visual (cookie banner, popup,
  overlay, broken layout). Static HTML alone is not proof of a banner's absence when a tag manager is present; the
  render is.
- Check the footer credit and the blog cadence (post sitemap `lastmod` dates). If the client has an active web or SEO
  vendor, the report has to acknowledge it.
- Search the fetched pages for the words the report says are missing (for example "luxury") and quote the count.

## 4. Pre-commit checklist

- [ ] Every search claim has a row in the search log with the same query text, date and position.
- [ ] No query in the report combines towns or contains padding words.
- [ ] No AI-assistant answer is presented as a ranking.
- [ ] Every site feature the report credits or faults was fetched and is in the log (URL and status code).
- [ ] Scorecard grades, cover badge, stats, gap cards, outcome box and roadmap agree with each other and with the log.
- [ ] Grade math checked: A=4, B=3, C=2, D=1, F=0, averaged over graded areas only.
- [ ] File re-rendered in a browser and every edited section looked at.
- [ ] Footer "Compiled from" line names the actual sources used.
