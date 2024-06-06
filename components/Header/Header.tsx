import Logo from "@/components/Logo/Logo";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./Header.module.css";
import Hamburguer from "../Hamburguer/Hamburguer";
import NavLink from "../NavLink/NavLink";

// TODO: Links no Header
export default function Header() {
  return (
    <header className={styles["background-container"]}>
      <div className={styles["main-container"]}>
        <Logo width={50} height={44} priority />
        <Hamburguer>
          <ul className={styles["column-container"]}>
            <li>
              <LinkButton
                visual="clean"
                style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
                href="/#secondary-nav"
              >
                Pneus
              </LinkButton>
            </li>
            <li>
              <LinkButton
                visual="clean"
                style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
                href="./"
              >
                Peças
              </LinkButton>
            </li>
            <li>
              <LinkButton
                visual="clean"
                style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
                href="./"
              >
                Serviços
              </LinkButton>
            </li>
            <li>
              <LinkButton
                visual="clean"
                style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
                href="/contato"
              >
                Contato
              </LinkButton>
            </li>
            <li>
              <LinkButton
                visual="outline"
                style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
                href="./"
              >
                Fale com um atendente
              </LinkButton>
            </li>
          </ul>
        </Hamburguer>
        <NavLink />
      </div>
    </header>
  );
}
