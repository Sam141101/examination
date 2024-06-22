// let categoriesOption;
// let listObjects;
// let listFolders;
// let arrow;

// const textAddCategories = [
//   {
//     des: "folder",
//     icon: "assets/imgs/categories/add_category/Add Video.png",
//   },

//   {
//     des: "video",

//     icon: "assets/imgs/categories/add_category/Add Photo.png",
//   },

//   {
//     des: "video",

//     icon: "assets/imgs/categories/add_category/Add Narrative.png",
//   },

//   {
//     des: "video",

//     icon: "assets/imgs/categories/add_category/Add Blog.png",
//   },

//   {
//     des: "video",

//     icon: "assets/imgs/categories/add_category/ellipsis-vertical.png",
//   },
// ];

// const controlPanelOption = [
//   {
//     title: "Thêm danh mục",
//     icon: "assets/imgs/control_panel/add.png",
//   },

//   {
//     title: "Sắp xếp",
//     icon: "assets/imgs/control_panel/sort.png",
//   },

//   {
//     title: "Xem trước",
//     icon: "assets/imgs/control_panel/preview.png",
//   },
// ];

// const sideBarOption = [
//   {
//     img: "assets/imgs/sideBar/overview.png",
//     title: "Tổng quan",
//     link: "#",
//   },

//   {
//     img: "assets/imgs/sideBar/manage_permission_groups.png",
//     title: "Quản lý nhóm quyền",
//     link: "#",
//   },

//   {
//     img: "assets/imgs/sideBar/resource_management.png",
//     title: "Quản lý tài nguyên",
//     link: "#",
//   },

//   {
//     img: "assets/imgs/sideBar/hologram.png",
//     title: "Hologram",
//     link: "#",
//   },

//   {
//     img: "assets/imgs/sideBar/statistics.png",
//     title: "Thống kê lượt xem",
//     link: "#",
//   },
// ];

// fetch("./data/data.json") // Đường dẫn tới file data.json
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log("data", data);
//     categoriesOption = data.listCategories;
//     listObjects = data.listObjects;
//     listFolders = data.listFolder;
//   });

// console.log("data", listFolders);

let categoriesOption;
let listObjects;
let listFolders;
let arrow;

const textAddCategories = [
  {
    des: "folder",
    icon: "assets/imgs/categories/add_category/Add Video.png",
  },
  {
    des: "video",
    icon: "assets/imgs/categories/add_category/Add Photo.png",
  },
  {
    des: "video",
    icon: "assets/imgs/categories/add_category/Add Narrative.png",
  },
  {
    des: "video",
    icon: "assets/imgs/categories/add_category/Add Blog.png",
  },
  {
    des: "video",
    icon: "assets/imgs/categories/add_category/ellipsis-vertical.png",
  },
];

const controlPanelOption = [
  {
    title: "Thêm danh mục",
    icon: "assets/imgs/control_panel/add.png",
  },
  {
    title: "Sắp xếp",
    icon: "assets/imgs/control_panel/sort.png",
  },
  {
    title: "Xem trước",
    icon: "assets/imgs/control_panel/preview.png",
  },
];

const sideBarOption = [
  {
    img: "assets/imgs/sideBar/overview.png",
    title: "Tổng quan",
    link: "#",
  },
  {
    img: "assets/imgs/sideBar/manage_permission_groups.png",
    title: "Quản lý nhóm quyền",
    link: "#",
  },
  {
    img: "assets/imgs/sideBar/resource_management.png",
    title: "Quản lý tài nguyên",
    link: "#",
  },
  {
    img: "assets/imgs/sideBar/hologram.png",
    title: "Hologram",
    link: "#",
  },
  {
    img: "assets/imgs/sideBar/statistics.png",
    title: "Thống kê lượt xem",
    link: "#",
  },
];

