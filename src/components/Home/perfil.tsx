import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Perfil(props: any) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={16} cy={16} r={16} fill="#ECF1FF" />
      <Path
        d="M16 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM16 17.832a8.26 8.26 0 00-8.25 8.25c0 .507.41.917.917.917h14.666c.507 0 .917-.41.917-.916a8.26 8.26 0 00-8.25-8.25z"
        fill="#003470"
      />
    </Svg>
  )
}

export default Perfil
