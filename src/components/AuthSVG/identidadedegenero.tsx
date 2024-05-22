import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IdentidadeDeGenero(props: any) {
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
        d="M18.333.5H15a.833.833 0 000 1.667h2.155l-2 2a5.784 5.784 0 00-6.411-.374A5.824 5.824 0 105 14.6v1.733H3.333a.833.833 0 100 1.667H5v1.667a.833.833 0 001.666 0V18h1.667a.833.833 0 100-1.667H6.666v-1.727a5.778 5.778 0 002.076-.733 5.821 5.821 0 007.591-8.526l2-2V5.5A.833.833 0 1020 5.5V2.167A1.667 1.667 0 0018.333.5v0zM1.666 8.833a4.143 4.143 0 015.657-3.88 5.797 5.797 0 000 7.76 4.143 4.143 0 01-5.657-3.88v0zm10 4.167a4.167 4.167 0 110-8.334 4.167 4.167 0 010 8.334z"
        fill="#8C8C8C"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </Svg>
  )
}

export default IdentidadeDeGenero
