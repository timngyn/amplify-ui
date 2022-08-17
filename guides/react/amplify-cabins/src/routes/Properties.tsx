import { Collection } from '@aws-amplify/ui-react';

import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import Layout from '../components/Layout';

export default function Properties() {
  return (
    <Layout>
      <Collection items={properties} type="grid" templateColumns="500px">
        {(item, index) => <PropertyCard key={index} {...item}></PropertyCard>}
      </Collection>
    </Layout>
  );
}
