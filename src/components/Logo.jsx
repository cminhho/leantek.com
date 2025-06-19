import { Link } from 'react-router-dom'

const Logo = ({ 
  variant = 'header', 
  scrolled = false, 
  className = '',
  size = 'lg' 
}) => {
  // Define size variants
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl', 
    lg: 'text-4xl',
    xl: 'text-5xl'
  }

  // Define color variants based on context
  const getColorClasses = () => {
    if (variant === 'footer') {
      return 'text-white'
    }
    
    // Header variant
    return scrolled ? 'text-black' : 'text-white'
  }

  const getAccentClasses = () => {
    if (variant === 'footer') {
      return 'bg-red-500'
    }
    
    // Header variant
    return scrolled ? 'bg-red-600' : 'bg-red-500'
  }

  const getGlowClasses = () => {
    if (variant === 'footer') {
      return 'text-red-500'
    }
    
    // Header variant
    return scrolled ? 'text-red-600' : 'text-red-500'
  }

  return (
    <Link to="/" className={`relative z-10 group ${className}`}>
      <div 
        className={`relative ${sizeClasses[size]} font-bold tracking-wider transition-all duration-300 ${getColorClasses()}`}
      >
        <span className="relative z-10">LEANTEK</span>
        
      </div>
    </Link>
  )
}

export default Logo 