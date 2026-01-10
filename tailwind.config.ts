// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#213448",
//         secondary: "#547792",
//         accent: "#94B4C1",
//         background: "#EAE0CF",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

module.exports = {
  theme: {
    extend: {
      lineClamp: {
        2: '2',
        3: '3',
      }
    }
  }
}