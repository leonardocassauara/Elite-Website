import Image from "next/image";
import Link from "next/link";
import styles from "./MenuCard.module.css";

type AppProps = {
  src: string;
  text: string;
  alt: string;
  href: string;
};

export default function MenuCard({ src, text, alt, href }: AppProps) {
  return (
    <Link className={styles["content-container"]} href={href}>
      <div>
        <Image
          className={styles["image"]}
          src={src}
          width={223}
          height={223}
          alt={alt}
        />
        <div className={styles["pseudo"]}></div>
      </div>
      <p className={styles["title"]}>{text}</p>
    </Link>
  );
}
