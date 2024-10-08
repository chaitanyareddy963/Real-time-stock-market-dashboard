// src/components/StockTable.js
import React from 'react';
import './StockTable.css'; // Import the CSS file

const StockTable = ({ stocks }) => {
  return (
    <div className="table-container"> {/* Container for table */}
      <table className="stock-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>${stock.price}</td>
              <td className={stock.change.includes('-') ? 'change-negative' : 'change-positive'}>
                {stock.change}
              </td>
              <td>{stock.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
