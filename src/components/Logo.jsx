import { Link } from 'react-router-dom'

const Logo = ({ 
  variant = 'header', 
  scrolled = false, 
  className = '',
  size = 'lg',
  showIcon = true,
  showText = true 
}) => {
  // Define size variants
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl', 
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  // Define icon size variants
  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  // Define color variants based on context
  const getColorClasses = () => {
    if (variant === 'footer') {
      return 'text-white'
    }
    
    // Header variant
    return scrolled ? 'text-black' : 'text-white'
  }

  const getIconColorClasses = () => {
    if (variant === 'footer') {
      return {
        background: '#1a1a1a',
        accent: '#ef4444'
      }
    }
    
    // Header variant - adapt background based on scroll state
    return scrolled 
      ? { background: '#1a1a1a', accent: '#ef4444' }
      : { background: '#ffffff', accent: '#ef4444' }
  }

  const iconColors = getIconColorClasses()

  return (
    <Link to="/" className={`relative z-10 group flex items-center gap-3 ${className}`}>
      {showText && (
        <div 
          className={`relative ${sizeClasses[size]} font-bold tracking-wider transition-all duration-300 ${getColorClasses()}`}
        >
          <span className="relative z-10">
            LEANTEK
          </span>
        </div>
      )}
    </Link>
  )
}

export default Logo 