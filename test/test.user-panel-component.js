'use strict';

const nock = require('nock');
const assert = require('assert');

const { UserPanelComponent } = require('../src/components/user-panel-component');

nock('http://www.example.com')
    .get('/')
    .reply(200, {
        foo: 'bar'
    });

it('component should fetch data via HTTP', async () => {
    const cmp = new UserPanelComponent();
    await cmp.sync();
    console.log(cmp.data);
    assert.equal(cmp.data.foo, 'baz');
});
