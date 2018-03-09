import * as React from 'react';
import{View, Text } from 'react-native';

interface IProps {
    amount: number;
}

const Progress = ({amount}: IProps) => {
    return (
    <View>
        <Text>Progress: {amount}</Text>
    </View>)
}
export default Progress;