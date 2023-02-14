import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    ContainerDados: {
      width: '330@s',
      height: '150@s',

      backgroundColor: '#fff',

      marginBottom: '21@s',
      marginTop: '-232@s',
      top: '250@s',
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
    Horas: {
        fontSize: '20@s',
        fontWeight: 'normal',
        color: '#000000' + '95',
        marginBottom: '-5@s'
    },
    Letras: {
        fontSize: '13@s',
        textAlign: 'right',
        marginRight: '10@s',
        color: '#000000' + '70',
    },
    Interessados_Title: {
        marginTop: '30@s',
        marginLeft: '15@s',
        color: '#1D3825',
        fontSize: '16@s',
        fontWeight: 'bold'
    },
    Letras_Pub: {
        color: '#FFA500',
        fontSize: '13@s',
        textAlign: 'right',
        marginRight: '10@s',
    },
    VerDetalhes: {
        color: '#000000' + '30',
    },
    InteressadosTotal: {
        marginBottom: '150@s'
    },
    Interessados: {
        width: '330@s',
        height: '110@s',

        backgroundColor: '#fff',

        marginTop: '12@s',
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
    NameInteress: {
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
    Check: {
      position: 'relative',

      width: '55@s',
      height: '55@s',
      borderRadius: '30@s',
      top: '-45@s', //margimTop: '-90@s'
      bottom: '10@s',
      marginLeft: '280@s',
      backgroundColor: "#008000",
      

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
      top: '7@s',
      right: '10@s',
      paddingRight: '-10@s',
      marginLeft: '-10@s',

      borderRadius: '13@s',
      shadowColor: "#000",
      shadowOffset: {
          width: '0@s',
          height: '2@s'
      },
      shadowOpacity: '0.25@s',
      shadowRadius: '4@s',
      elevation: '5@s',
    },
    centeredView: {
        flex: '1@s',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        margin: '20@s',
        backgroundColor: "white",
        borderRadius: '20@s',
        padding: '55@s',
        paddingBottom: '15@s', //35
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: '0@s',
            height: '2@s'
        },
        shadowOpacity: '0.25@s',
        shadowRadius: '4@s',
        elevation: '5@s'
    },
    button: {
        borderRadius: '5@s',
        padding: '10@s',
        paddingRight: '30@s',
        paddingLeft: '30@s',
        top: '20@s',//40
        marginRight: '-100@s',
        elevation: '2@s',
    },
    button2: {
        borderRadius: '5@s',
        padding: '10@s',
        elevation: '2@s',
        top: '-19@s',
        marginLeft: '-100@s'
    },
    buttonClose: {
        backgroundColor: "#C4C4C4",
    },
    buttonClose2: {
        backgroundColor: "#FF6961",
    },
    textStyle: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: '15@s'
    },
    textStyle2: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: '15@s'
    },
    modalText: {
        marginBottom: '10@s',
        textAlign: "center",
        fontSize: '14@s'
    },
    search:{
      backgroundColor: '#1D3825',
      height: '40@s',
      marginRight: '10@s',
      marginLeft: '10@s',
      top: '7@s',
      marginBottom: '10@s',
      marginTop: '10@s',
      borderRadius: '5@s',
      padding: '2@s',
      textAlign: 'center',
      fontSize: '16@s',
      color: '#fff',
      
      shadowColor: "#000",
      shadowOffset: {
          width: '0@s',
          height: '2@s'
      },
      shadowOpacity: '0.25@s',
      shadowRadius: '4@s',
      elevation: '5@s'
    },
    Legend: {
      fontSize: '17@s',
      marginTop: '50@s',
      textAlign: 'center',
      color: '#000000' + '70',
    }
});