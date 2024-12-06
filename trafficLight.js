
document.addEventListener('DOMContentLoaded', () => {
    const states = {
      RED: 'RED',
      YELLOW: 'YELLOW',
      GREEN: 'GREEN'
    };
  
    const timings = {
      RED: 20000,   // 20 seconds
      YELLOW: 5000, // 5 seconds
      GREEN: 15000  // 15 seconds
    };
  
    let currentState = states.RED;
    let timer;
  
    const redLight = document.getElementById('red-light');
    const yellowLight = document.getElementById('yellow-light');
    const greenLight = document.getElementById('green-light');
  
    const updateLights = () => {
      redLight.classList.remove('active');
      yellowLight.classList.remove('active');
      greenLight.classList.remove('active');
  
      switch (currentState) {
        case states.RED:
          redLight.classList.add('active');
          break;
        case states.YELLOW:
          yellowLight.classList.add('active');
          break;
        case states.GREEN:
          greenLight.classList.add('active');
          break;
      }
    };
  
    const transitionState = () => {
      switch (currentState) {
        case states.RED:
          currentState = states.GREEN;
          break;
        case states.YELLOW:
          currentState = states.RED;
          break;
        case states.GREEN:
          currentState = states.YELLOW;
          break;
      }
      updateLights();
      clearTimeout(timer);
      timer = setTimeout(transitionState, timings[currentState]);
    };
  
    document.getElementById('red-button').addEventListener('click', () => {
      currentState = states.RED;
      updateLights();
      clearTimeout(timer);
      timer = setTimeout(transitionState, timings[currentState]);
    });
  
    document.getElementById('yellow-button').addEventListener('click', () => {
      currentState = states.YELLOW;
      updateLights();
      clearTimeout(timer);
      timer = setTimeout(transitionState, timings[currentState]);
    });
  
    document.getElementById('green-button').addEventListener('click', () => {
      currentState = states.GREEN;
      updateLights();
      clearTimeout(timer);
      timer = setTimeout(transitionState, timings[currentState]);
    });
  
    updateLights();
    timer = setTimeout(transitionState, timings[currentState]);
  });
  