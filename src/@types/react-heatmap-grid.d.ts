// src/@types/react-heatmap-grid.d.ts
declare module 'react-heatmap-grid' {
  import * as React from 'react';

  export interface HeatMapProps {
    xLabels: string[];
    yLabels: string[];
    data: number[][];
    height?: number;
    background?: (value: number) => string;
    // 필요한 props를 계속 추가해도 됩니다.
  }

  const HeatMap: React.FC<HeatMapProps>;
  export default HeatMap;
}
