import React from 'react';
import {SafeAreaView, Button, View, NativeModules} from 'react-native';
import { MainNavigationProps, RouteScreen } from '../navigation_type/Types';

export function HomeScreen({navigation}: MainNavigationProps) {
    return (
        <SafeAreaView>
            <Button 
                title="Detail 열기"
                onPress={() => navigation.navigate(RouteScreen.Detail)}
            />
            <Button
                title = "native ui"
                onPress={() => NativeModules.TestModule.testMethod()}
            />
        </SafeAreaView>
    );
}

