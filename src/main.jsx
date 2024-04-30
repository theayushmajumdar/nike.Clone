import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import Store from './app/Store.js';
import { Toaster } from 'react-hot-toast';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-1mck1hxqz0gqamdl.us.auth0.com"
    clientId="th2G0k39CxccyIADZeAPXhVpyqlML8FM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={Store}>
    <Toaster position='top-center' reverseOrder={false} />
    <App/>
    </Provider>
  </Auth0Provider>,
    
  
)
