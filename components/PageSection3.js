import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="py-10 bg-space1thirten text-space1-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-space1-2 via-space1-3 to-space1-7 rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <Image src="/images/favicon.png" width={48} height={48} alt="Feature Icon 1" />
            </div>
            <h3 className="text-xl tracking-tight font-bold mb-2">MISSION</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
          <div className="bg-gradient-to-br from-space1-2 via-space1-3 to-space1-7 rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <Image src="/images/favicon.png" width={48} height={48} alt="Feature Icon 2" />
            </div>
            <h3 className="text-xl tracking-tight font-bold mb-2">VISION</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
          <div className="bg-gradient-to-br from-space1-2 via-space1-3 to-space1-7 rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <Image src="/images/favicon.png" width={48} height={48} alt="Feature Icon 3" />
            </div>
            <h3 className="text-xl tracking-tight font-bold mb-2">VALUE</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
