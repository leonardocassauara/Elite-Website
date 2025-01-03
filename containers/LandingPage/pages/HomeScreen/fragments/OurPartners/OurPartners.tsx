import Title from "@/components/Title/Title";
import styles from "./OurPartners.module.css";
import Image from "next/image";

const partners = [
  { src: "dunlop", width: "257", height: "60", alt: "Logo Dunlop" },
  { src: "strong", width: "257", height: "60", alt: "Logo Dunlop" },
  { src: "goodyear", width: "332", height: "60", alt: "Logo Goodyear" },
  {
    src: "afmundial",
    width: "92",
    height: "60",
    alt: "Logo AF Mundial Pneus",
  },
];

export default function OurPartners() {
  return (
    <section aria-labelledby="title-partners">
      <div className={styles["background-container"]}>
        <div className={styles["title-container"]}>
          <Title
            id="title-partners"
            text="NOSSOS PARCEIROS"
            pseudo
            color="#000000"
          />
        </div>
      </div>
      <div className={styles["background-partners-container"]}>
        <div className={styles["partners-container"]}>
          {partners.map(({ src, width, height, alt }) => {
            return (
              <Image
                src={"/img/" + src + ".png"}
                width={Number(width)}
                height={Number(height)}
                alt={alt}
                className={styles["image"]}
                key={src}
              />
            );
          })}
        </div>
        <div className={styles["partners-container"]}>
          {partners.map(({ src, width, height, alt }) => {
            return (
              <Image
                src={"/img/" + src + ".png"}
                width={Number(width)}
                height={Number(height)}
                alt={alt}
                className={styles["image"]}
                key={src}
              />
            );
          })}
        </div>
        <div className={styles["partners-container"]}>
          {partners.map(({ src, width, height, alt }) => {
            return (
              <Image
                src={"/img/" + src + ".png"}
                width={Number(width)}
                height={Number(height)}
                alt={alt}
                className={styles["image"]}
                key={src}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
