"use client";

import Logo from "@/components/Logo/Logo";
import styles from "./Form.module.css";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ActionButton from "@/components/ActionButton/ActionButton";

const schema = z.object({
  userName: z.string().min(1, { message: "Campo obrigatório." }),
  password: z.string().min(6, { message: "Mínimo de 6 caracteres." }),
});

type FormDataProps = z.infer<typeof schema>;

// TODO: adicionar firebase auth no handleSubmit
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

  function handleSubmitForm(data: FormDataProps) {
    console.log(data);
  }

  return (
    <section className={styles["background-container"]}>
      <Image
        src="/img/login side banner.png"
        alt="Banner de login"
        width={700}
        height={1024}
        className={styles["image"]}
      />

      <div className={styles["content-container"]}>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className={styles["form"]}
        >
          <Logo width={80} height={74} />
          <div className={styles["form-field"]}>
            <label className={styles["label"]} htmlFor="userName">
              Usuário
            </label>
            <input
              className={styles["input"]}
              type="text"
              id="userName"
              placeholder="Usuário"
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
              {...register("password")}
            />
            {errors.password && (
              <p className={styles["error"]}>{errors.password.message}</p>
            )}
          </div>

          <ActionButton visual="solid" type="submit">
            ENTRAR
          </ActionButton>
        </form>
      </div>
    </section>
  );
}
