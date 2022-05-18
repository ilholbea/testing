import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch list of comments and display them', (done) => {
    const wrapped = mount(
      <Root>
          <App/>
      </Root>
    );

    wrapped.find('#fetch-comments').simulate('click');
    /* Option 1:
    setTimeout(() => {
        wrapped.update();

        expect(wrapped.find('li').length).toEqual(2);

        done();
        wrapped.unmount();
    }, 100);
     */

    // Option 2:
    // eslint-disable-next-line testing-library/await-async-utils
    moxios.wait(() => {
        wrapped.update();

        expect(wrapped.find('li').length).toEqual(2);

        done();
        wrapped.unmount();
    });
});
