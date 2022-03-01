import { QueryClientConfig } from 'react-query';

const queryConfig: QueryClientConfig = {
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
};

export { queryConfig };
