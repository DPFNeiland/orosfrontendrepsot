import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NaturezaCrime(props: any) {
  return (
    <Svg
      width={18}
      height={24}
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{marginLeft: '5%'}}
    >
      <Path
        d="M13 .3c.706.242 1.348.64 1.879 1.164l1.656 1.658c.525.53.923 1.172 1.165 1.878H13V.3zM18 7v12a5.006 5.006 0 01-5 5H5a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h6v5a2 2 0 002 2h5zm-4.192 10.413a1 1 0 00-1.4-.222 4.587 4.587 0 01-2.273.809 1.347 1.347 0 01-.864-.345A3.025 3.025 0 007.439 17a5.86 5.86 0 00-3.046 1.206 1 1 0 101.214 1.588A3.952 3.952 0 017.439 19c.246 0 .371.078.7.3.57.45 1.274.697 2 .7a6.464 6.464 0 003.456-1.193 1 1 0 00.213-1.394zM14 14a1 1 0 00-1-1H5a1 1 0 000 2h8a1 1 0 001-1zm0-4a1 1 0 00-1-1H5a1 1 0 000 2h8a1 1 0 001-1z"
        fill="#374957"
      />
    </Svg>
  )
}

export default NaturezaCrime