fetch("./data/data.json") // Đường dẫn tới file data.json
  .then((response) => response.json())
  .then((data) => {
    categoriesOption = data.listCategories;
    listObjects = data.listObjects;
    listFolders = data.listFolder;
    console.log("data", listFolders); // Log inside the .then block

    showSideBarOption();
    showControlPanelOption();

    showFolders();
    showCategories();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// window.addEventListener("load", async function () {
//   await showSideBarOption();
//   await showControlPanelOption();

//   await showFolders();
//   await showCategories();
// });

async function showSideBarOption() {
  const itemList = document.querySelector(".side_bar-option");
  if (itemList) {
    sideBarOption.forEach(function (item) {
      // khởi tạo
      const li = document.createElement("li");
      li.classList.add("side_bar_option-item", "px_20px");
      const a = document.createElement("a");
      a.classList.add(
        "d-flex",
        "outline_none",
        "text_decoration_none",
        "black_color",
        // "font_size_14px",
        // "font-weight_500",
        "align-items-center",
      );
      a.href = item.link;

      const img = document.createElement("img");
      img.src = item.img;
      img.classList.add("w-35px");

      const span = document.createElement("span");
      span.textContent = item.title;
      span.classList.add("black_color", "font_size_14px", "pl_10px");

      // handle event
      li.addEventListener("click", function () {
        // Remove active class from all items
        const activeItem = document.querySelector(
          ".side_bar_option-item.active",
        );
        if (activeItem) {
          activeItem.classList.remove("active");
        }
        // Add active class to the clicked item
        li.classList.add("active");
      });

      // show interface
      a.appendChild(img);
      a.appendChild(span);

      li.appendChild(a);

      itemList.appendChild(li);
    });
  }
}

async function showControlPanelOption() {
  const itemList = document.querySelector(".control_panel-option");
  if (itemList) {
    controlPanelOption.forEach(function (item) {
      // khởi tạo
      const li = document.createElement("li");
      li.classList.add(
        "control_panel-item",
        // "px_20px",
        "d-flex",
        "align-items-center",
      );
      const img = document.createElement("img");
      img.src = item.icon;
      // img.classList.add("w-35px");

      const span = document.createElement("span");
      span.textContent = item.title;
      span.classList.add("black_color", "font_size_14px");

      // handle event
      li.addEventListener("click", function () {
        // Remove active class from all items
        const activeItem = document.querySelector(
          ".side_bar_option-item.active",
        );
        if (activeItem) {
          activeItem.classList.remove("active");
        }
        // Add active class to the clicked item
        li.classList.add("active");
      });

      // show interface
      li.appendChild(img);
      li.appendChild(span);

      itemList.appendChild(li);
    });
  }
}

function createImageElement(src, more) {
  const img = document.createElement("img");
  img.src = src;
  more && img.classList.add("more");
  return img;
}

function createSpanElement(text) {
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("black_color", "font_size_14px");
  return span;
}

function createInfoItem(imgSrc, text, isChildren) {
  const infoItem = document.createElement("div");
  infoItem.classList.add("d-flex", "align-items-center");

  if (isChildren) {
    arrow = document.createElement("img");
    arrow.src = "assets/imgs/categories/ArrowHead.png";
    arrow.classList.add("folder_arrow");
    infoItem.appendChild(arrow);
  }

  infoItem.appendChild(createImageElement(imgSrc));
  infoItem.appendChild(createSpanElement(text));
  return infoItem;
}

function createButtonOptions(optionType) {
  const btnOption = document.createElement("div");
  btnOption.classList.add("add_categories");

  textAddCategories.forEach(function (addItem) {
    if (optionType !== "not_folder_item" || addItem.des !== "folder") {
      const optionImg = createImageElement(
        addItem.icon,
        // addItem.des !== "dot" ? true : false,
      );
      btnOption.appendChild(optionImg);
    }
  });

  return btnOption;
}

function createMoreInfo() {
  const ul = document.createElement("ul");
  ul.classList.add("categories_list-item");

  const moreInfo = `
    <div class="d-flex align-items-center justify-content-between categories_frame-item">
      <div class="d-flex align-items-center">
        <img src="assets/imgs/categories/voice.png" /><span class="black_color font_size_14px">Thuyết minh 1</span>
      </div>
      <div class="add_categories">
        <img  src="assets/imgs/categories/add_category/ellipsis-vertical.png" />
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between categories_frame-item">
      <div class="d-flex align-items-center">
        <img src="assets/imgs/categories/blog.png" /><span class="black_color font_size_14px">Bài viết 1</span>
      </div>
      <div class="add_categories">
        <img   src="assets/imgs/categories/add_category/ellipsis-vertical.png" />
      </div>
    </div>
  `;
  ul.innerHTML = moreInfo;
  return ul;
}

function createListItem(item, optionType, isCategory, isChildren) {
  console.log("item", item);
  let temp;
  if (
    isCategory &&
    listObjects.some((object) => object.Parent_uuid === item.Parent_uuid)
  ) {
    temp = true;
  }

  const listItem = document.createElement("div");

  if (optionType !== "all") {
    listItem.classList.add("categories_list-item", "folder_item");
  }
  listItem.classList.add("folder_item");

  const frameItem = document.createElement("div");
  frameItem.classList.add(
    "d-flex",
    "align-items-center",
    "justify-content-between",
    "categories_frame-item",
  );

  // frameItem.addEventListener("click", function () {
  //   const activeItem = document.querySelector(
  //     ".side_bar_option-item.active",
  //   );
  //   if (activeItem) {
  //     activeItem.classList.remove("active");
  //   }
  //   // Add active class to the clicked item
  //   frameItem.classList.add("active");
  // });

  const infoItem = createInfoItem(
    item.icon,
    item.displayname || item.description,
    isChildren || temp,
  );
  const btnOption = createButtonOptions(optionType);

  frameItem.appendChild(infoItem);
  frameItem.appendChild(btnOption);

  listItem.appendChild(frameItem);

  if (
    isCategory &&
    listObjects.some((object) => object.Parent_uuid === item.Parent_uuid)
  ) {
    listItem.appendChild(createMoreInfo());
  }

  return listItem;
}

async function showFolders() {
  // console.log("check");
  console.log("check", listFolders);

  const itemList = document.querySelector(".categories");
  if (itemList) {
    if (listFolders) {
      console.log("check", listFolders);

      listFolders.forEach(function (item) {
        const folder = document.createElement("div");
        folder.classList.add("folder");

        const folderItem = createListItem(item, "all", false, true);

        const categoriesList = document.createElement("ul");
        categoriesList.classList.add("categories_list");

        folder.appendChild(folderItem);
        folder.appendChild(categoriesList);

        itemList.appendChild(folder);
      });
    }
  }
}

async function showCategories() {
  const itemList = document.querySelector(".categories_list");
  if (itemList) {
    categoriesOption.forEach(function (item) {
      const listItem = createListItem(item, "not_folder_item", true, false);
      itemList.appendChild(listItem);
    });
  }
}
