import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Bairro(props: any) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ marginLeft: '5%' }}

    >
      <Path
        d="M17.884 3.945A4.16 4.16 0 0013.78.5H6.21a4.16 4.16 0 00-4.106 3.448L.064 15.615A4.166 4.166 0 004.167 20.5h11.667a4.167 4.167 0 004.104-4.889L17.884 3.945zM17.75 17.94a2.5 2.5 0 01-1.916.892H4.167a2.5 2.5 0 01-2.463-2.932L3.745 4.235A2.5 2.5 0 016.21 2.166h7.571a2.5 2.5 0 012.462 2.067L18.294 15.9a2.499 2.499 0 01-.544 2.04zM10.834 4.666v1.667a.833.833 0 11-1.667 0V4.666a.833.833 0 111.667 0zm0 5v1.667a.833.833 0 11-1.667 0V9.666a.833.833 0 111.667 0zm0 5v1.667a.833.833 0 11-1.667 0v-1.667a.833.833 0 011.667 0z"
        fill="#C5C5C5"
      />
    </Svg>
  )
}

export default Bairro
