import { Form } from '@remix-run/react';
import { Card, Page, Stack, TextField } from '@shopify/polaris';

export default function NewProduct() {
  return (
    <Page
      title="New product"
      breadcrumbs={[{ content: 'Products', url: '/products' }]}
    >
      <Form method="post">
        <Card sectioned>
          <Stack vertical>
            <TextField
              id="title"
              label="Title"
              type="text"
              autoComplete="off"
              requiredIndicator
            />
            <TextField
              id="description"
              label="Description"
              multiline={4}
              autoComplete="off"
            />
          </Stack>
        </Card>
      </Form>
    </Page>
  );
}
