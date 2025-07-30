
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


/////////////////////////////////////////////////////////////////////////////
//two feature with canva 400x400

// document.addEventListener("DOMContentLoaded", function () {
//   // === Floating Button (center-right) ===
//   const cadBtn = document.createElement("button");
//   cadBtn.id = "open-cad-widget";
//   cadBtn.innerHTML = `<i class="fas fa-house-user"></i>`;
//   Object.assign(cadBtn.style, {
//     position: "fixed",
//     top: "50%",
//     right: "0",
//     transform: "translateY(-50%)",
//     width: "50px",
//     height: "50px",
//     borderRadius: "10px 0 0 10px",
//     backgroundColor: "#0065c9",
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
//     width: "400px",
//     height: "400px",
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
//     <canvas id="cad-canvas" width="400" height="400" style="cursor: crosshair;"></canvas>
//   `;
//   document.body.appendChild(widget);

//   // === Drawing Logic ===
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

//////////////////////////////////////////////////////////////////////
//4 feature 

// <!-- Advanced Mini CAD Widget -->

document.addEventListener("DOMContentLoaded", function () {
  const GRID_SIZE = 20;

  // === Floating Button ===
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
      <button data-tool="line">Line</button>
      <button data-tool="rect">Rect</button>
      <button data-tool="freehand">Freehand</button>
      <button id="clear-canvas">Clear</button>
    </div>
    <canvas id="cad-canvas" width="400" height="400" style="cursor: crosshair; background: #f8f9fa;"></canvas>
  `;
  document.body.appendChild(widget);

  // === Canvas Logic ===
  const canvas = widget.querySelector("#cad-canvas");
  const ctx = canvas.getContext("2d");
  let tool = "line";
  let isDrawing = false;
  let startX = 0, startY = 0;

  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let dragStart = null;

  // === Draw Grid ===
  function drawGrid() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 0.5;

    const step = GRID_SIZE * scale;

    for (let x = -offsetX % step; x < canvas.width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = -offsetY % step; y < canvas.height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  // === Transform Mouse Coords to Canvas Coords ===
  function getTransformedCoords(x, y) {
    return {
      x: (x - offsetX) / scale,
      y: (y - offsetY) / scale
    };
  }

  function snap(val) {
    return Math.round(val / GRID_SIZE) * GRID_SIZE;
  }

  function drawShape(tool, x1, y1, x2, y2) {
    ctx.save();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);
    ctx.beginPath();
    if (tool === "line") {
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
    } else if (tool === "rect") {
      ctx.rect(x1, y1, x2 - x1, y2 - y1);
    }
    ctx.stroke();
    ctx.restore();
  }

  widget.querySelectorAll("button[data-tool]").forEach(btn =>
    btn.addEventListener("click", () => tool = btn.dataset.tool)
  );

  canvas.addEventListener("mousedown", e => {
    const { x, y } = getTransformedCoords(e.offsetX, e.offsetY);

    if (e.button === 1 || tool === "pan") {
      dragStart = { x: e.clientX, y: e.clientY };
      canvas.style.cursor = "grab";
      return;
    }

    isDrawing = true;
    startX = snap(x);
    startY = snap(y);

    if (tool === "freehand") {
      ctx.beginPath();
      ctx.moveTo(startX * scale + offsetX, startY * scale + offsetY);
    }
  });

  canvas.addEventListener("mousemove", e => {
    if (dragStart) {
      offsetX += e.clientX - dragStart.x;
      offsetY += e.clientY - dragStart.y;
      dragStart = { x: e.clientX, y: e.clientY };
      drawGrid();
      return;
    }

    if (isDrawing && tool === "freehand") {
      const { x, y } = getTransformedCoords(e.offsetX, e.offsetY);
      ctx.lineTo(snap(x) * scale + offsetX, snap(y) * scale + offsetY);
      ctx.stroke();
    }
  });

  canvas.addEventListener("mouseup", e => {
    if (dragStart) {
      dragStart = null;
      canvas.style.cursor = "crosshair";
      return;
    }

    if (!isDrawing) return;
    isDrawing = false;

    const { x, y } = getTransformedCoords(e.offsetX, e.offsetY);
    const endX = snap(x);
    const endY = snap(y);

    if (tool === "line" || tool === "rect") {
      drawShape(tool, startX, startY, endX, endY);
    }
  });

  // === Zoom on Scroll ===
  canvas.addEventListener("wheel", e => {
    e.preventDefault();
    const scaleAmount = -e.deltaY * 0.001;
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    const worldX = (mouseX - offsetX) / scale;
    const worldY = (mouseY - offsetY) / scale;

    scale = Math.max(0.2, Math.min(5, scale + scaleAmount));
    offsetX = mouseX - worldX * scale;
    offsetY = mouseY - worldY * scale;

    drawGrid();
  });

  // === Clear Canvas ===
  widget.querySelector("#clear-canvas").addEventListener("click", () => {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    offsetX = offsetY = 0;
    scale = 1;
    drawGrid();
  });

  // === Open/Close Widget ===
  cadBtn.addEventListener("click", () => {
    widget.style.display = "flex";
    cadBtn.style.display = "none";
    drawGrid();
  });

  widget.querySelector("#close-cad").addEventListener("click", () => {
    widget.style.display = "none";
    cadBtn.style.display = "block";
  });
});


