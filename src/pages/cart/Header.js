import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, dimensions } from '~/constants'
import { connect } from 'react-redux';

const { sw, sh } = dimensions;

function Header({ price }) {
    const navigation = useNavigation();

    return (
        <View style={[styles.container]}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={styles.button}
            >
                <Icon 
                    name="arrow-left" 
                    size={sh(4)} 
                    color={colors.black} 
                />
            </TouchableOpacity>
            <View style={styles.middleContainer} />
            <View style={styles.priceContainer}>
                <Text style={styles.text}>{price} ₺</Text>
            </View>
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
    priceContainer: {
        height: sh(9),
        paddingHorizontal: sh(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: sh(3),
        fontWeight: 'bold',
        color: colors.black
    },
})

const mapStateToProps = state => {
    return {
        price: state.price,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header);
