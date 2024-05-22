import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Datadenascimento(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ marginLeft: '5%' }}

    >
      <Path
        d="M19.167 18.333h-.834v-6.666A4.172 4.172 0 0014.167 7.5h-3.334V5.032a2.083 2.083 0 001.25-1.907A6.077 6.077 0 0010.615.272a.833.833 0 00-1.23 0 6.077 6.077 0 00-1.468 2.853 2.083 2.083 0 001.25 1.907V7.5H5.833a4.172 4.172 0 00-4.166 4.167v6.666H.833a.833.833 0 100 1.667h18.334a.833.833 0 000-1.667zM5.833 9.167h8.334a2.5 2.5 0 012.5 2.5v1.65c-.78-.084-1.25-.584-1.25-.817a.833.833 0 00-1.667 0c0 .286-.568.833-1.458.833-.908 0-1.459-.578-1.459-.833a.834.834 0 00-1.666 0c0 .286-.569.833-1.459.833-.907 0-1.458-.578-1.458-.833a.833.833 0 00-1.667 0c0 .262-.482.74-1.25.818v-1.651a2.5 2.5 0 012.5-2.5v0zm-2.5 5.816a3.463 3.463 0 002.084-.816 3.59 3.59 0 004.583.012 3.59 3.59 0 004.583-.012 3.463 3.463 0 002.084.815v3.351H3.333v-3.35z"
        fill="#8C8C8C"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </Svg>
  )
}

export default Datadenascimento