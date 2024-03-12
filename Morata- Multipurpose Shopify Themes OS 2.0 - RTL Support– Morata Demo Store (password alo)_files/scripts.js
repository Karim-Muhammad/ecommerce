/** Shopify CDN: Minification failed

Line 17:1 Transforming const to the configured target environment ("es5") is not supported yet
Line 20:10 Transforming const to the configured target environment ("es5") is not supported yet

**/
(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["iframe-video"]) return;
  try {
    
	const postervideo = document.querySelector('[id^="Deferred-Poster-"]');
    postervideo.addEventListener('click', function(){
        if (!this.getAttribute('loaded')) {
          const content = document.createElement('div');
          content.appendChild(this.nextElementSibling.content.firstElementChild.cloneNode(true));
          this.parentElement.setAttribute('loaded', true);
          this.parentElement.appendChild(content.querySelector('video, model-viewer, iframe')).focus();
        }
	});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["top-bar"]) return;
  try {
    
    jQuery(document).ready(function ($) {
        $('.btn-close').on('click', function(){
        $(this).parents('.parent-close').slideUp();
        })
    });

  } catch(e) { console.error(e); }
})();

})();
