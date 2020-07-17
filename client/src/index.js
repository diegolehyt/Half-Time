import React from "react";
import ReactDOM from "react-dom";
import AuthProvider from "./Context/AuthContext";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="half-time.us.auth0.com"
    clientId="1Kgi7aIloxA7OOfbpsbmIDY49pZPsR2L"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
