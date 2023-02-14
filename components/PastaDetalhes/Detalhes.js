import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Alert,
  ToastAndroid
 } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from './store/actions/taskActions'
import '../i18n/i18n';
import {useTranslation} from 'react-i18next';
        
// My local files
import Estilos_EstudantesDetals from './DetalhesEstudantes/Estilos.Estudantes.Detalhes';
import Estilos_Detalhes from './Estilos.module.Detalhes';
import IconPlus from './IconPlus';

export default function Detalhes({ navigation, route }) {
  const { languages } = useSelector(state => state.reducerLanguages);
  const {t, i18n} = useTranslation();

  const { tasks } = useSelector(state => state.task);
  const [data, setData] = useState([]);

  const { blocos } = useSelector(state => state.bloco);

  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks) {
      const copyTasks = [...tasks];
      setData(copyTasks);
    }
  }, [tasks, blocos]);

  const taskClickHandler = (item) => {
    navigation.navigate('Estudantes2', { id: item.id });
  };

  const ListItem = ({item}) => {
    const deleteTaskHandler = item => { 
      dispatch(deleteTask(
        item.id,
        () => {
          ToastAndroid.show(`${t('estudante')} "${item.name} ${item.lastname}" ${t('estudanteDelete')}`, ToastAndroid.LONG);
        },
        () => {
          ToastAndroid.show(`${t('estudanteDelete')}`, ToastAndroid.LONG);
        },
      ));
    };

    return (
      <LongPressGestureHandler onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              Alert.alert(
                `${t('atencion')}`,
                `${t('aviso')}`,
                [
                  {
                    text: `${t('cancel')}`,
                  },
                  {
                    text: `${t('yes')}`,
                    onPress: () => deleteTaskHandler(item),
                  },
                ],
                {
                  cancelable: true,
                }
              );
            }
          }} minDurationMs={800}>
            <View>
              <TouchableOpacity
                style={Estilos_EstudantesDetals.Estudantes}
                onPress={() => taskClickHandler(item)}
                activeOpacity={0.6}>
                <Text style={Estilos_EstudantesDetals.NameStudient}>
                  {item.name} {item.lastname}
                </Text>
                <Text style={Estilos_EstudantesDetals.LetrasList}>
                  {t('laststudy')}: {item.data1} 
                </Text>
                <Text style={Estilos_EstudantesDetals.Licao}>
                  {t('licao')}: {item.licao1}
                </Text>
                <Text style={Estilos_EstudantesDetals.LetrasList}>
                  {t('nextstudy')}: {item.data2}
                </Text>
                <Text style={Estilos_EstudantesDetals.Licao}>
                  {t('licao')}: {item.licao2}
                </Text>
              </TouchableOpacity>
            </View>
        </LongPressGestureHandler>
    )
  }

  const listblocos = blocos.map((item) =>
    <View key={item}>
      {
        <TouchableOpacity
          style={Estilos_Detalhes.ContainerDados}
          onPress={() => navigation.navigate('Informa2', { 
            hour: item.hour,
            minuts: item.minuts,
            pub: item.pub,
            video: item.video,
            revi: item.revi,
            studient: item.studient,
            texto: item.texto,
            check1: item.check1,
            }
          )}
          activeOpacity={0.6}>
          <View>
            <Text style={Estilos_Detalhes.Horas}>
              {item.hour > 0 ? item.hour+"h" : "0h"}
              {item.minuts > 0 ? (item.minuts < 10 ? "0"+item.minuts : item.minuts) : "00"}
            </Text>
          </View>

          <View style={Estilos_Detalhes.Publicacoes}>
            <Text style={Estilos_Detalhes.Letras}>
              {t('pub')}{item.pub > 0 ? (item.pub  < 10 ? ":   "+item.pub : ": "+item.pub) : ":   --"}
            </Text>
            <Text style={Estilos_Detalhes.Letras}>
              {t('videos')}{item.video > 0 ? (item.video  < 10 ? ":   "+item.video : ": "+item.video) : ":   --"}
            </Text>
            <Text style={Estilos_Detalhes.Letras}>
              {t('revi')}{item.revi > 0 ? (item.revi  < 10 ? ":   "+item.revi : ": "+item.revi) : ":   --"}
            </Text>
            <Text style={Estilos_Detalhes.Letras}>
              {t('studient')}{item.studient > 0 ? (item.studient  < 10 ? ":   "+item.studient : ": "+item.studient) : ":   --"} 
            </Text>
          </View> 

          <View>
            <Text style={Estilos_Detalhes.VerDetalhes}>{t('seeDetals')}</Text>
          </View>
        </TouchableOpacity>
      }
    </View>
);

  return (
    <SafeAreaView style={{ flex: scale(1), backgroundColor: '#E5E5E5' }}>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: 0,
          backgroundColor: '#E5E5E5',
        }}>
   
        <View>{listblocos}</View>

        <View>
          <Text style={Estilos_Detalhes.Estudantes_Title}>{t('estudantes')}</Text>
        </View>
        { data.length > 0 ? <FlatList
          vertical={true}
          data={data}
          contentContainerStyle={{
              marginBottom: scale(130), 
              paddingBottom: scale(10),
            }}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <ListItem item={item}/>}/> : <Text style={Estilos_EstudantesDetals.Legend}>{t('semEstudantes')}</Text>
        }
      </ScrollView>

      <TouchableOpacity
        style={Estilos_Detalhes.plus}
        onPress={() => {navigation.navigate('Estudantes')}}>
        <IconPlus />
      </TouchableOpacity>
    </SafeAreaView>
  );
}