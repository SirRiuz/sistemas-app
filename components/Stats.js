

import MasonryList from '@react-native-seoul/masonry-list';
import StatsItem from "./StatsItem";

const Stats = props => {
	return(
		<MasonryList
			style={{ padding:15 }}
			numColumns={2}
			data={[... new Array(4).keys()]}
			renderItem={() => ( <StatsItem/> )}
		/>
	)
}


export default Stats




