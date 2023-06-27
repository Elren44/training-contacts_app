import {StyleSheet} from 'react-native';
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
	logoImage: {
		width: 150,
		height: 150,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20
	},
	title: {
		fontSize: 21,
		textAlign: "center",
		fontWeight: "500",
		marginBottom: 20,
		color: colors.text
	},
	subtitle: {
		fontSize: 17,
		textAlign: "center",
		fontWeight: "500",
		marginBottom: 20,
		color: colors.text
	},
	form: {

	},
	registerBlock: {
flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
		marginBottom: 100
	},
	registerInfo: {
		color: colors.text,
		fontSize: 15
	},
	registerBtn: {
		color: colors.primary,
		fontSize: 16,
	}
})
