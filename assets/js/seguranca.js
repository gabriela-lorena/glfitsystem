// Proteção anti-clickjacking (OWASP). O GitHub Pages não permite enviar
// X-Frame-Options nem CSP frame-ancestors, então a página só se exibe
// quando não está dentro de um iframe de outro site.
(function () {
  if (window.self === window.top) {
    var s = document.getElementById('anti-clickjack');
    if (s && s.parentNode) s.parentNode.removeChild(s);
  } else {
    window.top.location = window.self.location;
  }
})();
