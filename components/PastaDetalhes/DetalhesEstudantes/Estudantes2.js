import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ToastAndroid
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../store/actions/taskActions'; 
import { scale } from 'react-native-size-matters';
import { TextInput } from 'react-native-paper';
import '../../i18n/i18n';
import {useTranslation} from 'react-i18next';

//My local files
import Estilos_EstudantesDetals from './Estilos.Estudantes.Detalhes';
import IconCheck from './IconCheck';
import IconNoCheck2 from './IconNoCheck2';
import DatadoEstudo from './DatadoEstudo';
import DatadoEstudo2 from './DatadoEstudo2';

export default function Estudantes({ navigation, route }) {
  const {t, i18n} = useTranslation();
  
  const [name, setName] = React.useState('');
  const [lastname, setlastname] = React.useState('');
  const [data1, setData1] = React.useState('');
  const [data2, setData2] = React.useState('');
  const [licao1, setLicao1] = React.useState('');
  const [licao2, setLicao2] = React.useState('');
  const [task, setTask] = useState({});
  const [texto, setTexto] = React.useState('');
  
  const { languages } = useSelector(state => state.reducerLanguages);

  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.task);

  useEffect(() => {
    const taskFound = tasks.find(t => t.id === route.params.id);
    if (taskFound) {
      setName(taskFound.name)
      setlastname(taskFound.lastname)
      setData1(taskFound.data1)
      setData2(taskFound.data2)
      setLicao1(taskFound.licao1)
      setLicao2(taskFound.licao2)
      setTexto(taskFound.texto)
      setTask(taskFound)
    }
  }, [tasks, route.params.id]);

  const updateTaskHandler = () => {
    if (task.name === name && task.lastname === lastname && task.data1 === data1 && task.data2 === data2 && task.licao1 === licao1 && task.licao2 === licao2 && task.texto === texto) {
      return Alert.alert(`${t('atencion')}`, `${t('aviso4')}`);
    }

    const updatedTask = {
      ...task,
      name,
      lastname,
      data1, 
      data2, 
      licao1, 
      licao2,
      texto,
    };

    dispatch(updateTask(
      updatedTask,
      () => {
        navigation.goBack();
        ToastAndroid.show(`${t('atualizado')}`, ToastAndroid.LONG);
      },
      () => {
        ToastAndroid.show(`${t('deleteMessage')}`, ToastAndroid.LONG);
      },
    ));
  };

  const aviso = () => {
    if (task.name === name && task.lastname === lastname && task.data1 === data1 && task.data2 === data2 && task.licao1 === licao1 && task.licao2 === licao2 && task.texto === texto) {
      return navigation.goBack()
    }

    Alert.alert(
    `${t('atencion')}`,
    `${t('aviso2')}`,
    [
      {
        text: `${t('no')}`,
        onPress: () => navigation.goBack(),
      },
      {
        text: `${t('yes')}`,
        onPress: () => updateTaskHandler(),
      },
    ],
    {
      cancelable: true,
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: 0,
          backgroundColor: '#E5E5E5',
        }}>
        <View>
          <View>
            <Text style={Estilos_EstudantesDetals.Estudantes_Title}>
              {t('data')}
            </Text>

            <View>
              <View style={Estilos_EstudantesDetals.inputName}>
                <TextInput
                  style={{
                    backgroundColor: '#2E8B57' + '15'
                  }}
                  selectionColor={'#2E8B57' + '85'}
                  activeUnderlineColor={'#2E8B57'}
                  label={`${t('firstName')}`}
                  value={name}
                  onChangeText={(value) => setName(value)}
                  maxLength={17}
                />
              </View>

              <View style={Estilos_EstudantesDetals.inputName2}>
                <TextInput
                  style={{
                    backgroundColor: '#2E8B57' + '15'
                  }}
                  selectionColor={'#2E8B57' + '85'}
                  activeUnderlineColor={'#2E8B57'}
                  label={`${t('lastName')}`}
                  value={lastname}
                  onChangeText={(value) => setlastname(value)}
                  maxLength={17}
                />
              </View>
            </View>
          </View>

          <Text style={[Estilos_EstudantesDetals.Estudantes_Title, {marginTop: scale(40)}]}>
            {t('date')}
          </Text>

          <View>
            <Text style={Estilos_EstudantesDetals.Estudantes_Sub}>
              {t('laststudy')}
            </Text>

            <Text style={Estilos_EstudantesDetals.Estudantes_Sub2}>
              {t('nextstudy')}
            </Text>

            <DatadoEstudo props={data1} setProps={setData1} />
            <DatadoEstudo2 props={data2} setProps={setData2} />
          </View>

          <Text style={Estilos_EstudantesDetals.Estudantes_Title}>
            {t('estudo')}
          </Text>

          <View>
            <View style={Estilos_EstudantesDetals.inputLesson}>
              <TextInput
                style={{
                  backgroundColor: '#2E8B57' + '15'
                }}
                selectionColor={'#2E8B57' + '85'}
                activeUnderlineColor={'#2E8B57'}
                label={`${t('lastlicao')}`}
                value={licao1}
                onChangeText={setLicao1}
                maxLength={35}
              />
            </View>

            <View style={Estilos_EstudantesDetals.inputLesson2}>
              <TextInput
                style={{
                  backgroundColor: '#2E8B57' + '15'
                }}
                selectionColor={'#2E8B57' + '85'}
                activeUnderlineColor={'#2E8B57'}
                label={`${t('nextlicao')}`}
                value={licao2}
                onChangeText={setLicao2}
                maxLength={35}
              />
            </View>
          </View>

          <Text style={[Estilos_EstudantesDetals.Estudantes_Title, {marginTop: scale(40)}]}>
            {t('nota')}{' '}
            <Text style={Estilos_EstudantesDetals.OpcionalStyle}>
              ({t('optional')})
            </Text>
          </Text>

          <View style={Estilos_EstudantesDetals.inputLetters}>
            <TextInput
              style={{
                backgroundColor: '#2E8B57' + '15'
              }}
              selectionColor={'#2E8B57' + '85'}
              activeUnderlineColor={'#2E8B57'}
              label={`${t('comments')}`}
              value={texto}
              onChangeText={setTexto}
            />
          </View>
        </View>

        <TouchableOpacity style={Estilos_EstudantesDetals.Check} onPress={() => updateTaskHandler()}>
          <IconCheck />
        </TouchableOpacity>

        <IconNoCheck2 aviso={aviso}/>
      </ScrollView>
    </SafeAreaView>
  );
} 