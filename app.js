document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadBtn");
  const mainDownloadBtn = document.getElementById("mainDownloadBtn");

  // Replace this URL with your real APK download link
  const apkUrl = "https://example.com/TradeTally.apk";

  function triggerDownload() {
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "TradeTally.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadBtn.addEventListener("click", () => {
    alert("Your download will start shortly.");
    triggerDownload();
  });

  mainDownloadBtn.addEventListener("click", () => {
    alert("Your download will start shortly.");
    triggerDownload();
  });
});
