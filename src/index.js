import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { withPolaris } from './polaris-config';
import '@shopify/polaris/build/esm/styles.css';

const PolarisApp = withPolaris(App);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<PolarisApp />);
