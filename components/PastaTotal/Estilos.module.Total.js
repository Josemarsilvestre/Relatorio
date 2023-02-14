import { ScaledSheet, moderateScale, verticalScale} from 'react-native-size-matters';

export default ScaledSheet.create({
    ContainerDados: {
        position: 'relative',

        width: '330@s',
        height: moderateScale(151),

        backgroundColor: '#fff',

        marginBottom: '18@s',
        marginTop: '117@s',
        top: '-100@s',
        left: '10@s',
        paddingTop: '15@s',
        paddingLeft: '15@s',
        borderRadius: '13@s',
        shadowColor: "#000",
        shadowOffset: {
            width: '0@s',
            height: '2@s'
        },
        shadowOpacity: '0.25@s',
        shadowRadius: '4@s',
        elevation: '5@s'
    },
    cronometroView: {
      position: 'relative',

      width: '330@s',
      height: moderateScale(50),//159

      backgroundColor: '#fff',

      marginBottom: '18@s',
      top: '-105@s',
      left: '10@s',
      paddingTop: '5@s',
      paddingLeft: '15@s',
      borderRadius: '8@s',
      shadowColor: "#000",
      shadowOffset: {
          width: '0@s',
          height: '2@s'
      },
      shadowOpacity: '0.25@s',
      shadowRadius: '4@s',
      elevation: '5@s'
    },
    Alvos: {
        position: 'relative',

        width: '330@s',
        height: moderateScale(159),//175

        backgroundColor: '#fff',

        marginBottom: '18@s',
        top: '-105@s',
        left: '10@s',
        paddingTop: '5@s',
        paddingLeft: '15@s',
        borderRadius: '13@s',
        shadowColor: "#000",
        shadowOffset: {
            width: '0@s',
            height: '2@s'
        },
        shadowOpacity: '0.25@s',
        shadowRadius: '4@s',
        elevation: '5@s'
    },
    Media: {
        position: 'relative',

        width: '330@s',
        height: moderateScale(150),

        backgroundColor: '#fff',

        marginBottom: '17@s',
        top: '-107@s',
        left: '10@s',
        paddingTop: '6@s',
        paddingLeft: '15@s',
        borderRadius: '13@s',
        shadowColor: "#000",
        shadowOffset: {
            width: '0@s',
            height: '2@s'
        },
        shadowOpacity: '0.25@s',
        shadowRadius: '4@s',
        elevation: '5@s'
    },
    Horas: {
        fontSize: '20@s',
        fontWeight: 'normal',
        color: '#000000' + '95',
        marginBottom: '9@s',
    },
    UnderlineTop: {
        width: '304@s',
        height: '1.90@s',
        marginTop: '7@s',
        backgroundColor: "#C0C0C0" + "50"
    },
    Enviar_OP_Relatorio: {
        marginRight: '1@s',
        color: '#2E8B57',
        textAlign: 'center'
    },
    widthRELA: {
        marginRight: '0@s',
        marginTop: '4@s'
    },
    Letras: {
        fontSize: '13@s',
        textAlign: 'right',
        marginRight: '10@s',
        color: '#000000' + '70',
    },
    Letras_Pub: {
      color: '#FFA500',
      fontSize: '13@s',
      textAlign: 'right',
      marginRight: '10@s',
    },
    lastLetra: {
      color: '#000000' + '30',
      fontSize: '12@s',
      marginTop: verticalScale(13)
    },
    lastLetraA: {
      color: '#000000' + '30',
      fontSize: '12@s',
      marginTop: moderateScale(28)
    },
    Publicacoes: {
        marginTop: '-10@s'
    },
    Alvos_Title: {
        color: '#2E8B57',
        fontSize: '16@s',
        marginBottom: '-7@s'
    },
    Horas2: {
        fontSize: '16@s',
        color: '#000000' + '95',
        marginRight: '275@s',
        marginBottom: '-3@s'
    },
    Media_Hora: {
        color: '#000000' + '95',
        fontSize: '16@s',
        marginRight: '265@s',
    },
    Media_Title: {
        color: '#2E8B57',
        fontSize: '16@s',
        marginBottom: '-7@s'
    },
    cronometro: {
        position: 'relative',

        width: '55@s',
        height: '55@s',
        borderRadius: '30@s',
        marginTop: '-90@s',
        bottom: '10@s',
        marginLeft: '280@s',
        backgroundColor: "#1D3825",

        shadowColor: "#000",
        shadowOffset: {
            width: '0@s',
            height: '2@s'
        },
        shadowOpacity: '0.25@s',
        shadowRadius: '4@s',
        elevation: '5@s'
    }
});