'use client'
import React from 'react';
import { FadeIn, FadeInStagger} from '@/components/FadeIn';
import { Container } from '@/components/Container'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct



export function Clients() {
  const [counterStarted, setCounterStarted] = useState({ count25: false, count100: false });
  const dict = useDictionary()


  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <div className='flex-grow'>
          <h1 invert={true} className=" font-display text-3xl font-medium text-white sm:text-4xl text-left">
          {dict.Services.Title}{' '} 
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
            + Renowned Brands, We've Successfully Executed More Than {' '} 
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
            +{' '}  Diverse Projects in 2023 Alone.
          </h1>
          </div>

        </FadeIn>
        <FadeInStagger faster>
        </FadeInStagger>
      </Container>
    </div>
  );
}
