<samp>

# React State Management

This is a bare-bones state management using custom hook in React.

I figured it out at work when a particular flow in our app was affected by severe perf issues from re-renders. The flow used multiple > 15 different components all manipulating a common state. The said state contained in a context provider (useContext).

As opposed to that, this neat hook allows for components to subscribe to specific slices of the state & re-render only on instances when the slice changes.

</samp>
