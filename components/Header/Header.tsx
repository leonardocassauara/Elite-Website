import Logo from "@/components/Logo/Logo";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import Hamburguer from "../Hamburguer/Hamburguer";

// TODO: Links no Header

export default function Header() {
  return (
    <header className={styles["background-container"]}>
      <div className={styles["main-container"]}>
        <Logo width={60} height={54} priority />
        <Hamburguer
          children={
            <ul className={styles["column-container"]}>
              <li>
                <Button text="Pneus" visual="clean" mode="link" href="./" />
              </li>
              <li>
                <Button text="Peças" visual="clean" mode="link" href="./" />
              </li>
              <li>
                <Button text="Serviços" visual="clean" mode="link" href="./" />
              </li>
              <li>
                <Button text="Contato" visual="clean" mode="link" href="./" />
              </li>
              <li>
                <Button
                  text="Fale com um atendente"
                  visual="outline"
                  mode="link"
                  href="./"
                  style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
                />
              </li>
            </ul>
          }
        />
        <nav className={styles["nav-container"]}>
          <ul className={styles["row-container"]}>
            <li>
              <Button
                text="Pneus"
                visual="clean"
                mode="link"
                href="./"
                style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
              />
            </li>
            <li>
              <Button
                text="Peças"
                visual="clean"
                mode="link"
                href="./"
                style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
              />
            </li>
            <li>
              <Button
                text="Serviços"
                visual="clean"
                mode="link"
                href="./"
                style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
              />
            </li>
            <li>
              <Button
                text="Contato"
                visual="clean"
                mode="link"
                href="./"
                style={{ padding: "0.375rem 0.75rem", whiteSpace: "nowrap" }}
              />
            </li>
            <li>
              <Button
                text="Fale com um atendente"
                visual="outline"
                mode="link"
                href="./"
                style={{ padding: "0.375rem 0.75rem" }}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
