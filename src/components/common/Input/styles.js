import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: verticalScale(12),
  },
  wrapper: {
    height: scale(42),
    // paddingTop: 5,
    borderWidth: 1,
    borderRadius: scale(4),
    flexDirection: 'row',
    paddingHorizontal: scale(5),
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: scale(13),
  },
  error: {
    color: colors.danger,
    paddingTop: scale(4),
    fontSize: scale(12),
    position: 'absolute',
    bottom: scale(-4),
    left: scale(10),
  },
});
