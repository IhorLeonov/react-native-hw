import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

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

      dispatch(updateUserProfile(userData));
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

      dispatch(authStateChange({ stateChange: true }));
      dispatch(updateUserProfile(userData));
    }
  });
};

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authSignOut());

    console.log("Sign-out successful.");
  } catch (error) {
    console.log("Error.message", error.message);
  }
};
