import React from 'react';
import { clsx } from 'clsx';

export function Input({ label, error, className, ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-base font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={clsx(
          'block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-base py-2.5 px-4',
          error && 'border-red-300',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}