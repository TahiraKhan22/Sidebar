document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
  
    openBtn.addEventListener('click', () => {
      sidebar.style.width = '350px';
    });
  
    closeBtn.addEventListener('click', () => {
      sidebar.style.width = '0';
    });
  });
  