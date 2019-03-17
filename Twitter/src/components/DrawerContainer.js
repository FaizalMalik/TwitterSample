import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import {NavigationActions, DrawerActions} from 'react-navigation'

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class DrawerContainer extends React.Component {


  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
       
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={[ styles.list, styles.firstList]}>
            <View>
            <Entypo
                style={styles.icon}
                name='sports-club'
                size={20}
                color="rgb(136, 153, 166)"/>
              <Text style={styles.text}> Animals </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Site')} style={styles.list}>
            <View>
              <Entypo
                style={styles.icon}
                name='sports-club'
                size={20}
                color="rgb(136, 153, 166)"/>
              <Text style={styles.text}> Sports </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Site')} style={styles.list}>
            <View>
              <Entypo
                style={styles.icon}
                name='sports-club'
                size={20}
                color="rgb(136, 153, 166)"/>
              <Text style={styles.text}> Politics </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(27, 42, 51)',
    paddingTop: 0
  },
  list: {
    padding: 10,
    height: 60,
    borderColor: 'red',
    borderWidth: 0
  },
  text: {
    position: "absolute",
    left: "24%",
    top: 10,
    color: "white",
    fontSize: 16
  },
  top:{
    paddingBottom: 40,
    paddingLeft: 30,
    marginBottom:10
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 20
  },
  userName:{
    marginTop: 15,
    color: "white",
    fontWeight: "bold"
  },
  userHandle:{
    marginTop: 15,
    color: "rgb(136, 153, 166)",
    fontWeight: "300"
  },
  followingCount:{
    color: "white",
    position: 'absolute',
    left: 0,
    top: 10,
    fontWeight: "bold"
  },
  followingText:{
    color: "rgb(136, 153, 166)",
    fontWeight: "300"
  },
  followersCount:{
    color: "white",
    position: 'absolute',
    right: 30,
    top: 10,
    fontWeight: "bold"
  },
  followersText:{
    color: "rgb(136, 153, 166)",
    fontWeight: "300"
  },
  firstList:{
    marginTop: 0,
    borderTopWidth: 0.3,
    borderTopColor: 'black',
    height: 60,
    borderTopWidth: 0.3,
    borderTopColor: 'black'
  },
  icon:{
    position: "absolute",
    left: 20,
    top: 10
  }
})