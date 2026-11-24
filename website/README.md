# Ginga Koro promotional site

The static, responsive site is published at [410-games.github.io/ginga-koro](https://410-games.github.io/ginga-koro/). Open `index.html` locally to preview the private source copy. The public repository contains the site and its Pages workflow only; game source and ROMs remain in the private project checkout.

The eight campaign gameplay cards link to the campaign pages. The Weapons section is a compact promotional strip of real gameplay screenshots showing fire in combat; it does not repeat the encyclopedia’s ship-to-weapon mapping. The homepage also includes a live Ginga Prism specimen and a view of the Music Gallery player, with a link to the shared artwork page.

The homepage and the Playground campaign page show native mGBA gameplay screenshots for all four Playground modes.
The homepage hero displays the approved transparent Japanese 銀河航路 wordmark above the Ginga Koro headline, using the approved Japanese master from which the ROM title was derived. The webpage placement was player-approved on 12 November 2026.

The homepage hero embeds the five-second NEON OVERDRIVE gameplay pilot as a browser-playable MP4. The earlier CRIMSON NEBULA screenshot now sits beneath the opening copy in a two-image row; both cards intentionally use the same capture until replacement images are selected. The site serves its own copy at `assets/videos/mgba-neon-overdrive-hyperplay-city-volt.mp4`; the unedited capture and its recording details remain under `art/promotional/video_capture_test/`.

## Ginga Prism web specimen

The Type and music section renders real HTML text with a colour webfont converted from the 8 × 8 in-game glyphs. The header’s **Ginga Prism font** switch applies the font across the promo and reference pages for review. The usual font is the default. To refresh it after a game font change, run `python3 -B tools/generate_prism_webfont.py` with Pillow and FontTools installed.

## Native captures

On 10 November 2026, Codex Computer Use opened `ginga-no-yakata.gba` (0.1.231-dev) in mGBA 0.10.5 with audio muted. mGBA's Take screenshot command saved the following unedited 240×160 RGB PNGs.

| Capture | What it shows |
|---|---|
| [Startup](assets/mgba-startup.png) | First capture check, with the 4.10 Games splash |
| [DANMAKU](assets/mgba-danmaku.png) | PLAYGROUND, Kasane and two bullet rings over the old town |
| [SURF LINE](assets/mgba-surf-line.png) | IRON MONSOON stage 1, Shrike and coastal patrol boats |
| [Gravity Lance](assets/mgba-gravity-lance.png) | Astra’s charged magenta piercing shot in live NEON FRONTIER combat |
| [Cartridge Bloom](assets/mgba-cartridge-bloom.png) | Volt’s five-pellet charged fan in live HYPERPLAY CITY combat |
| [Laser Grid](assets/mgba-laser-grid-gameplay.png) | Full-height Laser Grid Special beam in live gameplay; clean current-ROM capture supplied 22 November 2026 |
| [Rail Burst](assets/mgba-rail-burst.png) | Shrike's charged shot in flight on SURF LINE |
| [HYPERPLAY CITY](assets/mgba-hyperplay-city.png) | NEON OVERDRIVE stage 1 with Volt |
| [BRASSWIND DOCKYARD](assets/mgba-brasswind-dockyard.png) | CLOCKWORK EMPIRE stage 1 with Bastion |
| [Laser Grid](assets/mgba-laser-grid.png) | Special firing in the in-game Weapons Gallery demo |
| [Astra](assets/mgba-astra-gallery.png) | In-game Ships Gallery showing the ship's reference illustration |
| [Spread Storm](assets/mgba-hyperplay-city-spread-storm.png) | Volt firing a Special during a live wave in HYPERPLAY CITY |
| [Volt Vortex](assets/mgba-glowspin-park-volt-vortex.png) | The boss firing an expanding ring in GLOWSPIN PARK |
| [CARTRIDGE CAUSEWAY](assets/mgba-cartridge-causeway-vector.png) | Vector trading fire over the retro hardware of CONSOLE WARS |
| [INVADERS MUST DIE!](assets/mgba-invaders-must-die-round-01.png) | Astra and the opening enemy grid against the Milky Way |
| [SUNKEN CITADEL](assets/mgba-sunken-citadel-lyra-crossfire.png) | Lyra’s Gravity Lance through magenta crossfire in COSMIC CONVERGENCE |
| [CRIMSON NEBULA](assets/mgba-crimson-nebula-lyra-late-wave.png) | Hero image of Lyra in a late COSMIC CONVERGENCE wave |
| [PRISMATIC VEIL](assets/mgba-prismatic-veil-vesper-plasma-wave.png) | Vesper releases the charged Plasma Wave crescent in STRANGE HORIZONS |
| [DEAD AIR](assets/mgba-dead-air-classified-crossfire.png) | Classified and overlapping volleys among the radar dishes of VEILED CONTACT |
| [High Score Gallery](assets/campaign-reference/shared/high-score.png) | Populated Gallery record: ABD · 500 · COSMIC CONVERGENCE · LYRA · NORMAL; cropped from the current mGBA capture supplied on 22 November 2026 |

The Shared artwork page uses the current 4.10 Games precision-grid splash (`assets/4-10-games-startup.png`), six How to Play screens captured from the current ROM in mGBA on 22 November 2026 (`art/promotional/how_to_play_mgba_2026_11_22/`), a populated High Score Gallery capture from the current game and the current 64×64 expanding bomb effect. The visible High Score Gallery image has no added caption.

The draft uses eleven gameplay frames across all eight campaigns, plus the Astra Gallery capture. The homepage Weapons strip uses five gameplay captures to show a charged piercing shot, charged crescent, widening charged pellet fan, a broad Special spread, and the full-height Laser Grid Special beam. Captions identify each weapon and charge/Special state; the Laser Grid frame comes from the in-game Test Lab. The strip avoids profile mappings. SUNKEN CITADEL replaces the repeated SURF LINE view. The newer COSMIC CONVERGENCE, STRANGE HORIZONS and VEILED CONTACT captures used Hard and session-only Invincibility. The Spread Storm and Volt Vortex captures used session-only Invincibility and Max Weapons. The remaining frames are available as alternates and capture records.

The Ships section presents Astra, Kestrel, Comet, Lyra, Vesper, Shrike, Classified, Bastion, Vector, Volt, Kasane and Interceptor from Playground's Type X mode. Each card pairs a high-resolution illustration with its in-game sprite.

Private source assets retain their original campaign PNGs and full-resolution branding masters. The published site serves the 256px campaign cards, campaign-select art and stage/boss maps as pixel-identical lossless WebP files. The large homepage wordmarks use responsive 1×/2×/3× WebP variants sized for their CSS display widths. The homepage ship illustrations are already compact WebP files (about 13–22 KB each), so they remain unchanged; campaign-card and ship images load lazily. The public deployment omits the superseded PNG copies. The enemy panels use current Gallery compositions and the RED REAVER reference illustration. Earlier gameplay, ship and Weapons Gallery QA compositions and the assembled Special sprite strip remain available as draft source assets. See [the site plan](../docs/PROMOTIONAL_SITE_PLAN.md) for publication boundaries.

## Campaign reference pages

The **Stage artwork** panel opens to show the full stage map and any source master. Stages with a dedicated boss arena also show its map and available master in this panel.

The homepage campaign names open the generated campaign reference pages. After adding screenshots using the [capture checklist](../docs/PROMO_STAGE_CAPTURES.md), run `python3 -B tools/generate_promo_campaigns.py` from the game checkout. Pass `--require-captures` to require every stage and playable mode to have a live screenshot. The generator is kept with the private game tools. The static site uses relative links and assets.

The [full capture inventory](../docs/PROMO_STAGE_CAPTURES.md) records thirty-seven native gameplay screenshots. The [Shared artwork page](campaigns/shared/index.html) is also generated from the production catalog and existing art. The standalone encyclopedia remains the complete reference during migration.

## Development timeline

The homepage’s **IN DEVELOPMENT** badge links to [the dated development timeline](development/index.html), a concise public-facing summary of major game, encyclopedia and promotional-site deliverables. The detailed project history remains in `docs/DEVELOPMENT_TIMELINE.md`.

Campaign music sections now include a small keyboard-accessible play/pause control. The eight page previews use compact 16 kHz mono WAV renders derived from the original tracker music; these are browser listening previews and can sound different from the GBA mix. Audio is requested only after the visitor presses Play. Regenerate them on macOS with python3 -B tools/generate_promo_music_previews.py.
