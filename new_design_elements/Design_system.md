# Design System: De Mololoog (Cinematen)

Dit document bevat de stijlgids geëxtraheerd uit de headerafbeelding voor de landingspagina van *De Mololoog*.

## 1. Kleurenpalet

| Naam | Hex Code | Gebruik |
| :--- | :--- | :--- |
| **Achtergrond (Dark Brick)** | `#0B1114` | Hoofdkleur voor de body en donkere secties. |
| **Secundaire Achtergrond** | `#151F24` | Containers, kaarten of overlappende vlakken. |
| **Primaire Accentkleur (Cyan)** | `#53E8D4` | Call to Action (CTA) knoppen, neon-teksten en hyperlinks. |
| **Secundaire Accentkleur (Amber)**| `#E28D38` | Hover-statussen, alerts of belangrijke highlights (warme gloed). |
| **Tekstkleur (Body)** | `#E2E8F0` | Lichtgrijs/zilver voor optimale leesbaarheid op donkere achtergronden. |

## 2. Typografie

Er zijn twee haalbare routes voor de webfonts om de cinematische sfeer te behouden.

### Optie A: Industrieel & Modern (Aanbevolen)
* **Headings (H1, H2):** *Oswald* (Bold) - Smal en krachtig.
* **Subheadings (H3, Taglines):** *Montserrat* (Thin/Light, All-caps) - Strak met extra letter-spacing voor het neon-effect.
* **Body tekst:** *Inter* - Neutraal en zeer leesbaar.

### Optie B: Puur Cinematisch
* **Headings:** *Bebas Neue* - Direct een blockbuster-gevoel.
* **Subheadings:** *Raleway* - Ronder en eleganter contrast met de headings.
* **Body tekst:** *Open Sans* - Klassieke schreefloze font.

## 3. UI Elementen & Styling

* **Knoppen (Primary):** Transparante achtergrond, cyan border (`2px solid #53E8D4`), neon *box-shadow*. Bij hover: volledige cyan vulling, tekstkleur `#0B1114`.
* **Containers:** Subtiele borders in donkerder cyaan of transparant wit (`rgba(255,255,255,0.1)`) met lichte `backdrop-filter: blur`.

## 4. CSS Variabelen (Basis)

```css
:root {
  /* Colors */
  --bg-primary: #0B1114;
  --bg-secondary: #151F24;
  --accent-cyan: #53E8D4;
  --accent-amber: #E28D38;
  --text-main: #E2E8F0;
  --text-muted: #94A3B8;

  /* Typography (Optie A) */
  --font-heading: 'Oswald', sans-serif;
  --font-subheading: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Neon Effects */
  --neon-glow-cyan: 0 0 5px rgba(83, 232, 212, 0.5), 0 0 15px rgba(83, 232, 212, 0.3);
  --neon-text-glow: 0 0 8px rgba(83, 232, 212, 0.8);
}
```