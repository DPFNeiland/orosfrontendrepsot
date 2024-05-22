import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Endereco(props: any) {
  return (
    <Svg
      width={18}
      height={25}
      viewBox="0 0 18 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ marginLeft: '5%' }}

    >
      <G clipPath="url(#clip0_807_96)" fill="#C5C5C5">
        <Path d="M9 4.214c-.468 0-.925.134-1.314.385a2.305 2.305 0 00-.871 1.026 2.214 2.214 0 00-.135 1.32c.091.444.317.851.648 1.171.33.32.752.537 1.21.626.46.088.935.043 1.367-.13a2.35 2.35 0 001.062-.842c.26-.376.398-.818.398-1.27 0-.606-.249-1.188-.693-1.616A2.407 2.407 0 009 4.214zm0 3.429c-.234 0-.463-.067-.657-.193a1.152 1.152 0 01-.436-.513 1.107 1.107 0 01-.067-.66c.046-.222.158-.425.324-.585.165-.16.376-.269.605-.313a1.22 1.22 0 01.684.065c.216.086.4.233.53.42a1.116 1.116 0 01-.147 1.444A1.204 1.204 0 019 7.643z" />
        <Path d="M9 14.5c-.498.003-.99-.11-1.433-.329a3.09 3.09 0 01-1.116-.928C4.197 10.239 3.054 7.981 3.054 6.53a5.65 5.65 0 011.742-4.062A6.052 6.052 0 019 .785c1.577 0 3.09.605 4.204 1.683a5.65 5.65 0 011.742 4.062c0 1.45-1.143 3.709-3.397 6.713a3.09 3.09 0 01-1.116.928 3.205 3.205 0 01-1.433.33zM9 2.032a4.745 4.745 0 00-3.29 1.32 4.43 4.43 0 00-1.366 3.18c0 1.148 1.12 3.272 3.151 5.98.173.23.399.416.66.545a1.913 1.913 0 001.69 0c.261-.129.487-.315.66-.545 2.032-2.708 3.15-4.832 3.15-5.98a4.43 4.43 0 00-1.364-3.18A4.745 4.745 0 009 2.031z" />
      </G>
      <Path
        d="M8.532 24.098l-7.333-7.086a.2.2 0 01.047-.321l4.03-2.108a.205.205 0 01.26.063c.4.555 1.913 2.517 3.447 2.711 1.534.194 3.264-1.416 3.725-1.878a.206.206 0 01.26-.026l3.794 2.551a.2.2 0 01.006.328l-7.98 5.784a.2.2 0 01-.256-.018z"
        stroke="#C5C5C5"
        strokeWidth={1.7}
      />
      <Defs>
        <ClipPath id="clip0_807_96">
          <Path
            fill="#fff"
            transform="translate(1.904 .786)"
            d="M0 0H14.1913V13.7143H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Endereco
