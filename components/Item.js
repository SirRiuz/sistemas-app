

import { Text, View } from "react-native"
import styles from "../style/Item" 
import { useFonts } from 'expo-font'


const size = [ 250,100,210,150,245,70,45,135,175,220 ]


const Item = props => {
	const [fontsLoaded] = useFonts({
		'UberMove-Medium': require('../assets/UberMove-Medium.ttf'),
		'UberMove-Bold': require('../assets/UberMove-Bold.ttf')
	})

	if (!fontsLoaded) { return null;}
	return(
		<View style={styles.container}>
			<View style={styles.analitycDataConteiner}>
				<View style={styles.textContainer}>
					{ props.isFocus ? (
						<Text style={{
							...styles.porcentage,
							fontFamily:'UberMove-Bold'
						}}>40%</Text>
					):null }
				</View>
				<View style={{
					...styles.analityc,
					backgroundColor:props.isFocus ? '#151C18':'#89CE87',
					height:size[Math.floor(Math.random()*size.length)]
				}}/>
				<View style={styles.textContainer}>
					<Text
						style={{
							fontFamily:'UberMove-Medium',
							fontSize:12.5,
							opacity:.55
						}}
					>
						Day {props.index + 1}
					</Text>
				</View>
			</View>
		</View>
	)
}




export default Item


