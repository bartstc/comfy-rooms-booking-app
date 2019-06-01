import React from 'react';

import { Title, Comments, Comment, CommentHeader, Rating, UserName, CommentText } from './CommentList.styles';
import { Section } from '../RoomDetails.styles';

const CommentList = () => (
  <Section>
    <Title>Opinions</Title>
    <Comments>
      <Comment>
        <CommentHeader>
          <Rating>9.0</Rating>
          <UserName>John Doe</UserName>
        </CommentHeader>
        <CommentText>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</CommentText>
      </Comment>
      <Comment>
        <CommentHeader>
          <Rating>9.0</Rating>
          <UserName>John Doe</UserName>
        </CommentHeader>
        <CommentText>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</CommentText>
      </Comment>
      <Comment>
        <CommentHeader>
          <Rating>9.0</Rating>
          <UserName>John Doe</UserName>
        </CommentHeader>
        <CommentText>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</CommentText>
      </Comment>
    </Comments>
  </Section>
);

export default CommentList;