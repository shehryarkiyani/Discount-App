import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const[t1,setT1]=useState('')
  const[t2,setT2]=useState('')
  const[save,setSave]=useState('')
  const[original,setOriginal]=useState('')
  const[prErr,setErr]=useState('')
  const[disErr,setDErr]=useState('')
  const setPrice=(txt)=>{
setT2(txt)

  }
  useEffect(() => {
    
    calculate()
  },[t2,t1]);
  const calculate=()=>{
     let val1=parseInt(t1)
    if(isNaN(t1)|| val1<0){
      setErr("Number Should be positive integer")
       setSave('')
          setOriginal('')
    }else{
      setErr('')
     
      let val2=parseInt(t2)
      if(val2>0){
        if(val2<=100){
          setDErr('')
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
        }else{
          setDErr("Discount should be less than 100")
          setSave('')
          setOriginal('')
        }
       
      }
      
    }
    
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Discount App</Text>
      <View style={styles.innerContainer}>
      <View style={styles.midcontainer}>
      <Text style={{color:'magenta',marginLeft:-16}}>Original Price</Text>
      <TextInput onChangeText={(txt)=>setT1(txt)} style={[styles.TextInputStyle,{marginLeft:15}]} placeholder="Enter Original Price" placeholderTextColor='#ff6347'/>
      
      </View>
<Text style={[prErr==''?{display:'none'}:styles.priceErr]}>{prErr}</Text>
      <View style={styles.midcontainer}>
          <Text style={{color:'magenta'}}>Discount: </Text>
          <TextInput onChangeText={setPrice} style={styles.TextInputStyle} placeholder="Enter Discount Percentage" placeholderTextColor='#ff6347'/>
     
        </View>
        <Text style={[disErr==''?{display:'none'}:styles.discountErr]}>{disErr}</Text>
        <View style={styles.midcontainer}>
          <Text style={{color:'magenta',marginLeft:-16}}>Amount Save:</Text>
          <TextInput style={[styles.TextInputStyle,{marginLeft:12}]} value={save}/>
        </View>
        <View style={styles.midcontainer}>
          <Text style={{color:'magenta'}}>New Price:</Text>
          <TextInput style={styles.TextInputStyle}  value={original}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  priceErr:{
    display:'flex',
color:'red'
  },
  discountErr:{
     display:'flex',
color:'red'
  },
  txt:{
    fontSize:36,
    position:'absolute',
    top:'20%',
    color:'magenta',
  },
  container: {
    flex: 1,
    backgroundColor: '#faf0e6',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  innerContainer:{
    flexDirection:'column',
    marginTop:50
  },
  TextInputStyle:{
    borderBottomColor:'#ff1493',
    borderWidth:1,
    borderTopWidth:0,
    borderRightWidth:0,
    borderLeftWidth:0,
    width:'60%',
    height: 40,
    paddingTop:13,
    marginLeft:15,
  },
  midcontainer:{
    flexDirection:"row",
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-end'
  }
});
