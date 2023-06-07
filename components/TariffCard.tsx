import { FC } from 'react';

interface TariffCardProps {
  title: string;
  price: string;
}

const TariffCard: FC<TariffCardProps> = ({ title, price }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg hover:shadow-2xl rounded-lg overflow-hidden  transition duration-500 transform hover:scale-105 ">
      <div className="px-6 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <h3 className="text-xl font-semibold text-white">à partir de</h3>
        <div className="mt-4 flex items-center ">
          <span className="text-5xl font-bold text-white mr-2">€</span>
          <span className="text-5xl font-bold text-white">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default TariffCard;