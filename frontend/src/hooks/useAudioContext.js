const useAudioContext = () => {
  let audioContext;
  const ContextClass =
    window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext ||
    window.oAudioContext ||
    window.msAudioContext;
  if (ContextClass) {
    // Web Audio API is available.
    audioContext = new ContextClass();
  } else {
    audioContext = null;
  }
  return audioContext;
};

export default useAudioContext;
