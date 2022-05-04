import React from 'react';
import {View} from 'react-native';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

import Svg, {
  G,
  Rect,
  Circle,
  Ellipse,
  Text,
  TSpan,
  Path,
} from 'react-native-svg';

const defaultColorsArray = ['#34D399', '#38BDF8', '#A78BFA'];

type Data = {
  label: string;
  values: number | {[key: string]: number};
  type: 'currency';
  currencyType?: 'USD';
};

type Props = {
  tw: TailwindFn;
  data: Data[];
  colorsArray: string[];
  style?: Style;
  labelingStyle?: Style;
  chartStyle?: Style;
  chartWidth: number;
  chartHeight: number;
};

const VerticalBars = ({
  tw,
  data,
  colorsArray = defaultColorsArray,
  style,
  labelingStyle,
  chartStyle,
  chartWidth,
  chartHeight,
}: Props): JSX.Element => {
  const defaultStyles = tw`font-inter font-medium text-base text-gray-500`;
  const labelingDefaultStyles = tw`h-12`;
  const chartDefaultStyles = tw``;

  const barWidth = 27;
  const unitaryHeight = 0.5;
  const spaceBetween = (chartWidth - 6 * barWidth) / 9;
  const graphHeight = 150;
  const bottomGap = 30;

  let dx = 2 * spaceBetween;

  return (
    <View style={{...defaultStyles, ...style}}>
      {/* Chart */}
      <View style={{...labelingDefaultStyles, ...labelingStyle}}>
        {/* Draws the SVG*/}
        <Svg
          width={chartWidth}
          height={chartHeight}
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
          {/* Draw columns */}
          {data.map((record, idx) => {
            dx = idx > 0 ? dx + (barWidth + spaceBetween) : dx;

            if (typeof record.values === 'number') {
              const barHeight = unitaryHeight * record.values;
              return <G key={idx}></G>;
            } else if (typeof record.values === 'object') {
              return <G key={idx}></G>;
            }
          })}
        </Svg>
        {/*
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={graphHeight} version="1.1">
          {Object.keys(numberOfMatches).map((matchKey, i) => {
            const match = numberOfMatches[matchKey];

            dx = i > 0 ? dx + (barWidth+spaceBetween) : dx;

            const barHeight = unitaryHeight*match;

            const radius = 4;

            const opacity = i < 4 ? "4D" : (i === 4 ? "99" : (i === 5 ? "CC" : ""));

            return(
              <g key={i}>
                <path
                  d={`
                    M ${0+dx} ${graphHeight-bottomGap}
                    L ${0+dx} ${graphHeight-barHeight+radius-bottomGap}
                    C ${1+dx} ${graphHeight-barHeight+2.267948-bottomGap} ${2.267948+dx} ${graphHeight-barHeight+1-bottomGap} ${radius+dx} ${graphHeight-barHeight-bottomGap}
                    L ${23+dx} ${graphHeight-barHeight-bottomGap}
                    C ${25.267948+dx} ${graphHeight-barHeight+1-bottomGap} ${26+dx} ${graphHeight-barHeight+2.267948-bottomGap} ${27+dx} ${graphHeight-barHeight+radius-bottomGap}
                    L ${27+dx} ${graphHeight-bottomGap}
                    Z
                  `}
                  fill={`#7DCA61${opacity}`}
                />
                <text
                  x={0+dx+(barWidth/2-4)}
                  y={graphHeight-barHeight-5-bottomGap}
                  className=" font-inter font-medium text-xs"
                >
                  {match}
                </text>
                <text
                  x={0+dx+(barWidth/2-12)}
                  y={graphHeight-10}
                  className=" font-inter font-medium text-xs"
                >
                  {matchKey}
                </text>
              </g>
            );
          })}
          <line x1="0" y1={graphHeight-bottomGap} x2={width} y2={graphHeight-bottomGap} stroke="black" />
        </svg>
        */}
      </View>
      {/* Labels */}
      <View style={{...chartDefaultStyles, ...chartStyle}}></View>
    </View>
  );
};

export default VerticalBars;
