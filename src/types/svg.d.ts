declare module "*.svg" {
  import * as React from "react"
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export = SVGComponent
}

declare module "*.svg?react" {
  import * as React from "react"
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export = SVGComponent
}

declare module "*.svg?url" {
  const urlValue: string
  export = urlValue
}
