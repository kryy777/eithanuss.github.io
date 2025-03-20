document.addEventListener('DOMContentLoaded', () => {
  console.log('Página de donación de médula cargada');
  
  
  const skeleton = document.querySelector('.skeleton');
  skeleton.style.transform = 'translateX(0) rotateY(0)';
  
  if (!window.matchMedia('(max-width: 768px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      
      skeleton.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
  }
});

// BASTIAN AZOCAR ICINF ULAGOS
