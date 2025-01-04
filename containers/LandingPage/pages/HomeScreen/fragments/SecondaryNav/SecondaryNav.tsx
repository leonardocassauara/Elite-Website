import styles from "./SecondaryNav.module.css";
import MenuCard from "@/components/MenuCard/MenuCard";

const catalogos = [
  {
    href: "/produtos/remold",
    text: "PNEUS REMOLD",
    src: "menu secundario remold",
    alt: "Navegação Pneu Remold",
  },
  {
    href: "/produtos/dunlop",
    text: "PNEUS DUNLOP",
    src: "menu secundario dunlop",
    alt: "Navegação Pneu Dunlop",
  },
  {
    href: "/produtos/strong",
    text: "PNEUS STRONG",
    src: "menu secundario strong",
    alt: "Navegação Pneu Strong",
  },
  {
    href: "/produtos/af-mundial-pneus",
    text: "PNEUS AF MUNDIAL",
    src: "menu secundario af",
    alt: "Navegação Pneu AF Mundial",
  },
  {
    href: "/produtos/peças",
    text: "PEÇAS",
    src: "menu secundario pecas",
    alt: "Navegação Peças",
  },
  {
    href: "/produtos/serviços",
    text: "SERVIÇOS",
    src: "menu secundario servico",
    alt: "Navegação Serviços",
  },
];

export default function SecondaryNav() {
  return (
    <nav
      id="secondary-nav"
      className={styles["background-container"]}
      aria-label="secundária"
    >
      <div className={styles["content-container"]}>
        {catalogos.map(({ href, text, src, alt }) => {
          return (
            <MenuCard
              href={href}
              text={text}
              src={"/img/" + src + ".png"}
              alt={alt}
              key={text}
            />
          );
        })}
      </div>
    </nav>
  );
}
