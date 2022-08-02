import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement('div',{
        id:'my-div',
    },[
        React.createElement('p',{},'Hello, World'),
        React.createElement('a',{
            href:'https://google.com',
        },'Google')
    ]),
    document.querySelector('#app'),
);