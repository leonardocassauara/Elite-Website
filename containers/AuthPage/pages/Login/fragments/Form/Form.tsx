"use client";

import Logo from "@/components/Logo/Logo";
import styles from "./Form.module.css";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ActionButton from "@/components/ActionButton/ActionButton";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner/Spinner";

const schema = z.object({
  userName: z.string().min(1, { message: "Campo obrigatório." }),
  password: z.string().min(6, { message: "Mínimo de 6 caracteres." }),
});

type FormDataProps = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAuth = onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
    return () => isAuth();
  }, [loading]);

  async function handleSubmitForm(data: FormDataProps) {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.userName, data.password);
    } catch (e: any) {
      console.error("Falha: credenciais de login inválidas.");
      setWrongCredentials(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles["background-container"]}>
      <Image
        src="/img/login side banner.png"
        alt="Banner de login"
        width={700}
        height={650}
        className={styles["image"]}
      />

      <div className={styles["content-container"]}>
        {loading && (
          <div className={styles["spinner"]}>
            <Spinner />
          </div>
        )}
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className={styles["form"]}
        >
          <Logo width={80} height={74} clickable={false} />
          <div className={styles["form-field"]}>
            <label className={styles["label"]} htmlFor="userName">
              Usuário
            </label>
            <input
              className={styles["input"]}
              type="text"
              id="userName"
              placeholder="Usuário"
              autoComplete="username"
              {...register("userName")}
            />
            {errors.userName && (
              <p className={styles["error"]}>{errors.userName.message}</p>
            )}
          </div>

          <div className={styles["form-field"]}>
            <label className={styles["label"]} htmlFor="password">
              Senha
            </label>
            <input
              className={styles["input"]}
              type="password"
              id="password"
              placeholder="Senha"
              autoComplete="current-password"
              {...register("password")}
            />
            {errors.password && (
              <p className={styles["error"]}>{errors.password.message}</p>
            )}
          </div>
          {wrongCredentials && (
            <p className={styles["error"]}>Usuário ou senha inválidos.</p>
          )}
          <ActionButton visual="solid" type="submit" disabled={loading}>
            ENTRAR
          </ActionButton>
        </form>
      </div>
    </section>
  );
}
