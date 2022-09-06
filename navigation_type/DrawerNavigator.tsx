import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import { MainNavigationProps, RouteScreen } from './Types';
import CalendarComp from '../screen/Calendar';

const RootDrawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <RootDrawer.Navigator 
        initialRouteName={RouteScreen.Main}
        drawerContent={
            (props) => <CustomDrawerContent {...props} />
        }
        screenOptions={{headerShown: false}}
        >
            <RootDrawer.Screen name={RouteScreen.Main} component={StackNavigator} />
            <RootDrawer.Screen name={RouteScreen.Calendar} component={CalendarComp} />
        </RootDrawer.Navigator>
    );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
    // console.log(props);
    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem label="Main" onPress={() => console.log("test")}/>
            <DrawerItem label="Main" onPress={() => console.log("test")}/>
        </DrawerContentScrollView>
    )
}

export default DrawerNavigator;