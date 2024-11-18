import React, { useState } from 'react';

interface City {
  name: string;
  population: number;
}

const RussiaCities = () => {
  const [cities, setCities] = useState<City[]>([
    { name: 'Moscow', population: 12692466 },
    { name: 'Saint Petersburg', population: 5384342 },
    { name: 'Novosibirsk', population: 1630455 },
    { name: 'Yekaterinburg', population: 1510433 },
    { name: 'Nizhny Novgorod', population: 1250619 },
    { name: 'Kazan', population: 1231117 },
    { name: 'Chelyabinsk', population: 1191913 },
    { name: 'Omsk', population: 1126953 },
    { name: 'Samara', population: 1123865 },
    { name: 'Rostov-on-Don', population: 1094252 },
    { name: 'Ufa', population: 1063729 },
    { name: 'Krasnoyarsk', population: 1036351 },
    { name: 'Voronezh', population: 890268 },
    { name: 'Perm', population: 869351 },
    { name: 'Volgograd', population: 862411 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">61 Largest Cities in Russia</h1>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search cities"
        className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      <ul className="mt-4">
        {filteredCities.map((city) => (
          <li key={city.name} className="py-2">
            <span className="text-lg font-bold">{city.name}</span>
            <span className="text-sm text-gray-600 ml-2">
              Population: {city.population.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RussiaCities;