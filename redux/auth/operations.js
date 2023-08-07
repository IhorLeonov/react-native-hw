import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;

      console.log("CurrentUser", user);

      await updateProfile(user, {
        displayName: login,
      });

      const { uid, displayName } = await auth.currentUser;

      const userData = { userId: uid, login: displayName };

      console.log("UserData", userData);

      dispatch(authSlice.actions.updateUserProfile(userData));
    } catch (error) {
      console.log("Error.message", error.message);
      console.log("Error", error);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return credentials.user;
    } catch (error) {
      console.log("Error.message", error.message);
      // console.log("Error", error);
    }
  };

export const authStateChanged = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
    }
  });
};

export const authSignOutUser = () => async (dispatch, getState) => {};
