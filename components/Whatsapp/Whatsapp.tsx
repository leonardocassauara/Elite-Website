import Image from "next/image";
import Link from "next/link";
import styles from "./Whatsapp.module.css";

export default function Whatsapp() {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=5521968804228&text&type=phone_number&app_absent=0"
      className={styles["floating-button"]}
      target="_blank"
    >
      <Image
        src="/img/whatsapp.png"
        alt="Botão do WhatsApp"
        width={32}
        height={32}
      />
    </Link>
  );
}
