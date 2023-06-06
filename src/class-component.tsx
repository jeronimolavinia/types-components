import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";



interface Props{

}

interface State{
    contador: number;

}

class ClassComponent extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {contador: 0};

    }

    private increment(){ //Modificadores de acesso: Private, Public, Protect 
        const calculo = this.state.contador + 1;
        this.setState({contador: calculo})
       
    }
        
    render() { 
        return ( 
            <View>
            <Text style={styles.Texto}>{this.state.contador}</Text>
            <Button title="Contagem" onPress={() => {this.increment;}}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    Texto:{
        textAlign: 'center',
        fontSize: 50,
    },
   
});
            
        
export default ClassComponent;