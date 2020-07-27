import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, dimensions } from '~/constants'

const { sw, sh } = dimensions;

function Card({ title, price }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08062203/08062203-d0658c-1650x1650.jpg',
                }}
            />
            <View style={styles.rightContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.priceText}>{price} ₺</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: sh(15),
        padding: sh(1),
        marginBottom: sh(3),
        backgroundColor: colors.white,
        flexDirection: 'row'
    },
    image: {
        height: sh(15)-2*(sh(1)),
        width: sh(15)-2*(sh(1)),
        resizeMode: 'cover'
    },
    rightContainer: {
        marginLeft: sh(1),
        justifyContent: 'space-around'
    },
    titleText: {
        color: colors.black,
        fontSize: sh(2.5),
        fontWeight: '700'
    },
    priceText: {
        color: colors.black,
        fontSize: sh(3),
        fontWeight: '700'
    }
})

export default Card;
