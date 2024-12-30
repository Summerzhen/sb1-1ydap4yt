import React from 'react';
import { Wand2, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center space-x-3 animate-fade-in">
      <Wand2 className="w-8 h-8 text-purple-500" />
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        你好，世界！
      </h1>
      <Sparkles className="w-8 h-8 text-pink-500" />
    </div>
  );
}