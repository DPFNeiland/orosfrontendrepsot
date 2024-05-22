import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UFEstado(props: any) {
    return (
        <Svg
            width={21}
            height={23}
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            style={{ marginLeft: '5%' }}

        >
            <Path
                d="M1 2.333v19.334M8.48 1.338C6.152 1.25 2.808 2.464 2.125 2.723A.194.194 0 002 2.907V14.48a.2.2 0 00.23.198l6.25-.922c2.53-.373 5.751 3.457 9.36 2.388.74-.218 1.735-.73 2.056-.9A.196.196 0 0020 15.07V4.515a.205.205 0 00-.285-.187c-.534.228-1.709.697-2.595.83-3.71.56-6.372-3.735-8.64-3.82z"
                stroke="#C5C5C5"
                strokeWidth={1.2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default UFEstado
