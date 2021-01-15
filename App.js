import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Users } from './screens/Users'
import { Posts } from './screens/Posts'
import { Detail } from './screens/Detail';

const AppNavigator = createStackNavigator({
  Users: {
    screen: Users
  },
  Posts: {
    screen: Posts
  },
  Detail: {
    screen: Detail
  }
}, {
  initialRouteName: 'Users'
})

export default createAppContainer(AppNavigator);

