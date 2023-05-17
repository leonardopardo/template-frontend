import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor, getRandomNumber } from 'helpers/utils';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { ScatterChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  ScatterChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {

  const hours = [
    '12am',
    '1am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm'
  ];

  const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

  const data = [];
  for (let i = 0; i < 7; i += 1) {
    for (let j = 0; j < 24; j += 1) {
      data.push([j, i, getRandomNumber(0, 10)]);
    }
  }

  const getOption = () => ({
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'none'
      },
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: { color: getColor('dark')},
      borderWidth: 1,
      transitionDuration: 0,
      position: 'top',
      formatter: function(params) {
        return days[params.value[1]]+ '<br/>'+
        hours[params.value[0]] +' : '+params.value[2]
      }
    },
    xAxis: {
      type: 'category',
      data: hours,
      boundaryGap: false,
      splitLine: {
        show: true,
        lineStyle: {
          color: getColor('200')
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        lineStyle: {
          color: getColor('600')
        }
      }
    },
    yAxis: {
      type: 'category',
      data: days,
      axisLine: {
        show: false
      },
      axisTick: {
        lineStyle: {
          color: getColor('600')
        }
      },
      axisLabel: {
        margin: 15
      }
    },
    series: [
      {
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: val => val[2] * 2,
        data: data,
        animationDelay: function (idx) {
          return idx * 5;
        },
        itemStyle: {
          color: getColor('primary')
        }
      }
    ],
    grid: {
      right: 12,
      left: 5,
      bottom: 5,
      top: 5,
      containLabel: true
    }
    });
    return (
      <ReactEChartsCore
        echarts={echarts}
        option={getOption()}
        style={{ height: '31.25rem' }}
      />
    );
  }
`;

const SingleAxisScatterChart = () => {
  return (
    <FalconComponentCard className="h-100">
      <FalconComponentCard.Header
        title="Single axis scatter chart"
        light={false}
      />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          getRandomNumber
        }}
      />
    </FalconComponentCard>
  );
};

export default SingleAxisScatterChart;
