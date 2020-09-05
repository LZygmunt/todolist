import React from 'react';
import PropTypes from 'prop-types';

const TooltipWrapper = ({
  children, tip, assignTo,
}) => (
  <div data-tip={ tip } data-for={ assignTo }>
    {children}
  </div>
);

TooltipWrapper.propTypes = {
  assignTo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  tip: PropTypes.node.isRequired,
};

export default TooltipWrapper;
