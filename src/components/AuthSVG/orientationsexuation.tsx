import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function OrientacaoSexual(props: any) {
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
      <G
        clipPath="url(#clip0_543_750)"
        fill="#8C8C8C"
        stroke="#fff"
        strokeWidth={0.5}
      >
        <Path d="M7.5 10.5a5 5 0 100-10 5 5 0 000 10zm0-8.333a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666v0zM7.5 12.166a7.51 7.51 0 00-7.5 7.5.833.833 0 101.667 0 5.833 5.833 0 0111.666 0 .833.833 0 101.667 0 7.509 7.509 0 00-7.5-7.5v0zM18.333 7.063a1.756 1.756 0 00-1.666 1.833A1.756 1.756 0 0015 7.062a1.756 1.756 0 00-1.667 1.834c0 1.441 1.88 3.13 2.817 3.882a.827.827 0 001.033 0c.937-.75 2.817-2.44 2.817-3.882a1.756 1.756 0 00-1.667-1.834v0z" />
      </G>
      <Defs>
        <ClipPath id="clip0_543_750">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default OrientacaoSexual
