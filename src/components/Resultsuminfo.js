import React from 'react';
import { Hstack, Iconinfo, Styledinfo } from './styled/ResultSum.styled';

export const Resultsuminfo = ({category,score,icon,color,background}) => {
  return (
    <Styledinfo $color={color} $bgcol={background}>
      <Hstack>
        <Iconinfo src={require(`${icon}`)} alt={icon}/>
        <p>
          {category}
        </p>
      </Hstack>
      <Hstack>
        <p id='score'>
          {score}&nbsp;
        </p>
        <p id='per-hundred'>
          / 100
        </p>
      </Hstack>
    </Styledinfo>
  )
}
