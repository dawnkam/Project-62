import * as React from 'react';
import { View,Text } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
const Dawn = createSwitchNavigator({
  HomeScreen:HomeScreen,
 // SummaryScreen:SummaryScreen
})

const Container = createAppContainer(Dawn)



export default class App extends React.Component {
  render() {
    return (
      <View>
     <Container/>
        
      </View>
    );
  }
}
