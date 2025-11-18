'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoIdea {
  title: string;
  hook: string;
  script: string;
  thumbnailIdea: string;
  tags: string[];
  estimatedViews: string;
}

export default function Home() {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoIdeas, setVideoIdeas] = useState<VideoIdea[]>([]);
  const [selectedIdea, setSelectedIdea] = useState<VideoIdea | null>(null);

  const niches = [
    'Mystery & True Crime',
    'Top 10 Lists',
    'Horror Stories',
    'Facts & Knowledge',
    'Motivation & Self-Improvement',
    'History & Documentary',
    'Technology & AI',
    'Finance & Money',
    'Psychology & Mind',
    'Space & Universe'
  ];

  const generateVideos = async () => {
    if (!niche) return;

    setLoading(true);
    setVideoIdeas([]);
    setSelectedIdea(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche }),
      });

      const data = await response.json();
      setVideoIdeas(data.ideas);
    } catch (error) {
      console.error('Error generating videos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Viral Video Generator
          </h1>
          <p className="text-xl text-gray-300">Create viral content for your faceless YouTube channel</p>
        </motion.div>

        {/* Niche Selection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <label className="block text-xl font-semibold mb-4 text-center">Select Your Niche</label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {niches.map((n) => (
              <button
                key={n}
                onClick={() => setNiche(n)}
                className={`p-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                  niche === n
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Generate Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <button
            onClick={generateVideos}
            disabled={!niche || loading}
            className="px-12 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-xl font-bold rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl hover:scale-105 transition-all"
          >
            {loading ? 'Generating Viral Ideas...' : 'Generate Video Ideas 🚀'}
          </button>
        </motion.div>

        {/* Loading Animation */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
            <p className="mt-4 text-lg text-gray-400">Analyzing viral trends...</p>
          </motion.div>
        )}

        {/* Video Ideas Grid */}
        {videoIdeas.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {videoIdeas.map((idea, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedIdea(idea)}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all border border-gray-700"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white flex-1">{idea.title}</h3>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full ml-2">
                    {idea.estimatedViews}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm italic">&quot;{idea.hook}&quot;</p>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Selected Video Details */}
        {selectedIdea && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-purple-500"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedIdea.title}</h2>
              <button
                onClick={() => setSelectedIdea(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">🎣 Hook</h3>
                <p className="text-gray-300 text-lg italic">&quot;{selectedIdea.hook}&quot;</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">📝 Full Script</h3>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <pre className="text-gray-300 whitespace-pre-wrap font-sans">{selectedIdea.script}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">🖼️ Thumbnail Idea</h3>
                <p className="text-gray-300">{selectedIdea.thumbnailIdea}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">🏷️ Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedIdea.tags.map((tag, i) => (
                    <span key={i} className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">📊 Estimated Views</h3>
                <p className="text-2xl font-bold text-green-400">{selectedIdea.estimatedViews}</p>
              </div>

              <button
                onClick={() => {
                  const text = `Title: ${selectedIdea.title}\n\nHook: ${selectedIdea.hook}\n\nScript:\n${selectedIdea.script}\n\nThumbnail: ${selectedIdea.thumbnailIdea}\n\nTags: ${selectedIdea.tags.join(', ')}`;
                  navigator.clipboard.writeText(text);
                  alert('Copied to clipboard!');
                }}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-xl transition-all"
              >
                📋 Copy All to Clipboard
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
