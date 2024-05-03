"use client";

import Image from "next/image";
import styles from "./Hamburguer.module.css";
import { useState } from "react";

type AppProps = {
  children: React.ReactNode;
};

export default function Hamburguer({ children }: AppProps) {
  const [menu, setMenu] = useState(false);

  function handleClick(event: any) {
    setMenu((menu) => !menu);
    event.target.style.transform = menu ? "rotate(0deg)" : "rotate(90deg)";
  }

  return (
    <div className={styles["container"]}>
      <Image
        src="/svg/Hamburguer.svg"
        width={24}
        height={24}
        alt="Menu hamburguer"
        sizes="(max-width: 768px) 24px, 0px"
        onClick={handleClick}
        style={{ transition: "0.5s" }}
      />
      {menu && (
        <nav className={styles["dropdown-menu-container"]}>{children}</nav>
      )}
    </div>
  );
}
