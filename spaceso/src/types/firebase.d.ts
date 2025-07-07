import { FirebaseApp, FirebaseOptions } from 'firebase/app';
import { Auth } from 'firebase/auth';

declare module '../../firebase' {
  export const app: FirebaseApp;
  export const auth: Auth;
  export const firebaseConfig: FirebaseOptions;
}
