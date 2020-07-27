import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, dimensions } from '~/constants'

const { sw, sh } = dimensions;

function Header() {
    return (
        <View style={[styles.container]}>
            {/* <TouchableOpacity 
                onPress={() => console.log("asd")}
                style={styles.button}
            >
                <Icon 
                    name="bars" 
                    size={sh(4)} 
                    color={colors.black} 
                />
            </TouchableOpacity> */}
            <View style={styles.button} />
            <View style={styles.middleContainer}>
                <Text style={[styles.text, { color: "black" }]}>çağır gelsin</Text>
            </View>
            <TouchableOpacity 
                onPress={() => console.log("asd")}
                style={styles.button}
            >
                <Icon 
                    name="shopping-cart" 
                    size={sh(4)} 
                    color={colors.main} 
                />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: sh(9),
        backgroundColor: colors.white,
        flexDirection: 'row'
    },
    middleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: sh(9),
        width: sh(9),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: sh(4),
        fontFamily: "Lobster-Regular"
    },
    badge: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: sh(1),
        right: sh(1),
        height: sh(3),
        width: sh(3),
        borderRadius: sh(3),
        backgroundColor: colors.primary_light
    },
    badgeText: {
        color: colors.primary,
        fontSize: sh(2),
        fontWeight: 'bold'
    }
})

export default Header;
