import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const config = { apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY, authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN, projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID, appId: import.meta.env.PUBLIC_FIREBASE_APP_ID };
export const firebaseReady = Object.values(config).every(Boolean);
export const db = firebaseReady ? getFirestore(getApps()[0] ?? initializeApp(config)) : null;
