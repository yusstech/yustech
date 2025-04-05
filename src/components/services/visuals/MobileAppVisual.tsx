
const MobileAppVisual = () => {
  return (
    <div className="relative mx-auto w-48 h-96 mb-4">
      <div className="absolute inset-0 bg-gray-800 rounded-3xl border-4 border-gray-700 overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-center">
          <div className="w-16 h-2 bg-gray-700 rounded-full"></div>
        </div>
        <div className="absolute top-6 left-0 right-0 bottom-0 bg-gradient-to-b from-brand-purple/20 to-brand-blue/20 p-2">
          <div className="h-full rounded-xl border border-white/10 bg-black/40 p-2 flex flex-col">
            <div className="h-4 w-16 bg-brand-purple/30 rounded mb-2"></div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div className="bg-brand-purple/10 rounded"></div>
              <div className="bg-brand-blue/10 rounded"></div>
              <div className="bg-brand-blue/10 rounded"></div>
              <div className="bg-brand-purple/10 rounded"></div>
            </div>
            <div className="h-10 bg-brand-purple/20 rounded mt-2 flex items-center justify-center">
              <div className="h-4 w-16 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default MobileAppVisual;
