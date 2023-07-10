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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
    marginVertical: scale(7),
  },
  itemText: {
    fontSize: scale(18),
    fontWeight: '500',
    color: colors.text,
  },
});
