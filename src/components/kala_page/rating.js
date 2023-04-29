import React from 'react'
import {View,StyleSheet,Dimensions,Text} from 'react-native'
import Stars from 'react-native-stars'
const w= Dimensions.get('window').width;

const Rating = () => {
    return(
        <View style={styles.container}>
                <View style={styles.sec1}>
                <Stars
                    half={true}
                    default={2.5}
                    // update={(val)=>{this.setState({stars: val})}}
                    spacing={4}
                    starSizeW={20}
                    starSizeH={20}
                    count={5}
                    fullStar={require('../../assets/img/full_star.png')}
                    emptyStar={require('../../assets/img/empty_star.png')}
                    halfStar={require('../../assets/img/half_star.png')}
                />
                <Text style={styles.text_size13}>
                    4.3 از 5
                </Text>
                <Text style={[styles.text_size11,styles.text_color_lightGray]}>
                    از مجموع 1456 رای ثبت شده
                </Text>
                </View>
                <View style={styles.sec2}>
                <View style={styles.sec2_part}>
                <Stars
                    half={true}
                    default={4.5}
                    // update={(val)=>{this.setState({stars: val})}}
                    spacing={2}
                    starSizeW={50}
                    starSizeH={7}
                    count={5}
                    fullStar={require('../../assets/img/full_sq.png')}
                    emptyStar={require('../../assets/img/empty_sq.png')}
                    halfStar={require('../../assets/img/half_sq_c.png')}
                />
                <Text style={[styles.text_size11,styles.text_color_gray]}>
                    کیفیت ساخت
                </Text>
            </View>
            <View style={styles.sec2_part}>
                <Stars
                    half={true}
                    default={4.5}
                    // update={(val)=>{this.setState({stars: val})}}
                    spacing={2}
                    starSizeW={50}
                    starSizeH={7}
                    count={5}
                    fullStar={require('../../assets/img/full_sq.png')}
                    emptyStar={require('../../assets/img/empty_sq.png')}
                    halfStar={require('../../assets/img/half_sq_c.png')}
                />
                <Text style={[styles.text_size11,styles.text_color_gray]}>
                    ارزش خرید نسبت به قسمت
                </Text>
            </View>                
            <View style={styles.sec2_part}>
                <Stars
                    half={true}
                    default={4.5}
                    // update={(val)=>{this.setState({stars: val})}}
                    spacing={2}
                    starSizeW={50}
                    starSizeH={7}
                    count={5}
                    fullStar={require('../../assets/img/full_sq.png')}
                    emptyStar={require('../../assets/img/empty_sq.png')}
                    halfStar={require('../../assets/img/half_sq_c.png')}
                />
                <Text style={[styles.text_size11,styles.text_color_gray]}>
                    نوآوری
                </Text>
            </View>                
            <View style={styles.sec2_part}>
                <Stars
                    half={true}
                    default={4.5}
                    // update={(val)=>{this.setState({stars: val})}}
                    spacing={2}
                    starSizeW={50}
                    starSizeH={7}
                    count={5}
                    fullStar={require('../../assets/img/full_sq.png')}
                    emptyStar={require('../../assets/img/empty_sq.png')}
                    halfStar={require('../../assets/img/half_sq_c.png')}
                />
                <Text style={[styles.text_size11,styles.text_color_gray]}>
                    امکانات و قابلیت ها 
                </Text>
            </View>
            <View style={styles.sec2_part}>
                <Stars
                    half={true}
                    default={4.5}
                    // update={(val)=>{this.setState({stars: val})}}
                    spacing={2}
                    starSizeW={50}
                    starSizeH={7}
                    count={5}
                    fullStar={require('../../assets/img/full_sq.png')}
                    emptyStar={require('../../assets/img/empty_sq.png')}
                    halfStar={require('../../assets/img/half_sq_c.png')}
                />
                <Text style={[styles.text_size11,styles.text_color_gray]}>
                    سهولت استفاده
                </Text>
            </View>
            <View style={styles.sec2_part}>
                <Stars
                    half={true}
                    default={4.5}
                    // update={(val)=>{this.setState({stars: val})}}
                    spacing={2}
                    starSizeW={50}
                    starSizeH={7}
                    count={5}
                    fullStar={require('../../assets/img/full_sq.png')}
                    emptyStar={require('../../assets/img/empty_sq.png')}
                    halfStar={require('../../assets/img/half_sq_c.png')}
                />
                <Text style={[styles.text_size11,styles.text_color_gray]}>
                    طراحی و ظاهر
                </Text>
            </View>
        </View>
                </View>
        
    )
}
const styles=StyleSheet.create({
container:{
    width:null,
    height:null,
    marginTop:10,
    elevation:2,
    padding:5,
    backgroundColor:'#fff'
},
sec1:{
    paddingTop:35,
    paddingBottom:35,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center'
},
sec2:{
    paddingTop:5,
    paddingBottom:10,

},
sec2_part:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:8,
},
text_size13:{
    fontSize:13,
    color:'#333',
    marginLeft:5
},
text_size11:{
    fontSize:11,
    marginLeft:5
},
text_color_lightGray:{
    color:'#bbb'
},
text_color_gray:{
    color:'#888'
}
})

export default React.memo(Rating)