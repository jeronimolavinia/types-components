import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function FunctionComponent(){
    const [contador, setContador] = useState(0);

    function increment(){
        setContador (contador + 1);
    }

    return(
        <View>
            <Text style={styles.Text1}>{contador}</Text>
            <Button title="Contagem" onPress={ () => {increment();}}/>
        </View>
    )

}
      
const styles = StyleSheet.create({
    Text1:{
        textAlign:'center',
        fontSize:20,
    },

})