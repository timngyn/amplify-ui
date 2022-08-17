import { ScrollView, Grid } from '@aws-amplify/ui-react';

import { LayoutProps } from '../types';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
