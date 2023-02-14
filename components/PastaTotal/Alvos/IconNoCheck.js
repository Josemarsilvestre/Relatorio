import * as React from 'react';
import { scale, ScaledSheet } from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'

// Usage
export default function IconNoCheck({aviso}) {
  const navigation = useNavigation();

    return (
        <TouchableOpacity style={style.NoCheck} onPress={() => aviso()}>
          <Icon
            name="x"
            size={scale(23)}
            color="#fff"
            style={{ marginLeft: scale(15), marginTop: scale(15) }}
          />
        </TouchableOpacity>
    )
}

const style = ScaledSheet.create({
    NoCheck: {
      position: 'relative',

      width: '55@s',
      height: '55@s',
      borderRadius: '30@s',
      marginTop: '-90@s',
      bottom: '10@s',
      marginLeft: '190@s', //280
      backgroundColor: "#FF0000" + 99,
      
      shadowColor: "#000",
      shadowOffset: {
          width: '0@s',
          height: '2@s'
      },
      shadowOpacity: '0.25@s',
      shadowRadius: '4@s',
      //elevation: '5@s'
    }
})