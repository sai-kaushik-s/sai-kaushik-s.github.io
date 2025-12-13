# Sai Kaushik Sudhakaran - Portfolio

A modern, high-performance portfolio website built with **React** and **Vite**, designed to showcase research in High-Performance Computing, Computer Architecture, and Cryptography.

![Portfolio Preview](/public/img/self.jpg)

## Features

- **Personalized Aesthetic**: "Maroon & AMOLED Black" theme system with a glassmorphism sidebar.
- **Responsive Design**: Fluid grid layouts that adapt seamlessly to mobile and desktop screens.
- **Interactive UI**:
  - **Projects**: Filterable list of research projects with direct GitHub links.
  - **Resume**: Integrated PDF viewer and direct download options.
  - **Themes**: Toggle between Light and Dark modes (Dark mode default).
- **Tech Stack**:
  - **Frontend**: React 19, Vite, Framer Motion
  - **Styling**: CSS Variables, Glassmorphism, Responsive Grid
  - **Icons**: Font Awesome, Devicon
  - **Fonts**: Hermit (Code), Inter (UI)

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sai-kaushik-s/sai-kaushik-s.github.io.git
   cd sai-kaushik-s.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
├── public/              # Static assets (fonts, images)
├── src/
│   ├── assets/          # CSS styles (base.css, variables.css)
│   ├── components/      # React components (Home, Projects, Experience, etc.)
│   ├── context/         # React Context (ThemeContext)
│   ├── App.jsx          # Main application layout
│   └── main.jsx         # Entry point
├── .github/workflows/   # CI/CD for GitHub Pages
└── vite.config.js       # Vite configuration
```

## Deployment

This project is configured to automatically deploy to **GitHub Pages** via GitHub Actions.
Any push to the `main` branch triggers the workflow defined in `.github/workflows/deploy.yml`.

## Contact

- **Email**: saikaushik609@gmail.com
- **GitHub**: [sai-kaushik-s](https://github.com/sai-kaushik-s)
- **LinkedIn**: [Sai Kaushik Sudhakaran](https://www.linkedin.com/in/sai-kaushik-s/)
