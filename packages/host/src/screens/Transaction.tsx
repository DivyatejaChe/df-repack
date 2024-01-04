import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const TransactionsScreen = React.lazy(() => Federated.importModule('transactions', './App'));

const Transactions = () => {
  return (
    <ErrorBoundary name="Transactions">
      <React.Suspense
        fallback={<Placeholder label="Transactions" icon="bank-transfer" />}>
        <Transactions />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default TransactionsScreen;
