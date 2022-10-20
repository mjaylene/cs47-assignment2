import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.menu}>
                <Image style={styles.menuIcon} source={require('../../assets/Icons/menu_light.png')}></Image>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>ensom</Text>
            </View>
            <View style={styles.sun}>
                <Image style={styles.sunIcon} source={require('../../assets/Icons/sun.png')}></Image>
            </View>
        </View>
  );
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        flex: 0.5,
        justifyContent: 'space-between',
        marginTop: 40,
        width: windowWidth * 0.85,
        height: '5%',
        top: 0,
      },
    menu: {
        width: windowHeight * 0.055,
        height:  windowHeight * 0.055,
        position: 'relative',
      },
      sun: {
        width: windowHeight * 0.055,
        height:  windowHeight * 0.055,
        position: 'relative',
      },
       menuIcon: {
         position: 'relative',
         width: '100%',
         height: '100%',
         alignItems: 'center'
       },
       sunIcon: {
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center'
       },
       titleText: {
        flex: 2, 
        fontWeight: 'bold',
        fontSize: windowWidth * 0.08,
        fontFamily: 'Sydney-Bold',
      },
});