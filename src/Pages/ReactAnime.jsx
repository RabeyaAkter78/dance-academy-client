import { Anime } from 'react-anime';
const ReactAnime = () => {
    return (
        <Anime
  initial={[
    {
      targets: '.letter',
      translateY: ['-1rem', '0'],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 500,
      delay: (el, i) => i * 100, // Delay each letter animation
    },
  ]}
>
  <span className="letter">H</span>
  <span className="letter">e</span>
  <span className="letter">l</span>
  <span className="letter">l</span>
  <span className="letter">o</span>
</Anime>
    );
};

export default ReactAnime;