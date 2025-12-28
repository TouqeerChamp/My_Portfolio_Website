import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-slate-300">
            {label} {props.required && <span className="text-red-400">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl',
            'focus:outline-none focus:border-blue-500 transition-colors',
            'placeholder:text-slate-500',
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-red-400 text-sm mt-1">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
