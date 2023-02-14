import * as React from 'react';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign'
// Returns ReactComponent

// Usage
export default function IconPlus() {
    return (
      <Icon
        name="plus"
        size={scale(23)}
        color="#fff"
        style={{ marginLeft: scale(16), marginTop: scale(15) }}
      />
    )}