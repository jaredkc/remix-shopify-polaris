import { useMatches, useNavigation } from '@remix-run/react';
import { Frame, Loading, Navigation, TopBar } from '@shopify/polaris';
import { useCallback, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const AppFrame = ({ children }: Props) => {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  // const [active, setActive] = useState(false);
  const navigation = useNavigation();
  const matches = useMatches();
  const { pathname } = matches[matches.length - 1];

  // const toggleActive = useCallback(() => setActive((active) => !active), []);

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

  // const toastMarkup = active ? (
  //   <Toast content="Message sent" onDismiss={toggleActive} />
  // ) : null;

  return (
    <div>
      <Frame
        logo={logo}
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
      >
        {navigation.state !== 'idle' ? <Loading /> : null}
        {children}
        {/* <Button onClick={toggleActive}>Show Toast</Button>
        {toastMarkup} */}
      </Frame>
    </div>
  );
};

export default AppFrame;
