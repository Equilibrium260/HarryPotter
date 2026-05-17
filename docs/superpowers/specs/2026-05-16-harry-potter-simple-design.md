# Harry Potter Character Directory - Simple Design Spec

**Date:** May 16, 2026  
**Project:** Harry Potter Character Directory  
**Scope:** Simple static single-page React app with 10-20 characters, filtering by house and role

---

## Project Vision

Build a lightweight, fast-loading web app that displays Harry Potter characters in an interactive directory. Visitors can browse characters and filter by house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw) and role (Student, Teacher, Other). No backend, no database — pure static files deployed to Azure.

---

## Requirements

**Functional Requirements:**
- Display 10-20 main Harry Potter characters
- Each character shows: name, house, role, image
- Filter by house (multi-select or single buttons)
- Filter by role (multi-select or single buttons)
- "Show All" button to reset filters
- Responsive design (mobile, tablet, desktop)

**Non-Functional Requirements:**
- No backend or database required
- All data static (JSON file or TypeScript)
- Zero dependencies beyond React + Vite
- Fast load time (< 1 second)
- Deployable to Azure Static Web Apps
- Mobile-responsive

**Success Criteria:**
- All 10-20 characters display correctly
- Filters work and update UI instantly
- Page loads in < 1 second
- Responsive on mobile and desktop
- Successfully deployed to Azure

---

## Technology Stack

- **Frontend:** React 18, Vite (build tool), TypeScript
- **Styling:** Tailwind CSS + custom Harry Potter colors (house themes)
- **Data:** JSON file (`public/characters.json`)
- **Hosting:** Azure Static Web Apps
- **Images:** Hosted in `/public/images/`

---

## Project Structure

```
harry-potter-app/
├── src/
│   ├── App.tsx                    # Main component
│   ├── App.css                    # Global styles
│   ├── components/
│   │   ├── Header.tsx             # Title + branding
│   │   ├── FilterBar.tsx          # House and role filters
│   │   ├── CharacterGrid.tsx      # Grid container
│   │   └── CharacterCard.tsx      # Individual character card
│   ├── types/
│   │   └── index.ts               # TypeScript types
│   ├── data/
│   │   └── characters.ts          # Character data (or in public/)
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Tailwind imports
├── public/
│   ├── characters.json            # Character data (alternative to TypeScript)
│   └── images/
│       ├── harry.jpg
│       ├── hermione.jpg
│       └── ... (10-20 character images)
├── index.html                     # HTML template
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript config
├── tailwind.config.js             # Tailwind theme (house colors)
├── package.json
└── README.md
```

---

## Data Structure

Character data is static JSON:

```typescript
interface Character {
  id: number;
  name: string;
  house: 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw';
  role: 'Student' | 'Teacher' | 'Other';
  image: string; // filename: "harry.jpg"
}
```

**Character array (10-20 entries):**
```json
[
  {
    "id": 1,
    "name": "Harry Potter",
    "house": "Gryffindor",
    "role": "Student",
    "image": "harry.jpg"
  },
  {
    "id": 2,
    "name": "Hermione Granger",
    "house": "Gryffindor",
    "role": "Student",
    "image": "hermione.jpg"
  },
  {
    "id": 3,
    "name": "Ron Weasley",
    "house": "Gryffindor",
    "role": "Student",
    "image": "ron.jpg"
  },
  // ... add ~10-20 main characters total
]
```

Store in `src/data/characters.ts` as exported array or in `public/characters.json`.

---

## Component Architecture

### Component Hierarchy

```
App
├── Header
│   └── Title "Harry Potter Characters"
├── FilterBar
│   ├── House Filter (Gryffindor, Slytherin, Hufflepuff, Ravenclaw buttons)
│   ├── Role Filter (Student, Teacher, Other buttons)
│   └── Reset / Show All button
├── CharacterGrid
│   └── CharacterCard × N (mapped from filtered array)
└── Footer (optional)
```

### Component Descriptions

**App.tsx** - Main component, manages filter state
```typescript
- state: selectedHouse (string | null)
- state: selectedRole (string | null)
- function: handleFilterHouse(house)
- function: handleFilterRole(role)
- function: handleReset()
- logic: filter characters array based on selections
- render: Header, FilterBar, CharacterGrid
```

**FilterBar.tsx** - Filter controls
```typescript
- props: selectedHouse, selectedRole, onHouseChange, onRoleChange, onReset
- renders: House buttons (4), Role buttons (3), Reset button
- styles: Tailwind buttons with house colors as hover states
```

**CharacterGrid.tsx** - Grid container
```typescript
- props: characters (filtered array)
- renders: CharacterCard components in grid layout
- styles: CSS Grid, responsive (3 cols on desktop, 2 on tablet, 1 on mobile)
```

**CharacterCard.tsx** - Individual card
```typescript
- props: character (Character object)
- renders: Image, name, house badge (colored), role badge
- styles: Card container with house-colored left border/accent
```

---

## UI/UX Design

### Layout

**Header Section:**
- Centered title "⚡ Harry Potter Characters"
- Subtitle "Explore the wizarding world"
- Lightning bolt emoji or house crest as branding

