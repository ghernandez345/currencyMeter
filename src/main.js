/**
 * Main app entry point.
 */

import * as React from 'react';
import { render } from 'react-dom';

import { getCurrencyData } from './api/getCurrencyData';
import { CurrencyMeter } from './currencyMeter/CurrencyMeter';

function renderCurrencyMeterIntoDOM(props) {
  render(
    <div>
      <CurrencyMeter {...props} />
    </div>,
    document.getElementById('app-container')
  );
}

renderCurrencyMeterIntoDOM();
getCurrencyData(renderCurrencyMeterIntoDOM);
