'use strict';

import React from 'react';

// RouteHandler is gone. Router now automatically
// populates this.props.children of your components based on the active route.

export default React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});
