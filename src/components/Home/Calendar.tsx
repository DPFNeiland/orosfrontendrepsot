import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Calendar(props: any) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_879_773)" fill="#C5C5C5">
        <Path d="M15.833 2.167H15v-.834a.833.833 0 10-1.667 0v.834H6.667v-.834a.833.833 0 00-1.667 0v.834h-.833A4.172 4.172 0 000 6.333v10A4.172 4.172 0 004.167 20.5h11.666A4.172 4.172 0 0020 16.333v-10a4.172 4.172 0 00-4.167-4.166zM1.667 6.333a2.5 2.5 0 012.5-2.5h11.666a2.5 2.5 0 012.5 2.5v.834H1.667v-.834zm14.166 12.5H4.167a2.5 2.5 0 01-2.5-2.5v-7.5h16.666v7.5a2.5 2.5 0 01-2.5 2.5z" />
        <Path
          d="M11 13a1 1 0 11-2 0 1 1 0 012 0zM6.833 13a1 1 0 11-2 0 1 1 0 012 0zM15.167 13a1 1 0 11-2 0 1 1 0 012 0z"
          stroke="#fff"
          strokeWidth={0.5}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_879_773">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Calendar