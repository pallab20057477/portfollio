# Pedro Tech Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌟 Smooth animations and transitions
- 📱 Mobile-friendly navigation
- 🎯 Interactive 3D background
- 📧 Contact form with EmailJS integration
- ⚡ Fast loading with Vite

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS, DaisyUI
- **3D Graphics**: Three.js (@react-three/fiber)
- **Email**: EmailJS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables (optional for EmailJS):
   Create a `.env` file in the frontend directory:
   ```
   VITE_SERVICE_ID=your_emailjs_service_id
   VITE_TEMPLATE_ID=your_emailjs_template_id
   VITE_PUBLIC_KEY=your_emailjs_public_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── component/
│   ├── section/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── Navbar.jsx
│   ├── MobileMenu.jsx
│   ├── LoadingScreen.jsx
│   ├── RevealOnScroll.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## Customization

- Update personal information in the component files
- Modify colors in `tailwind.config.js`
- Add new sections by creating components in `component/section/`
- Update projects in `Projects.jsx`

## Deployment

The project can be deployed to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

## License

This project is open source and available under the [MIT License](LICENSE).
