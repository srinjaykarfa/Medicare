# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# MedSphere - Healthcare Platform

A modern healthcare platform built with the MERN stack, designed to make healthcare simple, smart, and accessible for everyone.

## Features

- 🏥 **Doctor Appointments** - Book appointments with verified doctors easily
- 💊 **Medication Tracking** - Track medications and set reminders
- 🤖 **AI Symptom Checker** - Get instant health insights with AI
- 📱 **Health Management** - Manage all health information in one platform

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Responsive design

### Backend (Coming Soon)
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd medsphere
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # React components
│   └── LandingPage.tsx  # Main landing page component (Tailwind styled)
├── assets/              # Static assets
├── App.tsx              # Main App component
├── App.css              # Minimal global styles
├── index.css            # Tailwind directives and custom components
└── main.tsx             # App entry point
tailwind.config.js       # Tailwind configuration
postcss.config.js        # PostCSS configuration
```

## Design Features

- **Modern UI/UX** - Clean and professional healthcare design using Tailwind CSS
- **Responsive Layout** - Works on all devices and screen sizes
- **Attractive Animations** - Smooth transitions and hover effects
- **Gradient Backgrounds** - Beautiful color schemes
- **Medical Theme** - Healthcare-focused color palette and imagery
- **Component-based Styling** - Tailwind utility classes for maintainable code

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Team Medibots
- Email: info@medsphere.com
- Phone: +1 (555) 123-4567

---

Made with ❤️ by Team Medibots

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
