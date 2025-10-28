// Lazy-load YouTube iframe on click of play button.
// Each .media-item.video has an attribute data-youtube with the embed URL (without autoplay).
document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.media-item.video');

  videos.forEach(v => {
    const btn = v.querySelector('.play-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const embed = v.dataset.youtube || '';
      if (!embed) return;

      // create iframe with autoplay
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', embed + (embed.includes('autoplay=1') ? '' : '&autoplay=1'));
      iframe.setAttribute('frameborder','0');
      iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen','');
      iframe.style.width = '100%';
      iframe.style.height = '450px';
      // clear placeholder and insert iframe
      v.innerHTML = '';
      v.appendChild(iframe);
    });
  });

  // Smooth scroll for TOC links
  const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  tocLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});

  document.querySelectorAll('.media-item.video').forEach(item => {
    const btn = item.querySelector('.play-btn');
    const youtubeUrl = item.dataset.youtube;

    btn.addEventListener('click', () => {
      window.open(youtubeUrl, '_blank'); // abre em nova aba
    });
  });
// Função SAIR — fecha a janela
sairLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.close();
});

