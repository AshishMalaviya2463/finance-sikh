declare global {
  interface Window {
    financesikhCookie?: {
      openSettings: (trigger?: HTMLElement | null) => void;
      closeSettings: () => void;
    };
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}
export {};
