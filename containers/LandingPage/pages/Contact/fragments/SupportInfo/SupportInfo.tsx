import Image from "next/image";
import styles from "./SupportInfo.module.css";
import Link from "next/link";

export default function SupportInfo() {
  return (
    <section aria-labelledby="title">
      <div className={styles["background-container"]}>
        <div className={styles["content-container"]}>
          <div className={styles["text-container"]}>
            <p className={styles["pretitle"]}>SUPORTE</p>
            <h1 id="title" className={styles["title"]}>
              NOS CONTATE SEMPRE QUE PRECISAR
            </h1>
            <p className={styles["description"]}>
              Surgiu alguma dúvida sobre algum serviço ou produto? Não hesite em
              nos contatar.
            </p>
            <Link
              href="https://api.whatsapp.com/send/?phone=5521968804228&text&type=phone_number&app_absent=0"
              className={
                `${styles["link-button"]}` + " " + "focusable activable"
              }
              target="_blank"
            >
              FALE COM UM ATENDENTE
            </Link>
            <div className={styles["information-container"]}>
              <div className={styles["information"]}>
                <Image
                  src="/svg/telefone.svg"
                  alt="Ícone de telefone"
                  width={24}
                  height={24}
                />
                <p className={styles["information-text"]}>(21) 99918-5480</p>
              </div>
              <div className={styles["information"]}>
                <Image
                  src="/svg/telefone.svg"
                  alt="Ícone de telefone"
                  width={24}
                  height={24}
                />
                <p className={styles["information-text"]}>(21) 96880-4228</p>
              </div>
              <div className={styles["information"]}>
                <Image
                  src="/svg/instagram-p.svg"
                  alt="Ícone do Instagram"
                  width={24}
                  height={24}
                />
                <p className={styles["information-text"]}>@eliteautocenter</p>
              </div>
              <div className={styles["information"]}>
                <Image
                  src="/svg/email.svg"
                  alt="Ícone de email"
                  width={24}
                  height={24}
                />
                <p className={styles["information-text"]}>
                  Masautopneus@gmail.com
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/img/contact.png"
            alt="Decoração"
            className={styles["image"]}
            width={456}
            height={696}
          />
        </div>
      </div>
    </section>
  );
}
