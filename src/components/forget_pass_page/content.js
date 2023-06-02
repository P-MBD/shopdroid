import React, {useState} from 'react';
import {SafeAreaView,View,StyleSheet,TextInput,TouchableOpacity,Text,Dimensions} from 'react-native'
import Ripple from 'react-native-material-ripple'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useNavigation } from '@react-navigation/native';


const w = Dimensions.get('window').width;
const CELL_COUNT = 6;



const Content =() => {
  const {navigate} = useNavigation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (

    <View style={styles.container}>
    <View style={styles.sec1}>
        <Text style={styles.sec1_t1}>
          کد تایید برای شماره 09150003423 ارسال گردید
        </Text>
        <Text style={styles.sec1_t2} onPress={()=>navigate('Login')}>
            ویرایش شماره تماس
        </Text>
    </View>
    <View style={styles.sec2}>
        <Text style={styles.sec2_t1}>
            کد تایید را وارید نمایید
        </Text>
        <SafeAreaView style={styles.root}>
        <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
        </SafeAreaView>
      
    </View>
</View>
   
  );
};

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
    container:{
      width:'100%',
      height:'100%',
      padding:20,
      paddingLeft:30,
      paddingRight:30,
      justifyContent:'flex-start',
      // alignItems: 'center'
  },
  sec1:{
      width:null,
      backgroundColor:'#fff',
      borderWidth:1,
      borderColor:'#5ba056',
      padding:15,
      justifyContent:'space-between'
  },
  sec1_t1:{
      fontSize:14,
      color:'#666',
      paddingTop:5,
      paddingBottom:10,
      fontFamily:'IRANSansMobile',
  },
  sec1_t2:{
      fontSize:14,
      color:'#43a3e7',
      paddingTop:10,
      paddingBottom:5,
      fontFamily:'IRANSansMobile',
  },
  sec2:{
      marginTop:35,
  },
  sec2_t1:{
      fontSize:15,
      color:'#888',
      fontFamily:'IRANSansMobile',
  },
  sec2_p2:{
      // width:w/1.4,
      marginTop:25,
      height:20,
      alignItems:'center',
      justifyContent:'center'
  },
  sec2_t2:{
      color:'red',
      fontSize:13,
      top:40,
      right:10
  }
  });

export default React.memo(Content)