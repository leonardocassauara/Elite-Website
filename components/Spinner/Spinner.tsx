import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div>
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
