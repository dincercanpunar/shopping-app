import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useQuery } from '@apollo/client';
import { PRODUCTS } from '~/queries/products'
import { Header, Card } from '~/common'
import { colors, dimensions } from '~/constants'

const { sw, sh } = dimensions;

function Home() {
    const { loading, error, data } = useQuery(PRODUCTS);
  
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.subContainer}>
                {
                    data.products.map(({ title, price }, index) => (
                        <Card
                            key={index}
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

export default Home;
