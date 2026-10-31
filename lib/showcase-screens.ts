import type { Screen } from "../components/device-showcase";

/*
  Website screenshots as WebP in public/showcase/ (the wall tiles are ~720 px wide).
  The wall takes up to 12 screens. Order matters: items fill 4 columns left to right
  (1st, 5th, 9th in column 1; 2nd, 6th, 10th in column 2; and so on), so the 6th, 7th and
  8th items share the row nearest the middle: RailMate, GreenNest, Microtask.
*/

export const wallScreens: Screen[] = [
  { src: "/showcase/wall-01.webp", alt: "Screenshot of the Badar Uddin Welfare website" },
  { src: "/showcase/wall-02.webp", alt: "Screenshot of the BookHub website" },
  { src: "/showcase/wall-03.webp", alt: "Screenshot of the Care.xyz website" },
  { src: "/showcase/wall-04.webp", alt: "Screenshot of the ClubSphere website" },
  { src: "/showcase/wall-05.webp", alt: "Screenshot of the Gatherly website" },
  { src: "/showcase/railmate-results.webp", alt: "Screenshot of the RailMate Bangladesh website" },
  { src: "/showcase/wall-06.webp", alt: "Screenshot of the GreenNest website" },
  { src: "/showcase/wall-08.webp", alt: "Screenshot of the Microtask platform" },
  { src: "/showcase/wall-09.webp", alt: "Screenshot of the WhiskerDairy website" },
  { src: "/showcase/wall-10.webp", alt: "Screenshot of the Hero.io website" },
  { src: "/showcase/wall-07.webp", alt: "Screenshot of the LiveCollab website" },
];
