import { Card, Text, Page, VerticalStack } from '@shopify/polaris';
import FaqList from '~/components/FaqList';

export interface Item {
  id: number;
  text: string;
}

export default function ProductMetafields() {

  return (
    <Page
      title="Product metafields"
      backAction={{ content: 'Products', url: '/products' }}
    >
      <VerticalStack gap={'500'}>
        <Card>
          <VerticalStack gap={'500'}>
            <Text as="h2" variant="headingMd">
              Product FAQ's
            </Text>
            <FaqList />
          </VerticalStack>
        </Card>
        <Card>
          <Text as="h2" variant="headingMd">
            More metafields to come
          </Text>
        </Card>
      </VerticalStack>
    </Page>
  );
}
