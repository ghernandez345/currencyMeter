/**
 * A Currency Meter component will display a min and max amount and the current
 * value in that range. It does this by rendering the correct data, and also
 * rendering purely stylistic elements that give it a traditional "meter" look.
 */

import * as React from 'react';
import styles from './CurrencyMeterStyles.css';

import { currencyCodeToSymbol } from '../common/currencySymbols'

/**
 * Utility to generate a rotational value for the pointer based on a dynamic
 * max, and value.
 */
function generateRotationalValue(max, value) {
  if (max === '-') return 0;
  return (value * 180) / max;
}

function generatePointerStyles(max, value) {
  const rotateValue = generateRotationalValue(max, value);
  return {
    transform: `rotate(${rotateValue}deg)`
  }
}

// Component
function CurrencyMeter(props) {

  const { min, max, value } = props;
  const currencySymbol = currencyCodeToSymbol[props.unit];
  const pointerStyles = generatePointerStyles(max, value);

  return (
    <div className={styles.currencyMeter}>
      <div className={styles.minValue}>
        <span className={styles.min}>{currencySymbol}{min}</span>
      </div>
      <div className={styles.maxValue}>
        <span className={styles.max}>{currencySymbol}{max}</span>
      </div>
      <div className={styles.currencyValue}>
        <span className={styles.value}>{currencySymbol}{value}</span>
      </div>

      {/* stylistic elements */}
      <div className={styles.meterUI}>
        <div className={styles.semiCircle}></div>
        <div className={styles.pointerRoot}></div>
        <div className={styles.pointer} style={pointerStyles}></div>
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
