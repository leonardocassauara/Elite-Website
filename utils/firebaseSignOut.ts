import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";

export default async function firebaseSignOut() {
  try {
    await signOut(auth);
  } catch (e: any) {
    console.error("Falha: erro ao deslogar.");
  }
}
