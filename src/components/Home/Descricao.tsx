import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Descricao(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_965_406)" fill="#C5C5C5">
        <Path d="M24 11.247A12.011 12.011 0 1012.017 24H19a5.005 5.005 0 005-5v-7.753zM22 19a3 3 0 01-3 3h-6.983a10.042 10.042 0 01-9.56-6.982 9.917 9.917 0 01-.392-4.175 10.043 10.043 0 018.656-8.76c.431-.055.865-.082 1.3-.083A9.921 9.921 0 0118.4 4.3a10.041 10.041 0 013.6 7.042V19z" />
        <Path d="M8 9h4a1 1 0 000-2H8a1 1 0 100 2zM16 11H8a1 1 0 000 2h8a1 1 0 000-2zM16 15H8a1 1 0 000 2h8a1 1 0 100-2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_965_406">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Descricao
