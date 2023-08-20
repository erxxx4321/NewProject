import { View, FlatList, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { CheckBox } from '@rneui/themed';
import { getTodos, updatedTodo } from '../data/Todos';

export default function TodoList() {
	let [todos, setTodos] = useState(getTodos());
	const isFocused = useIsFocused();

	todos = isFocused ? getTodos() : todos;

	return (
		<View>
			<FlatList
				data={todos}
				renderItem={({ item }) => {
					return (
						<View>
							<CheckBox
								title={item.text}
								checked={item.completed}
								onPress={() => {
									updatedTodo(item.id);
									setTodos(getTodos());
								}}
							/>
						</View>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}
