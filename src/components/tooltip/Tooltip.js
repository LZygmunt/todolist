/* eslint-disable react/forbid-component-props */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import { borderColor } from 'assets/scss/_variables.scss';
import './scss/tooltip.scss';

const Tooltip = ({
  place, type, effect, id, offset, delayShow,
}) => (
  <ReactTooltip
    id={ id }
    delayShow={ delayShow }
    effect={ effect }
    offset={ offset }
    place={ place }
    type={ type }
    border
    borderColor={ borderColor }
    arrowColor={ borderColor }
    className="tooltip"
  />
);

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  delayShow: PropTypes.number,
  effect: PropTypes.oneOf([ 'float', 'solid' ]),
  offset: PropTypes.shape({
    bottom: PropTypes.node,
    left: PropTypes.node,
    right: PropTypes.node,
    top: PropTypes.node,
  }),
  place: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
  ]),
  type: PropTypes.oneOf([
    'dark',
    'success',
    'warning',
    'error',
    'info',
    'light',
  ]),
};

Tooltip.defaultProps = {
  delayShow: 0,
  effect: 'solid',
  offset: {},
  place: 'bottom',
  type: 'light',
};

Tooltip.rebuild = ReactTooltip.rebuild;
Tooltip.hide = ReactTooltip.hide;

export default Tooltip;
