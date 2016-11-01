/**
 * Main app entry point.
 */

import * as React from 'react';
import { render } from 'react-dom';
import styles from './mainStyles.css';

import { getCurrencyData } from './api/getCurrencyData';
import { CurrencyMeter } from './currencyMeter/CurrencyMeter';

function renderCurrencyMeterIntoDOM(props) {
  render(
    <div>
      <CurrencyMeter {...props} />
      <button onClick={getNewData}>Get New Data</button>
      <button onClick={simulateRealtime}>Simulate Realtime</button>
    </div>,
    document.getElementById('app-container')
  );
}

// Render component initially, perform fetch, then render again after data
// comes back.
renderCurrencyMeterIntoDOM();
getCurrencyData(renderAndCacheData);


/**
 * NOTE: All code below this was just for fun. I would not consider it
 * production ready.
 */

let cachedData;
let interval;

/**
 * Give ability to get new data set.
 */
function getNewData() {
  if (interval) {
    clearInterval(interval);
  }

  getCurrencyData(renderAndCacheData);
}

/**
 * Helper to render component and cache data from request
 */
function renderAndCacheData(data) {
  renderCurrencyMeterIntoDOM(data);
  cachedData = data;
}

/**
 * Give ability to simulate api data changing in realtime.
 */
function simulateRealtime() {
  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    let data;
    if (cachedData.min !== '-' && cachedData.max !== '-') {
      data = Object.assign({}, cachedData, {
        value: getRandomInt(cachedData.min, cachedData.max)
      });
    }
    renderCurrencyMeterIntoDOM(data);
  }, 3000);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
