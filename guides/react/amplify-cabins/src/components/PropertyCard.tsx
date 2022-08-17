import {
  Card,
  Image,
  Heading,
  Icon,
  View,
  Text,
  Rating,
  Flex,
  Link,
} from '@aws-amplify/ui-react';
import { BiBed } from 'react-icons/bi';

import { PropertyProps } from '../types';

export default function PropertyCard({
  name,
  thumbnail,
  thumbnailAlt,
  beds,
  rate,
  rating,
}: PropertyProps) {
  return (
    <a href="/">
      <img width="100%" height="300px" alt={thumbnailAlt} src={thumbnail} />
      <h2>{name}</h2>
      <div>{rating}</div>
      {beds} bed
      <div>
        <span>${rate}</span>
        <span> / night</span>
      </div>
    </a>
  );
}
