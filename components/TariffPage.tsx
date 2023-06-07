import { FC } from 'react';
import TariffCard from '../components/TariffCard';


const TariffsPage: FC = () => {
  const tariffs = [
    {
      title: '2 places',
      price: '19.90',
    },
    {
      title: 'Citadine',
      price: '23.90',
    },
    {
      title: 'SUV/Break',
      price: '33.90',
    },
    {
      title: '4x4',
      price: '35.90',
    },
    {
      title: 'Monospace',
      price: '41.90',
    },
    {
      title: '2 Roues',
      price: '19.90',
    },
  ];

  return (
    <div id='tarifs' className="container mx-auto px-4 py-12 bg-zinc-50 ">
      <h1 className="text-4xl font-bold text-center mb-12 text-zinc-900 ">Nos tarifs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tariffs.map((tariff) => (
          <TariffCard
            key={tariff.title}
            title={tariff.title}
            price={tariff.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TariffsPage;
