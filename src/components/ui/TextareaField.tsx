import React from 'react';

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({ label, onChange, value, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-zinc-600 font-medium text-sm">{label}</label>
      <textarea
        className="bg-white py-2 px-3 border border-zinc-300 placeholder:text-zinc-500 text-zinc-900 shadow-xs rounded-lg focus:ring-[4px] focus:ring-zinc-400/15 focus:outline-none h-24 align-text-top"
        value={value}
        onChange={onChange}
        {...props}
      ></textarea>
    </div>
  );
};