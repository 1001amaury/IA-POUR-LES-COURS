document.addEventListener('click', e=>{
  const btn = e.target.closest('button[data-copy]');
  if(!btn) return;
  const text = btn.getAttribute('data-copy');
  navigator.clipboard.writeText(text).then(()=>{
    btn.textContent = 'Copié';
    setTimeout(()=> btn.textContent = 'Copier l\'exemple',1200);
  }).catch(()=> alert('Échec copie'));
});