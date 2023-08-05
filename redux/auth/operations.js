import { auth } from "../../firebase/config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export const authSignUpUser = async ({ email, password, login }) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

// export const authSignUpUser = ({ email, password }) =>
//   createUserWithEmailAndPassword(auth, email, password);

export const authSignInUser =
  () =>
  async ({ email, password }) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("user", credentials.user);
      return credentials.user;
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {};
