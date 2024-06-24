import Image from "next/image";
import styles from "./Title.module.css";

type AppProps = {
  text: string;
  pseudo?: boolean;
  color: "#000000" | "#ffffff";
  [props: string]: any;
};

export default function Title({
  text,
  pseudo = false,
  color,
  ...props
}: AppProps) {
  if (pseudo)
    return (
      <div className={styles["pseudo-container"]}>
        <h1 className={styles["title"]} style={{ color: color }} {...props}>
          {text}
        </h1>
        <Image
          src="/svg/trail.svg"
          alt=""
          className={styles["pseudo"]}
          width={76}
          height={54}
        />
      </div>
    );
  else
    return (
      <>
        <h1 className={styles["title"]} style={{ color: color }}>
          {text}
        </h1>
      </>
    );
}
