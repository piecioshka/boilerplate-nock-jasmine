const { UserPanelComponent } = require('./components/user-panel-component');

async function main() {
    const cmp = new UserPanelComponent();
    await cmp.sync();
}

main().catch(err => console.error(err.message));
