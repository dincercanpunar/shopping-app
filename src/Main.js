import 'react-native-gesture-handler';
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
  Cart
} from './pages';
import { reducer } from '~/reducers';

const store = createStore(reducer)
const Stack = createStackNavigator();

function Main() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Main;