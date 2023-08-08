import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;

      await updateProfile(user, {
        displayName: login,
      });

      const { uid, displayName } = await auth.currentUser;
      const userData = { userId: uid, login: displayName };

      dispatch(authSlice.actions.updateUserProfile(userData));
    } catch (error) {
      console.log("Error.message", error.message);
      // console.log("Error", error);
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

export const authStateChangeUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userData = { userId: user.uid, login: user.displayName };

      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
      dispatch(authSlice.actions.updateUserProfile(userData));
    }
  });
};

export const authSignOutUser = async () => {
  try {
    await signOut(auth);
    console.log("Sign-out successful.");
  } catch (error) {
    console.log("Error.message", error.message);
  }
};
