import { useState, useCallback, useMemo } from 'react';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification as firebaseSendEmailVerification,
} from 'firebase/auth';
import { auth } from './index';


export function useSignUp(sendEmailVerification = false) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const signUp = useCallback(
    async (email, password, displayName, name, nickname, phone, gender, birthYear, birthMonth, birthDay, termsOfUse, termsOfPersonalInfo, termsOfAge) => {
      setIsLoading(true);
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
          name,
          phone
        );

        const { user } = userCredentials;

        // if (displayName && user) {
        //   await updateProfile(user, { displayName });
        // }

        if (sendEmailVerification && user) {
          await firebaseSendEmailVerification(user);
        }

        setUser(user);
        return user;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [sendEmailVerification]
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
      signUp,
    }),
    [isLoading, error, user, signUp]
  );
}