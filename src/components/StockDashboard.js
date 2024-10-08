import React, { useState, useEffect } from 'react';
import StockTable from './StockTable';
import SearchBar from './SearchBar';

const StockDashboard = () => {
  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', price: 145.09, change: '+1.20', volume: 30000 },
    { symbol: 'GOOGL', price: 2750.50, change: '+10.5', volume: 15000 },
    { symbol: 'MSFT', price: 289.67, change: '+3.40', volume: 25000 },
    { symbol: 'AMZN', price: 3300.00, change: '+15.00', volume: 20000 },
    { symbol: 'FB', price: 355.00, change: '+4.00', volume: 22000 },
    { symbol: 'TSLA', price: 700.00, change: '-5.00', volume: 18000 },
    { symbol: 'NFLX', price: 500.00, change: '+6.00', volume: 16000 },
    { symbol: 'NVDA', price: 230.00, change: '+12.00', volume: 17000 },
    { symbol: 'INTC', price: 55.00, change: '-2.00', volume: 14000 },
    { symbol: 'CSCO', price: 55.75, change: '+0.25', volume: 13000 },
    { symbol: 'TSM', price: 110.00, change: '+1.50', volume: 12500 },
    { symbol: 'ADBE', price: 650.00, change: '+9.00', volume: 11000 },
    { symbol: 'PYPL', price: 250.00, change: '+7.00', volume: 9500 },
    { symbol: 'CRM', price: 220.00, change: '+4.50', volume: 8700 },
    { symbol: 'NFLX', price: 500.00, change: '+6.00', volume: 16000 },
    { symbol: 'ORCL', price: 80.00, change: '+1.00', volume: 7500 },
    { symbol: 'IBM', price: 140.00, change: '-1.50', volume: 6800 },
    { symbol: 'BABA', price: 150.00, change: '+2.00', volume: 5400 },
    { symbol: 'TCEHY', price: 65.00, change: '-0.50', volume: 4900 },
    { symbol: 'ATVI', price: 90.00, change: '+3.00', volume: 4300 },
    { symbol: 'NOW', price: 550.00, change: '+10.00', volume: 3500 },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  // Simulate WebSocket data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) => 
        prevStocks.map((stock) => {
          const priceChange = (Math.random() * 10 - 5).toFixed(2); // Random price change
          return {
            ...stock,
            price: (parseFloat(stock.price) + parseFloat(priceChange)).toFixed(2),
            change: priceChange,
          };
        })
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const filteredStocks = stocks.filter((stock) =>
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Stock Market Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {error && <p>{error}</p>}
      <StockTable stocks={filteredStocks} />
    </div>
  );
};

export default StockDashboard;
