import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../PastaDetalhes/store/actions/taskActions2';
import '../i18n/i18n';
import {useTranslation} from 'react-i18next';

// My local files
import Estilos_Interessados from './Estilos.module.Interessados';
import IconPlus from './IconPlus';

export default function Interessados({ navigation }) {

  const {t, i18n} = useTranslation();

  const { tasks2 } = useSelector((state) => state.task2);
  const [task, setTask] = useState({});
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const [search2, setSearch2] = React.useState('');
  const [masterDataSource, setMasterDataSource] = React.useState('');

  useEffect(() => {
    if (tasks2) {
      const copytasks2 = [...tasks2];
      setData(copytasks2);
      setTask(copytasks2);
    }
  }, [tasks2]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update Bloco
      const newData = task.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData =
          item.name + item.lastname
            ? item.name.toUpperCase() + item.lastname.toUpperCase()
            : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch2(text);
    } else {
      // Inserted text is blank
      // Update Bloco with masterDataSource
      setData(task);
      setSearch2(text);
    }
  };

  const taskClickHandler = (item) => {
    navigation.navigate('Pessoas2', { id: item.id });
  };

  const ListItem = ({ item }) => {
    const deleteTaskHandler = (item) => {
      dispatch(
        deleteTask(
          item.id,
          () => {
            ToastAndroid.show(
              `${t('interessado')} "${item.name} ${item.lastname}" ${t('estudanteDelete')}`,
              ToastAndroid.LONG
            );
          },
          () => {
            ToastAndroid.show(`${t('estudanteDelete')}`, ToastAndroid.LONG);
          }
        )
      );
    };

    return (
      <LongPressGestureHandler
        onHandlerStateChange={({ nativeEvent }) => {
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
        }}
        minDurationMs={800}>
        <View>
          <TouchableOpacity
            style={Estilos_Interessados.Interessados}
            onPress={() => taskClickHandler(item)}>
            <Text style={Estilos_Interessados.NameInteress}>
              {item.name} {item.lastname}
            </Text>
            <Text style={Estilos_Interessados.LetrasList}>
              {t('lastrevi')}: {item.data1}
            </Text>
            <Text style={Estilos_Interessados.Licao}>
              {t('assunto')}: {item.assunto1}
            </Text>
            <Text style={Estilos_Interessados.LetrasList}>
              {t('nextrevi')}: {item.data2}
            </Text>
            <Text style={Estilos_Interessados.Licao}>
              {t('assunto')}: {item.assunto2}
            </Text>
          </TouchableOpacity>
        </View>
      </LongPressGestureHandler>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
      <View>
        <Searchbar
          style={Estilos_Interessados.search}
          placeholder={`${t('search')}`}
          placeholderTextColor={'#E5E5E5'}
          inputStyle={{ color: '#fff' }}
          iconColor="#E5E5E5"
          onChangeText={(text) => searchFilterFunction(text)}
          value={search2}
        />
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: 0,
          backgroundColor: '#E5E5E5',
        }}>
        <View>
          <Text style={Estilos_Interessados.Interessados_Title}>
            {t('revi')}
          </Text>
        </View>
        {data.length > 0 ? (
          <FlatList
            vertical={true}
            data={data}
            contentContainerStyle={{
              marginBottom: scale(130),
              paddingBottom: scale(10),
            }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem item={item} />}
          />
        ) : (
          <Text style={Estilos_Interessados.Legend}>
            {t('semInteressados')}
          </Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={Estilos_Interessados.plus}
        onPress={() => {
          navigation.navigate('Pessoas');
        }}>
        <IconPlus />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
