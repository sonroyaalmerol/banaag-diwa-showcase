import React from 'react';
import { useHistory } from 'react-router';
import { Box, Center, Image, Text, Button } from '@chakra-ui/react';

import { CDN_URL } from '../utils/constants';

const TheVisitor = () => {
  const history = useHistory();
  return (
    <Box
      w="100vw"
      minH="100vh"
      color="white"
      paddingBottom="30vh"
      _before={{
        content: '" "',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('${CDN_URL}/2021/06/the-visitor.gif')`,
        backgroundSize: 'cover',
        willChange: 'transform',
        zIndex: -1
      }}
    >
      <Center h="100vh">
        <Image src={`${CDN_URL}/2021/06/the-visitor.png`} maxW="70vw" />
      </Center>
      <Center>
        <Text maxW="80vw">
          who is this ghastly creature<br/>
          who walks with claws and fangs bared<br/>
          whose body of fallen ash<br/>
          could brave a sun in full blaze<br/>
          who is this beast<br/>
          whose breath carries the sting<br/>
          of a thousand<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hells<br/>
          fills the room<br/>
          with the ancient<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scent<br/>
          of death passing<br/>
          leaving my tongue<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tasting<br/>
          of iron and<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sulphur<br/>
          and who is the familiar stranger<br/>
          who wears the face<br/>
          of my&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;past<br/>
          sits calmly upon<br/>
          the creature’s back<br/>
          like a feather<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alighted<br/>
          on a black bough<br/>
          charms yet torments me<br/>
          with a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gaze<br/>
          that knows my sins<br/>
          why do i not fear her<br/>
          as i do<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the nameless<br/>
          crowd that visit<br/>
          in the fever of night<br/>
          she comes<br/>
          like<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lullaby<br/>
          softly,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;softly<br/>
          to redeem<br/>
          my ill-fated<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body crucified<br/>
          forever on this bed.<br/>
        </Text>
      </Center>
      <Center marginTop="4rem">
        <Button colorScheme="blackAlpha" variant="ghost" color="white" onClick={() => history.push('/#the-visitor')}>
          &lt;&lt;&nbsp;Back to Home
        </Button>
      </Center>
    </Box>
  );
}

export default TheVisitor;