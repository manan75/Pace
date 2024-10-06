import { useEffect } from 'react';

const AiBot = () => {
  useEffect(() => {
    const initLandbot = () => {
      let myLandbot;
      if (!myLandbot) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.addEventListener('load', function () {
          myLandbot = new window.Landbot.Popup({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2630143-A0ZP8TZJ1VD1HUV6/index.json',
          });
        });
        s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
        const x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return null; // No visible UI, it's just a script.
};

export default AiBot;
