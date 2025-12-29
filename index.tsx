
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@fontsource/dancing-script/700.css'
import '@fontsource/unna/400.css'
import '@fontsource/unna/700.css'
import '@fontsource/unna/400-italic.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/900.css'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
