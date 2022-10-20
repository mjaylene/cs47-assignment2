import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Body() {
    return (
        <View style={styles.body}>
        <View style={styles.upperBody}>
          <Image style={styles.profilePic}
           source={require('../../assets/Profiles/mtl.jpg')}></Image>
           
           <Text style={styles.name}>MTL</Text>
           <Text style={styles.distance}>2 miles away</Text>
        </View>
 
        <View style={styles.lowerBody}>
          <Text style={styles.prompt}>My hottest take</Text><View style={styles.audio}>
 
          <View style={styles.audioBox}>
            <View style={styles.playBox}>
              <Image style={styles.playerPic} source={require('../../assets/Icons/player_light.png')}></Image>
            </View>
            <View style={styles.waveBox}>
              <Image style={styles.audioPic} source={require('../../assets/Icons/audio_waveform_light.png')}></Image>
            </View>
          </View>
         </View>
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
    body: {
        flex: 6
      },
      upperBody: {
        position: 'relative',
        borderRadius: 10,
        flex: 0.7,
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 6},
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      distance: {
        position: 'absolute',
        fontFamily: 'Sydney',
        fontSize: windowWidth * 0.035,
        color: Themes.light.bgSecondary,
        left: '5%',
        bottom: -5
      },
      name: {
        position: 'absolute',
        fontFamily: 'Sydney',
        fontSize: windowWidth * 0.075,
        color: Themes.light.bgSecondary,
        left: '5%',
        top: windowHeight * 0.03
      },
      profilePic: {
        marginTop: "5%",
        aspectRatio: 0.9,
        position: 'relative',
        height: '100%',
        borderRadius: 10,
        aspectRatio: 1,
        alignItems: 'center',
        
      },
      lowerBody: {
        marginTop: 45,
        backgroundColor: 'white',
        borderRadius: 30,
        flex: 0.3,
      
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
      },
      prompt: {
        paddingTop: 2,
        fontSize: windowWidth * 0.05,
        fontFamily: 'Sydney',
        margin: 20,
        marginTop: 25,
        marginBottom: 10
      },
      audioPic: {
        position: 'relative',
        width: '100%',
        height: windowHeight * 0.06,
        marginRight: 20
      },
      playerPic: {
        position: 'relative',
        width: windowHeight * 0.08,
        height: windowHeight * 0.08,
        marginRight: 10,
      },
      audioBox: {
        flexDirection: 'row',
        position: 'absolute',
        borderRadius: 30,
        flex: 0.3,
      },
      playBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      waveBox: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
      },
      space: {
        backgroundColor: 'blue',
        flex: 1.2
      },
});