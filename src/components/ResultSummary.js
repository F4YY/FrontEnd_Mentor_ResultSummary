import React from 'react';
import { Container } from './styled/Container.styled';
import {
  Hstackflexi,
  Leftside,
  Circlenum,
  Rightside,
  Styledbutton,
  Vstack,
  Attribution,
  AttributionA,
} from './styled/ResultSum.styled';
import Datas from '../data.json';
import { Resultsuminfo } from './Resultsuminfo';

export const ResultSummary = () => {
  return (
    <Container>
      <Hstackflexi>
        <Leftside>
          <h6>
            Your Result
          </h6>
          <Circlenum>
            <h4>
              76
            </h4>
            <p id='hundred'>
              of 100
            </p>
          </Circlenum>
            <h5>
              Great
            </h5>
            <p id='desc'>
              You scored higher than 65% of the people who have taken these tests.
            </p>
        </Leftside>
        <Rightside>
            <h6 id='summary'>
              Summary
            </h6>
            <Vstack>
              {Datas && Datas.map((data, index)=>
                <Resultsuminfo
                  key={index}
                  category={data.category}
                  score={data.score}
                  icon={data.icon}
                  color={data.color}
                  background={data.background}
                />
              )}
              <Styledbutton>
                Continue
              </Styledbutton>
            </Vstack>
        </Rightside>
      </Hstackflexi>
      <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Result summary.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
          </footer>
    </Container>
  )
}
