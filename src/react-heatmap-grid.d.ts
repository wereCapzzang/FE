// react-heatmap-grid.d.ts
declare module 'react-heatmap-grid' {
  import React from 'react';

  interface HeatMapProps {
    xLabels: string[] | number[];
    yLabels: string[] | number[];
    data: number[][];
    background?: string;
    height?: number;
    squares?: boolean;
    cellStyle?: (x: number, y: number, ratio: number) => React.CSSProperties;
    cellRender?: (x: number, y: number, value: number) => React.ReactNode;
    xLabelsLocation?: 'top' | 'bottom';
    xLabelWidth?: number;
    yLabelWidth?: number;
    unit?: string;
    cellHeight?: number;
  }

  const HeatMap: React.FC<HeatMapProps>;

  export default HeatMap;
}
