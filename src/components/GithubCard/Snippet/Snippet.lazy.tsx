import React, { lazy, Suspense } from 'react';

const LazySnippet = lazy(() => import('.'));

const Snippet = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    {/* <LazySnippet {...props} /> */}
  </Suspense>
);

export default Snippet;
