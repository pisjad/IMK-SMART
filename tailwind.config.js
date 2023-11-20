/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                dmsans: ["DM Sans", "sans-serif"],
            },
            colors: {
                hijauMuda: "#C0DDAB",
                hijau: "#113132",
                kuning: "#EFB544",
                ungu: "#6059D3",
            },
        },
    },
    plugins: [],
};
