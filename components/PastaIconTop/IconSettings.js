import React from 'react'
import { TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';


export default function Settin(){
  const navigation = useNavigation();
  return (
        <TouchableOpacity style={{marginRight: scale(1)}} onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings" size={scale(28)} color="#fff"/>
        </TouchableOpacity>
  );
}