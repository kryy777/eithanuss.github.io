document.addEventListener('DOMContentLoaded', () => {
  console.log('Página de donación de médula cargada');
  
  // Add initial transform to skeleton to ensure animation starts immediately
  const skeleton = document.querySelector('.skeleton');
  skeleton.style.transform = 'translateX(0) rotateY(0)';
  
  // Add parallax effect to skeleton
  if (!window.matchMedia('(max-width: 768px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      
      skeleton.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
  }
});
