import * as React from "react"

const Label = React.forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={`text-sm font-medium leading-none text-gray-700 ${className || ""}`}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
