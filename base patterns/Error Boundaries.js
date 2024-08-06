// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log error to an error reporting service
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.error.message}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// Usage
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import SomeComponent from './SomeComponent';

const App = () => (
  <ErrorBoundary>
    <SomeComponent />
  </ErrorBoundary>
);

export default App;
