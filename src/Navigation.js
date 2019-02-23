import {createStackNavigator} from "react-navigation";
import Home from "./Home";
import Details from "./Details";

export const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Details: Details
    },
    {
        initialRouteName: "Home"
    }
);