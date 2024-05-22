import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Denuncia(props: any) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_866_458)">
        <Path
          d="M15 29.286c7.89 0 14.286-6.396 14.286-14.286S22.89.714 15 .714.714 7.11.714 15C.723 22.886 7.114 29.277 15 29.286zM13.81 7.857a1.19 1.19 0 112.38 0v9.524a1.19 1.19 0 11-2.38 0V7.857zM15 22.143a1.19 1.19 0 110 2.38 1.19 1.19 0 010-2.38z"
          fill="#FFC01D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_866_458">
          <Path
            fill="#fff"
            transform="translate(.714 .714)"
            d="M0 0H28.5714V28.5714H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Denuncia
