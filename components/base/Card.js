import { convertToCelsius } from '@/utils/helpers';

export const Card = ({ props }) => {
  console.log('prop', props);
  const { name, main, wind, snow, rain, sys } = props;

  const country = sys?.country;
  const temp = {
    now: main?.temp,
    high: { temp: main?.temp_max, label: 'High' },
    low: { temp: main?.temp_min, label: 'Low' },
    feels: main?.feels_like,
  };

  console.log('temp', temp.wind, temp.snow, temp.rain, country);
  return (
    <>
      <article className="grid items-center w-3/4 col-span-3 row-span-3 gap-4 bg-[#E8ECF6] shadow text-[#0B1C46] rounded-tr-md rounded-bl-md rounded-tl-[1.75rem] rounded-br-[1.75rem] max-w-xl">
        <div tabIndex={0} className="p-6 py-3">
          <h1 className="text-[55px] tracking-wider">
            {convertToCelsius(temp.now)}°
          </h1>

          <div className="flex w-full gap-x-6">
            <h2 className="font-bold leading-6 text-md text-[26px] mb-2">
              {name}
              {country && ','}
              {country && <span className="ml-1">{country}</span>}
            </h2>

            {rain && <div className="badge badge-ghost">Raining</div>}

            {/* {wind && <div className="badge badge-ghost">Windy</div>} */}

            {snow && <div className="badge badge-ghost">Snowing</div>}
          </div>

          <div className="flex w-full align-center gap-x-6">
            {[temp.low, temp.high].map((conditions, idx) => (
              <p className="text-md" key={`conditions-${idx}`}>
                <span className="text-lg">
                  {convertToCelsius(conditions.temp)}°
                </span>{' '}
                {conditions.label}
              </p>
            ))}
          </div>

          <footer>
            <p className="text-sm">
              Feels like <span>{convertToCelsius(temp.feels)}°</span>
            </p>
          </footer>
        </div>
      </article>
    </>
  );
};
