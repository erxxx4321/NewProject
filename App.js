import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './components/TodoList';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddScreen from './components/AddScreen';

function HomeScreen({ navigation }) {
	const navigateToAddScreen = () => navigation.navigate('AddScreen');

	return (
		<View style={{ flex: 1, flexDirection: 'column' }}>
			<View style={{ alignItems: 'flex-end' }}>
				<Button type="outline" onPress={navigateToAddScreen}>
					<Icon name="plus" />
				</Button>
			</View>
			<View style={{}}>
				<TodoList></TodoList>
			</View>
		</View>
	);
}

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Todos"
					component={HomeScreen}
					options={{
						title: 'Todos',
					}}
				/>
				<Stack.Screen name="AddScreen" component={AddScreen} options={{ title: '新增Todo' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
