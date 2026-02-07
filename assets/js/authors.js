document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-meta .authors").forEach((authorsEl) => {
    const showN = parseInt(authorsEl.dataset.show || "3", 10);
    const nodes = Array.from(authorsEl.querySelectorAll(":scope > .author"));
    if (nodes.length <= showN) return;

    const visible = nodes.slice(0, showN);
    const hidden  = nodes.slice(showN);
    const hiddenCount = hidden.length;

    authorsEl.innerHTML = "";

    // visible authors + real commas
    visible.forEach((n, i) => {
      authorsEl.appendChild(n);
      if (i < visible.length - 1) authorsEl.appendChild(document.createTextNode(", "));
    });

    // ", and "
    authorsEl.appendChild(document.createTextNode(", and "));

    // toggle
    const toggle = document.createElement("span");
    toggle.className = "authors-toggle dash-underline";
    toggle.textContent = `${hiddenCount} more authors`;
    authorsEl.appendChild(toggle);

    // expanded container (inline flow)
    const expanded = document.createElement("span");
    expanded.style.display = "none";
    authorsEl.appendChild(expanded);

    function buildExpandedSequential() {
      expanded.innerHTML = "";

      hidden.forEach((node, idx) => {
        const mask = document.createElement("span");
        mask.className = "reveal-mask";
        // 如果你要“完全显示完才下一个”，把 460 改成 420+一点点缓冲
        mask.style.animationDelay = `${idx * 160}ms`;

        // ✅ 关键：把逗号也放进 mask 内部 -> 逗号和名字同步出现
        if (idx > 0) {
          mask.appendChild(document.createTextNode(", "));
        }

        const name = document.createElement("span");
        name.className = "author-more dash-underline";
        name.innerHTML = node.innerHTML;

        name.addEventListener("click", (e) => {
          e.preventDefault();
          close();
        });

        mask.appendChild(name);
        expanded.appendChild(mask);
      });
    }

    function open() {
      toggle.style.display = "none";
      expanded.style.display = "inline";
      buildExpandedSequential();
    }

    function close() {
      expanded.style.display = "none";
      expanded.innerHTML = "";
      toggle.style.display = "inline";
    }

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      open();
    });
  });
});
