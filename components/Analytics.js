

import { createRef, useEffect } from "react"
import { FlatList } from "react-native"
import Item from "./Item"


const Analytics = props => {
	const DATA = [... new Array(10).keys()]
	const scrollRef = createRef(null)
	
	useEffect(() => {
		scrollRef.current.scrollToOffset({
			animated: true,offset:1000000
		})
	})

	return(
		<FlatList
			ref={scrollRef}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			data={DATA}
			renderItem={({ index }) => (
				<Item
					index={index}
					isFocus={index === (DATA.length - 1)}
				/>
			)}
		/>
	)
}


export default Analytics