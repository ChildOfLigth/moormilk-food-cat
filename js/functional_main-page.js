const present_block = document.querySelector(".main_present-block");
const btn_nextSlide = document.querySelector(".block_switching-slides");

btn_nextSlide.innerHTML = '<img src="imgs/arrow-rigth.png" alt=""/>';

function updateImage() {
  const present_photo = document.querySelector(".block_present-photo");
  if (!present_photo) return;

  if (window.innerWidth < 870) {
    present_photo.src = present_block.classList.contains("two-slide")
      ? "/imgs/present-photo-2_for-small-screen.jpg"
      : "/imgs/present-photo-1_for-small-screen.jpeg";
  } else {
    present_photo.src = present_block.classList.contains("two-slide")
      ? "/imgs/present-photo-2.png"
      : "/imgs/present-photo-1 1.jpg";
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
  if (window.scrollY >= 1300) {
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
