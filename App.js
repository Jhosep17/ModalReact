import React from 'react';
import { StyleSheet, View,Button,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ModalView from './pages/ModalView';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Diseño del Modal</Text>
      <Button
        title="Ingresar"
        onPress={() => {navigation.navigate('ModalView')}}
      />
    </View>
  );
}
 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Principal' }}
        />
        <Stack.Screen
          name="ModalView"
          component={ModalView}
          options={{ title: 'Modal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});

export default App;