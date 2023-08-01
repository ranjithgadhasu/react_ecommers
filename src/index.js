import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-7jgbxya25t1rcpat.us.auth0.com"
  clientId="qtBYq0VzuhyQmpU5JVz5QHx1FlnkrEsM"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
</Auth0Provider>
);


