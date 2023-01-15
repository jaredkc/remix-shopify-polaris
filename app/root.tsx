import type { MetaFunction } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { AppProvider } from '@shopify/polaris';
import type { LinkLikeComponentProps } from '@shopify/polaris/build/ts/latest/src/utilities/link/types';
import enTranslations from '@shopify/polaris/locales/en.json';

import styles from '@shopify/polaris/build/esm/styles.css';
import variables from '~/styles/variables.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: variables },
  ];
}

function LinkWrapper(props: LinkLikeComponentProps) {
  const { children, url, ...rest } = props;

  return (
    // TODO: fix type conflix with LegacyRef and Ref between Remix and Polaris
    <Link to={url} {...rest}>
      {children}
    </Link>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AppProvider i18n={enTranslations} linkComponent={LinkWrapper}>
          <Outlet />
        </AppProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
