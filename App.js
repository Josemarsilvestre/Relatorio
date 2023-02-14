import 'react-native-gesture-handler';
import * as React from 'react'
import { StatusBar, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import store from './components/PastaDetalhes/store/index'

//imported files local
import TopBarNavigator from './components/MyTabs'

export default function App() {
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
        "VirtualizedLists should never be nested",
        "ToastAndroid is not supported on this platform"
    ])

    return (
        <Provider store={store}>
            <SafeAreaProvider style={{ backgroundColor: "#E5E5E5" }}>
                <StatusBar backgroundColor="#1D3825" barStyle="dark-content" />
                <TopBarNavigator />
            </SafeAreaProvider>
        </Provider>
    )
}