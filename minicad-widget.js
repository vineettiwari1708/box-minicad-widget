
// document.addEventListener("DOMContentLoaded", function () {
//   // === Floating Button (center-right) ===
//   const cadBtn = document.createElement("button");
//   cadBtn.id = "open-cad-widget";
//   cadBtn.innerHTML = `<i class="fas fa-house-chimney-window"></i>`;
//   Object.assign(cadBtn.style, {
//     position: "fixed",
//     top: "50%",
//     right: "0",
//     transform: "translateY(-50%)",
//     width: "50px",
//     height: "50px",
//     borderRadius: "10px 0 0 10px",
//     backgroundColor: "#343a40",
//     color: "#fff",
//     border: "none",
//     fontSize: "22px",
//     cursor: "pointer",
//     zIndex: 99999
//   });
//   document.body.appendChild(cadBtn);

//   // === Widget Panel ===
//   const widget = document.createElement("div");
//   widget.id = "cad-widget";
//   Object.assign(widget.style, {
//     position: "fixed",
//     top: "50%",
//     right: "60px",
//     transform: "translateY(-50%)",
//     width: "520px",
//     height: "560px",
//     backgroundColor: "#fff",
//     boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
//     borderRadius: "8px",
//     display: "none",
//     flexDirection: "column",
//     overflow: "hidden",
//     zIndex: 99998,
//     fontFamily: "Arial, sans-serif"
//   });

//   widget.innerHTML = `
//     <div style="background: #343a40; color: white; padding: 8px; display: flex; justify-content: space-between;">
//       <span>Mini CAD</span>
//       <button id="close-cad" style="background:none;color:white;border:none;font-size:18px;cursor:pointer;">&times;</button>
//     </div>
//     <div style="padding: 6px; display: flex; gap: 6px; border-bottom: 1px solid #ddd;">
//       <button data-tool="line" class="cad-tool">Line</button>
//       <button data-tool="rect" class="cad-tool">Rect</button>
//       <button id="clear-canvas">Clear</button>
//     </div>
//     <canvas id="cad-canvas" width="500" height="500" style="cursor: crosshair;"></canvas>
//   `;
//   document.body.appendChild(widget);

//   // === Logic ===
//   const canvas = widget.querySelector("#cad-canvas");
//   const ctx = canvas.getContext("2d");
//   let tool = "line";
//   let drawing = false;
//   let startX = 0, startY = 0;

//   widget.querySelectorAll(".cad-tool").forEach(btn => {
//     btn.addEventListener("click", () => {
//       tool = btn.dataset.tool;
//     });
//   });

//   canvas.addEventListener("mousedown", e => {
//     drawing = true;
//     const rect = canvas.getBoundingClientRect();
//     startX = e.clientX - rect.left;
//     startY = e.clientY - rect.top;
//   });

//   canvas.addEventListener("mouseup", e => {
//     if (!drawing) return;
//     drawing = false;
//     const rect = canvas.getBoundingClientRect();
//     const endX = e.clientX - rect.left;
//     const endY = e.clientY - rect.top;

//     ctx.beginPath();
//     if (tool === "line") {
//       ctx.moveTo(startX, startY);
//       ctx.lineTo(endX, endY);
//     } else if (tool === "rect") {
//       ctx.rect(startX, startY, endX - startX, endY - startY);
//     }
//     ctx.stroke();
//   });

//   // Clear canvas
//   widget.querySelector("#clear-canvas").addEventListener("click", () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   });

//   // Open and close
//   cadBtn.addEventListener("click", () => {
//     widget.style.display = "flex";
//     cadBtn.style.display = "none";
//   });
//   widget.querySelector("#close-cad").addEventListener("click", () => {
//     widget.style.display = "none";
//     cadBtn.style.display = "block";
//   });
// });





document.addEventListener("DOMContentLoaded", function () {
  // === Floating Button (center-right) ===
  const cadBtn = document.createElement("button");
  cadBtn.id = "open-cad-widget";
  cadBtn.innerHTML = `<i class="fas fa-house-user"></i>`;
  Object.assign(cadBtn.style, {
    position: "fixed",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    width: "50px",
    height: "50px",
    borderRadius: "10px 0 0 10px",
    backgroundColor: "#343a40",
    color: "#fff",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
    zIndex: 99999
  });
  document.body.appendChild(cadBtn);

  // === Widget Panel ===
  const widget = document.createElement("div");
  widget.id = "cad-widget";
  Object.assign(widget.style, {
    position: "fixed",
    top: "50%",
    right: "60px",
    transform: "translateY(-50%)",
    width: "420px",
    height: "460px",
    backgroundColor: "#fff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    borderRadius: "8px",
    display: "none",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 99998,
    fontFamily: "Arial, sans-serif"
  });

  widget.innerHTML = `
    <div style="background: #343a40; color: white; padding: 8px; display: flex; justify-content: space-between;">
      <span>Mini CAD</span>
      <button id="close-cad" style="background:none;color:white;border:none;font-size:18px;cursor:pointer;">&times;</button>
    </div>
    <div style="padding: 6px; display: flex; gap: 6px; border-bottom: 1px solid #ddd;">
      <button data-tool="line" class="cad-tool">Line</button>
      <button data-tool="rect" class="cad-tool">Rect</button>
      <button id="clear-canvas">Clear</button>
    </div>
    <canvas id="cad-canvas" width="400" height="400" style="cursor: crosshair;"></canvas>
  `;
  document.body.appendChild(widget);

  // === Drawing Logic ===
  const canvas = widget.querySelector("#cad-canvas");
  const ctx = canvas.getContext("2d");
  let tool = "line";
  let drawing = false;
  let startX = 0, startY = 0;

  widget.querySelectorAll(".cad-tool").forEach(btn => {
    btn.addEventListener("click", () => {
      tool = btn.dataset.tool;
    });
  });

  canvas.addEventListener("mousedown", e => {
    drawing = true;
    const rect = canvas.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;
  });

  canvas.addEventListener("mouseup", e => {
    if (!drawing) return;
    drawing = false;
    const rect = canvas.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    ctx.beginPath();
    if (tool === "line") {
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
    } else if (tool === "rect") {
      ctx.rect(startX, startY, endX - startX, endY - startY);
    }
    ctx.stroke();
  });

  // Clear canvas
  widget.querySelector("#clear-canvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Open and close
  cadBtn.addEventListener("click", () => {
    widget.style.display = "flex";
    cadBtn.style.display = "none";
  });
  widget.querySelector("#close-cad").addEventListener("click", () => {
    widget.style.display = "none";
    cadBtn.style.display = "block";
  });
});


