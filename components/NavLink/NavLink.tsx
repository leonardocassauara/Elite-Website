"use client";

import styles from "./NavLink.module.css";
import LinkButton from "../LinkButton/LinkButton";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const pathName = usePathname();

  return (
    <nav className={styles["nav-container"]}>
      <ul className={styles["row-container"]}>
        <li>
          <LinkButton
            visual="clean"
            href="/#secondary-nav"
            data-active={pathName == "/pneus"}
            style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
          >
            Pneus
          </LinkButton>
        </li>
        <li>
          <LinkButton
            visual="clean"
            href="./"
            data-active={pathName == "./"}
            style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
          >
            Peças
          </LinkButton>
        </li>
        <li>
          <LinkButton
            visual="clean"
            href="./"
            data-active={pathName == "./"}
            style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
          >
            Serviços
          </LinkButton>
        </li>
        <li>
          <LinkButton
            visual="clean"
            href="/contato"
            data-active={pathName == "/contato"}
            style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
          >
            Contato
          </LinkButton>
        </li>
        <li>
          <LinkButton
            visual="outline"
            href="/"
            style={{ padding: "0.375rem 0.75rem" }}
          >
            Fale com um atendente
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
}