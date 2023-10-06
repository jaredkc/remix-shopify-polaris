import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { Card, Page, VerticalStack } from '@shopify/polaris';

type Errors = {
  [key: string]: string | null;
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get('title');
  const description = formData.get('description');

  const errors: Errors = { title: null, description: null };

  if (typeof title !== 'string' || title.length === 0) {
    errors.title = 'Title is required';
  }
  if (typeof description !== 'string' || description.length === 0) {
    errors.description = 'Description is required';
  }

  return json({ errors });
}

export default function NewProduct() {
  const actionData = useActionData<typeof action>();

  return (
    <Page
      title="New product"
      backAction={{ content: 'Products', url: '/products' }}
    >
      <Card>
        <Form method="post">
          <VerticalStack>
            <p>
              <label>
                Title:{' '}
                {actionData?.errors.title ? (
                  <em>{actionData.errors.title}</em>
                ) : null}
              </label>
              <br />
              <input type="text" name="title" id="title" />
            </p>
            <p>
              <label>
                Description:{' '}
                {actionData?.errors.description ? (
                  <em>{actionData.errors.description}</em>
                ) : null}
              </label>
              <br />
              <textarea name="description" id="description" />
            </p>
            <button type="submit">Submit</button>
          </VerticalStack>
        </Form>
      </Card>
    </Page>
  );
}
