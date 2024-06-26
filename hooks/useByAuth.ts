import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useByAuth = () => {
  const [user, setUser] = useState<boolean | null>(null);

  useEffect(() => {
    const isAuth = onAuthStateChanged(auth, (user) => {
      setUser(user ? true : false);
    });
    return () => isAuth();
  }, []);

  return user;
};

export default useByAuth;
