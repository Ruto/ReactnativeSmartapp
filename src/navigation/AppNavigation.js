import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
//import Dashboard from '../screens/Dashboard'

const AppNavigation = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    Details: {screen: DetailsScreen }
   // Dashboard: { screen: Dashboard }

  },
  {
    initialRouteName: 'HomeScreen'
  }
)

export default AppNavigation;