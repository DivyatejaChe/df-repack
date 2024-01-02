import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const Upcoming = React.lazy(() =>
  Federated.importModule('account', './AccountList'),
);

const AccountList = () => {
  return (
    <ErrorBoundary name="AccountListScreen">
      <React.Suspense
        fallback={<Placeholder label="Account" icon="bank" />}>
        <Upcoming />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default AccountList;
