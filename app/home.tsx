import { supabase } from '@/services/supabase'
import { CoffeeShop } from '@/types'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function Home() {
    const [Shops, setShops] = useState<CoffeeShop[]>([])

    useEffect(() => {
        const fetchCoffeeShops = async () => {

            const { data, error } = await supabase
                .from("coffee_shop")
                .select('*')
                .order("name", { ascending: true });

            if (error) {
                Alert.alert("คำเตือน", "เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองใหม่อีกครั้ง");
            } else {
                setShops(data)
            }
        }
        fetchCoffeeShops();
    }, [])

    const renderShopItem = ({ item }: { item: CoffeeShop }) => (
        <TouchableOpacity style={styles.cardItem} onPress={() => router.push({
            pathname: "/detail",
            params: {
                id: item.id,
                name: item.name,
                district: item.district,
                description: item.description,
                image_url: item.image_url,
                latitude: item.latitude,
                longitude: item.longitude,
                phone: item.phone,
            }
        })}>
            <Image
                source={{ uri: item.image_url }}
                style={{ width: 75, height: 75, borderRadius: 5 }}
            />
            <View style={{ marginLeft: 10, justifyContent: "center" }} />
            <Text style={styles.shopName}>{item.name}</Text>
            <Text style={styles.shopDistrict}> ⛳{item.district}</Text>
        </TouchableOpacity>
    )

    return (
        <ScrollView>
            <FlatList
                contentContainerStyle={{ padding: 15 }}
                showsVerticalScrollIndicator={false}
                data={Shops}
                keyExtractor={(item) => item.id}
                renderItem={renderShopItem}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    shopName: {
        fontFamily: "Kanit_700Bold",
        fontSize: 16,
    },
    shopDistrict: {
        fontFamily: "Kanit_400Regular",
        fontSize: 14,
        color: "#ABABAB",
    },
    cardItem: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ccc",
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
})