import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";
import axios from "axios";

const Chat = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')

   /*  const getResultFromOpenApi = async () => {
        try {
            const response = await fetch('http://localhost:9004/openapi', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt})
            })
            const jsonData = await response.json()
            setResult(`${jsonData.result} y los token utilizados fueron ${jsonData.token} `)
        } catch (error) {
            console.log(error)
        }
    } */

    const getResultFromOpenApi = async () => {
        try {
          //Implementacion de axios en lugar de fetch para realizar la solicitud POST
          //El objteo de encabezados pasa directamente como una propiedad en el segundo argumento 'prompt'
          const response = await axios.post('http://localhost:9004/openapi', {
            prompt,
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          //La respuesta se accede a traves de response.data en lugar de response.jason() que se usa en fetch
          const jsonData = response.data;
          setResult(`${jsonData.result} y los token utilizados fueron ${jsonData.token}`);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Ingrese El numero que desea convertir a binario'}
            </Text>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}/>
            <Button title={'Enviar'} onPress={getResultFromOpenApi}/>
            <Text style={styles.text}>
                {result}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Chat