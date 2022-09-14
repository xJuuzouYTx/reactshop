import React from "react";
import ReactDom from 'react-dom/client';
import App from './routes/App'

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);