import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const Transactions = React.lazy(() =>
  Federated.importModule('transactions', './TransactionsScreen'),
);

const TransactionsScreen = () => {
  return (
    <ErrorBoundary name="TransactionsScreen">
      <React.Suspense
        fallback={<Placeholder label="Transactions" icon="bank-transfer" />}>
        <Transactions />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default TransactionsScreen;
