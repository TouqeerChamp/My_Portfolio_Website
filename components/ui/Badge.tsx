import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Badge({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: BadgeProps) {
  const baseStyles = 'inline-block rounded-full font-semibold border backdrop-blur-sm'
  
  const variants = {
    primary: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    secondary: 'bg-slate-500/20 border-slate-500/30 text-slate-300',
    success: 'bg-green-500/20 border-green-500/30 text-green-400',
    warning: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
    danger: 'bg-red-500/20 border-red-500/30 text-red-400',
    info: 'bg-purple-500/20 border-purple-500/30 text-purple-400'
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  
  return (
    <span 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </span>
  )
}
