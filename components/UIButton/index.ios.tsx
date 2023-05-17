import { Pressable, Text, View } from 'react-native';
import { ButtonStyle } from './styles'

export const UIButton = ({title}) =>{

	return (
		<Pressable>
			<View style={ButtonStyle.buttonContainer}>
				<Text>{title}</Text>
			</View>
		</Pressable>
	);
};