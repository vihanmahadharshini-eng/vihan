console.log("Vihan Sync Center Loaded");

window.vihanSync = {
    version: "1.0",
    lastLoaded: new Date().toISOString()
};

function createSyncButton() {
    const btn = document.createElement("button");

    btn.id = "vihanSyncBtn";
    btn.textContent = "🔄 Sync Center";

    btn.style.position = "fixed";
    btn.style.bottom = "90px";
    btn.style.right = "20px";
    btn.style.zIndex = "999";
    btn.style.padding = "12px 16px";
    btn.style.borderRadius = "12px";
    btn.style.border = "none";
    btn.style.cursor = "pointer";

    btn.onclick = () => {
        alert("Vihan Sync Center Coming Soon");
    };

    document.body.appendChild(btn);
}

window.addEventListener("load", createSyncButton):
