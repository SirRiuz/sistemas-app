import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#A1F6A0'
	},
	header:{
		flex:1,
		justifyContent:'center',
		paddingLeft:15
	},
	title:{
		fontSize:35,
		marginBottom:5,
	},
	subtitle:{
		fontSize:23,
		opacity:.7,
	},
	analytics:{
		flex:1,
	},
	statsContainer:{
		flex:1,
	},
	iconContainer:{
		backgroundColor:'#89CE87',
		width:45,
		height:45,
		borderRadius:100,
		marginBottom:10,
		justifyContent:'center',
		alignItems:'center'
	}
})


export default styles