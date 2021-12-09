const nock = require("nock");
const { ExampleService } = require("./example");

describe("ExampleService", () => {
  it("should fetch products via HTTP", async () => {
    nock("https://fakes.herokuapp.com/")
      .get("/products")
      .reply(200, { foo: "bar" });
    const data = await ExampleService.fetchProducts();
    expect(data.foo).toEqual("bar");
  });
});
