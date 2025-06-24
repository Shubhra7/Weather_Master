# 🌦️ Weather Master

A modern, real-time weather forecasting app built with **React**, **TypeScript**, and **Vite**. Powered by the **OpenWeather API**, it delivers clean visuals, dynamic backgrounds, and seamless performance.
---

## 📦 Tech Stack

- ⚛️ **React** + **TypeScript**
- ⚡ **Vite** for blazing-fast builds and HMR
- 📊 **TanStack Query (React Query)** for optimized API data fetching and caching
- 🎨 **Lucide React Icons** for elegant, lightweight icons
- 📏 **ESLint** and **Prettier** for consistent, clean code
- 📦 **Sonner Toast Notifications** for user-friendly alerts
- 🔍 **OpenWeather API** for reliable weather data

---

## ✨ Features

- 🔍 Search real-time weather by city name
- 📈 View temperature, humidity, wind speed, pressure, and more
- 🛠️ Type-safe, scalable codebase using TypeScript
- ⚙️ Optimized API handling with **TanStack Query**
- 🚀 Instant hot reload with **Vite**

---

## 🖥️ Demo

👉 [Live Preview on Vercel](https://weather-master-7zws.vercel.app/)

---

## 📚 Getting Started

### 📦 Clone the repository:

```bash
git clone https://github.com/Shubhra7/Weather_Master.git
cd Weather_Master
📦 Install dependencies:
bash
Copy
Edit
npm install
🚀 Run the development server:
bash
Copy
Edit
npm run dev
📦 Build for production:
bash
Copy
Edit
npm run build
🛠️ ESLint + TypeScript Setup
This project uses a modern ESLint config with verbatimModuleSyntax enabled.
When importing only types, use import type

ts
Copy
Edit
import type { ToasterProps } from 'sonner'
📦 Recommended ESLint Plugins (Optional)
eslint-plugin-react-x

eslint-plugin-react-dom

📛 Badges (Optional)



📝 License
This project is licensed under the MIT License.

🤝 Contributing
Pull requests are welcome! Feel free to fork and submit your improvements.

📌 Author
Shubhrajit Ghosh
GitHub 


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

