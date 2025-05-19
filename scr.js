async function calcular(){
  let nome = document.getElementById('nome').value;
  let min = 1;
  let max = 101;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  for(let i = 0; i <= random; i++){
      await new Promise(r => setTimeout(r, 200));
      document.getElementById('titulo').innerText = `[${nome}] calculando ==> [${i}%]`;
  }

  document.getElementById('result').innerText = `[${nome}] é ${random}% Gay`;
  const p = document.getElementById('result');
  p.classList.add('visible');
}