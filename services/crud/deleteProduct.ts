import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function deleteProduct(category: string, docId: string) {
  const docRef = doc(db, category, docId);
  await deleteDoc(docRef);
}
