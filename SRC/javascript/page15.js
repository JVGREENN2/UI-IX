    const form = document.querySelector("form"),
    fileInput = document.querySelector(".file-input"),
    progressArea = document.querySelector(".progress-area"),
    uploadedArea = document.querySelector(".uploaded-area");

    form.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput.onchange = ({ target }) => {
      let file = target.files[0];
      if (file) {
        let fileName = file.name;
        if (fileName.length >= 12) {
          let splitName = fileName.split('.');
          fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }
        readFile(file, fileName);
      }
    }

    function readFile(file, name) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target.result;

        let progressHTML = `<li class="row">
                              <i class="fas fa-file-alt"></i>
                              <div class="content">
                                <div class="details">
                                  <span class="name">${name} • LOADED</span>
                                </div>
                                <div class="progress-bar">
                                  <div class="progress" style="width: 100%"></div>
                                </div>
                              </div>
                            </li>`;
        uploadedArea.classList.add("onprogress");
        progressArea.innerHTML = progressHTML;

        setTimeout(() => {
          progressArea.innerHTML = "";
          let uploadedHTML = `<li class="row">
                                <div class="content upload">
                                  <i class="fas fa-file-alt"></i>
                                  <div class="details">
                                    <span class="name">${name} • READ COMPLETED</span>
                                  </div>
                                </div>
                                <i class="fas fa-check"></i>
                              </li>`;
          uploadedArea.classList.remove("onprogress");
          uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
        }, 1000);
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const fileLoaded = Math.floor((event.loaded / event.total) * 100);
          let progressHTML = `<li class="row">
                                <i class="fas fa-file-alt"></i>
                                <div class="content">
                                  <div class="details">
                                    <span class="name">${name} • READING</span>
                                    <span class="percent">${fileLoaded}%</span>
                                  </div>
                                  <div class="progress-bar">
                                    <div class="progress" style="width: ${fileLoaded}%"></div>
                                  </div>
                                </div>
                              </li>`;
          uploadedArea.classList.add("onprogress");
          progressArea.innerHTML = progressHTML;
        }
      };

      reader.readAsDataURL(file);
    }
