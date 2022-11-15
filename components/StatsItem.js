

import { Text, View } from "react-native"
import styles from "../style/StatsItem"
import { useFonts } from 'expo-font'


const StatsItem = props => {
	const DATA = ['10%','5%','80%','25%','100%','50%','45%','1%','95%']
	const [fontsLoaded] = useFonts({
		'UberMove-Medium': require('../assets/UberMove-Medium.ttf'),
		'UberMove-Bold': require('../assets/UberMove-Bold.ttf')
	})

	if (!fontsLoaded) { return null;}
	return(
		<View style={styles.container}>
			<Text
				style={{ ...styles.porcentage,fontFamily:'UberMove-Bold' }}
			>
				{DATA[[Math.floor(Math.random()*DATA.length)]]}
			</Text>
			<Text style={{...styles.title,fontFamily:'UberMove-Medium'}}>Humedad</Text>
		</View>
	)
}



export default StatsItem

