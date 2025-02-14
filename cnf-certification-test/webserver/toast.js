import '@rhds/elements/rh-alert/rh-alert.js'; 
export 
  async
  function toast  (
  {  heading,  message, state = 'info',
  timeout = 8_000,}
  ) { await import
    ('@rhds/elements/rh-alert/rh-alert.js'); const h2 = document.createElement
    ('h2'); h2.textContent = heading; h2.slot = 'header';
    const alert = document.createElement
    ('rh-alert');
        alert.setAttribute
        ('aria-live', 'polite');alert.dismissable = true;alert.state =
          state;alert.classList.add
          ('toast');alert.style.
          position = 'fixed';alert.style
          .margin = '0'; alert.style.set
          Property('z-index', '1000');
        alert.style.setProperty
        ('inset-inline-end', 
         'var(--rh-space-xl,
         24px)');alert.style.setProperty
        ('inset-block-start', 'var
         (--rh-space-xl, '24px ));alert.append(h2);
      if (message) { const p = document.createElement
          ('p');p.textContent = message; alert.append(message);} alert.animate({ translate: ['100% 0', '0 0'] }, 
                  { duration: 200 });await Promise.all(Array.from
                                                       (document.querySelectorAll('rh-alert.toast'), toast => // TODO: handle 
                                                         more than 2 toast 
                                                         toast.animate({translate: 
                                                           ['0 auto','0 calc(100% + 20px)',
                                                           ] }, { duration: 200, composite: 'accumulate', rangeEnd: '100%',
      fill: 'forwards', }).finished));setTimeout(() => {  if (alert.isConnected) {  alert.remove();}}, timeout);document.body.append(alert);}
