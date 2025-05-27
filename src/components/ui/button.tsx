import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-white/80 text-black",
        destructive:
          "bg-destructive text-destructive-foreground",
        outline:
          "border border-input bg-background",
        secondary:
          "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3",
        sm: "rounded-lg px-3 text-xs",
        lg: "rounded-lg px-8 py-2",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  className?: string
}

interface ButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

interface ButtonLinkProps extends ButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === 'span') {
            return (
              <div className="relative inline-block overflow-hidden px-2">
                <span className="invisible whitespace-nowrap">{child.props.children}</span>
                <span className="absolute left-0 top-0 w-[calc(100%-1px)] font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full whitespace-nowrap">
                  {child.props.children}
                </span>
                <span className="absolute left-0 top-0 w-[calc(100%-1px)] translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0 whitespace-nowrap">
                  {child.props.children}
                </span>
              </div>
            );
          }
          return child;
        })}
      </Comp>
    )
  }
)
Button.displayName = "Button"

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <Link
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === 'span') {
            return (
              <div className="relative inline-block overflow-hidden px-2">
                <span className="invisible whitespace-nowrap">{child.props.children}</span>
                <span className="absolute left-0 top-0 w-[calc(100%-1px)] font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full whitespace-nowrap">
                  {child.props.children}
                </span>
                <span className="absolute left-0 top-0 w-[calc(100%-1px)] translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0 whitespace-nowrap">
                  {child.props.children}
                </span>
              </div>
            );
          }
          return child;
        })}
      </Link>
    )
  }
)
ButtonLink.displayName = "ButtonLink"

export { Button, ButtonLink, buttonVariants }
