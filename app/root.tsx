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
import type { LinkLikeComponentProps } from '@shopify/polaris/build/ts/src/utilities/link/types';

import styles from '@shopify/polaris/build/esm/styles.css';
import variables from '~/styles/variables.css';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { charset: 'utf-8' },
    { title: 'New Remix App' },
    { viewport: 'width=device-width,initial-scale=1' },
  ];
};

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: variables },
  ];
}

/** @type {any} */
function LinkWrapper(props: LinkLikeComponentProps) {
  return (
    // TODO: fix type conflix with LegacyRef and Ref between Remix and Polaris
    <Link to={props.url ?? props.to} ref={props.ref} {...props}>
      {props.children}
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
        <AppProvider
          i18n={{
            Polaris: {
              ResourceList: {
                sortingLabel: 'Sort by',
                defaultItemSingular: 'item',
                defaultItemPlural: 'items',
                showing: 'Showing {itemsCount} {resource}',
                Item: {
                  viewItem: 'View details for {itemName}',
                },
              },
              Common: {
                checkbox: 'checkbox',
              },
            },
          }}
          linkComponent={LinkWrapper}
        >
          <Outlet />
        </AppProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
