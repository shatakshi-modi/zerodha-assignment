import mockData from "../data/mockData.js";

function convertToEpoch(data) {
  const newData = {};
  for (const key in data) {
    newData[key] = {
      ...data[key],
      data: {
        ...data[key].data,
        daily: data[key].data.daily.map(item => ({
          ...item,
          time: Date.parse(item.date) / 1000 
        })),
        hourly: data[key].data.hourly.map(item => ({
          ...item,
          time: Date.parse(`${item.date}T${item.time}.000Z`) / 1000 
        })),
      },
    };
  }
  return newData;
}

export function getStockData(req, res) {
  const { symbol, period } = req.query;

  if (!symbol) {
    res.status(400).json({ error: "Symbol is required." });
    return;
  }

  const newMockData = convertToEpoch(mockData);

  if (!newMockData[symbol]) {
    res.status(400).json({ error: "Symbol not found." });
    return;
  }

  const unstructuredData = newMockData[symbol];

  const chartData = period === "daily" ?
    unstructuredData.data[period] :
    unstructuredData.data[period].sort((a, b) => a.time - b.time);

  const filteredData = {
    data: {
      name: unstructuredData.name,
      exchange: unstructuredData.exchange,
      chartData,
      symbol: symbol,
    },
  };

  res.json(filteredData);
}
