const present_block = document.querySelector(".main_present-block");
const btn_nextSlide = document.querySelector(".block_switching-slides");

btn_nextSlide.innerHTML = '<img src="imgs/arrow-rigth.png" alt=""/>';

function updateImage() {
  const present_photo = document.querySelector(".block_present-photo");
  if (!present_photo) return;

  if (window.innerWidth < 870) {
    present_photo.src = present_block.classList.contains("two-slide")
      ? "imgs/present-photo-2_for-small-screen.jpg"
      : "imgs/present-photo-1_for-small-screen.jpg";
  } else {
    present_photo.src = present_block.classList.contains("two-slide")
      ? "imgs/present-photo-2.png"
      : "imgs/present-photo-1 1.jpg";
  }
}

window.addEventListener("resize", updateImage);

updateImage();

function toggleSlide() {
  if (!present_block.classList.contains("two-slide")) {
    present_block.innerHTML = `
        <div class="decoration-block"></div>
        <img src="imgs/present-photo-2.png" alt="" class="block_present-photo" />
        <div class="block_text-part">
          <h1><span>MooreMilk</span> для вашего кошеняти</h1>
          <p><span>MooreMilk</span> надає категорію корму для малих хвостиків.</p>
          <a class="text-part_navigate-to-menu" href="menu.html">
            <p>Перейти до меню</p>
            <span></span>
          </a>
        </div>
        <button class="block_switching-slides">
          <img src="imgs/arrow-left.png" alt=""/>
        </button>
    `;
    present_block.classList.add("two-slide");
    present_block.id = "for_kittens";
  } else {
    present_block.innerHTML = `
        <div class="decoration-block"></div>
        <img src="imgs/present-photo-1 1.jpg" alt="" class="block_present-photo" />
        <div class="block_text-part">
          <h1><span>MooreMilk</span> справжня спокуса</h1>
          <p>Коли мій котик хоче <span>MooreMilk</span>, я просто не можу йому відмовити.</p>
          <a class="text-part_navigate-to-menu" href="menu.html">
            <p>Перейти до меню</p>
            <span></span>
          </a>
        </div>
        <button class="block_switching-slides">
          <img src="imgs/arrow-rigth.png" alt=""/>
        </button>
    `;
    present_block.classList.remove("two-slide");
  }

  document.querySelector(".block_switching-slides").onclick = toggleSlide;

  updateImage();
}

btn_nextSlide.onclick = toggleSlide;

const block_aboutCompane = document.querySelector(".main_about-products");
const product_list = document.querySelector(".our-menu_products-list");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    const animation_imgs = block_aboutCompane.querySelectorAll(
      ".decoration-part_img-for-animation"
    );
    animation_imgs.forEach((img) => img.classList.add("show"));
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY <= 1300) {
    product_list.classList.add("show");
  }
});

const menu_burger = document.querySelector(".content_menu-burger");
menu_burger.onclick = () => {
  menu_burger.classList.toggle("open-menu");

  const block_with_content = document.querySelector(
    ".content_content-open-menu-burger"
  );
  block_with_content.classList.toggle("show");
};

const main_list_product = document.querySelector(".our-menu_products-list");

const prev_btn = document.createElement("button");
prev_btn.className = "prev_btn";
prev_btn.innerHTML = '<img src="imgs/arrow-left.png">';

const next_btn = document.createElement("button");
next_btn.className = "next_btn";
next_btn.innerHTML = '<img src="imgs/arrow-rigth.png">';

const product_card = [
  ...main_list_product.querySelectorAll(".products-list_product"),
];

function updateLayout() {
  function checkerID() {
    product_card.forEach((card) => {
      if (card && !card.hasAttribute("id")) {
        card.classList.add("hidden");
      }
    });
  }

  let width = window.innerWidth;

  if (width <= 670) {
    main_list_product.prepend(prev_btn);
    main_list_product.appendChild(next_btn);
    checkerID();
  }

  if (width <= 470) {
    if (prev_btn && next_btn && main_list_product.contains(prev_btn) && main_list_product.contains(next_btn)) {
      prev_btn.parentNode.removeChild(prev_btn);
      next_btn.parentNode.removeChild(next_btn);
      console.log('Confirm delete');
    }

    if (prev_btn && next_btn) {
      const block_for_swipeBtn = document.createElement("div");
      block_for_swipeBtn.classList.add("block_for_swipeBtn");

      block_for_swipeBtn.appendChild(prev_btn);
      block_for_swipeBtn.appendChild(next_btn);

      main_list_product.appendChild(block_for_swipeBtn);
      console.log('Breakpoint');
    }

    checkerID();
  }

  if (width > 670) {
    product_card.forEach((card) => {
      card.classList.remove("hidden");
    });

    if (prev_btn && prev_btn.parentNode) {
      prev_btn.parentNode.removeChild(prev_btn);
    }

    if (next_btn && next_btn.parentNode) {
      next_btn.parentNode.removeChild(next_btn);
    }
  }

  let index = 0;

  next_btn.onclick = () => {
    if (index < product_card.length - 1) {
      product_card[index].classList.add("hidden");
      product_card[index].removeAttribute("id");

      index++;

      product_card[index].classList.remove("hidden");
      product_card[index].setAttribute("id", "main");

      next_btn.classList.toggle("disabled", index === product_card.length - 1);
      prev_btn.classList.remove("disabled");
    }
  };

  prev_btn.classList.toggle("disabled", index === 0);

  prev_btn.onclick = () => {
    if (index > 0) {
      product_card[index].classList.add("hidden");
      product_card[index].removeAttribute("id");

      index--;

      product_card[index].classList.remove("hidden");
      product_card[index].setAttribute("id", "main");

      prev_btn.classList.toggle("disabled", index === 0);
      next_btn.classList.remove("disabled");
    }
  };
}

updateLayout();

window.addEventListener("resize", updateLayout);