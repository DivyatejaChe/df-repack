import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const Booking = React.lazy(() => Federated.importModule('account', './App'));

const AccountsScreen = () => {
  return (
    <ErrorBoundary name="AccountsScreen">
      <React.Suspense
        fallback={<Placeholder label="Account" icon="bank" />}>
        <Booking />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default AccountsScreen;
