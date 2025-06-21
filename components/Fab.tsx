import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface IFab  {
    onPress : () => void;
    btnStyle: any;
    text: string
    textStyle: any;
    onLongPress?: ()=> void
}


export  const Fab:FC<IFab> = ( {
    onPress,
    btnStyle,
    text,
    textStyle,
    onLongPress
}) => {
  return (
    <Pressable
    style = { ({pressed})=> [btnStyle, styles.btnDefaultStyle, {opacity: pressed? 0.7: 1 } ]}
    onPress={onPress}
    onLongPress={onLongPress}
    >
     <Text
     style ={textStyle}
     > {text} </Text>
   </Pressable>

  )
}



const styles = StyleSheet.create({
    btnDefaultStyle: {
        padding: 8,
        borderRadius:15,
        shadowColor:"#000",
        shadowOpacity:0.3,
        elevation:3,
    }
})