const mockData = {
  "AAPL": {
    "name": "Apple Inc.",
    "exchange": "NASDAQ",
    "data": {
      "daily": [
        { "date": "2023-10-17", "close": 158.25, "high": 150.50, "low": 146.75, "volume": 10500.00 },
        { "date": "2023-10-18", "close": 140.00, "high": 152.50, "low": 147.50, "volume": 11000.00 },
        { "date": "2023-10-19", "close": 151.50, "high": 153.25, "low": 149.75, "volume": 11500.00 },
        { "date": "2023-10-20", "close": 159.75, "high": 154.00, "low": 151.25, "volume": 12000.00 },
        { "date": "2023-10-21", "close": 154.00, "high": 155.50, "low": 152.75, "volume": 12500.00 },
        { "date": "2023-10-24", "close": 155.00, "high": 156.25, "low": 153.75, "volume": 13000.00 },
        { "date": "2023-10-25", "close": 156.50, "high": 158.00, "low": 155.50, "volume": 13500.00 }
      
      ],
      "hourly": [
        { "date": "2023-10-17", "time": "09:00:00", "close": 144.25, "high": 150.50, "low": 146.75, "volume": 1000.00 },
        { "date": "2023-10-17", "time": "10:00:00", "close": 199.00, "high": 152.50, "low": 147.50, "volume": 1100.00 },
        { "date": "2023-10-17", "time": "11:00:00", "close": 189.50, "high": 153.00, "low": 148.75, "volume": 1150.00 },
        { "date": "2023-10-17", "time": "12:00:00", "close": 190.00, "high": 153.50, "low": 149.25, "volume": 1200.00 },
        { "date": "2023-10-17", "time": "13:00:00", "close": 180.25, "high": 154.00, "low": 149.75, "volume": 1250.00 },
        { "date": "2023-10-17", "time": "14:00:00", "close": 120.50, "high": 154.25, "low": 150.00, "volume": 1300.00 },
        { "date": "2023-10-17", "time": "15:00:00", "close": 150.75, "high": 154.50, "low": 150.25, "volume": 1350.00 }
        
      ]
    }
  },
  "GOOGL": {
    "name": "Alphabet Inc.",
    "exchange": "NASDAQ",
    "data": {
      "daily": [
        { "date": "2023-10-17", "close": 2720.50, "high": 2750.50, "low": 2700.75, "volume": 5500.00 },
        { "date": "2023-10-18", "close": 2730.00, "high": 2760.00, "low": 2725.00, "volume": 6000.00 },
        { "date": "2023-10-19", "close": 2795.75, "high": 2775.25, "low": 2735.50, "volume": 6500.00 },
        { "date": "2023-10-20", "close": 2725.25, "high": 2780.00, "low": 2740.25, "volume": 7000.00 },
        { "date": "2023-10-21", "close": 2765.50, "high": 2790.75, "low": 2750.75, "volume": 7500.00 },
        { "date": "2023-10-24", "close": 2775.00, "high": 2800.50, "low": 2765.50, "volume": 8000.00 },
        { "date": "2023-10-25", "close": 2785.25, "high": 2810.00, "low": 2775.25, "volume": 8500.00 }
        // Add more daily data for GOOGL...
      ],
      "hourly": [
        { "date": "2023-10-17", "time": "09:00:00", "close": 2720.50, "high": 2750.50, "low": 2700.75, "volume": 500.00 },
        { "date": "2023-10-17", "time": "10:00:00", "close": 2730.00, "high": 2760.00, "low": 2725.00, "volume": 550.00 },
        { "date": "2023-10-17", "time": "11:00:00", "close": 2735.50, "high": 2770.25, "low": 2730.50, "volume": 600.00 },
        { "date": "2023-10-17", "time": "12:00:00", "close": 2740.25, "high": 2775.00, "low": 2740.00, "volume": 650.00 },
        { "date": "2023-10-17", "time": "13:00:00", "close": 2745.00, "high": 2780.50, "low": 2745.00, "volume": 700.00 },
        { "date": "2023-10-17", "time": "14:00:00", "close": 2750.75, "high": 2785.25, "low": 2750.75, "volume": 750.00 },
        { "date": "2023-10-17", "time": "15:00:00", "close": 2755.50, "high": 2790.75, "low": 2755.25, "volume": 800.00 }
        // Add more hourly data for GOOGL...
      ]
    }
  },
  "MSFT": {
    "name": "Microsoft Corporation",
    "exchange": "NASDAQ",
    "data": {
      "daily": [
        { "date": "2023-10-17", "close": 305.50, "high": 314.00, "low": 298.75, "volume": 9500.00 },
        { "date": "2023-10-18", "close": 302.00, "high": 307.00, "low": 300.50, "volume": 10000.00 },
        { "date": "2023-10-19", "close": 308.50, "high": 309.25, "low": 303.00, "volume": 10500.00 },
        { "date": "2023-10-20", "close": 304.75, "high": 311.00, "low": 305.00, "volume": 11000.00 },
        { "date": "2023-10-21", "close": 308.00, "high": 312.50, "low": 306.75, "volume": 11500.00 },
        { "date": "2023-10-24", "close": 309.50, "high": 305.50, "low": 308.25, "volume": 12000.00 },
        { "date": "2023-10-25", "close": 310.75, "high": 315.00, "low": 309.75, "volume": 12500.00 }
        // Add more daily data for MSFT...
      ],
      "hourly": [
        { "date": "2023-10-17", "time": "09:00:00", "close": 300.25, "high": 305.50, "low": 298.75, "volume": 900.00 },
        { "date": "2023-10-17", "time": "10:00:00", "close": 301.00, "high": 306.25, "low": 299.50, "volume": 950.00 },
        { "date": "2023-10-17", "time": "11:00:00", "close": 301.50, "high": 307.00, "low": 300.75, "volume": 1000.00 },
        { "date": "2023-10-17", "time": "12:00:00", "close": 302.00, "high": 307.50, "low": 301.00, "volume": 1050.00 },
        { "date": "2023-10-17", "time": "13:00:00", "close": 302.50, "high": 308.00, "low": 301.25, "volume": 1100.00 },
        { "date": "2023-10-17", "time": "14:00:00", "close": 303.00, "high": 308.50, "low": 301.50, "volume": 1150.00 },
        { "date": "2023-10-17", "time": "15:00:00", "close": 303.25, "high": 309.00, "low": 302.00, "volume": 1200.00 }
        // Add more hourly data for MSFT...
      ]
    }
  },
  "GC": {
    "name": "Gold Futures",
    "exchange": "COMEX",
    "data": {
      "daily": [
        { "date": "2023-10-17", "close": 1870.50, "high": 1810.50, "low": 1795.75, "volume": 7500.00 },
        { "date": "2023-10-18", "close": 1810.00, "high": 1820.00, "low": 1805.50, "volume": 8000.00 },
        { "date": "2023-10-19", "close": 1842.75, "high": 1832.25, "low": 1817.50, "volume": 8500.00 },
        { "date": "2023-10-20", "close": 1830.25, "high": 1840.00, "low": 1825.25, "volume": 9000.00 },
        { "date": "2023-10-21", "close": 1820.50, "high": 1850.75, "low": 1835.75, "volume": 9500.00 },
        { "date": "2023-10-24", "close": 1850.75, "high": 1860.00, "low": 1845.00, "volume": 10000.00 },
        { "date": "2023-10-25", "close": 1860.25, "high": 1870.00, "low": 1855.25, "volume": 10500.00 }
        // Add more daily data for GC...
      ],
      "hourly": [
        { "date": "2023-10-17", "time": "09:00:00", "close": 1890.50, "high": 1810.50, "low": 1795.75, "volume": 700.00 },
        { "date": "2023-10-17", "time": "10:00:00", "close": 1805.00, "high": 1815.00, "low": 1800.25, "volume": 750.00 },
        { "date": "2023-10-17", "time": "11:00:00", "close": 1810.50, "high": 1820.25, "low": 1805.50, "volume": 800.00 },
        { "date": "2023-10-17", "time": "12:00:00", "close": 1815.25, "high": 1825.00, "low": 1810.75, "volume": 850.00 },
        { "date": "2023-10-17", "time": "13:00:00", "close": 1820.00, "high": 1830.00, "low": 1815.25, "volume": 900.00 },
        { "date": "2023-10-17", "time": "14:00:00", "close": 1885.75, "high": 1835.50, "low": 1820.25, "volume": 950.00 },
        { "date": "2023-10-17", "time": "15:00:00", "close": 1830.50, "high": 1840.25, "low": 1825.50, "volume": 1000.00 }
        // Add more hourly data for GC...
      ]
    }
  },
  "CL": {
    "name": "Crude Oil Futures",
    "exchange": "NYMEX",
    "data": {
      "daily": [
        { "date": "2023-10-17", "close": 75.25, "high": 76.50, "low": 74.75, "volume": 5000.00 },
        { "date": "2023-10-18", "close": 76.00, "high": 77.25, "low": 75.50, "volume": 5500.00 },
        { "date": "2023-10-19", "close": 76.75, "high": 78.00, "low": 76.25, "volume": 6000.00 },
        { "date": "2023-10-20", "close": 77.50, "high": 78.75, "low": 76.75, "volume": 6500.00 },
        { "date": "2023-10-21", "close": 78.00, "high": 79.25, "low": 77.50, "volume": 7000.00 },
        { "date": "2023-10-24", "close": 78.50, "high": 79.75, "low": 78.00, "volume": 7500.00 },
        { "date": "2023-10-25", "close": 79.00, "high": 80.25, "low": 78.50, "volume": 8000.00 }
        // Add more daily data for CL...
      ],
      "hourly": [
        { "date": "2023-10-17", "time": "09:00:00", "close": 75.25, "high": 76.50, "low": 74.75, "volume": 450.00 },
        { "date": "2023-10-17", "time": "10:00:00", "close": 75.50, "high": 76.75, "low": 75.00, "volume": 500.00 },
        { "date": "2023-10-17", "time": "11:00:00", "close": 75.75, "high": 77.00, "low": 75.25, "volume": 550.00 },
        { "date": "2023-10-17", "time": "12:00:00", "close": 76.00, "high": 77.25, "low": 75.50, "volume": 600.00 },
        { "date": "2023-10-17", "time": "13:00:00", "close": 76.25, "high": 77.50, "low": 75.75, "volume": 650.00 },
        { "date": "2023-10-17", "time": "14:00:00", "close": 76.50, "high": 77.75, "low": 76.00, "volume": 700.00 },
        { "date": "2023-10-17", "time": "15:00:00", "close": 76.75, "high": 78.00, "low": 76.25, "volume": 750.00 }
        // Add more hourly data for CL...
      ]
    }
  },
  "SI": {
    "name": "Silver Futures",
    "exchange": "COMEX",
    "data": {
      "daily": [
        { "date": "2023-10-17", "close": 25.50, "high": 26.00, "low": 25.25, "volume": 3500.00 },
        { "date": "2023-10-18", "close": 25.75, "high": 26.25, "low": 25.50, "volume": 4000.00 },
        { "date": "2023-10-19", "close": 26.00, "high": 26.50, "low": 25.75, "volume": 4500.00 },
        { "date": "2023-10-20", "close": 26.25, "high": 26.75, "low": 26.00, "volume": 5000.00 },
        { "date": "2023-10-21", "close": 26.50, "high": 27.00, "low": 26.25, "volume": 5500.00 },
        { "date": "2023-10-24", "close": 26.75, "high": 27.25, "low": 26.50, "volume": 6000.00 },
        { "date": "2023-10-25", "close": 27.00, "high": 27.50, "low": 26.75, "volume": 6500.00 }
        // Add more daily data for SI...
      ],
      "hourly": [
        { "date": "2023-10-17", "time": "09:00:00", "close": 25.50, "high": 26.00, "low": 25.25, "volume": 300.00 },
        { "date": "2023-10-17", "time": "10:00:00", "close": 25.75, "high": 26.25, "low": 25.50, "volume": 350.00 },
        { "date": "2023-10-17", "time": "11:00:00", "close": 26.00, "high": 26.50, "low": 25.75, "volume": 400.00 },
        { "date": "2023-10-17", "time": "12:00:00", "close": 26.25, "high": 26.75, "low": 26.00, "volume": 450.00 },
        { "date": "2023-10-17", "time": "13:00:00", "close": 26.50, "high": 27.00, "low": 26.25, "volume": 500.00 },
        { "date": "2023-10-17", "time": "14:00:00", "close": 26.75, "high": 27.25, "low": 26.50, "volume": 550.00 },
        { "date": "2023-10-17", "time": "15:00:00", "close": 27.00, "high": 27.50, "low": 26.75, "volume": 600.00 }
        // Add more hourly data for SI...
      ]
    }
  },
  "EURUSD": {
    "name": "Euro/US Dollar",
    "exchange": "FOREX",
    "data": {
      "daily": [
        { "date": "2023-10-17", "close": 1.1650, "high": 1.1700, "low": 1.1600, "volume": 12000.00 },
        { "date": "2023-10-18", "close": 1.1680, "high": 1.1725, "low": 1.1640, "volume": 12500.00 },
        { "date": "2023-10-19", "close": 1.1700, "high": 1.1740, "low": 1.1660, "volume": 13000.00 },
        { "date": "2023-10-20", "close": 1.1715, "high": 1.1755, "low": 1.1675, "volume": 13500.00 },
        { "date": "2023-10-21", "close": 1.1730, "high": 1.1770, "low": 1.1690, "volume": 14000.00 },
        { "date": "2023-10-24", "close": 1.1745, "high": 1.1785, "low": 1.1705, "volume": 14500.00 },
        { "date": "2023-10-25", "close": 1.1760, "high": 1.1800, "low": 1.1720, "volume": 15000.00 }
        // Add more daily data for EURUSD...
      ],
      "hourly": [
        { "date": "2023-10-17", "time": "09:00:00", "close": 1.1650, "high": 1.1700, "low": 1.1600, "volume": 1100.00 },
        { "date": "2023-10-17", "time": "10:00:00", "close": 1.1660, "high": 1.1710, "low": 1.1610, "volume": 1150.00 },
        { "date": "2023-10-17", "time": "11:00:00", "close": 1.1670, "high": 1.1720, "low": 1.1620, "volume": 1200.00 },
        { "date": "2023-10-17", "time": "12:00:00", "close": 1.1680, "high": 1.1730, "low": 1.1630, "volume": 1250.00 },
        { "date": "2023-10-17", "time": "13:00:00", "close": 1.1690, "high": 1.1740, "low": 1.1640, "volume": 1300.00 },
        { "date": "2023-10-17", "time": "14:00:00", "close": 1.1700, "high": 1.1750, "low": 1.1650, "volume": 1350.00 },
        { "date": "2023-10-17", "time": "15:00:00", "close": 1.1710, "high": 1.1760, "low": 1.1660, "volume": 1400.00 }
        // Add more hourly data for EURUSD...
      ]
    }
  },
  "BTCUSD": {
    "name": "Bitcoin/US Dollar",
    "exchange": "CRYPTO",
    "data": {
      "daily": [
        { "date": "2023-10-17", "close": 60000.00, "high": 61000.00, "low": 59000.00, "volume": 5000.00 },
        { "date": "2023-10-18", "close": 60500.00, "high": 61500.00, "low": 59500.00, "volume": 5500.00 },
        { "date": "2023-10-19", "close": 61000.00, "high": 62000.00, "low": 60000.00, "volume": 6000.00 },
        { "date": "2023-10-20", "close": 61500.00, "high": 62500.00, "low": 60500.00, "volume": 6500.00 },
        { "date": "2023-10-21", "close": 62000.00, "high": 63000.00, "low": 61000.00, "volume": 7000.00 },
        { "date": "2023-10-24", "close": 62500.00, "high": 63500.00, "low": 61500.00, "volume": 7500.00 },
        { "date": "2023-10-25", "close": 63000.00, "high": 64000.00, "low": 62000.00, "volume": 8000.00 }
        // Add more daily data for BTCUSD...
      ],
      "hourly": [
        { "date": "2023-10-17", "time": "09:00:00", "close": 60000.00, "high": 61000.00, "low": 59000.00, "volume": 450.00 },
        { "date": "2023-10-17", "time": "10:00:00", "close": 60250.00, "high": 61250.00, "low": 59250.00, "volume": 500.00 },
        { "date": "2023-10-17", "time": "11:00:00", "close": 60500.00, "high": 61500.00, "low": 59500.00, "volume": 550.00 },
        { "date": "2023-10-17", "time": "12:00:00", "close": 60750.00, "high": 61750.00, "low": 59750.00, "volume": 600.00 },
        { "date": "2023-10-17", "time": "13:00:00", "close": 61000.00, "high": 62000.00, "low": 60000.00, "volume": 650.00 },
        { "date": "2023-10-17", "time": "14:00:00", "close": 61250.00, "high": 62250.00, "low": 60250.00, "volume": 700.00 },
        { "date": "2023-10-17", "time": "15:00:00", "close": 61500.00, "high": 62500.00, "low": 60500.00, "volume": 750.00 }
        // Add more hourly data for BTCUSD...
      ]
    }
  },
  USDJPY: {
    name: "US Dollar/Japanese Yen",
    exchange: "FOREX",
    data: {
      daily: [
        { date: "2023-10-23", close: 110.00, high: 112.00, low: 108.00, volume: 450.00 },
        { date: "2023-10-24", close: 112.00, high: 114.00, low: 110.00, volume: 480.00 },
        { date: "2023-10-25", close: 114.00, high: 116.00, low: 112.00, volume: 500.00 },
      ],
      hourly: [
        {
          date: "2023-10-23",
          time: "09:00:00",
          close: 110.00,
          high: 112.00,
          low: 108.00,
          volume: 45.00,
        },
        {
          date: "2023-10-23",
          time: "10:00:00",
          close: 112.00,
          high: 114.00,
          low: 110.00,
          volume: 48.00,
        },
        {
          date: "2023-10-23",
          time: "11:00:00",
          close: 114.00,
          high: 116.00,
          low: 112.00,
          volume: 50.00,
        },
      ],
    },
  },
};

export default mockData;
