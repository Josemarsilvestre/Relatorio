import { ScaledSheet, moderateScale, scale, verticalScale } from 'react-native-size-matters';

export default ScaledSheet.create({
    ContainerDados: {
      width: '330@s',
      height: moderateScale(148),

      backgroundColor: '#fff',

      marginTop: '10@s',
      top: '8@s',
      left: '10@s',
      paddingTop: '8@s',
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
    },
    Letras: {
        fontSize: '13@s',
        textAlign: 'right',
        marginRight: '10@s',
        color: '#000000' + '70',
    },
    Publicacoes: {
      marginTop: '1@s'
    },
    Letras_Pub: {
        color: '#FFA500',
        fontSize: '13@s',
        textAlign: 'right',
        marginRight: '10@s',
    },
    VerDetalhes: {
        color: '#000000' + '30',
        top: '18@s',
    },
    Estudantes_Title: {
        marginTop: '30@s',
        marginLeft: '15@s',       
        color: '#1D3825',
        fontSize: '16@s',
        fontWeight: 'bold'
    },
    EstudantesTotal: {
        marginBottom: '150@s'
    },
    Estudantes: {
        width: '330@s',
        height: '110@s',

        backgroundColor: '#fff',

        marginTop: '10@s',
        top: '5@s',
        left: '10@s',
        paddingTop: '8@s',
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
    NameStudient: {
        color: '#2E8B57',
        fontSize: '14@s',
        textAlign: 'right',
        marginRight: '10@s',
    },
    LetrasList: {
        fontSize: '13@s',
        textAlign: 'left',
        marginRight: '10@s',
        color: '#000000' + '70',
    },
    Licao: {
        fontSize: '13@s',
        textAlign: 'left',
        marginLeft: '10@s',
        color: '#000000' + '70',
    },
    plus: {
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
    },
    DeleteBox: {
      backgroundColor: 'red',
      justifyContent: 'center',
      width: '120@s',
      height: '110@s',
      alignItems: 'center',
      marginTop: '10@s',
      top: '5@s',
      left: '10@s',
      paddingLeft: '-10@s',
      marginRight: '-10@s',

      borderRadius: '13@s',
      shadowColor: "#000",
      shadowOffset: {
          width: '0@s',
          height: '2@s'
      },
      shadowOpacity: '0.25@s',
      shadowRadius: '4@s',
      elevation: '5@s',
    }
});