
import { makeAutoObservable } from 'mobx';

class ProductStore {
  title = '';
  price = '';
  stockQuantity = '';
  description = '';
  message = '';

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(title) {
    this.title = title;
  }

  setPrice(price) {
    this.price = price;
  }

  setStockQuantity(stockQuantity) {
    this.stockQuantity = stockQuantity;
  }

  setDescription(description) {
    this.description = description;
  }

  setMessage(message) {
    this.message = message;
  }

  validateForm() {
    return this.title && this.price && this.stockQuantity && this.description;
  }

  async submitForm() {
    if (!this.validateForm()) {
      this.setMessage('All fields are required.');
      return;
    }

    // Simulate an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.setMessage('Product created successfully!');
    } catch (error) {
      this.setMessage('Error creating product.');
    }
  }
}

const productStore = new ProductStore();
export default productStore;
