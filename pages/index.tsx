import { useState } from 'react';
import { Htag, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Htag tag='h1'>Привет мир</Htag>
      <P size='s'>Текст</P>
      <P>Текст</P>
      <P size='l'>Текст</P>
      <Tag>Ghost</Tag>
      <Tag color='red'>Red</Tag>
      <Tag color='green'>Green</Tag>
      <Rating isEditable rating={rating} setRating={setRating} />
    </>
  );
}

export default withLayout(Home)