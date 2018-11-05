import { createStackNavigator } from "react-navigation";
import Home from "./home/Home";

export default Navigation = createStackNavigator(
  {
    Home: {screen: Home},
    // News: {screen: News},
    // NewsDetail: {screen: NewsDetail}
  },
  {
    initialRouteName: 'Home',
  }
);