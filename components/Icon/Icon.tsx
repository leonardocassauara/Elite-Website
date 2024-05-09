import Image from "next/image";
import styles from "./Icon.module.css";

type AppProps = {
  path: string;
  width: number;
  height: number;
  alt: string;
};

export default function Icon({ path, width, height, alt }: AppProps) {
  return (
    <>
      <Image
        src={"/svg/" + path + ".svg"}
        width={width}
        height={height}
        alt={alt}
        className={styles["icon"]}
      />
    </>
  );
}
