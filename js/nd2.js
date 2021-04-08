const canvas = document.getElementById('myCanvas1');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(100,100,50, 0, Math.PI * 2, true);
ctx.stroke();