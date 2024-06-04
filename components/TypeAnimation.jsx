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
    />
  );
};

export default TypeAnimationUi;