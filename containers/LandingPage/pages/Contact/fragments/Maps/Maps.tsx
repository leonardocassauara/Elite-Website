import Title from "@/components/Title/Title";
import styles from "./Maps.module.css";
import Image from "next/image";

const cards = [
  {
    address: "Av. Areia Branca, 2080 - Santa Cruz, Rio de Janeiro",
    phone: "(21) 9 9999-9999",
    frameURL:
      "pb=!1m18!1m12!1m3!1d3674.1747348603944!2d-43.68554972483787!3d-22.943791079229037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfa7887178f49%3A0x56f0839bb734b81c!2sElite%20Auto%20Center!5e0!3m2!1spt-BR!2sbr!4v1717950612229!5m2!1spt-BR!2sbr",
  },
  {
    address:
      "Av. Padre Guilherme Decaminada, 1170 - Santa Cruz, Rio de Janeiro",
    phone: "(21) 9 9999-9999",
    frameURL:
      "pb=!1m18!1m12!1m3!1d3675.315900186572!2d-43.68351892483925!3d-22.90171627925867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfb29ffb9e52b%3A0x4d48fafc2460dd77!2sElite%20Auto%20Center!5e0!3m2!1spt-BR!2sbr!4v1717949712655!5m2!1spt-BR!2sbr",
  },
];

export default function Maps() {
  return (
    <section
      className={styles["background-container"]}
      aria-label="Nossas unidades"
    >
      <div className={styles["content-container"]}>
        <Title text="NOS VISITE" pseudo color="#ffffff" />
        <div className={styles["cards-container"]}>
          {cards.map(({ address, phone, frameURL }, index) => {
            return (
              <div className={styles["card"]} key={index}>
                <iframe
                  src={"https://www.google.com/maps/embed?" + `${frameURL}`}
                  width="560"
                  height="390"
                  style={{ border: "0" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles["iframe"]}
                ></iframe>
                <div className={styles["pseudo-element-container"]}>
                  <div className={styles["card-information"]}>
                    <p className={styles["title"]}>{address}</p>
                    <div className={styles["card-description"]}>
                      <div className={styles["card-description-item"]}>
                        <Image
                          src="/svg/clock.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <div>
                          <p className={styles["card-description-text"]}>
                            Funcionamento:
                          </p>
                          <ul className={styles["card-description-opening"]}>
                            <li
                              className={
                                styles["card-description-opening-text"]
                              }
                            >
                              Segunda a sexta: 07:00 - 18:00
                            </li>
                            <li
                              className={
                                styles["card-description-opening-text"]
                              }
                            >
                              Sábado: 07:00 - 14:00
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={styles["card-description-item"]}>
                        <Image
                          src="/svg/telefone.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className={styles["card-description-text"]}>
                          {phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
