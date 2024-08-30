import { View,Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { img185 } from "../api/moviedb";

const data = [
    {
        id: 1, 
        title: "AMD",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEU8QoalInq-cgSQnl406IpWBN6gUS8vEhg&s"
    },
    {
        id: 2, 
        title: "Paypal",
        img: "https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
    },
    {
        id: 3, 
        title: "Oracle",
        img: "https://yt3.googleusercontent.com/exYm9eUqwXUf15Q69vqlqpju_jVkhalW8oouEUXrXVHWUz-9V4_JjgrIkv61olAnyz9os29e=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: 4, 
        title: "Stripe",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s"
    },
    {
        id: 5, 
        title: "Apple",
        img: "https://images.unsplash.com/photo-1621768216002-5ac171876625?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
    },
    {
        id: 6, 
        title: "HP",
        img: "https://h30434.www3.hp.com/t5/image/serverpage/image-id/289671i7793896194528AA9?v=v2"
    },
    {
        id: 7, 
        title: "Google",
        img: "https://static.vecteezy.com/system/resources/previews/013/760/951/original/colourful-google-logo-in-dark-background-free-vector.jpg"
    },
    {
        id: 8, 
        title: "Webex",
        img: "https://play-lh.googleusercontent.com/tFFAvb_eZM5BlHYFiuyVwhM54o7mvfCOFX3AGbgTULfKpEancPmZnP1PRu44CZiZgyI"
    },
    {
        id: 9, 
        title: "Walmart",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8H-PCjoZrQ82P9qFzcaqRopfY4754HnmmA&s"
    },
    {
        id: 10, 
        title: "Microsoft",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P7PSO_hZpFpHrAtfV3Xvpb13CT7V9kuKxg&s"
    }
]

export default function MovieList({title}){

    var {width,height} = Dimensions.get('window');    

    return ( 
        <View className = 'mb-8 space-y-4'>

            <View className = 'flex-row items-center justify-between mx-4'>
                <Text className= 'text-white text-lg'>{title}</Text>                
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}}>
                {data.map((item,id) => {
                    return (
                        <TouchableWithoutFeedback key={id}>     
                            <View className='space-y-1 mr-4' >
                                <Image source={{uri: item.img}} style= {{width:width*0.33 , height: height*0.22}} className= 'rounde-3xl'/>
                                <Text className= 'text-neutral-300 ml-1'>
                                    {/*{movieName.length>14 ? movieName.slice(0,14)+'...' : movieName}*/}
                                    {item.title.length>14 ? item.title.slice(0,14)+'...' : item.title}
                                </Text>
                            </View>
                            
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>
            
        </View>
    )
}