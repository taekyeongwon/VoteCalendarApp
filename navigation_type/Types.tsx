import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export enum RouteScreen {
    Main = 'Main',
    Home = 'Home',
    Detail = 'Detail',
    Calendar = 'Calendar',
    Html = 'Html',
    NaverMap = 'NaverMap'
}

export type HomeStackParamList = {
    Home: undefined;
    Detail: undefined;
    Html: undefined;
    NaverMap: undefined;
}

export type MainDrawerParamList = {
    Main: undefined;
    Calendar: undefined;
}

export type HomeScreenRouteProp = RouteProp<HomeStackParamList, RouteScreen.Home>;
export type HomeScreenNavigationProp<T extends keyof HomeStackParamList = RouteScreen.Home> = StackNavigationProp<HomeStackParamList, T>;

export type MainDrawerNavigationProp<T extends keyof MainDrawerParamList = RouteScreen.Main> = DrawerNavigationProp<MainDrawerParamList, T>;

export type MainNavigationProps = {
    route: HomeScreenRouteProp;
    navigation: CompositeNavigationProp<HomeScreenNavigationProp, MainDrawerNavigationProp>;
}

