import React,{useState} from 'react'
import{Text,StyleSheet,View,Dimensions,ImaPlatformge,TouchableOpacity,UIManager,LayoutAnimation} from 'react-native'

const w = Dimensions.get('window').width;
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
let animate = { 
    duration: 1000, 
    create: { type: 'linear', property: 'opacity' }, 
    update: { type: 'spring', springDamping: 10 }, 
    delete: { type: 'linear', property: 'opacity' } 
}

const Disc = () =>{
    const[change_height,set_change_height]=useState(false);
    const[change_text,set_change_text]=useState('ادامه مطلب')
    const _Change_height_size=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        //change_height?set_change_height(false):set_change_height(true)
        set_change_height(!change_height)
        change_height?set_change_text('ادامه مطلب'):set_change_text('بستن')
    }
    return(
        <View style={styles.container}>
            <View style={[styles.sec1,change_height?{height:null}:{height:200}]}>
                <Text style={styles.sec1_text}>
                    The config parameter is an object with the keys below. create returns a valid object for config, and the Presets objects can also all be passed as the configThe config parameter is an object with the keys below. create returns a valid object for config, and the Presets objects can also all be passed as the config.
                    The config parameter is an object with the keys below. create returns a valid object for config, and the Presets objects can also all be passed as the config.The config parameter is an object with the keys below. create returns a valid object for config, and the Presets objects can also all be passed as the config.
                    The config parameter is an object with the keys below. create returns a valid object for config, and the Presets objects can also all be passed as the config.
                    The config parameter is an object with the keys below. create returns a valid object for config, and the Presets objects can also all be passed as the config.
                    The config parameter is an object with the keys below. create returns a valid object for config, and the Presets objects can also all be passed as the config..
                    The config parameter is an object with the keys below. create returns a valid object for config, and the Presets objects can also all be passed as the config.
                    The config parameter is an object with the keys below. create returns a valid object for config, and the Presets objects can also all be passed as the config.
                </Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>{_Change_height_size()}}>
                <Text style={styles.btn_text}>{change_text}</Text>
            </TouchableOpacity>
          
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
       width:null,
       height:null,
       marginTop:10,
       elevation:2,
       padding:10,
       paddingBottom:0,
       backgroundColor:'#fff'
    },
    sec1:{
        height:200,
        overflow:'hidden'
    },
    sec1_text:{
        lineHeight:19,
        color:'#333',
        textAlign:'right',
        fontFamily:'IRANSansMobile_Light',
    },
    btn:{
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#bbb',
        borderTopWidth:0.4,
        backgroundColor:'#fff'
    },
    btn_text:{
        color:'#999',
        fontSize:13,
        fontFamily:'IRANSansMobile_Light',
    }
})

export default React.memo(Disc);