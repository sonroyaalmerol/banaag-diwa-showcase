import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Text, Center, VStack } from '@chakra-ui/react';

const awards = {
  honorable: 'https://cdn.statically.io/img/wp.atenews.ph/f=auto/wp-content/uploads/2021/06/honorable-mention-rosette-chip.png',
  first: 'https://cdn.statically.io/img/wp.atenews.ph/f=auto/wp-content/uploads/2021/06/1st-place-rosette-chip.png',
  second: 'https://cdn.statically.io/img/wp.atenews.ph/f=auto/wp-content/uploads/2021/06/2nd-place-rosette-chip.png',
  special: 'https://cdn.statically.io/img/wp.atenews.ph/f=auto/wp-content/uploads/2021/06/special-prize-rosette-chip.png'
}

export default function MediaCard({ src, title, author, href, award, titleSrc, maxWidth, onClick, style }) {
  if (src) {
    return (
      <Card style={{ position: 'relative', backgroundColor: '#233342', borderColor: '#E7B089', ...style }}>
        <CardActionArea href={href} onClick={onClick}>
          { award ? (
            <img src={awards[award]} alt="Award" style={{
              position: 'absolute',
              left: '1rem',
              top: '1rem',
              maxWidth: maxWidth ?? 'clamp(15rem, 20vw, 20rem)',
              zIndex: 1
            }} />
          ) : null }
          { titleSrc ? (
            <img src={titleSrc} alt="Title" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: maxWidth ?? 'clamp(10rem, 15vw, 15rem)',
              zIndex: 1
            }} />
          ) : null }
          <div style={{ backgroundColor: 'black' }}>
            <CardMedia
              style={{
                height: 400,
                opacity: 0.5
              }}
              image={src}
              title={title}
            />
          </div>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Card style={{ position: 'relative', backgroundColor: '#233342', borderColor: '#E7B089', ...style }} variant="outlined">
      <CardActionArea href={href} onClick={onClick}>
        <CardContent style={{ height: 200, width: '100%' }}>
          <Center h="100%">
            <VStack>
              <Text color="white" fontFamily="Lato" fontWeight="bold" fontSize="1rem" textAlign="center">{title}</Text>
              <Text color="#E7B089" fontFamily="Lato" fontStyle="italic" fontSize="0.8rem" textAlign="center">{author}</Text>
            </VStack>
          </Center>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}