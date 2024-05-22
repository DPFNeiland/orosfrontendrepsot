import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RG(props: any) {
  return (
    <Svg
      width={19}
      height={15}
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ marginLeft: '5%' }}

    >
      <Path
        d="M16.833 1h-15A.833.833 0 001 1.833V13.5a.833.833 0 00.833.833h15a.834.834 0 00.834-.833V1.833A.833.833 0 0016.833 1z"
        stroke="#8C8C8C"
        strokeLinejoin="round"
      />
      <Path
        d="M14.333 4.333H11v3.334h3.333V4.333z"
        stroke="#8C8C8C"
        strokeLinejoin="round"
      />
      <Path
        d="M4.333 11h10m-10-6.667h2.5m-2.5 3.334h2.5"
        stroke="#8C8C8C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.833 1h-15A.833.833 0 001 1.833V13.5a.833.833 0 00.833.833h15a.834.834 0 00.834-.833V1.833A.833.833 0 0016.833 1z"
        stroke="#8C8C8C"
        strokeLinejoin="round"
      />
      <Path
        d="M14.333 4.333H11v3.334h3.333V4.333z"
        stroke="#8C8C8C"
        strokeLinejoin="round"
      />
      <Path
        d="M4.333 11h10m-10-6.667h2.5m-2.5 3.334h2.5"
        stroke="#8C8C8C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default RG
