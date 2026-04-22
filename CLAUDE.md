# Burger Basket Support Site — CLAUDE.md

## Project overview
Single-page support website for Pan and Watt, owners of Burger Basket (Monrovia, CA), whose home was burglarized on March 26, 2026. Deployed via GitHub Pages at **www.helpburgerbasket.com**.

## File structure
- `index.html` — the entire site (HTML + Tailwind CSS + vanilla JS, all in one file)
- `Desktop 2026.04.20 - 02.42.18.03.mp3` — KNX radio interview audio file
- `CNAME` — `www.helpburgerbasket.com`

## Tech stack
- **Tailwind CSS** via CDN (`cdn.tailwindcss.com`)
- **Font Awesome 6.5.1** via CDN (icons)
- No build step, no framework — edit `index.html` directly and push to `main`

## Page sections (top to bottom)
1. **Hero** — red banner, site title, Donate button (GoFundMe link: `https://gofund.me/da3c6b3db`)
2. **What Happened** — story of the burglary, written from CBS LA news transcript
3. **Video Evidence** — single iframe placeholder for security camera footage YouTube embed
4. **Photos of Perpetrators & Vehicle** — grid of placeholder image slots
5. **TV & Radio Coverage** — CBS LA + NBC LA YouTube embeds, KNX radio audio player, ABC7 and Audacy external links
6. **Situation Updates** — JS-rendered update cards; add new entries at the **top** of the `updates` array in the `<script>` block
7. **How You Can Help** — CTA section with Donate button
8. **Media & Social Links** — empty section (intentionally left for future use)
9. **Footer** — Jesse's phone number `(814) 406-9539`, disclaimer

## Common edits

### Add a situation update
In the `<script>` block, prepend to the `updates` array:
```js
{
  date: "April 21, 2026",
  time: "3:00 PM PDT",
  title: "Your title here",
  content: "Your update text here."
},
```

### Replace a placeholder image
Find `IMAGE_URL_1` / `IMAGE_URL_2` / `IMAGE_URL_3` in the Photos section and swap in a raw GitHub URL or hosted image URL.

### Replace the security camera video
In the **Video Evidence** section, change `YOUR_VIDEO_ID` in the iframe src to the actual YouTube video ID.

### Update the GoFundMe link
Two locations: the Hero `<a>` tag and the How You Can Help `<a>` tag. Both use `https://gofund.me/da3c6b3db`.

## Key facts (for story/copy accuracy)
- Burglary date: March 26, 2026
- Stolen: ~$140,000 cash (lockbox) + ~$20,000 valuables + family heirlooms
- Owners: Pan and Watt (Thai immigrants, 30+ years savings)
- Getaway vehicle: light gray Nissan Rogue SUV, stolen plates 9FIDO94
- Watt was hospitalized post-burglary due to stress-related illness
- Son Jesse manages the campaign; contact: (814) 406-9539
- Restaurant open since 1963 in Monrovia
- MPD actively investigating
