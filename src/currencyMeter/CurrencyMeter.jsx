/**
 * A Currency Meter component will display a min and max amount
 * and have a pointer to the current value in that range.
 */

import * as React from 'react';
import styles from './CurrencyMeterStyles.css';

import { currencyCodeToSymbol } from '../common/currencySymbols'

// Component
function CurrencyMeter(props) {

  const currencySymbol = currencyCodeToSymbol[props.unit];

  return (
    <div>
      <div className={styles.minValue}>
        <span className={styles.min}>{currencySymbol}{props.min}</span>
      </div>
      <div className={styles.maxValue}>
        <span className={styles.max}>{currencySymbol}{props.max}</span>
      </div>
      <div className={styles.currencyValue}>
        <span className={styles.value}>{currencySymbol}{props.value}</span>
      </div>
    </div>
  );
}

// Prop types
CurrencyMeter.propTypes = {
  value: React.PropTypes.number,
  min: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  max: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  format: React.PropTypes.string,
  unit: React.PropTypes.string
};

// Default values
CurrencyMeter.defaultProps = {
  min: '-',
  max: '-'
}

export { CurrencyMeter };
