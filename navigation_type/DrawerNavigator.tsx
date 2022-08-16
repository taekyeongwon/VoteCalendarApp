import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import { RouteScreen } from './Types';
import CalendarComp from '../screen/Calendar';

const RootDrawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <RootDrawer.Navigator initialRouteName={RouteScreen.Main}>
            <RootDrawer.Screen name={RouteScreen.Main} component={StackNavigator} />
            <RootDrawer.Screen name={RouteScreen.Calendar} component={CalendarComp} />
        </RootDrawer.Navigator>
    );
}

export default DrawerNavigator;