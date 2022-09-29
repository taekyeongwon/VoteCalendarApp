import React from 'react';
import { Platform } from 'react-native';
import WebView from 'react-native-webview';

// const source = (Platform.OS == 'ios') ? require('../static_web/html/index.html') : { uri: 'file:///android_asset/html/index.html' }
const sourceUri = (
    Platform.OS === 'android' 
      ? 'file:///android_asset/' 
      : ''
  ) + 'Web.bundle/html/index.html';

export function HtmlScreen() {
    return (
        <WebView 
            originWhitelist={["*"]}
            source={{uri:sourceUri}}
            javaScriptEnabled={true}
        />
    )
}