**Filter Section:**
- Two rows or horizontal layout:
  - Row 1: "House: [Gryffindor] [Slytherin] [Hufflepuff] [Ravenclaw]"
  - Row 2: "Role: [Student] [Teacher] [Other] | [Reset]"
- Active filters highlighted/pressed state
- Clicking same filter again deselects it

**Character Grid:**
- Responsive: 3 columns desktop, 2 tablet, 1 mobile
- Cards spread evenly with gap
- Shows # of results: "Showing X characters"

**Card Design:**
- Square image
- Colored left border (house color) or top banner with house name
- Name (bold)
- House badge (contains house name + color)
- Role badge (light background, centered)

### Color Theme (Tailwind)

Add to `tailwind.config.js`:
```javascript
colors: {
  gryffindor: '#740001',
  slytherin: '#1a472a',
  hufflepuff: '#f0ad4e',
  ravenclaw: '#0e1a40',
}
```

Card styling uses these colors for borders/accents based on character's house.

### Responsive Breakpoints

- **Mobile (< 640px):** 1 column, full width cards, stacked filters
- **Tablet (640px - 1024px):** 2 columns
- **Desktop (> 1024px):** 3 columns

---

## State Management

Simple React hooks (no Redux needed):

```typescript
const [selectedHouse, setSelectedHouse] = useState<string | null>(null);
const [selectedRole, setSelectedRole] = useState<string | null>(null);

// Filter logic
const filteredCharacters = characters.filter((char) => {
  const houseMatch = !selectedHouse || char.house === selectedHouse;
  const roleMatch = !selectedRole || char.role === selectedRole;
  return houseMatch && roleMatch;
});
```

---

## Deployment Strategy

### Build

```bash
npm run build
# Creates dist/ folder with optimized static files
```

### Deploy to Azure Static Web Apps

1. **Push code to GitHub**
2. **Connect GitHub repository to Azure Static Web Apps**
3. **Azure automatically builds & deploys on each push**
4. **App runs at:** `https://<app-name>.azurestaticapps.net`

**No server, no backend, just static files on CDN.**

### Alternative: Manual Deploy

```bash
npm run build
az storage blob upload-batch -d app -s dist --account-name <storage>
```

---

## Performance Considerations

- **Image Optimization:** Use Next-gen formats (WebP) or compress JPGs
  - Target: < 50KB per image
  - Total bundle < 500KB
- **Code Splitting:** Vite handles this automatically
- **Caching:** Azure CDN caches static files globally
- **Load Time Target:** < 1 second (First Contentful Paint)

---

## Testing Strategy

### Manual Testing Checklist

- [ ] All 10-20 characters display on page load
- [ ] House filter works: click "Gryffindor" → shows only Gryffindor characters
- [ ] Role filter works: click "Student" → shows only students
- [ ] Combine filters: "Gryffindor" + "Student" → correct subset
- [ ] Reset button clears all filters and shows all characters
- [ ] Character count updates ("Showing 3 characters")
- [ ] Cards display: name, house, role, and image
- [ ] Mobile layout: cards stack to 1 column
- [ ] Tablet layout: cards in 2 columns
- [ ] Desktop layout: cards in 3 columns
- [ ] Images load correctly (no broken links)
- [ ] No console errors
- [ ] Page loads in < 1 second (DevTools metrics)

### Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Success Metrics

✅ **Deployed:** App lives on Azure Static Web Apps with public URL  
✅ **Functional:** All filters work, characters display correctly  
✅ **Performance:** Page loads < 1 second  
✅ **Responsive:** Works on mobile, tablet, desktop  
✅ **Code Quality:** No console errors, clean component structure

---

## Future Enhancements (Out of Scope)

- Search by character name
- Character detail page (click card to see more info)
- Dark/light mode toggle
- Sort by name/house
- Add more characters (scale beyond 20)
- User favorites/bookmarks (would require backend)
- Character relationships map

---

## File Checklist

- [ ] 10-20 character images (JPG/PNG, optimized)
- [ ] `src/data/characters.ts` or `public/characters.json`
- [ ] React components (Header, FilterBar, CharacterGrid, CharacterCard)
- [ ] Tailwind config with house colors
- [ ] README with setup instructions
- [ ] GitHub repository
- [ ] Azure Static Web Apps connected

---

## Build & Deploy Timeline

**Phase 1 (Setup):** 30 minutes
- Create Vite project
- Install Tailwind
- Set up folder structure

**Phase 2 (Components):** 1 hour
- Build Header, FilterBar, CharacterCard, CharacterGrid
- Wire up state management
- Add filter logic

**Phase 3 (Data & Styling):** 30 minutes
- Add 10-20 character data
- Optimize images
- Add house colors to Tailwind theme

**Phase 4 (Deploy):** 15 minutes
- Push to GitHub
- Create Azure Static Web Apps
- Deploy and test

**Total: ~2.5 hours**

---

## Next Steps

1. Review this spec for accuracy and completeness
2. Create implementation plan with detailed tasks
3. Build project with scaffolding
4. Implement components and integrate data
5. Test locally
6. Deploy to Azure
7. Share public link!
