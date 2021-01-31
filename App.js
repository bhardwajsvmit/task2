import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View ,Button,SafeAreaView,Alert} from 'react-native';

export default function App() {
 
  const [index,setIndex]=useState(null)
  const [number,setNumber]=useState('')

  const findNumber=(x)=>{

    const arr = []
    for(let i=1;i<(x+1);i++)
    {
      let j=i
        if(j%2==0){
          arr[i]=(j*j)-1
        }else{
          arr[i]=(j*j)+1
        } 
    }
    return(
      arr[x]
    );
  }

  return (
    <SafeAreaView style={styles.cont}>
      <Text style={{textTransform:'capitalize',fontSize:18}} >enter index number of the series </Text>
      <TextInput onChangeText={(txt)=>setIndex(txt)} value={index} style={{borderBottomWidth:1,fontSize:30,width:200,padding:5,textAlign:'center'}} />
      <Button color="green" title="find the number" onPress={()=>setNumber(findNumber(index))} />
      <Text style={{fontSize:40,color:'white',fontWeight:'bold'}}>{number}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
