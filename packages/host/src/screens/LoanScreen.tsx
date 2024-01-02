import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const Shopping = React.lazy(() => Federated.importModule('loan', './App'));

const LoanScreen = () => {
  return (
    <ErrorBoundary name="LoanScreen">
      <React.Suspense fallback={<Placeholder label="Loan" icon="dollar" />}>
        <Shopping />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default LoanScreen;
