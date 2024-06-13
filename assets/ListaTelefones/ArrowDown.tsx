import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function ArrowDown(props: any) {
  return (
    <Svg
      width={12}
      height={7}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.47 6.53a.75.75 0 001.06 0l4.773-4.773a.75.75 0 10-1.06-1.06L6 4.939 1.757.697a.75.75 0 00-1.06 1.06L5.47 6.53zM5.25 5v1h1.5V5h-1.5z"
        fill="#000"
      />
    </Svg>
  )
}

