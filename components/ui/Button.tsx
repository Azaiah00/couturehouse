import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-charcoal text-white hover:bg-charcoal-light",
        gold: "bg-gold text-white hover:bg-gold-dark",
        outline: "border border-charcoal bg-transparent hover:bg-charcoal hover:text-white",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900",
        link: "text-neutral-900 underline-offset-4 hover:underline",
        luxury: "bg-gold text-white hover:bg-white hover:text-gold border border-gold transition-all duration-300",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 px-4",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

