import * as React from 'react';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather'

export default function IconCheck() {
    return(
    <>
          <Icon
            name="check"
            size={scale(23)}
            color="#fff"
            style={{marginLeft: scale(16), marginTop: scale(15)}}
          />
      </>
    )
}