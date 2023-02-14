import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import './i18n/i18n';
import {useTranslation} from 'react-i18next';

// My local files
import MainTabNavigator from './MainTabNavigator';

import Informa2 from './PastaDetalhes/DetalhesInforma/Informa_Detalhes2';
import Estudantes from './PastaDetalhes/DetalhesEstudantes/Estudantes';
import Estudantes2 from './PastaDetalhes/DetalhesEstudantes/Estudantes2';

import Calend from './PastaIconTop/IconCalend';

import Settin from './PastaIconTop/IconSettings';
import Settings from './PastaIconTop/Definition/Settings';  
import Idioma from './PastaIconTop/Definition/Idioma/Idioma'
import Geral from './PastaIconTop/Definition/Geral/Geral'
import Relatorio from './PastaIconTop/Definition/Relatorio/Relatorio'     

import Pessoas from './PastaInteressados/PessoasInteress/PessoasInteressadas';
import Pessoas2 from './PastaInteressados/PessoasInteress/PessoasInteressadas2';
import AlvoScreen from './PastaTotal/Alvos/Alvos';

export default function TopBarNavigator() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  const {t, i18n} = useTranslation();

  const months = [
    `${t('janeiro')}`,
    `${t('fevereiro')}`,
    `${t('marco')}`,
    `${t('abril')}`,
    `${t('maio')}`,
    `${t('junho')}`,
    `${t('julho')}`,
    `${t('agosto')}`,
    `${t('setembro')}`,
    `${t('outubro')}`,
    `${t('novembro')}`,
    `${t('dezembro')}`,
  ];
  const d = new Date();
  let monthName = months[d.getMonth()];
  const year = new Date().getFullYear();

  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1D3825',
            //marginTop: insets.top,
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: scale(20),
          },
          headerBackTitleVisible: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
        <Stack.Screen
          name="Root"
          component={MainTabNavigator}
          options={{
            title: `${t('titleTop')}`,
            headerShadowVisible: false,
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: scale(60),
                  justifyContent: 'space-between',
                  marginRight: scale(38),
                }}>
                <Calend />
                <Settin />
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: `${t('definitioTitle')}`,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />

        <Stack.Screen
          name="Informa2"
          component={Informa2} 
          options={{
            title: `${t('messageTop')} ${monthName}/${year}`,
            headerTitleAlign: 'center'
          }}
        /> 

        <Stack.Screen
          name="Estudantes"
          component={Estudantes}
          options={{
            title: `${t('estudante')}`,
          }}
        />

        <Stack.Screen
          name="Estudantes2"
          component={Estudantes2}
          options={{
            title: `${t('estudante')}`,
          }}
        />

        <Stack.Screen
          name="Pessoas"
          component={Pessoas}
          options={{
            title: `${t('interessado')}`,
          }}
        />

        <Stack.Screen
          name="Pessoas2"
          component={Pessoas2}
          options={{
            title: `${t('interessado')}`,
          }}
        />

        <Stack.Screen
          name="AlvoScreen"
          component={AlvoScreen}
          options={{
            title: `${t('targets')}`,
          }}
        />

        <Stack.Screen
          name="Geral"
          component={Geral}
          options={{
            title: `${t('definitioTitle')}`,
          }}
        />

        <Stack.Screen
          name="Idioma"
          component={Idioma}
          options={{
            title: `${t('definitioTitle')}`
          }}
        />

        <Stack.Screen
          name="Relatorio"
          component={Relatorio}
          options={{
            title: `${t('definitioTitle')}`,
          }}
        />
      </Stack.Navigator>
  );
}