import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Profissao(props: any) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ marginLeft: '5%' }}

    >
      <Path
        d="M18.208 3.833h-1.054A4.801 4.801 0 0012.458 0h-1.916a4.8 4.8 0 00-4.696 3.833H4.792A4.797 4.797 0 000 8.625v9.583A4.798 4.798 0 004.792 23h13.416A4.797 4.797 0 0023 18.208V8.625a4.797 4.797 0 00-4.792-4.792zm-7.666-1.916h1.916a2.875 2.875 0 012.699 1.916H7.843a2.875 2.875 0 012.699-1.916zM4.792 5.75h13.416a2.875 2.875 0 012.875 2.875V11.5H1.917V8.625A2.875 2.875 0 014.792 5.75zm13.416 15.333H4.792a2.875 2.875 0 01-2.875-2.875v-4.791h8.625v.958a.958.958 0 101.916 0v-.958h8.625v4.791a2.875 2.875 0 01-2.875 2.875z"
        fill="#8C8C8C"
        stroke="#fff"
      />
    </Svg>
  )
}

export default Profissao
