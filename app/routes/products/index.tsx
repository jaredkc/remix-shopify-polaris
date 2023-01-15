import { Button, Card, EmptyState, Page } from '@shopify/polaris';

export default function Products() {
  return (
    <Page
      title="Products"
      primaryAction={
        <Button primary url="/products/new">
          Create product
        </Button>
      }
    >
      <Card sectioned>
        <EmptyState
          heading="Manage your products"
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        />
      </Card>
    </Page>
  );
}
