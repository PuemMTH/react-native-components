import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import axios_config from "../components/axios/config"
function ApiScreen() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        axios_config.get("/").then((res) => {
            setData(res.data.data)
            const length = res.data.data.length
            console.log("Data Found", length, "Records")
        })
    }, [])
    return (
        <ScrollView>
            {data.map((item, index) => (
                <Text key={index}>{item.subject_name}</Text>
            ))}
        </ScrollView>
    )
}

export default ApiScreen