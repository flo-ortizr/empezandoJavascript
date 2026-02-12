import { sumar, multiplicar } from "./sumador.js";

// ---------- SUMA ----------
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

// ---------- MULTIPLICACIÓN ----------
const firstMul = document.querySelector("#primer-numero-multiplicar");
const secondMul = document.querySelector("#segundo-numero-multiplicar");
const formMul = document.querySelector("#multiplicar-form");
const divMul = document.querySelector("#resultado-multiplicar-div");

formMul.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumberMul = Number.parseInt(firstMul.value);
  const secondNumberMul = Number.parseInt(secondMul.value);

  divMul.innerHTML = "<p>" + multiplicar(firstNumberMul, secondNumberMul) + "</p>";
});
