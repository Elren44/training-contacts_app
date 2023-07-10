import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageView: {
    width: scale(150),
    height: scale(150),
    borderRadius: scale(100),
    alignSelf: 'center',
  },
  chooseImage: {
    fontSize: scale(14),
    textAlign: 'center',
    color: colors.primary,
  },
});

export default styles;
