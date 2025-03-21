
import React from 'react';
import Map from '@/components/Map';

const MapSection = () => {
  return (
    <section className="py-0">
      <div className="h-[400px] w-full">
        <Map 
          address="Focus Strategy GmbH, Frankfurt am Main, Germany"
          lat={50.110921}
          lng={8.682125}
          zoom={14}
        />
      </div>
    </section>
  );
};

export default MapSection;
