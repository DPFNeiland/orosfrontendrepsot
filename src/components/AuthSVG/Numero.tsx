import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Numero(props: any) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ marginLeft: '5%' }}

    >
      <Path
        d="M19.268 8.058l-6.321-6.322a4.173 4.173 0 00-5.893 0L.733 8.058A2.482 2.482 0 000 9.825v8.18a2.5 2.5 0 002.5 2.5h15a2.5 2.5 0 002.5-2.5v-8.18a2.483 2.483 0 00-.732-1.767zM12.5 18.839h-5v-3.278a2.5 2.5 0 015 0v3.278zm5.834-.833a.833.833 0 01-.834.833h-3.333v-3.278a4.167 4.167 0 00-8.333 0v3.278H2.5a.833.833 0 01-.833-.833V9.825a.84.84 0 01.244-.59l6.32-6.318a2.507 2.507 0 013.538 0l6.32 6.321a.84.84 0 01.245.587v8.18z"
        fill="#C5C5C5"
      />
    </Svg>
  )
}

export default Numero
