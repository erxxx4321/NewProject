import { View } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';
import { addTodo, getTodos } from '../data/Todos';
import { useState, useEffect } from 'react';

function AddScreen({ navigation }) {
	const [formData, setFormData] = useState({
		id: 0,
		text: '',
		completed: false,
	});

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = () => {
		addTodo(formData);
		setFormData({
			id: 0,
			text: '',
			completed: false,
		});
	};

	return (
		<View style={{ paddingLeft: 15, paddingRight: 15 }}>
			<Input placeholder="項目" value={formData.text} onChangeText={(value) => handleInputChange('text', value)} />
			<Button title="加入" size="md" onPress={handleSubmit} />
		</View>
	);
}

export default AddScreen;
