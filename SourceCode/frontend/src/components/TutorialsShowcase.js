import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const tutorialsArray = Array.from({ length: 3 }, () => ({
  image: faker.image.city(500, 500, true),
  title: faker.lorem.sentence(),
  description: faker.lorem.words(10),
  username: faker.internet.userName()
}));

const TutorialCardComponent = ({ tutorial }) => (
  <Card>
    <Image src={tutorial.image} ui={false} wrapped />
    <Card.Content>
      <Card.Header>{tutorial.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{tutorial.description}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content style={{ display: 'flex', justifyContent: 'space-around' }} extra>
      <div>
        <Icon name='star' />
        4.9 Stars
      </div>
      <Card.Description>{tutorial.username}</Card.Description>
    </Card.Content>
  </Card>
);

const TutorialsShowcase = () => {
  return (
    <div style={{ margin: '25px 85px', padding: '20px 40px' }}>
      <h2>Featured Tutorials</h2>
      <Card.Group itemsPerRow={3}>
        {tutorialsArray.map((tutorial, index) => (
          <TutorialCardComponent key={index} tutorial={tutorial} />
        ))}
      </Card.Group>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Button style={{ margin: '15px auto 0px auto' }} primary>See all tutorials</Button>
      </div>
    </div>
  );
}

export default TutorialsShowcase;
