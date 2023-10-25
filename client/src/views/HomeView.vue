<template>
  <div class="container">
    <h1>Stock Market Data Visualization</h1>
    <div class="input-chart-container">

      <div class="card">
        <div class="input-group">
          <label for="symbol">Symbol:</label>
          <input v-model="symbol" type="text" id="symbol" required>
        </div>

        <div class="input-group">
          <label for="frequency">Interval:</label>
          <select v-model="frequency" id="frequency">
            <option value="daily">Daily</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>

        <button @click="fetchData" class="fetch-button" :disabled="!symbol">Fetch Data</button>


        <div class="chart-container" v-if="data">
          <Chart :chartData="data.chartData" :frequency="frequency" />
        </div>
      </div>
      <div v-if="data" class="card">
        <h2>Stock Data</h2>
        <p>Name: {{ data.name }}</p>
        <p>Exchange: {{ data.exchange }}</p>

        <div v-if="getClickedCandleData">
          <h4>Selected Data</h4>
          <pre>Date: {{ getClickedCandleData.date }}</pre>
          <pre
            v-if="frequency == hourly">Time: {{ new Date(getClickedCandleData.time * 1000).toLocaleTimeString() }}</pre>
          <pre>Open: {{ getClickedCandleData.open }}</pre>
          <pre>High: {{ getClickedCandleData.high }}</pre>
          <pre>Low: {{ getClickedCandleData.low }}</pre>
          <pre>Volumn: {{ getClickedCandleData.volume }}</pre>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import { mapGetters } from 'vuex';
import { useToast } from 'vue-toast-notification';


export default {
  components: { Chart },
  data() {
    return {
      symbol: '',
      frequency: 'daily',
      data: null,
      $toast: useToast(),

    };
  },
  computed: {
    ...mapGetters(['getClickedCandleData'])
  },
  methods: {
    async fetchData() {
      try {
        const apiUrl = `${process.env.VUE_APP_API_URL}/api/search?symbol=${this.symbol}&period=${this.frequency}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.status == "200") {
          this.data = data.data;
        }
        else {
          throw new Error(data.error);
        }

      } catch (error) {
        console.log(error);
        this.$toast.open({
          message: error,
          type: "error",
          duration: 1000 * 10,
          dismissible: true
        });
      }
    },


  }
};
</script>

<style scoped>
.container {
  padding: 1rem;
}

.input-chart-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

.input-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  margin-right: 10px;
}

input,
select {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: #fff;
  cursor: pointer;
}

button:not([disabled]):hover {
  background-color: #218838;
}

button:disabled {
  background-color: #ccc;
  color: #666;
}

.chart-container {
  margin-top: 20px;
}
</style>
