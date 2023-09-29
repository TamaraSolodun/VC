import React, { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    JitsiMeetExternalAPI: any;
  }
}

const VideoConference: React.FC = () => {
  useEffect(() => {
    const domain = 'meet.jit.si';
    const options = {
      roomName: 'oom-name',
      width: '100%',
      height: '1500px',
      parentNode: document.querySelector('#jitsi-container'),
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => {
      api.dispose();
    };
  }, []);

  return <div id="jitsi-container" />;
};

export default VideoConference;
