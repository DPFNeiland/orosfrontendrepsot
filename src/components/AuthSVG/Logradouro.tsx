import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Logradouro(props: any) {
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
      <G clipPath="url(#clip0_807_176)" fill="#C5C5C5">
        <Path d="M10 5.5a3.333 3.333 0 100 6.667A3.333 3.333 0 0010 5.5zm0 5a1.666 1.666 0 110-3.332 1.666 1.666 0 010 3.332z" />
        <Path d="M10 20.5a4.392 4.392 0 01-3.592-1.833c-3.176-4.381-4.787-7.674-4.787-9.79a8.38 8.38 0 1116.758 0c0 2.116-1.61 5.409-4.787 9.79A4.391 4.391 0 0110 20.5zm0-18.182a6.57 6.57 0 00-6.562 6.561c0 1.675 1.578 4.773 4.441 8.722a2.62 2.62 0 004.242 0c2.863-3.95 4.44-7.047 4.44-8.722A6.57 6.57 0 0010 2.318z" />
      </G>
      <Defs>
        <ClipPath id="clip0_807_176">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Logradouro
