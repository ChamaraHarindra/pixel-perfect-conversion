import { Anonymous_Pro } from "next/font/google";
import localFont from "next/font/local";

export const headerFont = localFont({
  src: "../../../public/fonts/header-font.ttf",
  display: "swap",
  variable: "--header-font",
});

export const bodyFont = Anonymous_Pro({
  variable: "--body-font",
  weight: ["400", "700"],
  subsets: ["latin"],
});
