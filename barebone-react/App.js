const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading' }, 'Nested Heading'),
    React.createElement('h2', { id: 'heading2' }, 'Nested Heading 2')
  ])
);

const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello World from React!'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(parent);
