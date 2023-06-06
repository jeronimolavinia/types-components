import { StyleSheet, View } from 'react-native';
import FunctionComponent from './src/function-component';
import ClassComponent from './src/class-component';

export default function App() {
  return (
    <View style={styles.container}>
     <FunctionComponent/>
     <ClassComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
