/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

// import RootNavigator from './navigation_type/stack_types';
import DrawerNavigator from './navigation_type/DrawerNavigator';
import CalendarComp from './screen/Calendar';


const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        // <CalendarComp />
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
        // <SafeAreaView style={backgroundStyle}>
        //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        //     <ScrollView
        //         contentInsetAdjustmentBehavior="automatic"
        //         style={backgroundStyle}>
                
    //     </ScrollView>
    // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
