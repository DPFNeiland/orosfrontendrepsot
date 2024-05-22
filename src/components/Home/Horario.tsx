import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Horario(props: any) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 10.5a10 10 0 01-20 0 .833.833 0 111.667 0A8.334 8.334 0 1010 2.167.833.833 0 0110 .5a10.01 10.01 0 0110 10zM8.564 9.667H6.667a.833.833 0 100 1.666h1.897a1.661 1.661 0 102.27-2.269v-2.73a.834.834 0 00-1.667 0v2.73c-.25.145-.458.353-.603.603zM1.522 7.82a.833.833 0 100-1.667.833.833 0 000 1.667zm1.996-2.98a.833.833 0 100-1.668.833.833 0 000 1.667zm2.965-1.972a.833.833 0 100-1.667.833.833 0 000 1.667z"
        fill="#C5C5C5"
      />
    </Svg>
  )
}

export default Horario