import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Share,
} from "react-native";
import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { deleteTimes } from "../PastaDetalhes/store/actions/Actions.Informa";
import { updatedBlocoCrono } from "../PastaDetalhes/store/actions/Actions.BlocoCrono";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

// My local files
import Estilos_Total from "./Estilos.module.Total";
import MediaMes from "./Media.mes";

export default function Total({ navigation: { navigate } }) {
  const { languages } = useSelector((state) => state.reducerLanguages);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const { alvos } = useSelector((state) => state.alvo);
  const { blocos } = useSelector((state) => state.bloco);
  const { times } = useSelector((state) => state.time);
  const { blococronos } = useSelector((state) => state.blococrono);

  const [task, setTask] = useState(blocos);
  const [update, setUpdate] = useState(blococronos);

  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [show, setShow] = useState(false);
  const [play, setPlay] = useState(true);
  const [results, setResults] = useState([]);
  const isPaused = useRef(true);
  const timer = useRef(null);

  useEffect(() => {
    setTask(blocos);
    setUpdate(blococronos);

    blococronos.time = time;
    blococronos.isRunning = isRunning;
    blococronos.show = show;
    blococronos.play = play;
    blococronos.results = results;

    const updatedCrono = {
      ...update,
      time,
      isRunning,
      show,
      play,
      results,
    };

    dispatch(updatedBlocoCrono(updatedCrono));
  }, [blocos, blococronos]);

  const meses = [
    `${t("janeiro")}`,
    `${t("fevereiro")}`,
    `${t("marco")}`,
    `${t("abril")}`,
    `${t("maio")}`,
    `${t("junho")}`,
    `${t("julho")}`,
    `${t("agosto")}`,
    `${t("setembro")}`,
    `${t("outubro")}`,
    `${t("novembro")}`,
    `${t("dezembro")}`,
  ];

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const d = new Date();
  let monthName = months[d.getMonth()];
  let mesesName = meses[d.getMonth()];

  const dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  let dayName = dias[d.getDay()];

  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const date = new Date().getDate();
  const ultimodia = new Date(year, month, 0).getDate();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${t("prezado")}\n\n${t("mes")}: ${mesesName}/${year}\n\n• ${t("pub")}${
          task.pub > 0
            ? task.pub < 10
              ? ":   " + task.pub
              : ": " + task.pub
            : ":   --"
        }\n• ${t("hours")}${task.hour > 0 ? ": " + task.hour + "h" : ":   0h"}${
          task.minuts > 0
            ? task.minuts < 10
              ? "0" + task.minuts
              : task.minuts
            : "00"
        }\n• ${t("videos")}${
          task.video > 0
            ? task.video < 10
              ? ":   " + task.video
              : ": " + task.video
            : ":   --"
        }\n• ${t("revi")}${
          task.revi > 0
            ? task.revi < 10
              ? ":   " + task.revi
              : ": " + task.revi
            : ":   --"
        }\n• ${t("study")}${
          task.studient > 0
            ? task.studient < 10
              ? ":   " + task.studient
              : ": " + task.studient
            : ":   --"
        }\n\n${t("atenciosamente")}\n`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const listblocos = blocos.map((task) => (
    <View key={task}>
      {
        <>
          <View>
            <Text style={Estilos_Total.Horas}>
              {task.hour > 0 ? task.hour + "h" : "0h"}
              {task.minuts > 0
                ? task.minuts < 10
                  ? "0" + task.minuts
                  : task.minuts
                : "00"}
            </Text>
          </View>

          <View style={Estilos_Total.Publicacoes}>
            <Text style={Estilos_Total.Letras}>
              {t("pub")}
              {task.pub > 0
                ? task.pub < 10
                  ? ":   " + task.pub
                  : ": " + task.pub
                : ":   --"}
            </Text>
            <Text style={Estilos_Total.Letras}>
              {t("videos")}
              {task.video > 0
                ? task.video < 10
                  ? ":   " + task.video
                  : ": " + task.video
                : ":   --"}
            </Text>
            <Text style={Estilos_Total.Letras}>
              {t("revi")}
              {task.revi > 0
                ? task.revi < 10
                  ? ":   " + task.revi
                  : ": " + task.revi
                : ":   --"}
            </Text>
            <Text style={Estilos_Total.Letras}>
              {t("studient")}
              {task.studient > 0
                ? task.studient < 10
                  ? ":   " + task.studient
                  : ": " + task.studient
                : ":   --"}
            </Text>
          </View>
        </>
      }
    </View>
  ));

  const handleRightButtonPress = useCallback(() => {
    if (!isRunning) {
      setPlay(false);
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1.65);
      }, 10);

      timer.current = interval;
    } else {
      setPlay(true);
      clearInterval(timer.current);
      clearTimes(times);
    }

    setRunning((previousState) => !previousState);
  }, [isRunning]);

  const clearTimes = ({ item }) => {
    const deleteTimesH = (item) => {
      dispatch(deleteTimes(item.id));
    };
  };

  const handleLeftButtonPress = useCallback(() => {
    if (isRunning) {
      setResults((previousResults) => [time, ...previousResults]);
      setTime(0);
    } else {
      setResults([]);
      setTime(0);
    }
  }, [isRunning, time]);

  const playB = () => {
    //setTime(0);
    clearInterval(timer.current);
    clearTimes(times);
    handleRightButtonPress();
  };

  const playHide = () => {
    setShow(false);
    setPlay(true);
    //handleLeftButtonPress()
    clearInterval(timer.current);
    clearTimes(times);
  };

  const listalvos = alvos.map((item) => (
    <View key={item}>
      {
        <TouchableOpacity
          style={Estilos_Total.Alvos}
          onPress={() =>
            navigation.navigate("AlvoScreen", {
              hour: item.hour,
              value: item.value,
              segunda: item.segunda,
              terca: item.terca,
              quarta: item.quarta,
              quinta: item.quinta,
              sexta: item.sexta,
              sabado: item.sabado,
              domingo: item.domingo,
              texto: item.texto,
              seg: item.seg,
              ter: item.ter,
              quar: item.quar,
              quin: item.quin,
              sext: item.sext,
              sab: item.sab,
              dom: item.dom,
            })
          }
          activeOpacity={0.6}
        >
          <View>
            <View>
              <Text style={Estilos_Total.Alvos_Title}>{t("targets")}</Text>
            </View>
            <View style={Estilos_Total.UnderlineTop}></View>
            <View>
              <Text style={Estilos_Total.Horas2}>
                {item.hour > 0 ? item.hour + "h" : "0h"}
              </Text>
            </View>

            <View style={Estilos_Total.Publicacoes}>
              <Text style={Estilos_Total.Letras_Pub}>
                {item.value == null ? t("privilege1") : item.value}
              </Text>
              <Text style={Estilos_Total.Letras}>
                {t("hoursmissing")}
                {item.hour > 0
                  ? item.hour < 10
                    ? `:   ${item.hour - (task.hour > 0 ? task.hour : 0)}`
                    : `: ${item.hour - (task.hour > 0 ? task.hour : 0)}`
                  : ":   --"}
              </Text>
              <Text style={Estilos_Total.Letras}>
                {t("daymissing")}
                {item.hour > 0
                  ? ultimodia - date + 1 < 10
                    ? ":   " + (ultimodia - date + 1)
                    : ": " + (ultimodia - date + 1)
                  : ":   --"}
              </Text>
              <Text style={Estilos_Total.Letras}>
                {t("today")}
                {dayName == "Segunda"
                  ? item.segunda == true
                    ? item.seg > 0
                      ? `:   ${item.seg}`
                      : ":   --"
                    : ":   --"
                  : dayName == "Terça"
                  ? item.terca == true
                    ? item.ter > 0
                      ? `:   ${item.ter}`
                      : ":   --"
                    : ":   --"
                  : dayName == "Quarta"
                  ? item.quarta == true
                    ? item.quar > 0
                      ? `:   ${item.quar}`
                      : ":   --"
                    : ":   --"
                  : dayName == "Quinta"
                  ? item.quinta == true
                    ? item.quin > 0
                      ? `:   ${item.quin}`
                      : ":   --"
                    : ":   --"
                  : dayName == "Sexta"
                  ? item.sexta == true
                    ? item.sext > 0
                      ? `:   ${item.sext}`
                      : ":   --"
                    : ":   --"
                  : dayName == "Sábado"
                  ? item.sabado == true
                    ? item.sab > 0
                      ? `:   ${item.sab}`
                      : ":   --"
                    : ":   --"
                  : dayName == "Domingo"
                  ? item.domingo == true
                    ? item.dom > 0
                      ? `:   ${item.dom}`
                      : ":   --"
                    : ":   --"
                  : ":   --"}
              </Text>
            </View>

            <View>
              <Text style={Estilos_Total.lastLetraA}>{t("seeDetals")}</Text>
            </View>
          </View>
        </TouchableOpacity>
      }
    </View>
  ));

  return (
    <SafeAreaView style={{ flex: scale(1), backgroundColor: "#E5E5E5" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: 0,
          backgroundColor: "#E5E5E5",
        }}
      >
        {/*Area info*/}
        <View style={Estilos_Total.ContainerDados}>
          {listblocos}

          <View style={{ marginRight: scale(10) }}>
            <View style={Estilos_Total.UnderlineTop}></View>
            <TouchableOpacity style={Estilos_Total.widthRELA} onPress={onShare}>
              <Text style={Estilos_Total.Enviar_OP_Relatorio}>
                <Icon name="share-2" size={scale(16)} color="#2E8B57" />{" "}
                {t("send")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Area Alvos*/}
        <View>{listalvos}</View>

        {/*Area Média*/}
        <View style={Estilos_Total.Media}>
          <View>
            <Text style={Estilos_Total.Media_Title}>
              {t("media")}{" "}
              <Text style={{ color: "gold" }}>(Em construção)</Text>
            </Text>
          </View>
          <View style={Estilos_Total.UnderlineTop}></View>
          <View>
            <Text style={Estilos_Total.Media_Hora}>0h00</Text>
          </View>

          <View style={Estilos_Total.Publicacoes}>
            <Text style={Estilos_Total.Letras}>{t("pub")}: 0</Text>
            <Text style={Estilos_Total.Letras}>{t("videos")}: 0</Text>
            <Text style={Estilos_Total.Letras}>{t("revi")}: 0</Text>
            <Text style={Estilos_Total.Letras}>{t("studient")}: 0</Text>
          </View>

          <View>
            <MediaMes />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
