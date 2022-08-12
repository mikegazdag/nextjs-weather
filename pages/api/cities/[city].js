import axios from 'axios';
import qs from 'qs';

export default async function handler(req, res) {
  const { method, query } = req;

  switch (method) {
    case 'GET': {
      const { city } = query;

      if (!city) res.status(202).json({ message: 'City is missing' });

      try {
        const payload = qs.stringify({
          lang: 'en',
          limit: 10,
          type: 'city',
          apiKey: process.env.GEOAPIFY_API_KEY,
          text: city.trim(),
        });

        console.log('payload', payload);
        const url = `https://api.geoapify.com/v1/geocode/search?${payload}`;
        const { data } = await axios.get(url);

        console.log('data', data);
        return res.status(202);
      } catch (error) {
        return res.status(200);
      }

      //   // const result = sourceCity.filter(sourceCity.name === city);
      //   if (sourceCity.name !== city) return false;
      //   console.log('result', sourceCity);
      //   // if (city.filter(city.name === city)) {
      //   //   return res.status(200).json(city);
      //   // }
      // });

      // return res.status(500).json({ message: 'City not found' });
      // } else {
      //   res.status(400).json({ message: 'Error fetching content' });
      // }

      break;
    }

    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
  }
}
