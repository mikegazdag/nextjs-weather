import axios from 'axios';
import qs from 'qs';

export default async function handler(req, res) {
  const { method, query } = req;

  switch (method) {
    case 'GET': {
      const { city } = query;

      if (!city) res.status(202).json({ message: '"city" is missing' });

      try {
        const payload = qs.stringify({
          sort: 'population',
          type: 'like',
          appid: process.env.OPEN_WEATHER_MAP_API_KEY,
          q: city.trim(),
        });

        const url = `https://api.openweathermap.org/data/2.5/find?${payload}`;

        const { data } = await axios.get(url);

        return res.status(202).json(data?.list);
      } catch (error) {
        return res.status(500).json({ message: 'Error fetching content' });
      }
    }

    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
  }
}
