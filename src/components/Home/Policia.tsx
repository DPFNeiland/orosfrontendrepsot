import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Policia(props: any) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_856_388)">
        <Path
          d="M19.462 2.5h-8.925A4.992 4.992 0 0114.854 0h.292a4.991 4.991 0 014.316 2.5zm6.163 15H25V20a1.25 1.25 0 11-2.5 0v-2.5h-15V20A1.25 1.25 0 015 20v-2.5h-.625a4.365 4.365 0 00-.625 8.686V27.5a2.5 2.5 0 005 0v-1.25h12.5v1.25a2.5 2.5 0 005 0v-1.311A4.323 4.323 0 0030 21.913v-.038a4.375 4.375 0 00-4.375-4.375zm-23.59-1.886A7.45 7.45 0 015 15h20c1.02 0 2.029.208 2.965.614l-1.93-6.215A6.217 6.217 0 0020.066 5H9.934a6.218 6.218 0 00-5.969 4.398l-1.93 6.216z"
          fill="#638EFF"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_856_388">
          <Path fill="#fff" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Policia
