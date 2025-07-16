import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  circleColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = '#ffffff',
  backgroundColor = '#3b82f6',
  borderColor = '#3b82f6',
  circleColor = '#ffffff',
  onClick,
  disabled = false,
  className = '',
  style = {},
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 min-w-[120px] font-medium transition-all duration-200 hover:opacity-80 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group rounded-[25px] relative ${className}`}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        border: `2px solid ${borderColor}`,
        borderRadius: '25px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style
      }}
    >
      <div className="flex items-center w-full">
        <span className="flex-1 text-center">{text}</span>
        <div
          className="rounded-full ml-auto flex items-center justify-center"
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: circleColor,
          }}
        >
          <ArrowRight color="#fff" size={16} />
        </div>
      </div>
    </button>
  )
;
};

export default Button;
