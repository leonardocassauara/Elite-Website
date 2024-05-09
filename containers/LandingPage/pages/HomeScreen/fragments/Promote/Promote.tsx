import Image from "next/image";
import styles from "./Promote.module.css";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";

export default function Promote() {
  return (
    <>
      <article className={styles["background-container"]}>
        <Image
          className={styles["image"]}
          src="/img/mid vertical banner.png"
          width={562}
          height={893}
          alt="Banner promocional secundário."
        />
        <section className={styles["layout-container"]}>
          <div className={styles["primary-content-container"]}>
            <p className={styles["pretitle"]}>PREMIUM</p>
            <h1 className={styles["title"]}>
              PRODUTOS DE ELITE A PREÇOS IRRESISTÍVEIS
            </h1>
            <p className={styles["description"]}>
              Pneus Premium da linha Dunlop e da linha Strong na medida certa
              para seu veículo, garantindo maior durabilidade e estabilidade nas
              pistas.
            </p>
            <div className={styles["buttons-container"]}>
              <Link
                href="./"
                className={
                  `${styles["link-button"]}` + " " + "focusable activable"
                }
              >
                DUNLOP
              </Link>
              <Link
                href="./"
                className={
                  `${styles["link-button"]}` + " " + "focusable activable"
                }
              >
                STRONG
              </Link>
            </div>
          </div>

          <div className={styles["vantages-container"]}>
            <section className={styles["vantage"]}>
              <Icon path="selo" width={32} height={32} alt="Ícone de selo" />
              <h3 className={styles["vantage-title"]}>Qualidade</h3>
              <p className={styles["vantage-description"]}>
                Sabemos o quão importante é o seu veículo, por isso trabalhamos
                apenas com produtos de renome.
              </p>
            </section>
            <section className={styles["vantage"]}>
              <Icon
                path="cifrao"
                width={32}
                height={32}
                alt="Ícone de cifrão"
              />
              <h3 className={styles["vantage-title"]}>Preço Baixo</h3>
              <p className={styles["vantage-description"]}>
                Somos referência em preço baixo. Prezamos por uma experiência
                flexível aos nossos clientes.
              </p>
            </section>
          </div>
        </section>
      </article>
    </>
  );
}
