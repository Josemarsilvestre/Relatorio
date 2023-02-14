import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { scale } from "react-native-size-matters";
import AsyncStorage from "@react-native-async-storage/async-storage";
/**import RNPickerSelect from "react-native-picker-select"; */
import { useDispatch, useSelector } from "react-redux";
import { setLanguages } from "../../../PastaDetalhes/store/actions/languageActions";
import { useTranslation } from "react-i18next";
import ModalSelector from "react-native-modal-selector";
import * as Localization from 'expo-localization';

//My files imported
import Estilos_Idioma from "./Estilos.module.idioma";
import IconCheck from "./IconCheck";
import IconNoCheck from "./IconNoCheck";

const item = [
  {
    key: "en",
    label: "Inglês",
  },
  {
    key: "zh",
    label: "Chinês Tradicional (China)",
  },
  {
    key: "es",
    label: "Espanhol (Espanha)",
  },
  {
    key: "pt",
    label: "Português (Portugal)",
  },
];

export default function Idioma() {
  const { languages } = useSelector((state) => state.reducerLanguages);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState(Localization.locale);

  const { t, i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLanguage(languages);
  }, [languages]);

  const setTask = () => {
    if (languages) {
      try {
        AsyncStorage.setItem("Languages", JSON.stringify(language))
          .then(() => {
            dispatch(setLanguages(language));
            Alert.alert(`${t("atualizado")}`, `${t("messsegeIdioma")}`);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(setLanguages(language));
      Alert.alert(`${t("atualizado")}`, `${t("messsegeIdioma")}`);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: 0,
          backgroundColor: "#E5E5E5",
        }}
      >
        <View>
          <Text
            style={[
              Estilos_Idioma.Definition_Title,
              { color: "#006400", fontSize: scale(18) },
            ]}
          >
            {t("language")}
          </Text>
        </View>

        <Text style={[Estilos_Idioma.Definition_Title, { marginBottom: scale(5) }]}>
          {t("languageChoose")}
        </Text>

        <ModalSelector
          data={item}
          initValue={t("language")}
          onChange={(language) => changeLanguage(language.key)}
          style={{marginRight: scale(15), marginLeft: scale(15)}}
        />
      </ScrollView>

      <TouchableOpacity style={Estilos_Idioma.Check} onPress={() => setTask()}>
        <IconCheck />
      </TouchableOpacity>
      <IconNoCheck />
    </SafeAreaView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 4,
    color: "#000000" + "90",
    paddingRight: 30,
    marginLeft: 15, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "transparent",
    borderRadius: 8,
    color: "#000000" + "90",
    paddingRight: 30,
    marginLeft: 15, // to ensure the text is never behind the icon
  },
});
