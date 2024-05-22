import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DelegaciaCICOM(props: any) {
  return (
    <Svg
      width={31}
      height={30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_173_358)" fill="#003470">
        <Path d="M24.189 28.751h-.042a2.34 2.34 0 01-1.68-.75L20.07 25.65a1.25 1.25 0 01.027-1.768c.002 0 .003-.002.004-.003a1.25 1.25 0 011.763.03l2.326 2.278 4.176-4.176a1.25 1.25 0 011.768 1.768l-4.277 4.276a2.337 2.337 0 01-1.668.696z" />
        <Path d="M18.044 25.019a7.463 7.463 0 0111.905-6.004C32.165 11.034 27.491 2.767 19.511.55 11.532-1.665 3.267 3.007 1.052 10.99c-2.217 7.98 2.457 16.248 10.437 18.465 2.625.728 5.399.728 8.024 0a7.439 7.439 0 01-1.468-4.435zm-1.294-9.992c0 .333-.132.65-.367.885l-3.756 3.758a1.252 1.252 0 01-1.77-1.771l3.39-3.39V8.766a1.252 1.252 0 112.503 0v6.261z" />
      </G>
      <Defs>
        <ClipPath id="clip0_173_358">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DelegaciaCICOM
