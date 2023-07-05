import {StyleSheet} from "react-native";
import colors from "../../assets/theme/colors";
export default StyleSheet.create({
	contactItemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingRight: 20,
		alignItems: "center"
	},
	contactItem: {
		flexDirection: "row",
		paddingVertical: 10,
		paddingHorizontal: 20,
		alignItems: "center",
		gap: 20,
	},
	contactItemAvatar: {
		width: 45,
		height: 45,
		borderRadius: 100,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	name: {
		fontSize: 17,
		color: colors.text
	},
	phoneNumber: {
		// color: colors.grey,
		fontSize: 14,
		marginVertical: 4
	},
	createContactBtn: {
		width: 55,
		height: 55,
		borderRadius: 100,
		position: "absolute",
		bottom: 45,
		right: 15,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary
	}
})
