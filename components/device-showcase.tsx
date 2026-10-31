import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./device-showcase.module.css";

export type Screen = { src: string; alt: string };
type Variant = "browser" | "phone";

function Phone({
  screen,
  sizes,
  eager = false,
}: {
  screen: Screen;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        <Image
          src={screen.src}
          alt={screen.alt}
          fill
          sizes={sizes}
          unoptimized
          className={styles.shot}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
        />
      </div>
      <span className={styles.island} aria-hidden="true" />
    </div>
  );
}

/** Desktop browser window, for website screenshots. */
function Browser({ screen, sizes }: { screen: Screen; sizes: string }) {
  return (
    <div className={styles.browser}>
      <div className={styles.bar} aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className={styles.view}>
        <Image
          src={screen.src}
          alt={screen.alt}
          fill
          sizes={sizes}
          unoptimized
          className={styles.shot}
          loading="lazy"
        />
      </div>
    </div>
  );
}

/** Hero: three overlapping phones, centre one in front. Place in the hero's right column. */
export function DeviceFan({ screens }: { screens: [Screen, Screen, Screen] }) {
  const [left, center, right] = screens;
  const sizes = "(max-width: 700px) 40vw, 250px";
  return (
    <div className={styles.fan}>
      <div className={`${styles.fanItem} ${styles.fanLeft}`}>
        <Phone screen={left} sizes={sizes} />
      </div>
      <div className={`${styles.fanItem} ${styles.fanRight}`}>
        <Phone screen={right} sizes={sizes} />
      </div>
      <div className={`${styles.fanItem} ${styles.fanCenter}`}>
        <Phone screen={center} sizes={sizes} eager />
      </div>
    </div>
  );
}

/**
 * Tilted 3D wall of up to 10 screens plus one straight focal screen.
 * variant "browser" (default) frames website screenshots; "phone" frames app screens.
 */
export function ScreenWall({
  eyebrow,
  title,
  screens,
  focal,
  variant = "browser",
}: {
  eyebrow?: string;
  title: ReactNode;
  screens: Screen[];
  focal: Screen;
  variant?: Variant;
}) {
  const phone = variant === "phone";
  const colCount = phone ? 5 : 4;
  const items = screens.slice(0, 10); // hard cap: keeps mobile data low
  const cols = Array.from({ length: colCount }, (_, c) =>
    items.filter((_, i) => i % colCount === c),
  );
  const Tile = phone ? Phone : Browser;
  const tileSizes = phone ? "(max-width: 700px) 34vw, 250px" : "(max-width: 700px) 46vw, 360px";
  const focalSizes = phone ? "(max-width: 700px) 52vw, 290px" : "(max-width: 700px) 74vw, 580px";

  return (
    <section className={styles.wall} data-variant={variant} aria-labelledby="screen-wall-title">
      <div className={styles.copy}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h2 id="screen-wall-title" className={styles.title}>
          {title}
        </h2>
      </div>

      <div className={styles.stageWrap}>
        <div className={styles.stage} aria-hidden="true">
          <div className={styles.grid}>
            {cols.map((col, c) => (
              <div key={c} className={styles.col}>
                {col.map((screen, i) => (
                  <Tile key={`${c}-${i}`} screen={screen} sizes={tileSizes} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.focal}>
          <Tile screen={focal} sizes={focalSizes} />
        </div>
      </div>
    </section>
  );
}
