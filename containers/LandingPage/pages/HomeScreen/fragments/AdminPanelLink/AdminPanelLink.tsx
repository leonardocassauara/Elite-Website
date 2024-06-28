"use client";

import useByAuth from "@/hooks/useByAuth";
import Link from "next/link";
import Image from "next/image";
import styles from "./AdminPanelLink.module.css";

export default function AdminPanelLink() {
  const isUserAuthenticated = useByAuth();
  if (isUserAuthenticated)
    return (
      <Link href="/painel" className={styles["admin-edit-link"]}>
        <Image src="/svg/edit.svg" alt="" width={24} height={24} />
      </Link>
    );
  return null;
}
