// Script per aggiungere il toggle sidebar personalizzato su desktop

function addSidebarToggle() {
  // Controlla se siamo su desktop (larghezza > 50rem = 800px)
  if (window.innerWidth >= 800) {
    // Verifica se il pulsante esiste già
    if (document.querySelector('.custom-sidebar-toggle')) return;

    // Crea il pulsante toggle
    const toggleButton = document.createElement('button');
    toggleButton.className = 'custom-sidebar-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle sidebar');
    toggleButton.innerHTML = `
      <div class="hamburger-icon">
        <span></span>
      </div>
    `;

    // Aggiungi il pulsante al body
    document.body.appendChild(toggleButton);

    // Aggiungi l'evento click
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-hidden');
    });

    // Gestisci il resize della finestra
    window.addEventListener('resize', () => {
      if (window.innerWidth < 800) {
        toggleButton.remove();
      }
    });
  }
}

// Esegui quando il DOM è caricato
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addSidebarToggle);
} else {
  addSidebarToggle();
}

// Ri-esegui su resize per gestire il cambio da mobile a desktop
window.addEventListener('resize', addSidebarToggle);