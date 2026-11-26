let calificacion = 0;
const estrellas = document.querySelectorAll("#estrellas span");
const form = document.getElementById("formResena");
const lista = document.getElementById("listaResenas");
const mensaje = document.getElementById("mensaje");

// Elegir estrellas
estrellas.forEach(estrella => {
  estrella.addEventListener("click", () => {
    calificacion = Number(estrella.dataset.valor);
    estrellas.forEach(e => {
      if (Number(e.dataset.valor) <= calificacion) {
        e.textContent = "★";
        e.classList.add("activa");
      } else {
        e.textContent = "☆";
        e.classList.remove("activa");
      }
    });
  });
});

// Enviar reseña
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  if (calificacion === 0) {
    mensaje.textContent = "⚠️ Elige una calificación con estrellas.";
    mensaje.style.color = "red";
    return;
  }

  const div = document.createElement("div");
  div.className = "resena-card";
  div.innerHTML = `<b>${nombre}</b> - ${"★".repeat(calificacion)}${"☆".repeat(5 - calificacion)}<br>${comentario}`;

  lista.prepend(div);

  mensaje.textContent = "✅ ¡Gracias! Tu reseña fue publicada.";
  mensaje.style.color = "green";

  form.reset();
  calificacion = 0;
  estrellas.forEach(e => { e.textContent = "☆"; e.classList.remove("activa"); });
});