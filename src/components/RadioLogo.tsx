const RadioLogo = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg 
          width="200" 
          height="120" 
          viewBox="0 0 200 120" 
          className="w-32 md:w-48"
        >
          {/* Radio wave arc */}
          <path
            d="M 100 100 Q 60 60, 100 20 T 140 60"
            fill="none"
            stroke="rgba(107, 114, 128, 0.4)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Main numbers */}
          <text
            x="100"
            y="75"
            textAnchor="middle"
            className="fill-white font-bold"
            style={{ fontSize: '52px', fontFamily: 'Montserrat, sans-serif' }}
          >
            89
          </text>
          
          {/* Frequency */}
          <text
            x="135"
            y="60"
            textAnchor="start"
            className="fill-white font-bold"
            style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}
          >
            .7
          </text>
          
          <text
            x="135"
            y="75"
            textAnchor="start"
            className="fill-white font-bold"
            style={{ fontSize: '12px', fontFamily: 'Montserrat, sans-serif' }}
          >
            FM
          </text>
          
          {/* Maravilha text */}
          <text
            x="100"
            y="105"
            textAnchor="middle"
            className="fill-white font-bold"
            style={{ fontSize: '20px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px' }}
          >
            maravilha
          </text>
        </svg>
      </div>
    </div>
  );
};

export default RadioLogo;
