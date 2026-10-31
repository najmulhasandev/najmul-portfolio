import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./device-showcase.module.css";

export type Screen = { src: string; alt: string };

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
          className={styles.shot}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
        />
      </div>
      <span className={styles.island} aria-hidden="true" />
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

/** Tilted 3D wall of up to 10 screens plus one straight focal phone. */
export function ScreenWall({
  eyebrow,
  title,
  screens,
  focal,
}: {
  eyebrow?: string;
  title: ReactNode;
  screens: Screen[];
  focal: Screen;
}) {
  const items = screens.slice(0, 10); // hard cap: keeps mobile data low
  const cols = Array.from({ length: 5 }, (_, c) =>
    items.filter((_, i) => i % 5 === c),
  );

  return (
    <section className={styles.wall} aria-labelledby="screen-wall-title">
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
                  <Phone
                    key={`${c}-${i}`}
                    screen={screen}
                    sizes="(max-width: 700px) 34vw, 250px"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.focal}>
          <Phone screen={focal} sizes="(max-width: 700px) 52vw, 290px" />
        </div>
      </div>
    </section>
  );
}
