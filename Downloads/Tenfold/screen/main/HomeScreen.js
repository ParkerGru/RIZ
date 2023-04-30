import React, { useEffect, useState, createRef } from 'react';
import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity, Alert, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen = ({navigation}) => {
    return (
        
        <ImageBackground style={styles.container} source={require('../../assets/images/home_back.png')} resizeMode="contain"  >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.headerTools}>
                    <TouchableOpacity
                        style={styles.toolButton}
                        activeOpacity={0.6}
                        onPress={() => Alert.alert('Info', 'Clicked search button') }
                    >
                        <FontAwesome name='search' style={{ color: 'white' }} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.toolButton}
                        activeOpacity={0.6}
                        onPress={() => Alert.alert('Info', 'Clicked play button') }
                    >
                        <FontAwesome name='play-circle' style={{ color: 'white' }} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.mainTools}>
                  <View style={styles.rightTools}>
                    <View style={styles.statsContainer}>
                      <TouchableOpacity
                            style={styles.toolButton}
                            activeOpacity={0.6}
                            onPress={() => Alert.alert('Info', 'Clicked play button') }
                        >
                          <FontAwesome name='thumbs-up' style={{ color: 'white' }} size={20} />
                      </TouchableOpacity>
                      <Text style={styles.label}>143K</Text>
                    </View>
                    <View style={styles.statsContainer}>
                      <TouchableOpacity
                            style={styles.toolButton}
                            activeOpacity={0.6}
                            onPress={() => Alert.alert('Info', 'Clicked play button') }
                        >
                          <MaterialCommunity name='message-processing' style={{ color: 'white' }} size={20} />
                      </TouchableOpacity>
                      <Text style={styles.label}>2K</Text>
                    </View>
                    <View style={styles.statsContainer}>
                      <TouchableOpacity
                            style={styles.toolButton}
                            activeOpacity={0.6}
                            onPress={() => Alert.alert('Info', 'Clicked play button') }
                        >
                          <FontAwesome name='mail-forward' style={{ color: 'white' }} size={20} />
                      </TouchableOpacity>
                      <Text style={styles.label}>1.4K</Text>
                    </View>
                  </View>
                  <View style={styles.bottomTools}>
                    <View style={styles.musicStyle}>
                      <View style={styles.musicTitle}>
                        <View style={styles.avatar}>
                          <Image source={require('../../assets/images/artistAvatar.png')} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                        </View>
                        <Text style={styles.label}>Annie Brittany</Text>
                        <FontAwesome name='check' style={{ color: 'white' }} size={15} />
                        <Text style={styles.label}>Follow</Text>
                      </View>
                      <Text style={[styles.label, {textAlign: 'left'}]}>
                        Lorem iprum dolor sit amet..
                      </Text>
                      <View style={styles.musicArtist}>
                        <FontAwesome name='music' style={{ color: 'white' }} size={20} />
                        <Text style={[styles.label, {marginLeft: 10}]}>Alan waler - Darkside</Text>
                      </View>
                    </View>
                    <View style={styles.bottomMenuContainer}>
                      <View style={styles.bottomMenu}>
                        <TouchableOpacity
                              style={styles.toolButton}
                              activeOpacity={0.6}
                              onPress={() => Alert.alert('Info', 'Clicked play button') }
                          >
                            <FontAwesome name='home' style={{ color: 'white' }} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.toolButton, styles.plusStyle, { marginTop: -70,  }]}
                            activeOpacity={0.6}
                            onPress={() => Alert.alert('Info', 'Clicked play button') }
                          >
                            <FontAwesome name='plus' style={{ color: 'white' }} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity
                              style={styles.toolButton}
                              activeOpacity={0.6}
                              onPress={() => Alert.alert('Info', 'Clicked play button') }
                          >
                            <FontAwesome name='user' style={{ color: 'white' }} size={20} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerTools: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    toolButton: {
        width: 45,
        height: 45,
        borderRadius: 100,
        backgroundColor: 'rgba(161, 136, 186, 0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainTools: {
        justifyContent: 'space-between',
        flex: 3,
        // borderWidth: 1
    },
    rightTools: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 3,
        // borderWidth: 1
      },
    statsContainer: {
      alignItems: 'center'
    },
    label: {
      color: 'white',
      marginTop: 5,
      textAlign: 'center'
    },
    bottomTools: {
        justifyContent: 'space-between',
        flex: 3,
    },
    musicStyle: {
      flex: 1,
      borderWidth: 1,
    },
    bottomMenuContainer: {
      flex: 1,
      // borderWidth: 1,
      justifyContent: 'flex-end'
    },
    plusStyle: {
      width: 60,
      height: 60, 
      // borderWidth: 1,
      borderRadius: 100,
      backgroundColor: '#502380',
      justifyContent: 'center',
      alignItems: 'center'
    },
    bottomMenu: {
      height: 70,
      backgroundColor: 'rgba(65, 65, 65, 0.4)',
      borderRadius: 100,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    musicStyle: {
      flex: 1,
      justifyContent: 'space-between',
      // borderWidth: 1,
      width: '70%'
    },
    musicTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    avatar: {
      borderWidth: 2,
      width: 40,
      height: 40,
      borderRadius: 100,
      borderColor: 'white',
    },
    musicDescription: {

    },
    musicArtist: {
      flexDirection: 'row',
    },
});