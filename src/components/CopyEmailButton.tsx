'use client';

import { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hamayalansari10@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-white dark:hover:bg-slate-700 transition"
      title="Copy email"
    >
      {copied ? (
        <FaCheck className="w-3.5 h-3.5 text-pink-600" />
      ) : (
        <FaCopy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
