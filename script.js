(function () {
  const config = window.XIAOWEN_SITE_CONFIG || {};
  const phone = config.phone || "13608940548";
  const wechatId = config.wechatId || "13608940548";

  document.querySelectorAll("[data-config-text]").forEach((node) => {
    const key = node.getAttribute("data-config-text");
    if (config[key]) node.textContent = config[key];
  });

  document.querySelectorAll("[data-config-src]").forEach((node) => {
    const key = node.getAttribute("data-config-src");
    if (config[key]) node.setAttribute("src", config[key]);
  });

  document.querySelectorAll("[data-config-href='phone']").forEach((node) => {
    node.setAttribute("href", "tel:" + phone);
  });

  document.querySelectorAll("[data-config-map]").forEach((node) => {
    if (config.mapUrl) node.setAttribute("href", config.mapUrl);
  });

  document.querySelectorAll("[data-copy-wechat]").forEach((button) => {
    button.addEventListener("click", async () => {
      const textNode = button.querySelector("small") || button;
      const originalText = textNode.textContent;
      try {
        await navigator.clipboard.writeText(wechatId);
        button.classList.add("copied");
        textNode.textContent = "已复制";
        window.setTimeout(() => {
          button.classList.remove("copied");
          textNode.textContent = originalText;
        }, 1800);
      } catch (error) {
        window.prompt("复制微信号", wechatId);
      }
    });
  });
})();
