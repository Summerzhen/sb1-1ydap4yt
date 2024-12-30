import React from 'react';

interface FeatureCardProps {
  title: string;
  desc: string;
  gradient: string;
}

export function FeatureCard({ title, desc, gradient }: FeatureCardProps) {
  return (
    <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}