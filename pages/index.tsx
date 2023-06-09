import { withLayout } from '@/layout/Layout';
import { useState } from 'react';
import { Htag, Tab, Button, Ptag, Rating } from '../components';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Htag tag="h1">Hello world</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => console.log('IamPrimary')}
      >
        Push me
      </Button>
      <Button
        appearance="ghost"
        arrow="dawn"
        onClick={() => console.log('IamGhost')}
      >
        Push her
      </Button>
      <Ptag size="lgp">Big size</Ptag>
      <Ptag size="mdp">Medium size</Ptag>
      <Ptag size="smp">Small size</Ptag>
      <Tab size="smt" color="ghost">
        Ghost
      </Tab>
      <Tab size="mdt" color="primary">
        Primary
      </Tab>
      <Tab color="grey">Gray</Tab>
      <Tab color="green">Green</Tab>
      <Tab color="red">Red</Tab>
      <Tab color="primary">Red</Tab>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
