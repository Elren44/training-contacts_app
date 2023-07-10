import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  pickerOptions: {
    flexDirection: 'row',
    marginTop: scale(20),
    alignItems: 'center',
  },
  optionsWrapper: {
    marginHorizontal: scale(20),
  },
  text: {
    fontSize: scale(16),
    color: colors.text,
    paddingLeft: scale(15),
  },
});

export default styles;
