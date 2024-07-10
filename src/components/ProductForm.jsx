import React from "react";
import { observer } from "mobx-react-lite";
import { Form, FormLayout, TextField, Button, Card, Layout, Page, Frame } from "@shopify/polaris";
import { productStore } from "./ProductStore";

function ProductForm() {
  function handleSubmit() {
    // Simulate API call
    setTimeout(function () {
      alert("Product created successfully!");
      productStore.resetForm();
    }, 1000);
  }

  return (
    <Frame>
      <Page>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <Form onSubmit={handleSubmit}>
                <FormLayout>
                  <TextField
                    label="Title"
                    value={productStore.title}
                    onChange={function (value) {
                      productStore.setTitle(value);
                    }}
                    autoComplete="off"
                  />
                  <TextField
                    label="Price"
                    type="number"
                    value={productStore.price}
                    onChange={function (value) {
                      productStore.setPrice(value);
                    }}
                    autoComplete="off"
                  />
                  <TextField
                    label="Stock Quantity"
                    type="number"
                    value={productStore.stockQuantity}
                    onChange={function (value) {
                      productStore.setStockQuantity(value);
                    }}
                    autoComplete="off"
                  />
                  <TextField
                    label="Description"
                    value={productStore.description}
                    onChange={function (value) {
                      productStore.setDescription(value);
                    }}
                    autoComplete="off"
                    multiline={4}
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
    </Frame>
  );
}

export default observer(ProductForm);
