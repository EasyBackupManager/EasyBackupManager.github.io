# Easy Backup Manager

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── latest.json        # Release metadata (version, tag, file names, checksums)
├── src/
│   └── pages/
│       ├── index.astro        # Home page
│       └── download.astro     # Download page with asset download counts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📥 Download counts

The download page (`/download/`) shows the GitHub release asset download counts for each platform. Counts are fetched from the [GitHub Releases API](https://docs.github.com/en/rest/releases/assets) at **build time** and baked into the static HTML.

- If the API is unreachable or rate-limited, the count displays as **—** (no error is shown to visitors).
- A `GITHUB_TOKEN` is used in CI to avoid the anonymous rate limit (60 req/h). It is read at build time only and never embedded in the output.

### Configuring the token

**In GitHub Actions (CI/CD):** The deploy workflow already passes `secrets.GITHUB_TOKEN` automatically — no extra configuration needed.

**For local builds:** Create a `.env` file in the project root (it is git-ignored) and add:

```sh
GITHUB_TOKEN=ghp_your_personal_access_token
```

A classic PAT with **no scopes** (or a fine-grained token with read-only access to the target repository) is sufficient for reading public release data.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
