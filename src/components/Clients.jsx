'use client'
import React from 'react';
import { FadeIn, FadeInStagger} from '@/components/FadeIn';
import { Container } from '@/components/Container'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { SectionIntro } from '@/components/SectionIntro'


export function Clients() {
  const [counterStarted, setCounterStarted] = useState({ count25: false, count100: false });

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <SectionIntro invert={true} className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with{' '} 
             <VisibilitySensor
              active={!counterStarted.count25}
              onChange={isVisible => isVisible && setCounterStarted({ ...counterStarted, count25: true })}
              delayedCall
            >
              <CountUp end={ 15} duration={5} start={0} redraw={true}>
                {({ countUpRef }) => (
                  <span ref={countUpRef} />
                )}
              </CountUp>
            </VisibilitySensor>
            + amazing companies,
          </SectionIntro>
          <SectionIntro  invert={true} className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            and completed {' '} 
            <VisibilitySensor
              active={!counterStarted.count100}
              onChange={isVisible => isVisible && setCounterStarted({ ...counterStarted, count100: true })}
              delayedCall
            >
              <CountUp end={45} duration={5} start={0} redraw={true}>
                {({ countUpRef }) => (
                  <span ref={countUpRef} />
                )}
              </CountUp>
            </VisibilitySensor>
            + projects in 2023.
          </SectionIntro>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {/* Votre mappage des clients ici */}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

