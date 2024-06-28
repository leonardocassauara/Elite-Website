import Link from "next/link";
import FooterSection from "../FooterSection/FooterSection";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";
import ActionButton from "../ActionButton/ActionButton";
import LinkButton from "../LinkButton/LinkButton";
import LoginSignOutButton from "../LoginSignOutButton/LoginSignOutButton";

const infos = [
  { name: "Pneus Dunlop", href: "/produtos/dunlop" },
  { name: "Pneus Strong", href: "/produtos/strong" },
  { name: "Pneus Remold", href: "/produtos/remold" },
  { name: "Serviços", href: "/produtos/serviços" },
  { name: "Contato", href: "/contato" },
  { name: "Peças", href: "/produtos/peças" },
];
const contacts = [
  "+55 21 99999-9999",
  "contato@eliteautocenter.com",
  "Av. Areia Branca, 2080 - Santa Cruz",
  "Av. Padre Guilherme Decaminada, 1170 - Santa Cruz",
];

export default function Footer() {
  return (
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
                  className={
                    styles["description-text"] + " " + `${styles["pseudo"]}`
                  }
                  key={index}
                >
                  {contact}
                </p>
              );
            else
              return (
                <p className={styles["description-text"]} key={index}>
                  {contact}
                </p>
              );
          })}
          <Link
            href="https://www.instagram.com/eliteautocenteroficial/?hl=pt-br"
            className={`${styles["icon-container"]}` + " " + "focusable"}
            target="_blank"
          >
            <Icon width={32} height={32} path="instagram" alt="Instagram" />
          </Link>
        </FooterSection>
        <FooterSection title="INFORMAÇÕES">
          {infos.map(({ name, href }, index) => (
            <Link
              href={href}
              className={styles["description-text"]}
              key={index}
            >
              {name}
            </Link>
          ))}
          {<LoginSignOutButton />}
        </FooterSection>
        <p
          className={styles["description-text"]}
          style={{ gridColumn: "1 / -2" }}
        >
          Elite Auto Center. Todos os direitos reservados.
        </p>
        <p className={styles["description-text"]}>
          Site desenvolvido por{" "}
          <Link
            className={
              `${styles["description-text"]} ` + `${styles["inline-link"]}`
            }
            target="_blank"
            href="https://www.linkedin.com/in/leonardo-cassauara/"
          >
            Leonardo Cassauara.
          </Link>
        </p>
      </div>
    </footer>
  );
}
