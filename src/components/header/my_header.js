import React from 'react'
import {ScrollView,Text,StyleSheet,TextInput} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Ripple from 'react-native-material-ripple'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'


const styles = StyleSheet.create({
    bg_red:{
        backgroundColor:'#ef394e'
    },
    bg_white:{
        backgroundColor:'#fff'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    btn:{
        padding:15,
        borderRadius:100,
    },
    icon:{
        fontSize:23,
        color:'#fff'
    },
    icongray:{
        fontSize:23,
        color:'#777'
    },
    texth1:{
        fontSize:21,
        color:'#fff',
        fontWeight:'bold',
        marginRight:10,
        fontFamily:'IRANSansMobile',
    },
    texth2:{
        fontSize:18,
        color:'#fff',
        marginRight:6,
        fontFamily:'IRANSansMobile_Light',
    },
    texth3:{
        fontSize:18,
        color:'#fff',
        marginRight:6,
        fontFamily:'IRANSansMobile_Light',
    },
    search_textinput:{
        height:'100%',
        width:'100%' ,
        textAlign:'right'
    }
})



const My_Header = (props) => {
   

    const Main_Header =()=>{
        return(
            <Header style={styles.bg_red} androidStatusBarColor="#ef394e">
                <Left style={styles.row}>
                    <Ripple style={styles.btn} onPress={()=>navigate('Shop_cart')}>
                        <MCIcon name='cart' style={styles.icon}/>
                    </Ripple>
                    <Ripple style={styles.btn} onPress={()=>navigate('Search')}>
                        <MIcon name='search' style={styles.icon}/>
                    </Ripple>
                </Left>

                <Right style={styles.row}>
                    {
                        props.head_page_name?
                            <Text style={styles.texth2}>
                                {props.head_page_name}
                            </Text>
                        :
                            <Text style={styles.texth1}>
                                Digikala
                            </Text>
                    }
                    
                    {
                        props.right_btn=='back'?
                            <Ripple style={styles.btn} onPress={()=>goBack(null)}>
                                <MIcon name='arrow-back' style={[styles.icon,{rotation:180}]} />
                            </Ripple>
                        :
                            <Ripple style={styles.btn} onPress={()=>toggleDrawer()}>
                                <MCIcon name='menu' style={styles.icon} />
                            </Ripple>
                    }
                </Right>
            </Header>
        )
    }





    switch(props.head_name){
        case 'Main':
            return Main_Header();
            break;
        
    }

    
}

export default React.memo(My_Header);