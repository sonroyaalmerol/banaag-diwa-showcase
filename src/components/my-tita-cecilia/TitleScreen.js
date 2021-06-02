import React from 'react';
import { Center, Image, Button, SimpleGrid } from '@chakra-ui/react';

import Scene from './Scene';

const TitleScreen = ({ onStart }) => {

  return (
    <Scene darken>
      <Center w="100vw" h="100vh">
        <SimpleGrid columns={1} spacing={10}>
          <Image src="/assets/titles/my tita cecilia.png" alt="My Tita Cecilia" w="30vw" />
          <Button colorScheme="whiteAlpha" variant="ghost" color="white" onClick={onStart}>
            Start Reading &gt;&gt;
          </Button>
        </SimpleGrid>
      </Center>
    </Scene>
  );
}
export default TitleScreen;