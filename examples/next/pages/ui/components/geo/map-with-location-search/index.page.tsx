import { MapView, LocationSearch } from '@aws-amplify/ui-react/dist/geo';
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

export default function MapWithLocationSearch() {
  return (
    <MapView>
      <LocationSearch />
    </MapView>
  );
}
