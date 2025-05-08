
/// <reference types="vite/client" />

interface Window {
  gtag?: (
    command: string,
    action: string,
    params: {
      send_to?: string;
      [key: string]: any;
    }
  ) => void;
}
