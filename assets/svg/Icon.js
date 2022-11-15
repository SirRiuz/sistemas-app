import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconSvg = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 22c4.336 0 8-3.247 8-7.429 0-2.571-1.305-5.119-2.716-7.148-1.43-2.055-3.076-3.726-3.962-4.568a1.913 1.913 0 0 0-2.644 0c-.886.842-2.531 2.513-3.962 4.568C5.305 9.453 4 12 4 14.571 4 18.753 7.664 22 12 22Z"
      stroke="#000"
      strokeWidth={2}
    />
    <Path
      d="M12 18a4 4 0 0 1-4-4"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
)

export default IconSvg
