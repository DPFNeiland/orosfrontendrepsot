import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Arrow(props: any) {
  return (
    <Svg
      width={7}
      height={12}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.53 6.53a.75.75 0 000-1.06L1.757.697a.75.75 0 00-1.06 1.06L4.939 6 .697 10.243a.75.75 0 001.06 1.06L6.53 6.53zM5 6.75h1v-1.5H5v1.5z"
        fill="#000"
      />
    </Svg>
  )
}

