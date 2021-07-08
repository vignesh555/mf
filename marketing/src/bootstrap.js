import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    if(el){
        ReactDOM.render(<App/>, el)
    }
}

if(process.env.NODE_ENV === 'development'){
    if(document.querySelector('#_dev_marketing')){
        mount(document.querySelector('#_dev_marketing'))
    }
}

export { mount };
