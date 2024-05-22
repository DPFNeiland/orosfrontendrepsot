import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Microfone(props: any) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_189_404)" fill="#003470">
        <Path d="M20.834 25a2.083 2.083 0 01-2.084 2.082H8.477a16.652 16.652 0 0033.046 0H31.25a2.083 2.083 0 110-4.166h10.417v-4.167H31.25a2.083 2.083 0 110-4.166h10.273a16.652 16.652 0 00-33.046 0H18.75a2.083 2.083 0 010 4.166H8.334v4.167H18.75a2.083 2.083 0 012.084 2.083z" />
        <Path d="M47.917 25a2.083 2.083 0 00-2.084 2.083 18.77 18.77 0 01-18.75 18.75h-4.166a18.773 18.773 0 01-18.75-18.75 2.083 2.083 0 00-4.167 0A22.944 22.944 0 0022.917 50h4.166A22.944 22.944 0 0050 27.083 2.083 2.083 0 0047.917 25z" />
      </G>
      <Defs>
        <ClipPath id="clip0_189_404">
          <Path fill="#fff" d="M0 0H50V50H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Microfone