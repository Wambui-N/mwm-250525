import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "./Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export const brule = localFont({
  src: [
    {
      path: "./Brule-Bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-brule",
});
