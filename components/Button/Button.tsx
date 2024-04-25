import Link from "next/link";
import styles from "./Button.module.css";

type AppProps = {
  text: string;
  visual: "clean" | "outline" | "solid";
  mode: "button" | "link";
  href?: string;
  type?: "submit" | "button" | "reset";
  style?: object;
  onClick?: () => void;
};

export default function Button({
  text,
  visual,
  mode,
  href,
  type,
  onClick,
  style,
}: AppProps) {
  if (mode == "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${styles.button} ${styles[visual]}`}
        style={style}
      >
        {text}
      </button>
    );
  } else if (mode == "link" && href) {
    return (
      <Link
        href={href}
        className={`${styles.link} ${styles[visual]}`}
        style={style}
      >
        {text}
      </Link>
    );
  }
  return null;
}
