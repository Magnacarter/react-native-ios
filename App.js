import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ConmponentsScreen from "./src/screens/componentsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ConmponentsScreen
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
