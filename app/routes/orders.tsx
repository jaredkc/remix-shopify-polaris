import { Card, EmptyState, Page } from '@shopify/polaris';
import AppFrame from '~/components/AppFrame';

export default function Orders() {
  return (
    <AppFrame>
      <Page title="Orders">
        <Card>
          <EmptyState
            heading="Manage your orders"
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          />
        </Card>
      </Page>
    </AppFrame>
  );
}
