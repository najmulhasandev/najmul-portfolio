import type { Screen } from "../components/device-showcase";

/*
  Website screenshots, 720 px wide WebP in public/showcase/ (wall-01 ... wall-10).
  The focal screenshot is 1000 px wide. Keep the wall at 10 images or fewer.
*/

export const wallFocal: Screen = {
  src: "/showcase/railmate-results.webp",
  alt: "Screenshot of the RailMate Bangladesh website",
};

export const wallScreens: Screen[] = [
  { src: "/showcase/wall-01.webp", alt: "Screenshot of the Badar Uddin Welfare website" },
  { src: "/showcase/wall-02.webp", alt: "Screenshot of the BookHub website" },
  { src: "/showcase/wall-03.webp", alt: "Screenshot of the Care.xyz website" },
  { src: "/showcase/wall-04.webp", alt: "Screenshot of the ClubSphere website" },
  { src: "/showcase/wall-05.webp", alt: "Screenshot of the Gatherly website" },
  { src: "/showcase/wall-06.webp", alt: "Screenshot of the GreenNest website" },
  { src: "/showcase/wall-07.webp", alt: "Screenshot of the LiveCollab website" },
  { src: "/showcase/wall-08.webp", alt: "Screenshot of the Microtask platform" },
  { src: "/showcase/wall-09.webp", alt: "Screenshot of the WhiskerDairy website" },
  { src: "/showcase/wall-10.webp", alt: "Screenshot of the Hero.io website" },
];
