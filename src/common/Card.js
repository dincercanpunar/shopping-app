import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { colors, dimensions } from '~/constants'
import { addToCart } from '~/actions';
import * as _ from 'lodash';

const { sw, sh } = dimensions;

function Card({ id, title, price, cart, addToCart }) {
    const index = _.findIndex(cart, function(o) { return o.id == id });

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08062203/08062203-d0658c-1650x1650.jpg',
                }}
            />
            <View style={styles.middleContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <View>
                    <Text style={styles.lastPriceText}>{price} ₺</Text>
                    <Text style={styles.priceText}>{price} ₺</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                {
                    index > -1 ?
                        <View
                            style={[
                                styles.button,
                                {
                                    backgroundColor: colors.success
                                }
                            ]} 
                        >
                            <Icon 
                                name="check"
                                size={sh(3)} 
                                color={colors.white} 
                            />
                        </View>
                    :
                        <TouchableOpacity 
                            style={[
                                styles.button,
                                {
                                    backgroundColor: colors.main
                                }
                            ]} 
                            onPress={() => addToCart({
                                id,
                                title,
                                price,
                                quantity: 1
                            })}
                        >
                            <Icon 
                                name="plus"
                                size={sh(3)} 
                                color={colors.white} 
                            />
                        </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: sh(15),
        //padding: sh(1),
        marginBottom: sh(3),
        backgroundColor: colors.white,
        flexDirection: 'row',
        borderBottomRightRadius: sh(3)
    },
    image: {
        height: sh(15)-2*(sh(1)),
        width: sh(15)-2*(sh(1)),
        resizeMode: 'cover'
    },
    middleContainer: {
        flex: 1,
        marginLeft: sh(1),
        justifyContent: 'space-between'
    },
    rightContainer: {
        justifyContent: 'flex-end'
    },
    button: {
        height: sh(7),
        width: sh(7),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: sh(3),
        borderBottomRightRadius: sh(3)
    },
    titleText: {
        color: colors.black,
        fontSize: sh(2.5),
        fontWeight: '700'
    },
    lastPriceText: {
        color: colors.gray,
        fontSize: sh(2),
        fontWeight: '700',
        textDecorationLine: "line-through",
    },
    priceText: {
        color: colors.main,
        fontSize: sh(3),
        fontWeight: '700'
    }
})

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, { addToCart })(Card);
