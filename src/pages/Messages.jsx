import React, { useState } from 'react';
import styled from 'styled-components';
   
export default function ExpandableText({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TextWrapper>
      <Paragraph $isExpanded={isExpanded}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolore reiciendis, dolorem nisi deleniti natus possimus laboriosam, quos saepe enim deserunt optio distinctio neque beatae magni nemo, temporibus obcaecati perferendis!
      </Paragraph>
      <ToggleButton onClick={() => setIsExpanded((prev) => !prev)}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </ToggleButton>
    </TextWrapper>
  );
}

const TextWrapper = styled.div`
  padding:5rem;
  max-width: 300px;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  
  /* Standard multi-line truncation when collapsed */
  ${(props) =>
    !props.$isExpanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines to show before ... */
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #6d3bd7;
  font-weight: bold;
  cursor: pointer;
  padding: 4px 0;
  margin-top: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`;