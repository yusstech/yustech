
import { ReactNode } from 'react';
import { Circle, Minus, Square, X } from 'lucide-react';
import AnimatedText from './AnimatedText';

interface WebAppFrameProps {
  children: ReactNode;
  title?: string;
  showNavbar?: boolean;
  showSidebar?: boolean;
  loading?: boolean;
  className?: string;
}

const WebAppFrame = ({ 
  children, 
  title = 'YussTech Web Application', 
  showNavbar = true,
  showSidebar = true,
  loading = false,
  className = '' 
}: WebAppFrameProps) => {
  return (
    <div className={`border border-gray-800 rounded-lg overflow-hidden shadow-xl bg-black/80 backdrop-blur-sm ${className}`}>
      {/* Browser-like header */}
      <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-800">
        <div className="flex space-x-2 mr-4">
          <Circle size={12} className="text-red-500 fill-current" />
          <Circle size={12} className="text-yellow-500 fill-current" />
          <Circle size={12} className="text-green-500 fill-current" />
        </div>
        <div className="flex-1 mx-auto max-w-md">
          <div className="bg-gray-800 rounded-full px-3 py-1 text-xs text-center text-gray-400 truncate">
            {title}
          </div>
        </div>
        <div className="flex space-x-2 ml-4">
          <Minus size={12} className="text-gray-500" />
          <Square size={12} className="text-gray-500" />
          <X size={12} className="text-gray-500" />
        </div>
      </div>

      {/* App content */}
      <div className="flex h-full">
        {/* Sidebar */}
        {showSidebar && (
          <div className="hidden sm:block w-48 bg-gray-900 border-r border-gray-800 p-4">
            <AnimatedText 
              variant="gradient" 
              direction="left" 
              delay={300} 
              className="font-medium mb-4"
            >
              Dashboard
            </AnimatedText>
            <nav className="space-y-2">
              {['Home', 'Analytics', 'Projects', 'Settings'].map((item, index) => (
                <div 
                  key={item} 
                  className="px-3 py-2 text-sm rounded-md hover:bg-gray-800 cursor-pointer transition-colors"
                >
                  <AnimatedText 
                    delay={500 + (index * 100)} 
                    direction="left"
                    className="text-gray-300"
                  >
                    {item}
                  </AnimatedText>
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 min-h-[400px] overflow-auto">
          {showNavbar && (
            <div className="border-b border-gray-800 bg-gray-900/60 px-4 py-3 flex justify-between items-center">
              <AnimatedText 
                variant="tech" 
                delay={200} 
                className="text-sm font-medium"
              >
                {title.split(' ').join(' / ')}
              </AnimatedText>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center">
                  <span className="text-xs font-mono">YT</span>
                </div>
              </div>
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center h-full min-h-[300px]">
              <div className="relative w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-brand-purple/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-brand-purple rounded-full animate-spin"></div>
              </div>
            </div>
          ) : (
            <div className="p-6">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebAppFrame;
