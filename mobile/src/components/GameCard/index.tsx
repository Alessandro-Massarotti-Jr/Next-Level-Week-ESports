import React from 'react';
import { TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground source={data.cover} style={styles.cover} >
            <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
                <Text style={styles.name}>
                    {data.name}
                </Text>
                <Text style={styles.ads}>
                    {data.ads} anuncios
                </Text>
            </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}