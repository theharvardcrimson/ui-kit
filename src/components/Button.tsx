import * as React from "react"

import { type VariantProps, cva } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"

// Acknowledgement: This Button component draws heavy inspiration from shadcn/ui.
const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg ring-offset-current transition-colors",
    {
        variants: {
            variant: {
                default: "bg-red-200 text-black hover:bg-red-100/60",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                icon: "h-10 w-10",
                small: "h-9 px-3 rounded-md",
                large: "h-11 px-8 rounded-md",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}    

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Compose = asChild ? Slot : "button"
      return (
        <Compose
          className={twMerge(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
  )

  export { Button }