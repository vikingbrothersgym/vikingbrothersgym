import React from 'react';
import ReactDOM from 'react-dom/client';
import {NextUIProvider} from "@nextui-org/react";
import App from './App.jsx';
import "./index.css"
import '@fontsource-variable/exo-2';
import "./CSS/main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <NextUIProvider>
      <main className="">
        <App/>
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
