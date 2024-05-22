import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function TipoLocal(props: any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_965_253)" fill="#C5C5C5">
        <Path d="M5 14.5a1 1 0 100-2 1 1 0 000 2zM1 10.5a1 1 0 100-2 1 1 0 000 2zM5 6.5a1 1 0 100-2 1 1 0 000 2zM1 2.5a1 1 0 100-2 1 1 0 000 2zM23 14.5a1 1 0 100-2 1 1 0 000 2zM19 10.5a1 1 0 100-2 1 1 0 000 2zM23 6.5a1 1 0 100-2 1 1 0 000 2zM19 2.5a1 1 0 100-2 1 1 0 000 2zM14 24.5a1 1 0 100-2 1 1 0 000 2zM10 20.5a1 1 0 100-2 1 1 0 000 2zM14 16.5a1 1 0 100-2 1 1 0 000 2zM10 12.5a1 1 0 100-2 1 1 0 000 2zM15 3.5a2 2 0 01-2-2 1 1 0 10-2 0 2 2 0 01-2 2 1 1 0 000 2 2 2 0 012 2 1 1 0 002 0 2 2 0 012-2 1 1 0 100-2zM7 19.5a2 2 0 01-2-2 1 1 0 10-2 0 2 2 0 01-2 2 1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 2 2 0 012-2 1 1 0 100-2zM23 19.5a2 2 0 01-2-2 1 1 0 10-2 0 2 2 0 01-2 2 1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 2 2 0 012-2 1 1 0 100-2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_965_253">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TipoLocal