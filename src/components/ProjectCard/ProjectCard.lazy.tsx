import React, { lazy, Suspense } from 'react';

// const LazyProjectCard = lazy(() => import('.'));

const ProjectCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    {/* <LazyProjectCard {...props} /> */}
  </Suspense>
);

export default ProjectCard;
