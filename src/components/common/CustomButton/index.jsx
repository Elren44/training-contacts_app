import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import colors from "../../../assets/theme/colors";

const CustomButton = ({
	                      title, disabled, loading,
	                      secondary, primary, danger,
	onPressButton
                      }) => {
	const [focused, setFocused] = useState(false);

	const getBgColor = () => {
		if (disabled) {
			return colors.grey
		}
		if (primary) {
			return colors.primary;
		}
		if (danger) {
			return colors.danger;
		}

		if (secondary) {
			return colors.secondary;
		}
	};

	return (
		<TouchableOpacity onPress={() => onPressButton()} disabled={disabled} style={[styles.wrapper, {backgroundColor: getBgColor()}]}>

			<View style={styles.loaderSection}>
				{loading && <ActivityIndicator color={primary? colors.secondary:colors.primary} />}
				{title && <Text style={{color: disabled ? "black" : colors.white}}>{title}</Text>}
			</View>
		</TouchableOpacity>
	);
};

export default CustomButton;
