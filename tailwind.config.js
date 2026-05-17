/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gryffindor: '#740001',
        'gryffindor-light': '#d4211a',
        slytherin: '#1a472a',
        'slytherin-light': '#2d8659',
        hufflepuff: '#f0ad4e',
        'hufflepuff-dark': '#d1860f',
        ravenclaw: '#0e1a40',
        'ravenclaw-light': '#0066cc',
        'parchment': '#fef5e7',
        'stone': '#2a2a2a',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'magical': ['Georgia', 'serif'],
      },
      backgroundImage: {
        'stone-pattern': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect fill=\'%23111827\' width=\'100\' height=\'100\'/%3E%3Cpath d=\'M0,20 Q25,15 50,20 T100,20\' stroke=\'%23374151\' fill=\'none\' opacity=\'0.3\'/%3E%3Cpath d=\'M0,40 Q25,35 50,40 T100,40\' stroke=\'%23374151\' fill=\'none\' opacity=\'0.3\'/%3E%3Cpath d=\'M0,60 Q25,55 50,60 T100,60\' stroke=\'%23374151\' fill=\'none\' opacity=\'0.3\'/%3E%3Cpath d=\'M0,80 Q25,75 50,80 T100,80\' stroke=\'%23374151\' fill=\'none\' opacity=\'0.3\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
