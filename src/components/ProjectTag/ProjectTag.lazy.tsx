import React, { lazy, Suspense } from 'react';

const LazyProjectTag = lazy(() => import('.'));

const ProjectTag = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProjectTag {...props} />
  </Suspense>
);

export default ProjectTag;
