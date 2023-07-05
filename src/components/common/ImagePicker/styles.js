import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  pickerOptions: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  optionsWrapper: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: colors.text,
    paddingLeft: 15,
  },
});

export default styles;
