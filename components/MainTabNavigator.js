import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { scale } from 'react-native-size-matters';
import './i18n/i18n';
import {useTranslation} from 'react-i18next';

// My local files
import Detalhes from './PastaDetalhes/Detalhes'
import Interessados from './PastaInteressados/Interessados'
import Total from './PastaTotal/Total'

const Tab = createMaterialTopTabNavigator();

export default function MainTabNavigator() {

  const {t, i18n} = useTranslation();
  
    return (
        <Tab.Navigator
          initialRouteName="Total"
          screenOptions={{
            tabBarLabelStyle: { fontSize: scale(12)},
            tabBarIndicatorStyle: { backgroundColor: '#8FBC8F' },
            tabBarActiveTintColor: '#8FBC8F',
            tabBarInactiveTintColor: '#fafafa',
            tabBarStyle: { backgroundColor: '#1D3825' },
          }}>
            <Tab.Screen
                name="Detalhes"
                component={Detalhes}
                options={{
                  title: `${t('detalhes')}`,
                }}
            />

            <Tab.Screen
                name="Total"
                component={Total}
                options={{
                  title: `${t('total')}`,
                }}
            />

            <Tab.Screen
                name="Interessados"
                component={Interessados}
                options={{
                  title: `${t('interessados')}`,
                }}
              />
        </Tab.Navigator>
      )
}