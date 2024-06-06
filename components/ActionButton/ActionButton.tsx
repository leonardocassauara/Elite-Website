import styles from "./ActionButton.module.css";

type AppProps = {
  children: React.ReactNode;
  visual: "solid" | "clean" | "outline";
  onClick?: () => void;
  [props: string]: any;
};

export default function ActionButton({
  onClick,
  visual,
  children,
  ...props
}: AppProps) {
  return (
    <button
      className={`${styles["all"]} ${styles[visual]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
