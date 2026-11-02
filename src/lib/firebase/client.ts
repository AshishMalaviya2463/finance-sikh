import { initializeApp, getApps } from 'firebase/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, ReCaptchaV3Provider } from 'firebase/app-check';
import { getFirestore } from 'firebase/firestore';
const config = { apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY, authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN, projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID, appId: import.meta.env.PUBLIC_FIREBASE_APP_ID };
export const firebaseReady = Object.values(config).every(Boolean);
const firebaseApp = firebaseReady ? getApps()[0] ?? initializeApp(config) : null;
const appCheckSiteKey = import.meta.env.PUBLIC_FIREBASE_APP_CHECK_SITE_KEY;
const appCheckProvider = import.meta.env.PUBLIC_FIREBASE_APP_CHECK_PROVIDER;

if (firebaseApp && appCheckSiteKey) {
  initializeAppCheck(firebaseApp, {
    provider: appCheckProvider === 'recaptcha-v3'
      ? new ReCaptchaV3Provider(appCheckSiteKey)
      : new ReCaptchaEnterpriseProvider(appCheckSiteKey),
    isTokenAutoRefreshEnabled: true,
  });
}

export const db = firebaseApp ? getFirestore(firebaseApp) : null;
