import { createStackNavigator } from "react-navigation";
import Home from "./home/Home";
import NewsList from './news/NewsList';
// import NewsDetail from './news/NewsDetail';

const Navigation = createStackNavigator(
  {
    Home: {screen: Home},
    NewsList: {screen: NewsList},
    // NewsDetail: {screen: NewsDetail}
  },
  {
    initialRouteName: 'Home',
  }
);

export default Navigation;
