"use client";

import Header from "@/app/components/header";

export default function ThreeVisuals() {
  return (
    <div>
      <Header isProjectHeader={true} />
      <div className="flex flex-col items-center gap-8 p-4">

        <div className="w-full max-w-6xl aspect-video">
          <iframe
            src="https://sidomatic11.github.io/day-15/"
            width="100%"
            height="100%"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
        </div>

        {/* <div className="w-full max-w-6xl aspect-video">
          <iframe
            src="https://sidomatic11.github.io/day-13/"
            width="100%"
            height="100%"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
        </div> */}

      </div>
    </div>
  );
}
