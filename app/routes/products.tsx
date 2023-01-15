import { Card, EmptyState, Page } from '@shopify/polaris';
import AppFrame from '~/components/AppFrame';

export default function Products() {
  return (
    <AppFrame>
      <Page title="Products">
        <Card sectioned>
          <EmptyState
            heading="Manage your products"
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          />
        </Card>
      </Page>
    </AppFrame>
  );
}
