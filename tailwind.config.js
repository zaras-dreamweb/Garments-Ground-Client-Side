module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#529B03",

          "secondary": "#E9E92F",

          "accent": "#F6F9C8",

          "neutral": "#191A3E",

          "base-100": "#FFFFFF",

          "info": "#CAE2E8",

          "success": "#DFF2A1",

          "warning": "#EF9FBC",

          "error": "#F22000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
