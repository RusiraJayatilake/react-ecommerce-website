import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../config/firebase";

export const signWithEmailService = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(result.user).then(() => {
    alert(`Please check your email and verify your account`);
  });

  return result;
};

export const signWithGoogleService = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  await sendEmailVerification(result.user).then(() => {
    alert("Please check your email and verify your account");
  });

  return result;
};
