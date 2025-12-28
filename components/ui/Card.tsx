import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glass?: boolean
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, glass = true, children, ...props }, ref) => {
    const baseStyles = 'rounded-2xl p-8'
    const glassStyles = glass ? 'glass-effect' : 'bg-slate-900 border border-slate-800'
    const hoverStyles = hover ? 'hover:border-slate-700/50 transition-all duration-300 cursor-pointer' : ''
    
    return (
      <div
        ref={ref}
        className={cn(baseStyles, glassStyles, hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
