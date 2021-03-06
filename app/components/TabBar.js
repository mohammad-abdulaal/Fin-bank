import React , {useState} from 'react';
import { View, StyleSheet ,Dimensions } from 'react-native'
import colors from '../config/colors';
import Tab from './Tab';

const {width}=Dimensions.get('screen')
const TabBar=({state,navigation}) => {
    const [selected,setSelected] =useState('Accounts')
    const {routes} = state;
    const renderColor =(currentTab)=>(currentTab===selected ? colors.blue : '#808080');
    const handlePress =(activeTab,index) => {
        if (state.index !== index){
            setSelected(activeTab);
            navigation.navigate(activeTab)
        }
    };
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map((route,index) => <Tab tab={route}
                        icon={route.params.icon}
                        onPress={ () => handlePress(route.name , index)}
                        color={renderColor(route.name)}
                        key={route.key} />)
                }
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    wrapper:{
        // position:'absolute',
        position:'relative',
        bottom:1,
        width,
        height:50,
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'space-around',
    },
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor:"#FFF",
        // width:250,
        // borderRadius:100,
    }
})
export default TabBar;