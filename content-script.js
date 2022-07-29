const execDownload = () => {
  setTimeout(() => {
    const fDownload = document.getElementById("f_download");
    if (fDownload) {
      fDownload.remove();
    }
    const downlloadSvg = (e) => {
      e.stopPropagation(); //阻止事件冒泡
      const svgEle = document.querySelector(
        "#detail .detail__editor__icon-wrapper .detail__editor__icon-holder"
      );
      var blob = new Blob([svgEle.innerHTML], {
        type: "image/svg+xml"
      });

      const timestamp = new Date().valueOf();

      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "svg_" + timestamp; // 这里填保存成的文件名
      a.click();
      a.remove();
    };

    const downloadWrap = document.querySelector("#detail .row.mg-none");
    let html = document.createElement("div");
    html.innerHTML = `<button class='bj-button mg-left-lv1' id='f_download'> <i class="icon icon--md icon--download"></i><span>下载svg</span></button>`;
    html.onclick = downlloadSvg;

    downloadWrap.appendChild(html);
  }, 0);
};

const init = () => {
  setTimeout(() => {
    const editIcon = document.getElementById("detail_edit_icon");
    if (editIcon) {
      editIcon.onclick = execDownload;
    }
    init();
  }, 1000);
};

init();
