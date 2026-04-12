import React from 'react';
import { motion } from 'framer-motion';

export default function ThreatMeter({ score, hideLabel = false }) {
  const activeBlocks = Math.ceil(score / 20);

  return (
    <div className={hideLabel ? "mt-0" : "mt-6"}>
      {!hideLabel && (
        <div className="text-xs text-grey-light font-rajdhani tracking-widest mb-2 flex justify-between">
          <span>THREAT LEVEL METER</span>
          <span className="text-red-hot font-mono">{score}/100</span>
        </div>
      )}
      {hideLabel && (
          <div className="text-xs text-grey-mid tracking-widest font-rajdhani mb-1 uppercase">
            THREAT SCORE: {score}/100
          </div>
      )}
      <div className={`flex gap-1.5 ${hideLabel ? 'h-2 md:h-2.5' : 'h-4'}`}>
        {[1, 2, 3, 4, 5].map((blockIndex) => {
          const isActive = blockIndex <= activeBlocks;
          const isHigh = blockIndex >= 4;
          
          let blockColorClass = 'bg-bg-raised border border-border';
          if (isActive) {
            blockColorClass = isHigh ? 'bg-red-hot' : 'bg-red-mid';
          }

          return (
            <motion.div
              key={blockIndex}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: blockIndex * 0.1, duration: 0.3 }}
              className={`flex-1 shrink-0 ${blockColorClass} ${isActive ? 'shadow-[0_0_8px_var(--color-red-glow)]' : ''}`}
              style={isActive ? {
                animation: 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              } : {}}
            />
          );
        })}
      </div>
      {!hideLabel && (
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 8px var(--color-red-glow); }
            50% { box-shadow: 0 0 16px rgba(255,26,26,0.4); }
          }
        `}</style>
      )}
    </div>
  );
}
