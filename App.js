import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Font, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import Header from './app/components/header.js';
import Body from './app/components/body.js';
import Footer from './app/components/footer.js';
import { symbolicateLogLazy } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { back } from 'react-native/Libraries/Animated/Easing';
import themes from './assets/Themes/themes';
 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 
 
export default function App() {
 let [fontsLoaded] = useFonts({
   Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
   'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
 });
 if (!fontsLoaded) return <AppLoading />;
 /* ^Don't mind/edit the code above, it's there to load the font for you! */
 StatusBar.setBarStyle(Themes.light.statusBar);
 /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/
 
 /* insert your code here */
  return (
   <View style={styles.container}>
     <Header></Header>

     <Body></Body>

     <View style={styles.space}></View>

     <Footer></Footer>
   </View>
 );
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: Themes.light.bg,
   alignItems: 'center',
   justifyContent: 'center',
 },
space: {
  backgroundColor: 'blue',
  flex: 1.2
},
});

