
const RescueVisual = () => {
  return (
    <div className="relative h-64 mb-4 rounded-lg overflow-hidden border border-brand-purple/20">
      <div className="bg-gray-900 h-full p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="text-red-500 text-xs font-mono">Critical Issues</div>
          </div>
          <div className="text-xs text-gray-500">Before Rescue</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="h-16 bg-red-500/20 border border-red-500/30 rounded p-2">
            <div className="text-xs text-red-400 mb-1">Security Vulnerabilities</div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>
          <div className="h-16 bg-orange-500/20 border border-orange-500/30 rounded p-2">
            <div className="text-xs text-orange-400 mb-1">Performance Issues</div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <div className="text-green-500 text-xs font-mono">After Rescue</div>
          </div>
          <div className="text-xs text-gray-500">6 Weeks Later</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="h-16 bg-green-500/20 border border-green-500/30 rounded p-2">
            <div className="text-xs text-green-400 mb-1">Secure & Optimized</div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{width: '95%'}}></div>
            </div>
          </div>
          <div className="h-16 bg-brand-blue/20 border border-brand-blue/30 rounded p-2">
            <div className="text-xs text-brand-blue mb-1">Feature Complete</div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-brand-blue rounded-full" style={{width: '90%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescueVisual;
