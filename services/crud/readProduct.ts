import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function readProduct(category: string, docId: string) {
  const docRef = doc(db, category, docId);
  const docSnap = await getDoc(docRef);
  const formatedData = { id: docSnap.id, data: docSnap.data() };

  if (docSnap.exists()) return formatedData;
}
