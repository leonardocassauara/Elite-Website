import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

type Data = {
  name: string;
  price: string;
  technical: { a: string };
};

export default async function createProduct(category: string, product: Data) {
  const docRef = await addDoc(collection(db, category), product);
}
