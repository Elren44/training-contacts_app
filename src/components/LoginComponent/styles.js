import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  logoImage: {
    width: scale(150),
    height: scale(150),
    alignSelf: 'center',
    marginTop: scale(50),
    marginBottom: scale(20),
  },
  title: {
    fontSize: scale(21),
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: scale(20),
    color: colors.text,
  },
  subtitle: {
    fontSize: scale(17),
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: scale(20),
    color: colors.text,
  },
  form: {},
  registerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: scale(20),
  },
  registerInfo: {
    color: colors.text,
    fontSize: scale(15),
  },
  registerBtn: {
    color: colors.primary,
    fontSize: scale(16),
  },
});
