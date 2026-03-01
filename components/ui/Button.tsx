import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider font-sans",
  {
    variants: {
      variant: {
        default: "bg-rose-gold text-charcoal hover:bg-white",
        outline: "border border-rose-gold/50 bg-transparent text-white hover:bg-rose-gold/10",
        ghost: "hover:bg-white/5 text-neutral-300 hover:text-white",
        link: "text-rose-gold underline-offset-4 hover:underline",
        luxury: "bg-charcoal text-white border border-rose-gold/30 hover:border-rose-gold hover:shadow-[0_0_20px_rgba(156,209,243,0.3)] transition-all duration-300",
        crimson: "bg-crimson text-white hover:bg-[#8A1022] transition-all duration-300",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 px-6",
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
