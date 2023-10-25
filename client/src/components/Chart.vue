<template>
  <div class="chart-container" ref="chartContainer"></div>
</template>

<script>
import { createChart } from 'lightweight-charts';
import { useStore } from 'vuex';


export default {
  props: {
    chartData: Array,
    frequency: String
  },
  data() {
    return {
      chart: null,
      candlestickSeries: null,
      rawData: null
    };
  },
  mounted() {
    console.log(this.chartData.keys());
    this.initializeChart();
    this.updateChart(this.chartData);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  watch: {
    chartData(newData) {
      this.updateChart(newData);
      this.updateClickedData(null);
    }
  },

  setup() {
    const store = useStore();

    function updateClickedData(data) {
      store.dispatch('setClickedCandleData', data);
    }

    return {
      updateClickedData
    };
  },


  methods: {
    initializeChart() {
      this.chart = createChart(this.$refs.chartContainer, {
        layout: {
          textColor: 'black',
          background: { type: 'solid', color: 'white' }
        },
        width: 500,
        height: 500
      });

      this.candlestickSeries = this.chart.addCandlestickSeries();


      this.chart.subscribeClick(param => {
        if (param.point) {
          console.log(param);
          const data = param.seriesData.entries(this.candlestickSeries).next().value[1];
          const temp = this.rawData.find(e => data.time === e.time);
          this.updateClickedData({ ...temp, open: data.open });
        }
      });

    },
    handleResize() {

      const screenWidth = window.innerWidth;
      const chartWidth = screenWidth > 768 ? 500 : 300;
      const chartHeight = screenWidth > 768 ? 500 : 300;

      if (this.chart) {
        this.chart.resize(chartWidth, chartHeight);
        this.chart.timeScale().fitContent();
      }
    },

    updateChart(data) {
      if (this.chart && this.candlestickSeries) {
        this.rawData = data;
        const mappedData = data.map((item, i) => {

          return {
            open: i > 0 ? data[i - 1].close : item.close,
            time: item.time,
            high: item.high,
            low: item.low,
            close: item.close,
            volumn: item.volumn
          };
        });

        this.chart.applyOptions({
          priceScale: {
            autoScale: true, top: 0, bottom: 0
          },
        });

        this.chart.applyOptions({
          timeScale: {
            secondsVisible: false,
            timeVisible: true,
          },
        });

        this.candlestickSeries.setData(mappedData);
        this.chart.timeScale().fitContent();
      }
    },

  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
}
</style>
