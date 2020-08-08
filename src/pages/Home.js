import React, {  useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useQuery } from '@apollo/client';
import { PRODUCTS } from '~/queries/products'
import { Header, Card } from '~/common'
import { colors, dimensions } from '~/constants'
import { useIsFocused } from "@react-navigation/native";

const { sw, sh } = dimensions;

function Home() {

    const isFocused = useIsFocused();

    useEffect(() => {}, [isFocused]);

    const { loading, error, data } = useQuery(PRODUCTS);
  
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;
        
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.subContainer}>
                {
                    data.products.map(({ id, title, price }, index) => (
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
        flex: 1,
    },
    subContainer: {
        flex: 1,
        padding: sh(3),
        backgroundColor: colors.gray_light
    }
})

export default Home;
