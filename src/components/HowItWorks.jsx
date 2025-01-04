import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'

const HowItWorks = () => {
  const videoRef = useRef()
  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 1,
      duration: 2,
      ease: 'power2.inOut',
    })
    animateWithGsap('.g_fadeIn', { opacity: 1, y: 0, duration: 1 })
  })
  return (
    <section className="common-padding bg-zinc">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip. <br /> A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            The biggest refesign in the history of iPhone. The fastest chip in
            the world. And the most powerful display.
          </p>
          <div className="mt-10 md:mt-20 mb-14">
            <div className="relative h-full flex-center">
              <div className="overflow-hidden">
                <img
                  src={frameImg}
                  alt="frame"
                  className="bg-transparent relative z-10"
                />
              </div>
              <div className="hiw-video">
                <video
                  className="pointer-events-none"
                  playsInline
                  preload="none"
                  autoPlay
                  ref={videoRef}
                  muted
                  loop
                >
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="text-gray font-semibold mt-3 flex-center mb-3">
              Honkai: Star rail{' '}
            </p>
          </div>
          <div className="hiw-text-container">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text g_fadeIn">
                A17 Pro chip is the most powerful chip ever in a smartphone.
                <span className="text-white">
                  {' '}
                  It features our fastest CPU and GPU ever, and it powers
                  everything you&apos;ve ever wanted.
                </span>
              </p>
              <p className="hiw-text g_fadeIn">
                Mobile
                <span className="text-white">
                  {' '}
                  games that look and feel more realistic than ever before.
                </span>
              </p>
            </div>
            <div className="flex-1 flex justify-center flex-col g_fadeIn">
              <p className="hiw-text">New</p>
              <p className="hiw-bigtext">Pro-class GPU</p>
              <p className="hiw-text">with 6 cores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
