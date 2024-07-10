// src/components/ProductForm.js
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, FormLayout, TextField, Button, Card, Layout, Page, Banner } from '@shopify/polaris';
import productStore from './ProductStore';

const ProductForm = observer(() => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    await productStore.submitForm();
  };

  return (
    <Page>
      <Layout>
        <Layout.Section>
          {productStore.message && (
            <Banner status={productStore.message.includes('successfully') ? 'success' : 'critical'}>
              {productStore.message}
            </Banner>
          )}
          <Card sectioned>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  label="Title"
                  value={productStore.title}
                  onChange={(value) => productStore.setTitle(value)}
                  autoComplete="off"
                />
                <TextField
                  label="Price"
                  type="number"
                  value={productStore.price}
                  onChange={(value) => productStore.setPrice(value)}
                  autoComplete="off"
                />
                <TextField
                  label="Stock Quantity"
                  type="number"
                  value={productStore.stockQuantity}
                  onChange={(value) => productStore.setStockQuantity(value)}
                  autoComplete="off"
                />
                <TextField
                  label="Description"
                  multiline
                  value={productStore.description}
                  onChange={(value) => productStore.setDescription(value)}
                  autoComplete="off"
                />
                <Button submit primary>
                  Create Product
                </Button>
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
});

export default ProductForm;
