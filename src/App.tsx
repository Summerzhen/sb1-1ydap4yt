import React from 'react';
import { Header } from './components/Header';
import { FeatureCard } from './components/FeatureCard';
import { features } from './data/features';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Header />

          <p className="text-xl text-gray-600 text-center max-w-2xl">
            欢迎来到我们的网站。这里是一个充满创意和可能性的空间，
            让我们一起探索精彩的数字世界。
          </p>

          <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl mt-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            开始探索
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;