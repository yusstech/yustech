
const AIIntegrationVisual = () => {
  return (
    <div className="relative h-64 mb-4 rounded-lg overflow-hidden border border-brand-purple/20">
      <div className="absolute inset-0 bg-black p-4">
        <div className="h-full rounded bg-gray-900/60 p-3 font-mono text-xs text-green-400 overflow-hidden">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-auto opacity-60 text-gray-400">ai_model.py</span>
          </div>
          <div className="animate-pulse">
            <p>{">"} Initializing AI model...</p>
            <p>{">"} Loading training data...</p>
            <p>{">"} Optimizing neural network...</p>
            <p>{">"} Analyzing business patterns...</p>
            <p>{">"} Generating insights...</p>
            <p className="text-brand-purple">{">"} Prediction accuracy: 97.8%</p>
            <p>{">"} Processing customer data...</p>
            <p>{">"} Automating workflow...</p>
            <p className="text-white">{">"} Process complete. Business efficiency increased by 42%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegrationVisual;
