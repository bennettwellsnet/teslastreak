**TeslaStreak** — Tesla FSD Self-Driving Streak Stats & Tips from X

An interactive, self-contained demo that pulls real statistics, tips, and community posts from X (Twitter) about maintaining Tesla Full Self-Driving (FSD) intervention-free streaks.

Built as the latest in a series of practical demos (spacexdemo, patio, paintcalc, doorwasm) focused on real-world data, productivity tools, and clean modular JavaScript.

## Features

- **Real stats from X**: Aggregated data from Tesla owners (longest reported streaks, FSD usage percentages, safety multipliers like 7-9x safer than humans, gamification of the new streak metric in FSD v14.3+).
- **Community feed**: Filterable list of actual X posts with tips, warnings, and real telemetry examples (e.g., 13k+ miles zero interventions, insurance implications).
- **Streak simulator**: Input your current miles + planned drive, apply real community tips (parking takeover, Chill mode, etc.), and see a projected "safe streak" + risk score.
- **Safety-first checklist**: Interactive tips emphasizing supervision over gamification, with persistent progress tracking.
- **Uses X directly**: Demonstrates semantic + keyword searches on X. Includes ready-made queries so you can find fresh data yourself.

## Live Demo

- GitHub Pages: https://bennettwellsnet.github.io/teslastreak/
- Custom domain (via dedicated Cloudflare Pages + Worker): https://bennettwells.net/teslastreak/

## Why This Demo?

Tesla introduced a "streak" counter in recent FSD updates that gamifies safe, intervention-free driving. Owners on X share impressive numbers but also important caveats about safety. This demo turns that real chatter into practical, interactive tools while showing how to leverage X data in a web project.

## Tech Stack

- 100% static (single HTML + modular JS, no build step required)
- Tailwind CSS via CDN
- Vanilla JavaScript modules (stats, simulator, X feed, checklist)
- Data sourced from public X posts via semantic/keyword search
- Self-contained: works offline after load (except for refreshing X data)

## Local Development

1. Clone the repo
2. Open `index.html` in any modern browser
3. For the freshest X data, re-run searches in Grok or directly on x.com (example queries are included in the demo)

No dependencies. No server needed.

## Publishing (Same Pattern as Previous Demos)

This project follows the established workflow for bennettwells.net subpaths:

1. Enable GitHub Pages on the repo (Settings → Pages → Deploy from branch `main` + root `/`).
2. Create a **dedicated Cloudflare Pages project** connected to this GitHub repo (name it `teslastreak` or similar). Use Framework: None, empty build command, output dir `.`.
3. Create a **dedicated Worker** (`teslastreak-proxy`) with path-stripping + CSP cleaning logic so the demo runs cleanly under `/teslastreak` without inheriting the main site's strict security headers.
4. Add the route `bennettwells.net/teslastreak*` to the Worker.
5. Purge cache and test.

This keeps every demo (spacexdemo, patio, paintcalc, doorwasm, teslastreak) on its own isolated Pages project + Worker — fully separated from the main bennettwells-website.

See previous repos for exact Worker code templates and route examples.

## Related Projects

- [spacexdemo](https://github.com/bennettwellsnet/spacexdemo) — SpaceX 2026 launch counter with simulator
- [patio](https://github.com/bennettwellsnet/patio) — Paver patio foundation guide + material calculator
- [paintcalc](https://github.com/bennettwellsnet/paintcalc) — Painting productivity tools (area, cost, time)
- [doorwasm](https://github.com/bennettwellsnet/doorwasm) — Replacement door planner with WebAssembly

## Contributing / Extending

Ideas welcome:
- More advanced streak risk modeling
- Integration with actual X API (for live updates)
- Additional Tesla tools (e.g., range calculator, Supercharger planner)
- Better data visualization

All code is MIT-licensed. The X posts shown are public and attributed.

---

Built with ❤️ for practical demos and learning how to use real X data in web projects. Questions? Open an issue or reach out on X.