import React, { useRef } from 'react';
import { Alert, Button, SafeAreaView, View } from 'react-native';
import { Platform } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import RNFetchBlob from 'rn-fetch-blob';

const source = (Platform.OS == 'ios') ? require('../navermap/maps.js.ncp-master/examples/map/1-map-simple.html') : { uri: 'file:///android_asset/naver/maps.js.ncp-master/examples/map/1-map-simple.html' }

export function NaverMapScreen() {
    // RNFetchBlob.fs
    // .stat('file:///Users/taegyeong-won/VoteCalendarApp/navermap/maps.js.ncp-master/examples/map/1-map-simple.html') // Relative path obtained from document picker
    //      .then(stats => {
    //        console.log(stats);
    //       var str1 = "file://";
    //       var str2 = stats.path;
    //       var correctpath = str1.concat(str2);
    //       console.log(correctpath);
    // })
    // .catch(err => {
    // console.log(err);
    // });

    let webRef = useRef<WebView>(null);

    const sendLocationToWebview = () => {
        webRef.current?.postMessage(JSON.stringify(
            {
                action:'sendLocation',
                data:{
                    lat:'37.520884',
                    lon:'126.930118'
                }
            }
        ));
    }
    const onReceive = (event: WebViewMessageEvent) => {
        Alert.alert('received', event.nativeEvent.data);
    }
    return (
        <SafeAreaView style={{flex:1, alignItems: 'stretch'}}>
            <WebView 
                originWhitelist={["*"]}
                ref={webRef}
                onMessage={onReceive}
                source={source} 
                javaScriptEnabled={true}
                automaticallyAdjustContentInsets={false}
            />
            <Button title={'좌표전송'} onPress={sendLocationToWebview} />
        </SafeAreaView>
    )
}