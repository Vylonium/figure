// Loader: muat semua file data secara berurutan, lalu app.js
(function() {
  var files = ["data_indonesia.js", "data_jepang.js", "data_india.js", "data_korea.js", "data_usa.js", "data_china.js", "data_korea_utara.js", "data_ukraina.js", "data_prancis.js", "data_rusia.js", "data_arab_saudi.js", "data_kanada.js", "data_inggris.js", "data_israel.js", "data_jerman.js", "data_brasil.js", "data_mexico.js"];
  var i = 0;
  function loadNext() {
    if (i >= files.length) { loadApp(); return; }
    var s = document.createElement('script');
    s.src = files[i];
    s.onload = function() { i++; loadNext(); };
    document.head.appendChild(s);
  }
  function loadApp() {
    var s = document.createElement('script');
    s.src = 'app.js';
    document.body.appendChild(s);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNext);
  } else {
    loadNext();
  }
})();
