import { ComponentProps } from "@/@types";

import { AlertProvider } from "./alert";
import { InternationalizationProvider } from "./internationalization";
import { LoadingProvider } from "./loading";
import { ModalProvider } from "./modal";
import { ResponsiveProvider } from "./responsive";

export default function AppProvider({ children }: ComponentProps) {
  return (
    <InternationalizationProvider>
       <ResponsiveProvider>
          <LoadingProvider>
          <AlertProvider>
            <ModalProvider>
              {children}
            </ModalProvider>
          </AlertProvider>
        </LoadingProvider>
      </ResponsiveProvider>
    </InternationalizationProvider>
  );
}
