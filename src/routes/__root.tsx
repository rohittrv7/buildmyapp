import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-frost">
      <div className="max-w-lg rounded-2xl border border-glass-border bg-ink-soft/80 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-10">
        <span className="inline-block rounded-full border border-volt/30 bg-volt/10 px-3.5 py-1 font-mono text-xs text-volt">
          Page Not Found
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-frost sm:text-6xl">404</h1>
        <h2 className="mt-3 text-lg font-medium text-frost">Looking for a specific page?</h2>
        <p className="mt-2 text-sm text-frost-muted">
          Here are the main pages you can visit:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-volt px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-volt/90"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-glass-border bg-glass px-4 py-2 text-xs font-medium text-frost transition-colors hover:bg-frost/10"
          >
            Portfolio
          </Link>
          <Link
            to="/store"
            className="inline-flex items-center justify-center rounded-full border border-glass-border bg-glass px-4 py-2 text-xs font-medium text-frost transition-colors hover:bg-frost/10"
          >
            Store
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-glass-border bg-glass px-4 py-2 text-xs font-medium text-frost transition-colors hover:bg-frost/10"
          >
            Services
          </Link>
          <Link
            to="/process"
            className="inline-flex items-center justify-center rounded-full border border-glass-border bg-glass px-4 py-2 text-xs font-medium text-frost transition-colors hover:bg-frost/10"
          >
            Process
          </Link>
          {/* <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-glass-border bg-glass px-4 py-2 text-xs font-medium text-frost transition-colors hover:bg-frost/10"
          >
            Pricing
          </Link> */}
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full border border-glass-border bg-glass px-4 py-2 text-xs font-medium text-frost transition-colors hover:bg-frost/10"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BuildMyApp by Ravana — Independent App Developer" },
      {
        name: "description",
        content: "I build simple, fast and reliable mobile apps, websites and desktop software. Tell me your idea and I will build it.",
      },
      { name: "author", content: "Ravana" },
      { property: "og:title", content: "BuildMyApp by Ravana — Independent App Developer" },
      {
        property: "og:description",
        content: "I build simple, fast and reliable mobile apps, websites and desktop software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
