import { makeAutoObservable } from "mobx";

function createProductStore() {
    const store = {
      title: "",
      price: "",
      stockQuantity: "",
      description: "",
      setTitle: function (value) {
        this.title = value;
      },
      setPrice: function (value) {
        this.price = value;
      },
      setStockQuantity: function (value) {
        this.stockQuantity = value;
      },
      setDescription: function (value) {
        this.description = value;
      },
      resetForm: function () {
        this.title = "";
        this.price = "";
        this.stockQuantity = "";
        this.description = "";
      },
    };
    return makeAutoObservable(store);
  }
  
  export const productStore = createProductStore();