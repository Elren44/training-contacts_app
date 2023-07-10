import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: colors.white,
    minHeight: scale(300),
    marginHorizontal: scale(30),
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
    padding: scale(15),
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    fontSize: scale(20),
    marginLeft: scale(15),
  },
  body: {
    minHeight: scale(300),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
  },
  footer: {
    justifyContent: 'space-evenly',
    paddingVertical: verticalScale(7),
    alignItems: 'center',
    flexDirection: 'row',
  },

  termsView: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(100),
    backgroundColor: colors.grey,
  },

  footerSeparator: {
    height: 0.5,
    backgroundColor: colors.grey,
  },

  footerItems: {
    width: '100%',
    padding: scale(10),
  },

  footerText: {
    fontSize: scale(12),
  },
});
