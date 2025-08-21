import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-inter",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", 
        kpi: "border-transparent bg-amber-kpi text-ink hover:bg-amber-kpi/90 font-semibold",
        bridge: "border-transparent bridge-gradient text-white hover:shadow-elegant",
        cyan: "border-transparent bg-cyan-accent text-white hover:bg-cyan-accent/90",
        outline: "border-bridge-blue text-bridge-blue hover:bg-bridge-blue hover:text-white",
        ghost: "border-transparent bg-background/50 text-foreground hover:bg-background"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
