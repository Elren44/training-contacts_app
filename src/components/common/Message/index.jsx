import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import colors from "../../../assets/theme/colors";

const Message = ({
	                 retry, retryFn, onDismiss,
	                 message, primary, info,
	                 success, danger
                 }) => {
	const [focused, setFocused] = useState(false);
	const [userDismissed, setDismossed] = useState(false);

	const getBgColor = () => {
		if (primary) {
			return colors.primary;
		}
		if (danger) {
			return colors.danger;
		}
		if (success) {
			return colors.success;
		}
		if (info) {
			return colors.secondary;
		}
	};

	return (
		<>
			{userDismissed?null: (

				<TouchableOpacity style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
					<View style={styles.message}>
						{message && <Text style={{color: colors.white}}>{message}</Text>}
						{retry && !typeof onDismiss === "function" && <TouchableOpacity onPress={() => retryFn()}><Text
							style={{color: colors.white}}>Повторить</Text></TouchableOpacity>}
						{typeof onDismiss === "function" && <TouchableOpacity onPress={() => {
							setDismossed(true)
							onDismiss()
						}}><Text style={{color: colors.white}}>Х</Text></TouchableOpacity>}
					</View>
				</TouchableOpacity>
			)}

		</>
	);
};

export default Message;
