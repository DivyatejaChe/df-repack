import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const Cards = React.lazy(() => Federated.importModule('cards', './App'));

const CardsScreen = () => {
  return (
    <ErrorBoundary name="CardsScreen">
      <React.Suspense fallback={<Placeholder label="Cards" icon="card-account-details" />}>
        <Cards />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default CardsScreen;
