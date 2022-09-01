import React from 'react';
import { HomeScreen } from '../screen/Home';
import { DetailScreen } from '../screen/Detail';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList, RouteScreen } from './Types';

export const RootStack = createStackNavigator<HomeStackParamList>();

function StackNavigator() {
    return (
        <RootStack.Navigator initialRouteName={RouteScreen.Home}>
            <RootStack.Screen 
            name={RouteScreen.Home} 
            options={{headerShown: false}}
            component={HomeScreen} />
            <RootStack.Screen name={RouteScreen.Detail} component={DetailScreen} />
        </RootStack.Navigator>
    );
}
export default StackNavigator;
// import { StackScreenProps } from '@react-navigation/stack';

// type RootStackParamList = {
//   Home: undefined;
//   Profile: { userId: string };
//   Feed: { sort: 'latest' | 'top' } | undefined;
// };

// type Props = StackScreenProps<RootStackParamList, 'Profile'>;