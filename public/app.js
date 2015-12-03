(function () {
  'use strict';

  var HelloWorld = React.createClass({
    displayName: 'HelloWorld',
    render: function () {
      return React.createElement('div', null, 'Hello world');
    }
  });

  ReactDOM.render(
    React.createElement(HelloWorld),
    document.getElementById('app')
  );
}());
