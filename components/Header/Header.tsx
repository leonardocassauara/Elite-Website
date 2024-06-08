import Logo from "@/components/Logo/Logo";
import styles from "./Header.module.css";
import Hamburguer from "../Hamburguer/Hamburguer";
import NavLink from "../NavLink/NavLink";

export default function Header() {
  return (
    <header className={styles["background-container"]}>
      <div className={styles["main-container"]}>
        <Logo width={50} height={44} priority />
        <Hamburguer />
        <NavLink />
      </div>
    </header>
  );
}
