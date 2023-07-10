import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    height: scale(300),
    width: '100%',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailPhoto: {
    height: scale(300),
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: scale(20),
  },
  name: {
    fontSize: scale(22),
    color: colors.text,
  },

  hrLine: {
    height: scale(10),
    borderColor: colors.grey,
    borderBottomWidth: 0.4,
  },

  topCallOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(20),
    alignItems: 'center',
  },

  topCallOption: {
    alignItems: 'center',
  },

  middleText: {
    fontSize: scale(14),
    color: colors.primary,
    paddingVertical: verticalScale(5),
  },

  middleCallOptions: {
    flexDirection: 'row',
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(20),
  },

  phoneMobile: {
    flexGrow: 1,
    paddingHorizontal: scale(20),
  },

  imageView: {
    width: scale(150),
    height: scale(150),
    borderRadius: scale(100),
    alignSelf: 'center',
  },
});
