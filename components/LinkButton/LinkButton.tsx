import Link from "next/link";
import styles from "./LinkButton.module.css";

type AppProps = {
  children: React.ReactNode;
  visual: "solid" | "clean" | "outline";
  href: string;
  [props: string]: any;
};

export default function LinkButton({
  href,
  visual,
  children,
  ...props
}: AppProps) {
  return (
    <Link
      className={`${styles["all"]} ${styles[visual]}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
