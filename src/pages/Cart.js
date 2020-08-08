import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useQuery } from '@apollo/client';
import { PRODUCTS } from '~/queries/products'
import { colors, dimensions } from '~/constants'
import Header from './cart/Header';
import Card from './cart/Card'

const { sw, sh } = dimensions;

function Cart({ price, cart }) {
    const { loading, error, data } = useQuery(PRODUCTS);

    console.log("CART", cart)
  
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;

    return (
        <View style={styles.container}>
            <Header />
            {
                <Text>{price}</Text>
            }
            <View style={styles.subContainer}>
            {
                cart.map(({ id, title, price }, index) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                    />
                ))
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 50,
        backgroundColor: colors.gray_light
    },
    subContainer: {
        padding: sh(3),
    }
})

const mapStateToProps = state => {
    return {
        price: state.price,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);
