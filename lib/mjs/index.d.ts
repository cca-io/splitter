import React from 'react';
import './index.css';
export declare enum SplitDirection {
    Horizontal = "Horizontal",
    Vertical = "Vertical"
}
export declare enum GutterTheme {
    Light = "Light",
    Dark = "Dark"
}
interface SplitProps {
    direction?: SplitDirection;
    minWidths?: number[];
    minHeights?: number[];
    maxWidths?: number[];
    maxHeights?: number[];
    initialSizes?: number[];
    gutterTheme?: GutterTheme;
    gutterClassName?: string;
    draggerClassName?: string;
    children?: React.ReactNode;
    onResizeStarted?: (pairIdx: number) => void;
    onResizeFinished?: (pairIdx: number, newSizes: number[]) => void;
    classes?: string[];
}
declare function Split({ direction, minWidths, minHeights, maxWidths, maxHeights, initialSizes, gutterTheme, gutterClassName, draggerClassName, children: reactChildren, onResizeStarted, onResizeFinished, classes, }: SplitProps): JSX.Element;
export type { SplitProps };
export default Split;
