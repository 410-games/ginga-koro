(() => {
  let activeAudio = null;

  document.querySelectorAll('.music-preview-button').forEach((button) => {
    const section = button.closest('.reference-music');
    const audio = section?.querySelector('.music-preview-audio');
    const status = section?.querySelector('.music-preview-status');
    if (!audio || !button.dataset.previewSrc) return;

    audio.src = button.dataset.previewSrc;
    audio.preload = 'none';
    audio.loop = true;
    button.dataset.trackName = button.getAttribute('aria-label')
      .replace(/^Play /, '')
      .replace(/ soundtrack preview$/, '');

    const updateButton = (playing) => {
      button.setAttribute('aria-pressed', String(playing));
      button.setAttribute(
        'aria-label',
        (playing ? 'Pause ' : 'Play ') + button.dataset.trackName + ' soundtrack preview'
      );
      button.querySelector('[aria-hidden="true"]').textContent = playing ? 'Ⅱ' : '▶';
    };

    button.addEventListener('click', async () => {
      if (!audio.paused) {
        audio.pause();
        return;
      }

      if (activeAudio && activeAudio !== audio) activeAudio.pause();
      activeAudio = audio;
      if (status) status.hidden = true;

      try {
        await audio.play();
      } catch {
        if (status) {
          status.textContent = 'This browser could not play the preview.';
          status.hidden = false;
        }
        updateButton(false);
      }
    });

    audio.addEventListener('play', () => updateButton(true));
    audio.addEventListener('pause', () => updateButton(false));
    audio.addEventListener('ended', () => updateButton(false));
    audio.addEventListener('error', () => {
      if (status) {
        status.textContent = 'This browser could not load the preview.';
        status.hidden = false;
      }
      updateButton(false);
    });
  });
})();
