import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('first test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain('Hello there!');
    ReactDOM.unmountComponentAtNode(div);
});
