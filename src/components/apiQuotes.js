const url = 'https://quotes15.p.rapidapi.com/quotes/random/';

export async function getQuote() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '97a5bc580fmsh0bab9dfa709dabdp1d81f5jsn54b60fe690c2',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
    },
  };
  const res = await fetch(url, options);

  if (!res.ok) throw Error('Failed getting Quote');

  const data = await res.json();

  return data;
}
