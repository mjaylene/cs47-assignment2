import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.discover}>
                <Image style={styles.discoverIMG}
                    source={require('../../assets/Icons/discover_light.png')}></Image>
                <Text style={styles.discoverText}>Discover</Text>
            </View>
            <View style={styles.matches}>
                <Image style={styles.matchesIMG}
                    source={require('../../assets/Icons/heart_light.png')}></Image>
                <Text style={styles.matchesText}>Matches</Text>
            </View>
            <View style={styles.messages}>
                <Image style={styles.messagesIMG}
                    source={require('../../assets/Icons/messages_light.png')}></Image>
                <Text style={styles.messagesText}>DMs</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#000',
        flex: 1,
        width: '100%',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      discoverIMG: {
        margin: 10,
        height: windowHeight * 0.06,
        width: windowHeight * 0.06,
        marginLeft: '15%',
        marginBottom: 5
      },
      matchesIMG: {
        margin: 10,
        height: windowHeight * 0.057,
        width: windowHeight * 0.06,
        marginBottom: 5
      },
      messagesIMG: {
        margin: 10,
        height: windowHeight * 0.057,
        width: windowHeight * 0.06,
        marginRight: '15%',
        marginBottom: 5
      },
      discover: {
        flex: 1,
        alignItems: 'center',
      },
      matches: {
        flex: 1,
        alignItems: 'center',
      },
      messages: {
        alignItems: 'center',
        flex: 1,
      },
      discoverText: {
        marginLeft: '10%',
        fontFamily: 'Sydney',
        fontSize: windowWidth * 0.05,
        color: 'white',
      },
      matchesText: {
        fontFamily: 'Sydney',
        fontSize: windowWidth * 0.05,
        color: 'white',
      },
      messagesText: {
        fontFamily: 'Sydney',
        fontSize: windowWidth * 0.05,
        color: 'white',
        marginRight: '10%'
      },
});