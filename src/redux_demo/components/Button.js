import React, {Component} from 'react';
import {TouchableOpacity, Button} from 'react-native';

const ButtonComp = ({title, onPress, bgColor, textColor}) => (
    <Button
        style = {{marginBottom:10, height:40, width:100}}
        backgroundColor = {bgColor}
        title = {title}
        color = {textColor}
        onPress = {onPress}/>
);

export default ButtonComp;