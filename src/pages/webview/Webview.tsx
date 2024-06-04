import React from 'react';
import {WebView} from 'react-native-webview';

export const Webview = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{uri: 'https://www.google.com'}}
      style={{flex: 1}}
    />
  );
};
