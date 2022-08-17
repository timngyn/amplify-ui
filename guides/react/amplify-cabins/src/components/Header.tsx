import {
  Button,
  Card,
  Icon,
  View,
  Flex,
  Link,
  VisuallyHidden,
} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

import Logo from './Logo';

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <a href="/">Amplify Cabins</a>

      <button onClick={() => navigate('/login')}>Sign in</button>
    </>
  );
}
