import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AutoDeclaration(props: any) {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ marginLeft: '5%' }}

    >
      <Path
        d="M14.583 1.097A5.334 5.334 0 0010 3.847a5.333 5.333 0 00-4.583-2.75A5.667 5.667 0 000 6.972c0 3.79 3.988 7.928 7.333 10.733a4.145 4.145 0 005.334 0C16.012 14.9 20 10.762 20 6.973a5.666 5.666 0 00-5.417-5.875zM11.596 16.43a2.477 2.477 0 01-3.192 0c-4.281-3.592-6.737-7.039-6.737-9.458a4 4 0 013.75-4.208 4 4 0 013.75 4.208.833.833 0 001.666 0 4 4 0 013.75-4.208 4 4 0 013.75 4.208c0 2.42-2.455 5.866-6.737 9.455v.003z"
        fill="#8C8C8C"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </Svg>
  )
}

export default AutoDeclaration
