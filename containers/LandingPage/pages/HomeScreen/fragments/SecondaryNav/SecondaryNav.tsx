import styles from "./SecondaryNav.module.css";
import MenuCard from "@/components/MenuCard/MenuCard";

export default function SecondaryNav() {
  return (
    <nav
      id="secondary-nav"
      className={styles["background-container"]}
      aria-label="secundária"
    >
      <div className={styles["content-container"]}>
        <MenuCard
          href="/produtos/remold"
          text="PNEUS REMOLD"
          src="/img/second menu.png"
          alt="Navegação Pneu Remold"
        />
        <MenuCard
          href="/produtos/dunlop"
          text="PNEUS DUNLOP"
          src="/img/second menu.png"
          alt="Navegação Pneu Dunlop"
        />
        <MenuCard
          href="/produtos/strong"
          text="PNEUS STRONG"
          src="/img/second menu.png"
          alt="Navegação Pneu Strong"
        />
        <MenuCard
          href="/produtos/peças"
          text="PEÇAS"
          src="/img/second menu.png"
          alt="Navegação Peças"
        />
        <MenuCard
          href="/produtos/serviços"
          text="SERVIÇOS"
          src="/img/second menu.png"
          alt="Navegação Serviços"
        />
      </div>
    </nav>
  );
}
