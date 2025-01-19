import React, { useState } from 'react';
import { Terminal, Plus, Coins, TrendingUp, Newspaper, BarChart2 } from 'lucide-react';

const Polarity: React.FC = () => {
  const [activeTab, setActiveTab] = useState('terminal');

  const renderContent = () => {
    switch (activeTab) {
      case 'terminal':
        return (
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg h-[600px] font-mono">
            <div className="mb-4">Welcome to Polarity Terminal</div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <input
                type="text"
                className="bg-transparent border-none outline-none text-green-400 w-full"
                placeholder="Enter command..."
              />
            </div>
          </div>
        );
      case 'listing':
        return (
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Create New Listing</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Token Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price (SOL)</label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Create Listing
              </button>
            </form>
          </div>
        );
      case 'token':
        return (
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Create New Token</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Token Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Symbol</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Supply</label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Create Token
              </button>
            </form>
          </div>
        );
      case 'updates':
        return (
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Market Updates</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-semibold">Latest Transactions</h4>
                <div className="mt-2 space-y-2">
                  {/* Add real-time market updates here */}
                  <div className="text-sm text-gray-600">No recent transactions</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'media':
        return (
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">CMC Media</h3>
            <div className="space-y-4">
              {/* Add CMC news feed here */}
              <div className="text-sm text-gray-600">No media content available</div>
            </div>
          </div>
        );
      case 'analysis':
        return (
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Market Analysis</h3>
            <div className="space-y-4">
              {/* Add market analysis charts and data here */}
              <div className="text-sm text-gray-600">No analysis data available</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                activeTab === 'terminal' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Terminal className="w-5 h-5" />
              <span>Terminal</span>
            </button>
            <button
              onClick={() => setActiveTab('listing')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                activeTab === 'listing' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Plus className="w-5 h-5" />
              <span>Create Listing</span>
            </button>
            <button
              onClick={() => setActiveTab('token')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                activeTab === 'token' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Coins className="w-5 h-5" />
              <span>New Token</span>
            </button>
            <button
              onClick={() => setActiveTab('updates')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                activeTab === 'updates' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Market Updates</span>
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                activeTab === 'media' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Newspaper className="w-5 h-5" />
              <span>CMC Media</span>
            </button>
            <button
              onClick={() => setActiveTab('analysis')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                activeTab === 'analysis' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BarChart2 className="w-5 h-5" />
              <span>Analysis</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Polarity;