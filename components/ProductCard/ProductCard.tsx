import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

type AppProps = {
  id: string;
  name: string;
  price: string;
  href: string;
};

export default function ProductCard({ id, name, price, href }: AppProps) {
  return (
    <li id={id} className={styles["main-container"]}>
      <Link href={href} className="focusable">
        <Image
          src="/img/product.png"
          width={318}
          height={345}
          alt="Produto em destaque"
          className={styles["image"]}
        />
        <div className={styles["text-container"]}>
          <div className={styles["content-container"]}>
            <h3 className={styles["title"]}>{name}</h3>
            <p className={styles["description"]}>R${price}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
