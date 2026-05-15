import { Link } from 'react-router-dom'

const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

const variants = {
  primary: 'bg-brand-gold text-brand-navy hover:bg-yellow-500 focus:ring-brand-gold shadow-md hover:shadow-lg',
  secondary: 'bg-brand-navy text-white hover:bg-blue-900 focus:ring-brand-navy dark:bg-blue-800 dark:hover:bg-blue-700',
  outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-navy focus:ring-brand-navy',
  ghost: 'text-brand-navy hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 focus:ring-gray-400',
  white: 'bg-white text-brand-navy hover:bg-gray-100 focus:ring-white shadow-md hover:shadow-lg',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} className={classes} {...props}>{children}</a>
  return <button className={classes} {...props}>{children}</button>
}
