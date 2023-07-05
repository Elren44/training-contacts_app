import {StyleSheet} from "react-native";
import colors from "../../assets/theme/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white
	},
	imageView: {
		width: 150,
		height: 150,
		borderRadius: 100,
		alignSelf: "center"
	},
	chooseImage: {
		textAlign: "center",
		color: colors.primary
	}
})


export default styles;
