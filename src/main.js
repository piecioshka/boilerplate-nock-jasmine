const { UserPanelComponent } = require("./components/example");

async function main() {
  const ui = new UserPanelComponent();
  await ui.sync();
  console.log(ui.data);
}

main().catch((err) => console.error(err.message));
