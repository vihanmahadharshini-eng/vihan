console.log("Vihan Sync Center Loaded");

window.vihanSync = {
  version: "1.0",
  lastLoaded: new Date().toISOString()
};

function createSyncButton() {
  const btn = document.createElement("button");

  btn.id = "vihanSyncBtn";
  btn.innerText = "Sync Center";

  btn.style.position = "fixed";
  btn.style.bottom = "75px";
  btn.style.right = "20px";
  btn.style.zIndex = "9999";
  btn.style.padding = "10px 15px";
  btn.style.background = "#2563EB";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";

  btn.addEventListener("click", function() {
    alert("Vihan Sync Center Coming Soon");
  });

  document.body.appendChild(btn);
}

window.addEventListener("load", createSyncButton);
