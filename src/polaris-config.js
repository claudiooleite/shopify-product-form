import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import React from 'react';

export const withPolaris = (Component) => (props) => (
  <AppProvider i18n={enTranslations}>
    <Component {...props} />
  </AppProvider>
);