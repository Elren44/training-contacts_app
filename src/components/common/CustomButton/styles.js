import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
	wrapper: {
		height: 42,
		marginTop: 10,
		marginBottom: 5,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center"
	},
	loaderSection: {
		flexDirection: "row",
		gap: 5
	},
	textInput: {
		flex: 1,
	},
	error: {
		color: colors.danger,
		paddingTop: 4,
		fontSize: 12,
		position: 'absolute',
		bottom: -4,
		left: 10,
	},
});
