import type { Screen } from "../components/device-showcase";

/*
  Put real exports in public/showcase/ and fix the file names below.
  Wall screens: 360x780 WebP, quality ~72, each under 35 KB.
  Hero + focal screens: 540x1170 WebP, quality ~75, each under 60 KB.
  Use only screens of your own work (RailMate Bangladesh, WhiskerDairy, client apps you may show).
*/

export const heroScreens: [Screen, Screen, Screen] = [
  { src: "/showcase/whiskerdairy-home.webp", alt: "WhiskerDairy pet care app home screen" },
  { src: "/showcase/railmate-search.webp", alt: "RailMate Bangladesh train search screen" },
  { src: "/showcase/railmate-results.webp", alt: "RailMate Bangladesh train times screen" },
];

export const wallFocal: Screen = {
  src: "/showcase/railmate-results.webp",
  alt: "RailMate Bangladesh train times screen",
};

export const wallScreens: Screen[] = [
  { src: "/showcase/wall-01.webp", alt: "RailMate Bangladesh route page" },
  { src: "/showcase/wall-02.webp", alt: "RailMate Bangladesh train detail" },
  { src: "/showcase/wall-03.webp", alt: "RailMate Bangladesh search" },
  { src: "/showcase/wall-04.webp", alt: "WhiskerDairy pet profile" },
  { src: "/showcase/wall-05.webp", alt: "WhiskerDairy reminders" },
  { src: "/showcase/wall-06.webp", alt: "WhiskerDairy health log" },
  { src: "/showcase/wall-07.webp", alt: "Client app screen" },
  { src: "/showcase/wall-08.webp", alt: "Client app screen" },
  { src: "/showcase/wall-09.webp", alt: "Telegram bot admin flow" },
  { src: "/showcase/wall-10.webp", alt: "Dashboard screen" },
];
