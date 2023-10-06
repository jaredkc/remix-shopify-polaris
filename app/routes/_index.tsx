import { Card, EmptyState, Page } from '@shopify/polaris';
import AppFrame from '~/components/AppFrame';

export default function Index() {
  return (
    <AppFrame>
      <Page title="Remix with Shopify Polaris">
        <Card>
          <EmptyState
            heading="Add your dashboard here"
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          />
        </Card>
      </Page>
    </AppFrame>
  );
}
