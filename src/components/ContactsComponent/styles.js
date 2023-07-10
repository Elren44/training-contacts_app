import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  contactItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: scale(20),
    alignItems: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    alignItems: 'center',
    gap: scale(20),
  },
  contactItemAvatar: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: scale(16),
    color: colors.text,
  },
  phoneNumber: {
    // color: colors.grey,
    fontSize: scale(13),
    marginVertical: verticalScale(4),
  },
  createContactBtn: {
    width: scale(55),
    height: scale(55),
    borderRadius: scale(100),
    position: 'absolute',
    bottom: scale(45),
    right: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});
