const FloatingBubbles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {/* Large nebula-like glows */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(263 70% 50% / 0.15), hsl(263 70% 50% / 0.05) 50%, transparent 70%)",
          top: "5%",
          left: "-5%",
          animation: "bubble-float-1 16s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(271 81% 60% / 0.18), hsl(271 81% 60% / 0.06) 50%, transparent 70%)",
          top: "30%",
          right: "-3%",
          animation: "bubble-float-2 20s ease-in-out infinite",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(240 60% 45% / 0.12), hsl(240 60% 45% / 0.04) 50%, transparent 70%)",
          bottom: "5%",
          left: "15%",
          animation: "bubble-float-3 22s ease-in-out infinite",
          filter: "blur(45px)",
        }}
      />
      <div
        className="absolute w-[550px] h-[550px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(280 70% 55% / 0.14), hsl(280 70% 55% / 0.04) 50%, transparent 70%)",
          top: "55%",
          left: "45%",
          animation: "bubble-float-1 25s ease-in-out infinite reverse",
          filter: "blur(55px)",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(220 70% 50% / 0.16), hsl(220 70% 50% / 0.05) 50%, transparent 70%)",
          top: "0%",
          right: "20%",
          animation: "bubble-float-2 18s ease-in-out infinite reverse",
          filter: "blur(35px)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(300 60% 50% / 0.1), hsl(300 60% 50% / 0.03) 50%, transparent 70%)",
          bottom: "20%",
          right: "10%",
          animation: "bubble-float-3 15s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(263 70% 55% / 0.2), transparent 60%)",
          top: "70%",
          left: "5%",
          animation: "bubble-float-1 13s ease-in-out infinite",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
};

export default FloatingBubbles;
