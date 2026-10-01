(function () {
  var spanish = document.documentElement.lang.toLowerCase().indexOf('es') === 0;
  var form = document.querySelector('#request, #contact');
  var requestHref = form ? '#' + form.id : (spanish ? '/es/#contact' : '/#contact');
  var labels = spanish
    ? {call:'Llamar', text:'Texto', request:'Solicitar servicio'}
    : {call:'Call', text:'Text', request:'Request service'};
  var icons = {
    call:'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.2.4 2.4.6 3.7.6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2A18.8 18.8 0 0 1 1.5 2.7c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.3.2 2.5.6 3.7.1.4 0 .9-.3 1.2z"/></svg>',
    text:'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>',
    request:'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19 3h-1.2A3 3 0 0 0 15 1h-6a3 3 0 0 0-2.8 2H5a2 2 0 0 0-2 2v17h18V5a2 2 0 0 0-2-2zM9 3h6v2H9V3zm8 14H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>'
  };
  var bar = document.createElement('nav');
  bar.className = 'mobile-contact-bar';
  bar.setAttribute('aria-label', spanish ? 'Contacto rápido' : 'Quick contact');
  bar.innerHTML = '<a href="tel:+19549321006">' + icons.call + '<span>' + labels.call + '</span></a>' +
    '<a href="sms:+19549321006">' + icons.text + '<span>' + labels.text + '</span></a>' +
    '<a href="' + requestHref + '">' + icons.request + '<span>' + labels.request + '</span></a>';
  document.body.appendChild(bar);
}());
