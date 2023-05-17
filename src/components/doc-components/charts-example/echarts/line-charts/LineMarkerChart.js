import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { LineChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  MarkPointComponent,
  MarkLineComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { tooltipFormatter } from 'helpers/echart-utils';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent,
  MarkPointComponent,
  MarkLineComponent
]);

const chartCode = `function ChartOptions() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  const getOption = () => ({
    color: [
      getColor('primary'),
      getColor('warning')
    ],
    legend: {
      data: [
        {
          name: 'Max',
          textStyle: {
            color: getColor('600')
          }
        },
        {
          name: 'Min',
          textStyle: {
            color: getColor('600')
          }
        }
      ]
    },
    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      },
      formatter: tooltipFormatter
    },
    xAxis: {
      type: 'category',
      data: days,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: getColor('300'),
          type: 'solid'
        }
      },
      axisTick: { show: false },
      axisLabel: {
        formatter: value => value.substring(0, 3),
        color: getColor('400'),
        margin: 15
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: getColor('200'),
        }
      },
      boundaryGap: false,
      axisLabel: {
        show: true,
        color: getColor('400'),
        margin: 15
      },
      axisTick: { show: false },
      axisLine: { show: false }
    },
    series: [
      {
        name: 'Max',
        type: 'line',
        data: [10, 11, 13, 11, 12, 9, 12],
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('primary'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('primary')
        },
        symbol: 'circle',
        markPoint: {
          itemStyle: {
            color: getColor('primary')
          },
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          lineStyle: {
            color: getColor('primary')
          },
          label: {
            color: getColor('600')
          },
          data: [{ type: 'average', name: 'average' }]
        }
      },
      {
        name: 'Min',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        symbolSize: 10,
        itemStyle: {
          color: getColor('white'),
          borderColor: getColor('danger'),
          borderWidth: 2
        },
        lineStyle: {
          color: getColor('danger')
        },
        symbol: 'circle',
        markPoint: {
          itemStyle: {
            color: getColor('danger')
          },
          label: {
            color: '#fff'
          },
          data: [{ name: 'Weekly lowest', value: -2, xAxis: 1, yAxis: -1.5 }]
        },
        markLine: {
          lineStyle: {
            color: getColor('danger')
          },
          label: {
            color: getColor('600')
          },
          data: [
            { type: 'average', name: 'average' },
            [
              {
                symbol: 'none',
                x: '90%',
                yAxis: 'max'
              },
              {
                symbol: 'circle',
                label: {
                  position: 'start',
                  formatter: 'Max'
                },
                type: 'max',
                name: 'Highest point'
              }
            ]
          ]
        }
      }
    ],
    grid: { right: '8%', left: '5%', bottom: '10%', top: '15%' }
  });
  
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOption()}
      style={{ height: '18.75rem' }}
    />
  );
}
`;

const LineMarkerChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Line marker chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          tooltipFormatter
        }}
      />
    </FalconComponentCard>
  );
};

export default LineMarkerChart;
