import { TypeAnimation } from 'react-type-animation';

const TypeAnimationUi = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'An App Made For Poets.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'An App Made For Ideas.',
        1000,
        'An App Made For Personal blogs.',
        1000,
        'An App Made For You!',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block', color: 'black' }}
      repeat={Infinity}
      className="text-[1.2rem] w-[100%] text-black sm:text-3xl"
    />
  );
};

export default TypeAnimationUi;