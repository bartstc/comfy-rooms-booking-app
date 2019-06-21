import React from 'react';
import PropTypes from 'prop-types';
import { Comments, Comment, CommentHeader, Rating, UserName, CommentText } from './CommentList.styles';
import { Section, Warning, Key } from '../RoomDetails.styles';

const CommentList = ({ opinions }) => (
  <Section>
    <Key>Opinions</Key>
    <Comments>
      {opinions.length === 0
        ? <Warning>No opinions.</Warning>
        : opinions.map(({ _id, fullname, text, rating }) => (
          <Comment key={_id}>
            <CommentHeader>
              <Rating>{rating === 10 ? rating : `${rating}.0`}</Rating>
              <UserName>{fullname}</UserName>
            </CommentHeader>
            <CommentText>{text}</CommentText>
          </Comment>
        ))
      }
    </Comments>
  </Section>
);

CommentList.propTypes = {
  opinions: PropTypes.array.isRequired
};

export default CommentList;