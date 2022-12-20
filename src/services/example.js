require("isomorphic-fetch");

const productsUrl = "https://fakes.piecioshka.io/products";

class ExampleService {
  static async fetchProducts() {
    const resposne = await fetch(productsUrl);
    return resposne.json();
  }
}

module.exports = { ExampleService };
