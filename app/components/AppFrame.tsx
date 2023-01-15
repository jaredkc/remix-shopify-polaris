import { useMatches } from '@remix-run/react';
import { Frame, Navigation, TopBar } from '@shopify/polaris';
import { useCallback, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const AppFrame = ({ children }: Props) => {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const matches = useMatches();
  const {pathname} = matches[matches.length - 1];

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const userMenuActions = [
    {
      items: [{ content: 'hello@example.com' }],
    },
  ];

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name={'Username'}
      initials={'U'}
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const nav = [
    { label: 'Orders', url: '/orders' },
    { label: 'Product', url: '/products' },
    { label: 'Settings', url: '/settings' },
    { label: 'Statements', url: '/statements' },
  ];

  const navigationMarkup = (
    <Navigation location={pathname}>
      <Navigation.Section items={nav} />
    </Navigation>
  );

  const logo = {
    width: 200,
    topBarSource: '/app-logo.svg',
    contextualSaveBarSource: '/app-logo-light.svg',
    url: '/',
    accessibilityLabel: 'Remix with Shopify Polaris',
  };

  return (
    <div>
      <Frame
        logo={logo}
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
      >
        {children}
      </Frame>
    </div>
  );
};

export default AppFrame;
