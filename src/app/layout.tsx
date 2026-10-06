import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Providers } from "./providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo App",
  description: "Browse and search our product catalogue.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
