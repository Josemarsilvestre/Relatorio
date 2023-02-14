import * as React from 'react';
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import {View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'


export default function IconCheck() {
    return(
    <>
      <Icon
        name="check"
        size={scale(23)}
        color="#fff"
        style={{ marginLeft: scale(16), marginTop: scale(15) }}
      />
      </>
    )
}