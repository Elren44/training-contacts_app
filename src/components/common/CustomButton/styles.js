import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  wrapper: {
    height: scale(42),
    marginTop: scale(10),
    marginBottom: scale(5),
    borderRadius: scale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderSection: {
    flexDirection: 'row',
    gap: scale(5),
  },
  textInput: {
    flex: 1,
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
