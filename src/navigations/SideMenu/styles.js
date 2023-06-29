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
	item: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		marginVertical: 7
	},
	itemText: {
		fontSize: 18,
		fontWeight: "500",
		color: colors.text
	}

})
