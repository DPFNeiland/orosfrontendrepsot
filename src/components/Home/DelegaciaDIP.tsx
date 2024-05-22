import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DelegaciaDIP(props: any) {
  return (
    <Svg
      width={31}
      height={30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_189_380)">
        <Path
          d="M30.5 15a1.25 1.25 0 01-1.25 1.25h-7.5a1.25 1.25 0 010-2.5h7.5A1.25 1.25 0 0130.5 15zm-18.75 0a7.5 7.5 0 10-7.5-7.5 7.508 7.508 0 007.5 7.5zm0 2.5A11.262 11.262 0 00.5 28.75 1.25 1.25 0 001.75 30h20A1.25 1.25 0 0023 28.75 11.262 11.262 0 0011.75 17.5z"
          fill="#003470"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_189_380">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DelegaciaDIP
