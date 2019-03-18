import React, { Component } from "react";
import {SafeAreaView, Platform, StyleSheet, Text, View, Button, SectionList, Alert,TouchableOpacity } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import { Constants } from '../constants/Constants'

const sectionAnimalData = [{ selected: false, item: "Cat" }, { selected: false, item: "Dog" }, { selected: false, item: "Rabbit" }]
const sectionFruitsData = [{ selected: false, item: "Apple" }, { selected: false, item: "Orange" }, { selected: false, item: "Banana" }]
const sectionSportsData = [{ selected: false, item: "Football" }, { selected: false, item: "Cricket" }, { selected: false, item: "BasketBall" }]

export default class HomeActivity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSectionAimalSelected: false,
            isSectionFruitsSelected: false,
            isSectionSportsSelected: false,
            refresh:true
        }
}

/* Function to select the category Item */
    clickItem = (item) => {
        item.item["selected"] = !item.item["selected"]
        this.setState({
            refresh: true
        })

       
    }
  /* Function to render row Item */

    renderItem(item) {    
        return (
            <RowItem
     
                item={item}
                onPressItem={this.clickItem.bind(this, item)}
            />
        );
    }
  /* Function to render section Header */

    renderSectionsHeaders(section) {
        
        return (

            <TouchableOpacity
           onPress = {this.clickHeader.bind(this,section)}
            style={[ styles.list, styles.firstList]}>
            <View >
                    <Text style={styles.headerTitle}> {section.section.title} </Text>
                    <Entypo
                style={styles.icon}
                name={section.section.selected ? 'chevron-small-up' : 'chevron-small-down'}
                size={25}
                color={Constants.ICON_COLOR}/>      
            </View>
            </TouchableOpacity>

        );
    }
  
  /* on Click Header Action */

    clickHeader (section) {
        
        switch (section.section.index) {
           
            case 0: {                
                this.setState({
                    isSectionAimalSelected: !this.state.isSectionAimalSelected
                })
            }
             break;    
            case 1: {
                
                this.setState({
                    isSectionFruitsSelected: !this.state.isSectionFruitsSelected
                })
            }
                break;    
            case 2: {
                
                this.setState({
                    isSectionSportsSelected: !this.state.isSectionSportsSelected
                })
            }
            break;    
            
          default: 
            break
       }
  }    
  

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <SectionList
       sections={[
         { title: 'Animals', selected:this.state.isSectionAimalSelected, index:0, data: this.state.isSectionAimalSelected?sectionAnimalData:[] },
         { title: 'Fruits', selected:this.state.isSectionFruitsSelected,index:1, data: this.state.isSectionFruitsSelected?sectionFruitsData:[]},
         { title: 'Sports',selected:this.state.isSectionSportsSelected, index:2, data: this.state.isSectionSportsSelected?sectionSportsData:[] }
       ]}
       renderSectionHeader={this.renderSectionsHeaders.bind(this)  }
                renderItem={this.renderItem.bind(this)} 
                refreshing={this.state.refresh}         
       keyExtractor={ (item, index) => index }
     />
        </View>
        </SafeAreaView>  
    );
  }
}

class RowItem extends Component {
    render(){
      //render styles and components conditionally using this.props.selected ? _ : _
      return (
        <TouchableOpacity
        onPress = {this.props.onPressItem}      
          style={[styles.list, styles.firstList]} >
        <View>
        <Text style={styles.text}> {this.props.item.item["item"]} </Text>                        
         <Entypo
         style={styles.icon}
         name= {'check' } 
         size={this.props.item.item["selected"] ?  10:0 }
         color={Constants.ICON_COLOR}/>  
          </View>
          </TouchableOpacity>
        
                );
    }
  }

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Constants.NAVBAR_COLOR,
},
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
      paddingLeft: 10,
      top: 10,
      color: "white",
      fontSize: 16
    },
    headerTitle: {
        position: "absolute",
        paddingLeft: 10,
        top: 10,
        color: "white",
        fontSize: 18
      },
    top:{
      paddingBottom: 40,
      paddingLeft: 30,
      marginBottom:10
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
      right: 20,
      top: 10
    }
  })
