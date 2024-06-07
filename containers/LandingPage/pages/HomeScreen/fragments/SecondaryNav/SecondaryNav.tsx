import styles from "./SecondaryNav.module.css";
import MenuCard from "@/components/MenuCard/MenuCard";

export default function SecondaryNav() {
  return (
    <nav id="secondary-nav" className={styles["background-container"]}>
      <div className={styles["content-container"]}>
        <MenuCard
          href="./"
          text="PNEUS REMOLD"
          src="/img/second menu.png"
          alt="Navegação Pneu Remold"
        />
        <MenuCard
          href="./"
          text="PNEUS DUNLOP"
          src="/img/second menu.png"
          alt="Navegação Pneu Dunlop"
        />
        <MenuCard
          href="./"
          text="PNEUS STRONG"
          src="/img/second menu.png"
          alt="Navegação Pneu Strong"
        />
        <MenuCard
          href="./"
          text="PEÇAS"
          src="/img/second menu.png"
          alt="Navegação Peças"
        />
        <MenuCard
          href="./"
          text="SERVIÇOS"
          src="/img/second menu.png"
          alt="Navegação Serviços"
        />
      </div>
    </nav>
  );
}
