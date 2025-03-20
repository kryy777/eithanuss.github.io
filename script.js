document.addEventListener('DOMContentLoaded', () => {
  console.log('Página de donación de médula cargada');
  
  // BASTIAN AZOCAR - ULAGOS ICINF
  document.addEventListener('mousemove', (e) => {
    const skeleton = document.querySelector('.skeleton');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    skeleton.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  // BASTIAN AZOCAR - ULAGOS ICINF
  if (window.matchMedia('(max-width: 768px)').matches) {
    const skeleton = document.querySelector('.skeleton');
    skeleton.style.transform = 'none';
  }
});
