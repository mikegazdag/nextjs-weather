import { useApp } from '@/contexts/AppContext';

import { Card } from '../base/Card';

export const Results = () => {
  const { queryResults } = useApp();

  return (
    <>
      <div className="container">
        <div className="flex flex-wrap justify-center w-full gap-10">
          {queryResults.map((result, idx) => (
            <Card props={result} key={`card-${idx}`} />
          ))}
        </div>
      </div>
    </>
  );
};
