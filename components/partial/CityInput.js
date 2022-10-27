import cn from 'classnames';
import debounce from 'lodash/fp/debounce';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useApp } from '@/contexts/AppContext';
import { useCityQuery } from '@/hooks/useCityQuery';
import { REDUCER_ACTIONS as ACTIONS } from '@/utils/constants';

export const CityInput = () => {
  const { setQuery, appState, appDispatch } = useApp();
  const { findCity } = useCityQuery();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setFocus('query');
  }, []);

  const handleQuery = async event => {
    event.preventDefault;
    const { query } = event;
    if (!query) return null;

    setQuery(query);
    appDispatch({ type: ACTIONS.SUBMITTING });

    try {
      await findCity(query);
    } catch (error) {
      appDispatch({ type: ACTIONS.ERROR, errors: error });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedQuery = useMemo(() => debounce(300, handleQuery));

  const providerName = 'OpenWeatherMap';
  const isProcessing = appState.disabled || appState.submitting;

  return (
    <>
      <form id="query" onSubmit={handleSubmit(debouncedQuery)}>
        <div className="mx-auto md:max-w-md form-control">
          <div className="input-group">
            <input
              type="text"
              name="query"
              tabIndex={0}
              placeholder="Enter a city"
              disabled={appState.disabled}
              {...register('query', { required: true })}
              className={cn('!w-full input input-bordered text-lg', {
                'input-disabled': isProcessing,
              })}
            />

            <button
              className={cn('btn btn-square', {
                loading: isProcessing,
              })}
              type="submit"
              onClick={debouncedQuery}
            >
              {!isProcessing && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          <p className="mt-5 ml-1.5 text-right">
            <small>Powered by {providerName}</small>
          </p>
        </div>
      </form>
    </>
  );
};
