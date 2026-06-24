<div align="center">

# Portfolio

**My personal developer portfolio, fast and responsive.**

A single-page app to showcase my projects and skills modern, animated, and deployed automatically to GitHub Pages.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#-license)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [License](#-license)

---

## 🔎 Overview

**Portfolio** is my personal website: a place to centralize my work and let visitors explore my projects and skills. It is a fully client-side single-page app fast to load, responsive on every screen, and sprinkled with subtle scroll and slide animations. Project and skill data live in plain JSON files, so adding a new entry is as simple as editing a file and dropping in a logo.

---

## ✨ Features

| Module                  | Description                                                                      |
| ----------------------- | -------------------------------------------------------------------------------- |
| 🗂 **Project showcase** | Grid of project cards with logo, stack icons, type and a link to the GitHub repo |
| 🔀 **Sorting**          | Sort projects by date or by name, each toggling ascending / descending           |
| 📄 **Project detail**   | A dedicated page per project with screenshots, tech stack and a write-up         |
| 🧠 **Skills**           | A section listing the technologies and tools I work with                         |
| 👤 **About & Contact**  | A short introduction and how to get in touch                                     |
| 🎬 **Animations**       | Slide-in and scroll-reveal effects for a lively feel                             |
| 📱 **Responsive**       | Mobile-first layout that adapts from phones to desktops                          |

---

## 🛠 Tech Stack

| Area           | Technologies                                                                                  |
| -------------- | --------------------------------------------------------------------------------------------- |
| **UI**         | [React 19](https://react.dev/), [React Router 7](https://reactrouter.com/)                    |
| **Build tool** | [Vite 7](https://vite.dev/)                                                                   |
| **Language**   | JavaScript (ES6+)                                                                             |
| **Icons**      | [FontAwesome](https://fontawesome.com/) + [Iconify](https://iconify.design/)                  |
| **Styling**    | Custom CSS (responsive, animated)                                                             |
| **Linting**    | [ESLint 9](https://eslint.org/)                                                               |
| **Deployment** | [GitHub Actions](https://docs.github.com/actions) → [GitHub Pages](https://pages.github.com/) |
| **Data**       | Static JSON (`public/data/`)                                                                  |

---

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) **20.19+** (or **22.12+**) required by Vite 7
- npm (or yarn / pnpm / bun)

---

## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/Aidesu/portfolio-react.git
cd portfolio-react

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app is then available at **[http://localhost:5173](http://localhost:5173)**.

---

## 📜 Available Scripts

| Command           | Action                                         |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Starts the Vite development server             |
| `npm run build`   | Builds the app for production into `dist/`     |
| `npm run preview` | Serves the production build locally to preview |
| `npm run lint`    | Lints the code with ESLint                     |

---

## 📁 Project Structure

```
public/
├── data/
│   ├── projects.json     # Project entries (title, stack, links, images)
│   └── skills.json       # Skills data
├── projects/             # Per-project logos & screenshots
└── CNAME                 # Custom domain (deafiaa.com)
src/
├── views/
│   ├── home/             # Landing page
│   ├── projects/         # Project list (Projects) + single project (OneProject)
│   ├── skills/           # Skills section
│   ├── about/            # About section
│   ├── contact/          # Contact section
│   ├── layouts/          # Header & Footer
│   └── notFound/         # 404 page
├── components/           # Shared components (ScrollTop…)
├── controller/           # Data fetching (getProjects, getSkills)
├── App.jsx               # Application & routes
├── main.jsx              # Entry point
└── index.css             # Global styles
.github/
└── workflows/
    └── deploy.yml        # CI/CD pipeline (lint → build → deploy)
```

---

## 📄 License

Released under the **MIT** License. See the [`LICENSE`](./LICENSE) file for details.

---

<div align="center">

created by **[Carla Deafiaa](https://github.com/Aidesu)**

</div>
