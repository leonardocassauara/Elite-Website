"use client";

import useByAuth from "@/hooks/useByAuth";
import styles from "./LoginSignOutButton.module.css";
import ActionButton from "../ActionButton/ActionButton";
import LinkButton from "../LinkButton/LinkButton";
import firebaseSignOut from "@/utils/firebaseSignOut";

export default function LoginSignOutButton() {
  const isUserAuthenticated = useByAuth();

  if (isUserAuthenticated)
    return (
      <ActionButton
        type="button"
        visual="clean"
        onClick={firebaseSignOut}
        className={
          `${styles["description-text"]} ` + `${styles["action-button"]}`
        }
      >
        Sair
      </ActionButton>
    );

  return (
    <LinkButton
      visual="clean"
      href="/login"
      className={styles["description-text"]}
    >
      Login
    </LinkButton>
  );
}
