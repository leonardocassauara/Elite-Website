import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default async function readCategory(category: string) {
  const querySnapshot = await getDocs(collection(db, category));
  const dataArray = querySnapshot.docs.map((doc) => {
    return { id: doc.id, data: doc.data() };
  });
  return dataArray; // [ {}, {id: id, data: {} }, {}, ... ]
}
