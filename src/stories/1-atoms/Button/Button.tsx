import React from 'react';

interface ButtonProps {
  style?: 'primary';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  size = 'medium',
  label,
  style = 'primary',
  onClick,
}: ButtonProps) => {
  const sizeClass =
    size === 'small' ? 'py-8 px8' : size === 'medium' ? 'py-8 px8' : 'py6 px8';
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      BUTTON
    </button>
  );
};
