import Link from "next/link";
import FooterSection from "../FooterSection/FooterSection";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

// TODO: Links no Footer

export default function Footer() {
  const infos = [
    "Pneus Strong",
    "Pneus Remold",
    "Serviços",
    "Contato",
    "Peças",
  ];
  const contacts = [
    "+55 21 99999-9999",
    "contato@eliteautocenter.com",
    "Av. Areia Branca, 2080 - Santa Cruz",
    "Av. Padre Guilherme Decaminada, 1170 - Santa Cruz",
  ];

  return (
    <>
      <footer className={styles["background-container"]}>
        <div className={styles["main-container"]}>
          <div className={styles["logo"]}>
            <Logo width={120} height={114} />
          </div>
          <FooterSection title="CONTATO">
            {contacts.map((contact, index) => {
              if (index == 1 || index == 3)
                return (
                  <p
                    className={"paragraph-m" + " " + `${styles["pseudo"]}`}
                    key={index}
                  >
                    {contact}
                  </p>
                );
              else
                return (
                  <p className={"paragraph-m"} key={index}>
                    {contact}
                  </p>
                );
            })}
            <Link
              href="https://www.instagram.com/eliteautocenteroficial/?hl=pt-br"
              className={`${styles["icon-container"]}` + " " + "focusable"}
            >
              <Icon width={32} height={32} path="instagram" alt="Instagram" />
            </Link>
          </FooterSection>
          <FooterSection title="INFORMAÇÕES">
            {infos.map((info, index) => (
              <p className={"paragraph-m"} key={index}>
                {info}
              </p>
            ))}
          </FooterSection>
          <p className={"paragraph-m"} style={{ gridColumn: "1 / -1" }}>
            Elite Auto Center. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
