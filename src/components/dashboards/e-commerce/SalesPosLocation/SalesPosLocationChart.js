import React from 'react';

import * as echarts from 'echarts/core';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { RadarChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { getColor, rgbaColor } from 'helpers/utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  RadarChart,
  CanvasRenderer,
  LegendComponent
]);

const tooltipFormatter = params => {
  return `<strong > ${params.name} </strong>
  <div class="fs--1 text-600">
    <strong >Marketing</strong>: ${params.value[0]}  <br>
    <strong>Sales</strong>: ${params.value[1]}  <br>
    <strong>Dev</strong>: ${params.value[2]}  <br>
    <strong>Support</strong>: ${params.value[3]}  <br>
    <strong>Tech</strong>: ${params.value[4]}  <br>
    <strong>Admin</strong>: ${params.value[5]}  <br>
  </div>`;
};

const getOptions = () => ({
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getColor('100'),
    borderColor: getColor('300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: tooltipFormatter
  },
  radar: {
    splitNumber: 7,
    radius: '75%',
    axisLine: {
      show: true,
      symbol: 'circle',
      symbolSize: [13, 13],
      lineStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [
            {
              offset: 0.7,
              color: getColor('100')
            },
            {
              offset: 1,
              color: getColor('400')
            }
          ]
        }
      }
    },
    splitArea: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: getColor('300')
      }
    },
    axisName: {
      color: getColor('600'),
      fontWeight: 500
    },
    indicator: [
      { name: 'Marketing', max: 70 },
      { name: 'Admin', max: 70 },
      { name: 'Tech', max: 70 },
      { name: 'Support', max: 70 },
      { name: 'Dev', max: 70 },
      { name: 'Sales', max: 70 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      symbol: 'pin',
      data: [
        {
          value: [20, 50, 60, 50, 60, 60],
          name: 'Budget',
          itemStyle: {
            color: rgbaColor(getColor('warning'), 0.5)
          },
          areaStyle: {
            color: rgbaColor(getColor('warning'), 0.24)
          },
          symbol: 'circle',
          symbolSize: 8
        },
        {
          value: [40, 60, 30, 15, 60, 35],
          name: 'Spending',
          areaStyle: {
            color: rgbaColor(getColor('primary'), 0.24)
          },
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: getColor('primary')
          }
        }
      ]
    }
  ],
  grid: {
    top: 0,
    bottom: '100px'
  }
});

const SalesPosLocationChart = () => {
  return (
    <>
      <ReactEChartsCore
        echarts={echarts}
        option={getOptions()}
        style={{ height: '22rem' }}
      />
    </>
  );
};

export default SalesPosLocationChart;
