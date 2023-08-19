import { View, FlatList, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CheckBox, ListItem } from '@rneui/themed';
import { getTodos, updatedTodo } from '../data/Todos';

export default function TodoList() {
	const [todos, setTodos] = useState(getTodos());

	return (
		<View>
			<FlatList
				data={todos}
				renderItem={({ item }) => {
					return (
						<View>
							<CheckBox title={item.text} checked={item.completed} onPress={() => updatedTodo(item.id)} />
						</View>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}
