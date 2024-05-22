import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Emergencia(props: any) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.417 10.917h-8.334V2.583a2.083 2.083 0 00-4.166 0v8.334H2.583a2.083 2.083 0 000 4.166h8.334v8.334a2.083 2.083 0 004.166 0v-8.334h8.334a2.083 2.083 0 000-4.166z"
        fill="red"
      />
    </Svg>
  )
}

export default Emergencia
