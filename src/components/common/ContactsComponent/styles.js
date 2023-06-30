import {StyleSheet} from "react-native";
import colors from "../../../assets/theme/colors";
export default StyleSheet.create({
	contactItemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingRight: 20
	},
	contactItem: {
		flexDirection: "row",
		paddingVertical: 10,
		paddingHorizontal: 20
	},
	contactItemAvatar: {
		width: 45, height: 45, borderRadius: 100
	}
})
