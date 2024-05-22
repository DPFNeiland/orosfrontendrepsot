import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function AutorizationDesmasquerd(props: any) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_570_366)" fill="#8C8C8C">
        <Path
          d="M14.25 0H3.75A3.755 3.755 0 000 3.75v10.5A3.754 3.754 0 003.75 18h10.5A3.754 3.754 0 0018 14.25V3.75A3.755 3.755 0 0014.25 0v0zm2.25 14.25a2.25 2.25 0 01-2.25 2.25H3.75a2.25 2.25 0 01-2.25-2.25V3.75A2.25 2.25 0 013.75 1.5h10.5a2.25 2.25 0 012.25 2.25v10.5z"
          stroke="#fff"
          strokeWidth={0.5}
        />
        <Path d="M7 11.94L4.06 9A.75.75 0 003 10.06L5.94 13a1.5 1.5 0 002.12 0L15 6.06A.75.75 0 0015 5a.75.75 0 00-1.06 0L7 11.94z" />
      </G>
      <Defs>
        <ClipPath id="clip0_570_366">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AutorizationDesmasquerd
