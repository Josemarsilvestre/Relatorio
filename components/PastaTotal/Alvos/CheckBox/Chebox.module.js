import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    width: '200@s',// + '%'   
    padding: '16@s'
  },
  wrapper: {
    display: "flex", 
    flexDirection: "column",
    alignContent: "center",
    paddingVertical: '15@s'
  },
  text: {
    lineHeight:'30@s',
    marginLeft: '27@s',
    marginTop: '-27@s',
    fontSize: '18@s'
  },
  input:{
    backgroundColor: '#E5E5E5',
    height: '40@s',
    width: '40@s',
    marginRight: '25@s',
    marginLeft: '225@s',
    marginTop: '-35@s',
    borderRadius: '5@s',
    padding: '2@s',
    textAlign: 'center',
    fontSize: '18@s',
    color: '#2E8B57'
  },
});