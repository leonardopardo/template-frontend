import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { PieChart } from 'echarts/charts';
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
  PieChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  const chartRef = useRef(null)

  let data1 = [
    {
      value: 1048,
      name: 'Starter',
      itemStyle: {
        color: getColor('danger')
      }
    },
    {
      value: 735,
      name: 'Basic',
      itemStyle: {
        color: getColor('primary')
      }
    },
    {
      value: 580,
      name: 'Optimal',
      itemStyle: {
        color: getColor('secondary')
      }
    },
    {
      value: 484,
      name: 'Business',
      itemStyle: {
        color: getColor('warning')
      }
    },
    {
      value: 300,
      name: 'Premium',
      itemStyle: {
        color: getColor('success')
      }
    },
    {
      value: 300,
      name: 'Platinum',
      itemStyle: {
        color: getColor('info')
      }
    }
  ];
  
  let data2 = [
    {
      value: 1048,
      name: 'Facebook',
      itemStyle: {
        color: getColor('primary')
      }
    },
    {
      value: 735,
      name: 'Youtube',
      itemStyle: {
        color: getColor('danger')
      }
    },
    {
      value: 580,
      name: 'Twitter',
      itemStyle: {
        color: getColor('info')
      }
    },
    {
      value: 484,
      name: 'Linkedin',
      itemStyle: {
        color: getColor('success')
      }
    },
    {
      value: 300,
      name: 'Github',
      itemStyle: {
        color: getColor('warning')
      }
    }
  ];
  const defaultRadius = { radius: '55%' };
  const smallRadius = { radius: '48%' };

  const getOption = () => ({
    title: [
      {
        text: 'Pie Multiple Chart',
        left: 'center',
        textStyle: {
          color: getColor('600')
        }
      }
    ],

    tooltip: {
      trigger: 'item',
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      }
    },

    series: [
      {
        type: 'pie',
        radius: window.innerWidth < 450 ? '48%' : '55%',
        center: ['25%', '50%'],
        data: data1,
        label: {
          show: false
        }
      },
      {
        type: 'pie',
        radius: window.innerWidth < 450 ? '48%' : '55%',
        center: ['75%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false
        },
        data: data2
      }
    ]
    });

    //------- Responsive on window resize -------

    const updateDimensions = () => {
      if (window.innerWidth < 450) {
        chartRef.current.getEchartsInstance().setOption({
          series: [smallRadius, smallRadius]
        });
      } 
      else
        chartRef.current.getEchartsInstance().setOption({
          series: [defaultRadius, defaultRadius]
        });
    }
  
    useEffect(() => {
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
      <ReactEChartsCore
        echarts={echarts}
        option={getOption()}
        ref={chartRef}
        style={{ height: '20rem' }}
      />
    );
  }
`;

const PieMultipleChart = () => {
  return (
    <FalconComponentCard dir="ltr" className="h-100">
      <FalconComponentCard.Header
        title="Doughnut rounded chart"
        light={false}
      />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor
        }}
      />
    </FalconComponentCard>
  );
};

export default PieMultipleChart;
