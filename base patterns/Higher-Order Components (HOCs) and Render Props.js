// withAuth.js (HOC)
import React from 'react';

const withAuth = WrappedComponent => {
  return class extends React.Component {
    state = {
      isAuthenticated: false,
    };

    componentDidMount() {
      // Assume a function checkAuth that returns a promise
      checkAuth().then(isAuthenticated => {
        this.setState({ isAuthenticated });
      });
    }

    render() {
      const { isAuthenticated } = this.state;
      return isAuthenticated ? <WrappedComponent {...this.props} /> : <div>Please log in</div>;
    }
  };
};

export default withAuth;

// ProtectedComponent.js
import React from 'react';
import withAuth from './withAuth';

const ProtectedComponent = () => (
  <div>
    <h1>Protected Content</h1>
    <p>This content is only accessible to authenticated users.</p>
  </div>
);

export default withAuth(ProtectedComponent);
