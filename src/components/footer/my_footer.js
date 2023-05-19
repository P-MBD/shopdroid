import React from "react";
import { StyleSheet,Text } from "react-native";
import { Footer, FooterTab,Button } from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons';

const My_Footer= ()=>{
    return(
        <Footer>
            <FooterTab>
                <Button full style={styles.row}>
                    <Icon name='keyboard-arrow-left' style={styles.icon}  size={27}/>
                    <Text>ورود به دیجی کالا</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}

const styles=StyleSheet.create({
    bg_blue:{
        backgroundColor:'#1e88e5',
    },
    text:{
        fontSize:15,
        color:'#fff',
    },
    icon:{
        fontSize:15,
        color:'#fff',
        marginRight:15
    },
    row:{
        flexDirection:'row',
    }
})

export default React.memo(My_Footer);