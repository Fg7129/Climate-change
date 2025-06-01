function changeBackgroundColor() {
    const colors = ["blue", "yellow", "white", "chocolate", "orange","red"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  
  function getGreeting() {
    const hour = new Date().getHours();
    console.log(hour);
    let greeting = "Hello!";
  
    switch (true) {
      case hour >= 5 && hour < 12:
        greeting = "Good Morning!";
        break;
      case hour >= 12 && hour < 18:
        greeting = "Good Afternoon!";
        break;
      case hour >= 18 && hour < 22:
        greeting = "Good Evening!";
        break;
      default:
        greeting = "Good Night!";
    }
  
    document.getElementById("greeting").textContent = greeting;
  }
  
  window.onload = getGreeting;