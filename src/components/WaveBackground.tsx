const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wave elements */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] animate-wave opacity-30"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(262 83% 58%)", stopOpacity: 0.4 }} />
            <stop offset="50%" style={{ stopColor: "hsl(217 91% 60%)", stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: "hsl(188 86% 53%)", stopOpacity: 0.4 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,300 Q300,100 600,300 T1200,300 L1200,800 L0,800 Z"
          fill="url(#waveGradient1)"
        />
      </svg>

      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] animate-wave opacity-20"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: "-2s", animationDirection: "reverse" }}
      >
        <defs>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(188 86% 53%)", stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: "hsl(262 83% 58%)", stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: "hsl(217 91% 60%)", stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,400 Q200,200 400,400 T800,400 Q1000,200 1200,400 L1200,800 L0,800 Z"
          fill="url(#waveGradient2)"
        />
      </svg>

      {/* Additional flowing lines */}
      <div className="absolute top-20 left-10 w-64 h-1 bg-gradient-accent rounded-full opacity-60 animate-float"></div>
      <div 
        className="absolute bottom-32 right-20 w-48 h-1 bg-gradient-accent rounded-full opacity-40 animate-float" 
        style={{ animationDelay: "-3s" }}
      ></div>
      <div 
        className="absolute top-1/2 left-5 w-32 h-1 bg-gradient-accent rounded-full opacity-50 animate-float" 
        style={{ animationDelay: "-1s" }}
      ></div>
    </div>
  );
};

export default WaveBackground;