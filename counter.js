async function qq2053() {
  let qq2063 = localStorage.getItem('qq2064');
  if (!qq2063) {
    qq2063 = Date.now().toString();
    localStorage.setItem('qq2064', qq2063);
  }
  const qq2054 = {
    qq2063: qq2063,
    qq2062: navigator.userAgent,
    qq2061: navigator.language,
    qq2060: navigator.platform,
    qq2059: `${screen.width}x${screen.height}`,
    qq2058: `${window.innerWidth}x${window.innerHeight}`,
    qq2057: Intl.DateTimeFormat().resolvedOptions().timeZone,
    qq1895: window.location.href,
    qq2056: document.referrer || 'direct',
    qq2055: new Date().toISOString()
  };
  try {
    const qq787 = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000));
    const qq786 = await Promise.race([fetch('https://api-counter.smartchats.online/qq2048', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(qq2054)
    }), qq787]);
    const qq777 = await qq786.json();
  } catch (qq785) {}
}
window.addEventListener('load', function () {
  setTimeout(qq2053, 2000);
});
