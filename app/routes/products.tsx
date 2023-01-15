import { Outlet } from 'react-router';
import AppFrame from '~/components/AppFrame';

export default function Products() {
  return (
    <AppFrame>
      <Outlet />
    </AppFrame>
  );
}
