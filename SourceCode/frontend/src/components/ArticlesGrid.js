import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const articlesArray = Array.from({ length: 3 }, () => ({
  image: faker.image.nature(500, 500, true),
  title: faker.lorem.sentence(),
  description: faker.lorem.words(10),
  author: faker.name.fullName()
}));

const ArticleCardComponent = ({ article }) => (
  <Card>
    <Image src={article.image} ui={false} wrapped />
    <Card.Content>
      <Card.Header>{article.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{article.description}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content style={{ display: 'flex', justifyContent: 'space-around' }} extra>
      <div>
        <Icon name='star' />
        4.5 Stars
      </div>
      <Card.Description>{article.author}</Card.Description>
    </Card.Content>
  </Card>
);

const ArticlesGrid = () => {
  return (
    <div style={{ margin: '25px 85px', padding: '20px 40px' }}>
      <h2>Featured Articles</h2>
      <Card.Group itemsPerRow={3}>
        {articlesArray.map((article, index) => (
          <ArticleCardComponent key={index} article={article} />
        ))}
      </Card.Group>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Button style={{ margin: '15px auto 0px auto' }} primary>See all articles</Button>
      </div>
    </div>
  );
}

export default ArticlesGrid;
