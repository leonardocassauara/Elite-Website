"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./PaginationControls.module.css";

type AppProps = {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  category: string;
};

export default function PaginationControls({
  hasPreviousPage,
  hasNextPage,
  category,
}: AppProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? "1");
  const per_page = Number(searchParams.get("per_page") ?? "12");

  return (
    <div className={styles["controls-container"]}>
      <Image
        src="/svg/arrow next.svg"
        alt=""
        width={24}
        height={24}
        className={`${styles["inverted-arrow"]}` + " " + `${styles["image"]}`}
        onClick={() =>
          router.push(
            `./${category}?page=${Number(page) - 1}&per_page=${per_page}`
          )
        }
        data-disabled={!hasPreviousPage}
      />
      <p className={styles["page-number-text"]}>{page}</p>
      <Image
        src="/svg/arrow next.svg"
        alt=""
        width={24}
        height={24}
        className={styles["image"]}
        onClick={() =>
          router.push(
            `./${category}?page=${Number(page) + 1}&per_page=${per_page}`
          )
        }
        data-disabled={!hasNextPage}
      />
    </div>
  );
}
