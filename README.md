# Harry Potter Character Directory

A simple, fast Harry Potter character directory built with React, Vite, and Tailwind CSS. Filter characters by house and role, then deploy to Azure Static Web Apps in minutes.

## Features

- 🏰 Browse 15 main Harry Potter characters
- 🎓 Filter by house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw)
- 👨‍🎓 Filter by role (Student, Teacher, Other)
- 📱 Fully responsive design
- ⚡ Lightning-fast performance
- 🚀 Deploy to Azure Static Web Apps

## Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Azure Static Web Apps

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser

### Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── FilterBar.tsx
│   ├── CharacterCard.tsx
│   └── CharacterGrid.tsx
├── data/
│   └── characters.ts    # Character data
├── types/
│   └── index.ts         # TypeScript types
├── App.tsx              # Main component
├── App.css
├── index.css
└── main.tsx             # Entry point

public/
└── images/              # Character images (add your images here)
```

## Usage

1. Browse all characters on load
2. Click a house button to filter by house
3. Click a role button to filter by role
4. Combine filters (e.g., Gryffindor + Student)
5. Click "Reset Filters" to clear selections

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized static files ready to deploy.

## Deployment to Azure Static Web Apps

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/harry-potter-app.git
   git push -u origin main
   ```

2. **Create Azure Static Web App:**
   - Go to [Azure Portal](https://portal.azure.com)
   - Create "Static Web App" resource
   - Connect your GitHub repository
   - Configure build settings:
     - Build Preset: Vite
     - App location: /
     - Output location: dist

3. **Deploy:**
   - Azure automatically builds and deploys on each push
   - Your app is live at `https://<your-app>.azurestaticapps.net`

## Adding More Characters

To add more characters:

1. Edit `src/data/characters.ts`
2. Add character entries following the existing format
3. Add character images to `public/images/`
4. Reference images by filename in character data

## Performance

- Page load: < 1 second
- Zero server cold starts
- Global CDN distribution via Azure
- Responsive images optimization
- Minified build size: ~50KB

## Future Enhancements

- Search by character name
- Character detail pages
- More character information (spells, wands, etc.)
- Dark/light theme toggle
- Sort options
- Share character links

## License

MIT
