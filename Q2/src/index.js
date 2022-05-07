import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import Server from "./server"



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

if(process.env.NODE_ENV === 'development'){  
  Server()
}

root.render(
  <App />
);
