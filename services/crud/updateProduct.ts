import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

type Data = {
  name: string;
  price: string;
  technical: { a: string };
};

export default async function readProduct(
  category: string,
  docId: string,
  updatedData: Data
) {
  const docRef = doc(db, category, docId);
  await updateDoc(docRef, updatedData);
}
