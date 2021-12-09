const nock = require("nock");

const { UserPanelComponent } = require("./example");

describe("Example", () => {
  nock("https://fakes.herokuapp.com/").get("/videos").reply(200, {
    foo: "bar",
  });

  it("component should fetch data via HTTP", async () => {
    const cmp = new UserPanelComponent();
    await cmp.sync();
    expect(cmp.data.foo).toEqual("bar");
  });
});
