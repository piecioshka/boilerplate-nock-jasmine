const { ExampleService } = require("./services/example");

async function main() {
  const data = await ExampleService.fetchProducts();
  console.log(data);
}

main().catch(console.error);
