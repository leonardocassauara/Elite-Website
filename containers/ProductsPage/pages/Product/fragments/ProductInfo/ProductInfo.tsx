import Image from "next/image";
import styles from "./ProductInfo.module.css";
import LinkButton from "@/components/LinkButton/LinkButton";
import toTitle from "@/utils/toTitle";

type AppProps = {
  id: string;
};

// TODO: substituir mock pelo serviço da Firebase diagramado
export default function ProductInfo({ id }: AppProps) {
  const data = {
    id: id,
    name: "Pneu mock",
    price: "180",
    technical: {
      marca: "Mock",
      modelo: "Faker",
      medida: "225/70/15",
      largura: "225",
      altura: "70",
      aro: "15",
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      e: "e",
      f: "f",
    },
  };

  return (
    <section className={styles["background-container"]} aria-label={data.name}>
      <div className={styles["content-container"]}>
        <Image
          src="/img/product.png"
          alt=""
          width={460}
          height={662}
          className={styles["image"]}
        />
        <div className={styles["content-info-container"]}>
          <p className={styles["title"]}>{data.name.toUpperCase()}</p>
          <p className={styles["price"]}>
            {"R$ " + data.price.replace(".", ",")}
          </p>
          <LinkButton
            visual="solid"
            href="https://api.whatsapp.com/send/?phone=5521968804228&text&type=phone_number&app_absent=0"
          >
            FALE COM UM ATENDENTE
          </LinkButton>
        </div>
        <div className={styles["card-container"]}>
          {Object.entries(data.technical).map(([key, value], index) => {
            return (
              <div key={index} className={styles["card-item-container"]}>
                <p className={styles["card-key"]}>{toTitle(key)}</p>
                <p className={styles["card-value"]}>{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
