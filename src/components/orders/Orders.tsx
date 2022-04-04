import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native"

export type Props = {
  navigation: { navigate: any }
}

interface dataTypes {
  userId: number,
  id: number,
  title: string,
  body: string
}

export const Orders: React.FC<Props> = () => {

  const [posts, setPosts] = useState<dataTypes[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const window = useWindowDimensions()

  const newData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const respone = await data.json()
    setLoading(true)
    setTimeout(() => {
      const setDate = setPosts(respone)
      setLoading(false)
    }, 1000)    
  }  

  if (loading) return <Text style={{flex:1, marginTop:250}}>...Loading</Text>

  return (
    <View style={styles.container}>
      <ScrollView >
        <StatusBar style="dark" />

        <Text>Orders</Text>
        {
          posts && posts.map(elem => {
            return (
              <Text key={elem.id}>{elem.id}</Text>
            )
          })
        }
        <Button onPress={newData}
          title="Запрос"
          color="#FF7212"
        />

        <Button onPress={() => setPosts([])}
          title="Сбросить данные"
          color="#FF7212"
        />
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 34,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
})