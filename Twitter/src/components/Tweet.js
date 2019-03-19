import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  
  TouchableHighlight,
  TouchableOpacity, 
} from 'react-native'
import PropTypes from 'prop-types';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Constants } from '../constants/Constants'


Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}
String.prototype.capitalizeFirstLetter = function() {
  return `${this.substr(0,1).toUpperCase()}${this.substr(1)}`;
}
export default class Tweet extends React.Component {

  constructor(props) {
    super(props)    
    const {user,text} = this.props
    this.state = {
      photo: {uri :  user.profile_image_url},
      touched: false,
      tweet: text,
      retweets:Math.floor((Math.random() * 100) + 1),
      likes:Math.floor((Math.random() * 10) + 1),
      name: user.name,
      time: [1,2,3].random()+"hr",
      retweeted: [true, false].random(),
      liked: [true, false].random(),
    }
    this.tweetPressed = this
      .tweetPressed
      .bind(this)

    this.retweet = this.retweet.bind(this)
    this.like = this.like.bind(this)
  }

  tweetPressed(pressed = false) {
    
    this.setState({touched: pressed})
  }

  retweet(){

    const {retweeted, retweets} = this.state
  

    if (retweeted) 
      this.setState({retweeted: false, retweets: retweets-1})
    

    else this.setState({retweeted: true, retweets: retweets+1})
  }
  like(){
    const {liked, likes} = this.state
  

    if (liked) 
      this.setState({liked: false, likes: likes-1})
    

    else this.setState({liked: true, likes: likes+1})
  }

  render() {

    const {navigation, thekey, isReply} = this.props
    const {touched, tweet, retweets, likes, name, handle, time, retweetedBy, retweeted, liked, photo} = this.state


    return(
      <TouchableHighlight onPress={()=>navigation.navigate('Thread')} onPressIn={() => this.tweetPressed(true)} onPressOut={() => this.tweetPressed()}>
        <View key={thekey} style={styles.container}>
           
            <View style={styles.innerContainer}>
            
              <View style={styles.photoContainer}>
                <View style={styles.innerPhotoContainer}>
                  <TouchableOpacity>
                  <Image
                    source={photo}
                    style={styles.photo} />
                  
                  
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.info}>

                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{name}
                    <Text style={styles.userHandleAndTime}>  {time}</Text>
                  </Text>
                </View>
              <View style={styles.tweetTextContainer}>
                <Text style={styles.tweetText}>{tweet}</Text>

              </View>
              <View style={styles.tweetActionsContainer}>
                <TouchableOpacity style={styles.commentButton}>
                  <EvilIcons name={'comment'} style={styles.commentButtonIcon} size={25} color={Constants.ICON_COLOR}/>
                <Text style={styles.commentsCount}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.retweet()}  style={styles.retweetButton}>
                  <EvilIcons name={'retweet'} size={25} color={(retweeted) ? Constants.GREEN_COLOR:Constants.ICON_COLOR}/>
                  <Text style={[styles.retweetButtonIcon, {color: retweeted ? Constants.GREEN_COLOR : Constants.ICON_COLOR,fontWeight: retweeted ? "bold" : "300",}]}>{retweets}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.like()}  style={styles.likeButton}>
                { liked ? 
                  <Entypo name={'heart'} size={18} style={{marginLeft:4}} color={liked ? Constants.RED_COLOR : Constants.ICON_COLOR}/>
                  :
                  <EvilIcons name={'heart'} size={25} color={liked ? Constants.RED_COLOR : Constants.ICON_COLOR}/>
                
                }
                <Text style={[styles.likeButtonIcon, {color: liked ? Constants.RED_COLOR : Constants.ICON_COLOR,fontWeight: liked ? "bold" : "300",}]}>{likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>

                  <SimpleLineIcons name={'share'} size={16} color={Constants.ICON_COLOR}/>
                
                </TouchableOpacity>
              </View>
              
              </View>
            </View>
        </View>
       </TouchableHighlight>

    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    flexDirection: "column",
    backgroundColor: "#1b2836"
  },
  innerContainer: {
    flex: 1,
    borderColor: "green",
    flexDirection: "row",
    borderWidth: 0,
    height: "auto",
    paddingTop:10
  },
  photoContainer: {
    flex: 0.23,
    borderColor: "yellow",
    flexDirection: "column",
    borderWidth: 0
  },
  innerPhotoContainer: { height: 100, alignItems: "center" },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 15
  },
  info: {
    flex: 0.77,
    borderColor: "yellow",
    flexDirection: "column",
    borderWidth: 0
  },
  userDetails: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 0,
    marginBottom: 5
  },
  userName: { color: "white", fontWeight: "bold" },
  userHandleAndTime: {
    color: "rgb(136, 153, 166)",
    marginLeft: 5
  },
  tweetTextContainer: { flex: 1, borderColor: "blue", borderWidth: 0 },
  tweetText: { color: "white", paddingRight: 10 },
  tweetActionsContainer: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 0,
    marginTop: 5,
    flexDirection: "row",
    paddingBottom: 5
  },
  commentButton: {
    paddingLeft: 0,
    flex: 0.25,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  commentButtonIcon: {
    margin: 0,
    marginLeft: -4,
    borderColor: "red",
    borderWidth: 0
  },
  commentsCount: {
    position: "absolute",
    left: 27,
    color: "rgb(136, 153, 166)",
    marginLeft: -4
  },
  retweetButton: {
    padding: 5,
    flex: 0.25,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  retweetButtonIcon: {
    position: "absolute",
    left: 27,

    marginLeft: 3
  },
  likeButton: {
    padding: 5,
    flex: 0.25,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  likeButtonIcon: {
    position: "absolute",
    left: 27,

    marginLeft: 3
  },
  shareButton: {
    padding: 5,
    flex: 0.25,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  }
});

// Tweet.propTypes = {
//   retweeted: PropTypes.string.isRequired
// };
Tweet.defaultProps = {
  retweeted: false,
  liked: false
};

