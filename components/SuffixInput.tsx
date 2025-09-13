
import React from 'react';

// Omit 'value' and 'onChange' from standard input props to define them with stricter types if needed,
// but here we can just extend the base attributes. We also omit 'placeholder' to handle it explicitly.
interface SuffixInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  suffix: string;
  value: string;
  placeholder?: string;
}

/**
 * A custom input component that displays a suffix immediately following the input text.
 * It uses a clever overlay of a transparent input over a styled visual representation
 * to achieve a seamless look and feel.
 */
const SuffixInput: React.FC<SuffixInputProps> = ({ value, suffix, className, placeholder = '', ...props }) => {
  return (
    // The main wrapper controls the overall appearance and focus state.
    // 'position: relative' is crucial for the input overlay.
    <div className={`group relative inline-flex items-center rounded-lg border border-slate-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors duration-200 ${className}`}>
      
      {/* 
        This is the visual layer. It's not interactive.
        It displays either the value or the placeholder, followed by the suffix.
        Its size determines the size of the entire component.
      */}
      <div 
        className="pointer-events-none whitespace-pre px-3 py-2"
        aria-hidden="true"
      >
        {/* Render the actual value if it exists, otherwise the placeholder */}
        <span className={value ? 'text-slate-800' : 'text-slate-400'}>
          {value || placeholder}
        </span>
        {/* The suffix is always visible next to the text */}
        <span className="text-slate-400">{suffix}</span>
      </div>

      {/* 
        The actual <input> element. It's absolutely positioned to cover the visual layer.
        Its text is transparent, but the caret remains visible, creating the illusion of typing
        directly into the styled visual layer.
      */}
      <input
        {...props}
        value={value}
        placeholder={placeholder}
        className="absolute inset-0 h-full w-full border-none bg-transparent px-3 py-2 text-transparent caret-slate-800 outline-none focus:ring-0"
      />
    </div>
  );
};

export default SuffixInput;
