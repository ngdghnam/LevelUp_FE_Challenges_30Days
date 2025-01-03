document.addEventListener("DOMContentLoaded", () => {
  const fileUpload = document.getElementById("file-upload");
  const fileInput = document.getElementById("file-input");
  const fileList = document.getElementById("file-list");
  const deleteModalContainer = document.getElementById(
    "delete-modal-container"
  );
  const browseButton = document.getElementById("browse");

  let files = [];
  let fileToDelete = null;
  const MAX_FILES = 6;

  browseButton.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", handleFiles);

  fileUpload.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileUpload.classList.add("bg-gray-200");
  });

  fileUpload.addEventListener("dragleave", () => {
    fileUpload.classList.remove("bg-gray-200");
  });

  fileUpload.addEventListener("drop", (e) => {
    e.preventDefault();
    fileUpload.classList.remove("bg-gray-200");
    handleDrop(e.dataTransfer.files);
  });

  function handleFiles() {
    const newFiles = [...fileInput.files];
    addFiles(newFiles);
  }

  function handleDrop(droppedFiles) {
    const newFiles = [...droppedFiles];
    addFiles(newFiles);
  }

  function addFiles(newFiles) {
    if (files.length + newFiles.length > MAX_FILES) {
      alert(`You can only upload a maximum of ${MAX_FILES} pictures.`);
      return;
    }

    files = files.concat(newFiles);
    renderFileList();
  }

  function renderFileList() {
    fileList.innerHTML = files
      .map(
        (file, index) => `
       <div class="flex items-center mb-2 p-2 bg-gray-50 border border-gray-500 rounded">
        <img src="${URL.createObjectURL(
          file
        )}" class="w-16 h-16 object-cover rounded mr-4" />
        <div class="relative flex flex-col w-full p-1">
            <div class="flex items-center">
                <p class="flex-1 text-xs text-gray-700">${file.name}</p>
                <img class="w-6 h-6" src="https://img.icons8.com/?size=100&id=63262&format=png&color=000000"
                    alt="check" />
                <button
                    class="flex w-5 h-5 ml-1 bg-red-200 text-xs font-semibold text-red-500 items-center justify-center rounded-full hover:bg-red-300 hover:scale-105 transition"
                    data-index="${index}">&#128465;
                </button>
            </div>
            <p class="flex-1 text-xs text-gray-500">
                ${formatFileSize(file.size)}
            </p>
            <div class="flex justify-between items-center w-full bg-transparent rounded overflow-hidden">
                <div class="progress-bar" style="width: 100%"></div>
                <span class="pl-2 text-xs">100%</span>
            </div>
        </div>
    </div>
      `
      )
      .join("");
  }

  fileList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      fileToDelete = e.target.dataset.index;
      showDeleteModal();
    }
  });

  function showDeleteModal() {
    const modal = document.createElement("div");
    modal.id = "delete-modal";
    modal.classList.add(
      "fixed",
      "inset-0",
      "bg-gray-600",
      "bg-opacity-50",
      "flex",
      "items-center",
      "justify-center"
    );
    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
          <p class="mb-4">Are you sure you want to delete the uploaded picture?</p>
          <div class="flex justify-end space-x-2">
            <button id="cancel-delete" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition">Cancel</button>
            <button id="confirm-delete" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>
          </div>
        </div>
      `;
    deleteModalContainer.appendChild(modal);

    document
      .getElementById("cancel-delete")
      .addEventListener("click", hideDeleteModal);
    document
      .getElementById("confirm-delete")
      .addEventListener("click", deleteFile);
  }

  function deleteFile() {
    if (fileToDelete !== null) {
      files.splice(fileToDelete, 1);
      renderFileList();
      hideDeleteModal();
    }
  }

  function hideDeleteModal() {
    const modal = document.getElementById("delete-modal");
    if (modal) {
      deleteModalContainer.removeChild(modal);
    }
  }
});

function formatFileSize(size) {
  if (size < 1024) {
    return `${size} B`;
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} KB`;
  } else {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  }
}
