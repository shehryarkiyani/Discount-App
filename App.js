import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const[t1,setT1]=useState('')
  const[t2,setT2]=useState('')
  const[save,setSave]=useState('')
  const[original,setOriginal]=useState('')
  const setPrice=(txt)=>{
setT2(txt)

  }
  useEffect(() => {
    
    calculate()
  },[t2,t1]);
  const calculate=()=>{
    let val1=parseInt(t1)
    let val2=parseInt(t2)
    let newprice=(val1*val2)/100
    let saveprice=val1-newprice
    if(t2===''|| t1===''){
setSave('')
    setOriginal('')
    }else{
      setSave(newprice.toString())
    setOriginal(saveprice.toString())
      console.log(saveprice)
    }
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text>Original Price</Text>
          <TextInput onChangeText={(txt)=>setT1(txt)} style={styles.TextInputStyle} placeholder="Enter Original Price"/>
      
        </View>
        <View>
          <Text>Discount: </Text>
          <TextInput onChangeText={setPrice} style={styles.TextInputStyle} placeholder="Enter Discount Percentage"/>
     
        </View>
        <View>
          <Text>You Save</Text>
          <TextInput style={styles.TextInputStyle} value={save}/>
        </View>
        <View>
          <Text>New Price</Text>
          <TextInput style={styles.TextInputStyle}  value={original}/>
        </View>
     
      
      </View>
      
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
  innerContainer:{
    flexDirection:'column'
  },
  TextInputStyle:{
    borderBottomColor:'#ff1493',
    borderWidth:1,
    borderTopWidth:0,
    borderRightWidth:0,
    borderLeftWidth:0,
    width:'100%',
    height: 60
  },
});
