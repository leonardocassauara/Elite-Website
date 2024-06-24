"use client";

import Image from "next/image";
import styles from "./Hamburguer.module.css";
import LinkButton from "../LinkButton/LinkButton";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import includesTire from "@/utils/includesTire";

export default function Hamburguer() {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburguerRef = useRef<HTMLImageElement>(null);
  const pathName = usePathname();

  function handleClick() {
    setMenu((menu) => !menu);
  }

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    if (hamburguerRef.current)
      hamburguerRef.current.style.transform = menu
        ? "rotate(90deg)"
        : "rotate(0deg)";
  }, [menu]);

  return (
    <section className={styles["container"]} ref={menuRef} aria-label="menu">
      <Image
        src="/svg/Hamburguer.svg"
        width={24}
        height={24}
        alt="Menu hamburguer"
        sizes="(max-width: 768px) 24px, 0px"
        onClick={handleClick}
        style={{ transition: "0.5s" }}
        ref={hamburguerRef}
      />
      <nav
        className={styles["dropdown-menu-container"]}
        data-menu-active={menu}
        aria-label="primária"
      >
        <ul className={styles["column-container"]}>
          <li>
            <LinkButton
              visual="clean"
              href="/#secondary-nav"
              data-hamburguer-active={includesTire(pathName)}
              style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
            >
              Pneus
            </LinkButton>
          </li>
          <li>
            <LinkButton
              visual="clean"
              href="/produtos/peças"
              data-hamburguer-active={pathName == "/produtos/pe%C3%A7as"}
              style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
            >
              Peças
            </LinkButton>
          </li>
          <li>
            <LinkButton
              visual="clean"
              href="/produtos/serviços"
              data-hamburguer-active={pathName == "/produtos/servi%C3%A7os"}
              style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
            >
              Serviços
            </LinkButton>
          </li>
          <li>
            <LinkButton
              visual="clean"
              href="/contato"
              data-hamburguer-active={pathName == "/contato"}
              style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
            >
              Contato
            </LinkButton>
          </li>
          <li>
            <LinkButton
              visual="outline"
              href="https://api.whatsapp.com/send/?phone=5521968804228&text&type=phone_number&app_absent=0"
              style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
              target="_blank"
            >
              Fale com um atendente
            </LinkButton>
          </li>
        </ul>
      </nav>
    </section>
  );
}
