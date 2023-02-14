import * as React from 'react'
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
import { createTask } from '../store/actions/taskActions';
import { scale } from 'react-native-size-matters';
import { TextInput } from 'react-native-paper';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';

//My local files
import Estilos_EstudantesDetals from './Estilos.Estudantes.Detalhes';
import IconCheck from './IconCheck';
import IconNoCheck from './IconNoCheck';
import DatadoEstudo from './DatadoEstudo';
import DatadoEstudo2 from './DatadoEstudo2';

export default function Estudantes({ navigation }) {
  const {t, i18n} = useTranslation();
  
  const [name, setName] = React.useState('');
  const [lastname, setlastname] = React.useState('');
  const [data1, setData1] = React.useState('');
  const [data2, setData2] = React.useState('');
  const [licao1, setLicao1] = React.useState('');
  const [licao2, setLicao2] = React.useState('');
  const [texto, setTexto] = React.useState(''); 
 
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.task);
  const { activeListId } = useSelector(state => state.list);

  const addTodo = () => {
        if (name.trim() === '' && lastname.trim() === '') {
          Alert.alert(
            `${t('atencion')}`,
            `${t('aviso3')}`
        )
        } else {
            const alreadyExist = tasks.find(t => t.name.toLowerCase() === name.trim().toLowerCase() && t.listId === activeListId);

            if (alreadyExist) {
                return Alert.alert(`${t('validation')}`, `${t('validationAlert')}`);
            } else {
                dispatch(createTask(
                    name,
                    activeListId,
                    lastname,
                    data1,
                    data2,
                    licao1,
                    licao2,
                    texto,
                    () => {
                      ToastAndroid.show(`${t('estudante')} "${name} ${lastname}" ${t('add')}`, ToastAndroid.LONG);
                      Keyboard.dismiss();
                      navigation.goBack();
                  },
                  () => { 
                      ToastAndroid.show(`${t('deleteMessage')}`, ToastAndroid.LONG); 
                      navigation.goBack();
                  },
                ));
            }
        }
    };

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

        <TouchableOpacity style={Estilos_EstudantesDetals.Check} onPress={() => addTodo()}>
          <IconCheck />
        </TouchableOpacity>

        <IconNoCheck />
      </ScrollView>
    </SafeAreaView>
  );
} 