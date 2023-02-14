import { ScaledSheet, scale, moderateScale, verticalScale} from 'react-native-size-matters';

export default ScaledSheet.create({
    Definition_Title: {
      marginTop: '13@s',
      marginBottom: '8@s',      
      marginLeft: '15@s',
      color: '#1D3825',
      fontSize: '15@s',
    },
    UnderlineTop: {
      width: '325@s',
      height: '1.90@s',
      marginTop: '-7@s',
      marginLeft: '15@s',
      backgroundColor: "#C0C0C0" + "50"
    },
    Check: {
      position: 'relative',

      width: '55@s',
      height: '55@s',
      borderRadius: '30@s',
      top: '-45@s', //margimTop: '-90@s'
      bottom: '10@s',
      marginLeft: '280@s',
      backgroundColor: "#008000",
      

      shadowColor: "#000",
      shadowOffset: {
          width: '0@s',
          height: '2@s'
      },
      shadowOpacity: '0.25@s',
      shadowRadius: '4@s',
      elevation: '5@s'
    },
})