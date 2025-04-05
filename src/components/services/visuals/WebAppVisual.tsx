
import WebAppFrame from "@/components/WebAppFrame";

const WebAppVisual = () => {
  return (
    <WebAppFrame title="Web App Demo" className="w-full mb-4" showSidebar={false}>
      <div className="space-y-4">
        <div className="bg-brand-purple/10 p-3 rounded-md">
          <h4 className="text-sm font-medium mb-2">User-Focused Design</h4>
          <div className="h-24 bg-brand-purple/5 rounded border border-brand-purple/20 flex items-center justify-center">
            <span className="text-xs text-gray-400">Interactive UI Elements</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-8 bg-brand-blue/10 rounded border border-brand-blue/20"></div>
          <div className="flex-1 h-8 bg-brand-blue/10 rounded border border-brand-blue/20"></div>
        </div>
        <div className="h-12 bg-green-500/10 rounded border border-green-500/20 flex items-center justify-center">
          <span className="text-xs text-green-300">Conversion-Optimized Elements</span>
        </div>
      </div>
    </WebAppFrame>
  );
};

export default WebAppVisual;
