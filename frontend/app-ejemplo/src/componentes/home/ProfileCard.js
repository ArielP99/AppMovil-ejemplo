import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const twitter = <Icon name={'twitter'} size={30} color={'#00acee'}/>
const facebook = <Icon name={'facebook'} size={30} color={'#3b5998'}/>
const instagram = <Icon name={'instagram'} size={30} color={'#DD2A7B'}/>
const linkedin = <Icon name={'linkedin'} size={30} color={'#0072b1'}/>
const tiktok = <Icon name={'tiktok'} size={30} color={'black'}/>
const twitch = <Icon name={'twitch'} size={30} color={'#6441a5'}/>
const reddit = <Icon name={'reddit'} size={30} color={'#FF5700'}/>
const youtube = <Icon name={'youtube'} size={30} color={'#FF0000'}/>


const ProfileCard = () => {
    const user = {
        //avatar: "https://wallpapercave.com/uwp/uwp3658047.png",
        avatar: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912642/avatar-icon-md.png",
        coverPhoto: "https://cdn.mellostudio.com/wp-content/uploads/2021/10/29015017/vinyl-6092415-scaled.jpg",
        name: "Ariel Panchi"
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.facebook.com/ArielPanchi99')}>
                    {facebook}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://twitter.com/arielpanchi18')}>
                    {twitter}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.instagram.com/ariel_panchi99/')}>
                    {instagram}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.linkedin.com/in/ariel-panchi-1456061b8/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.tiktok.com/@ariel_panchi10')}>
                    {tiktok}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.twitch.tv/ariel_pg14')}>
                    {twitch}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.reddit.com/user/PayBroad216/')}>
                    {reddit}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.youtube.com/channel/UCm7v3kM9U4YUY4Nv452sn9A')}>
                    {youtube}
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignItems: 'center', //flex y grid
        backgroundColor: '#AECDD3'
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: '#162B4E'
    },
    name: {
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard