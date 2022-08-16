import React from 'react';
import {Button, View} from 'react-native';
import { MainNavigationProps, RouteScreen } from '../navigation_type/Types';




export function HomeScreen({navigation}: MainNavigationProps) {
    return (
        <View>
            <Button 
                title="Detail 열기"
                onPress={() => navigation.navigate(RouteScreen.Detail)}
            />
        </View>
    );
}

