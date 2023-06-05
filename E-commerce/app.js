const wrapperEl = document.querySelector(".sliderWapper")
const menuItemEl = document.querySelectorAll(".menuItem")
const currentProductImg = document.querySelector(".productImgs")
const currentProductName = document.querySelector(".productName")
const currentProductprice = document.querySelector(".productprice")
const currentProductDics = document.querySelector(".productDics")
const currentColour = document.querySelectorAll(".colour")
const currentSizes = document.querySelectorAll(".size")

const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 119,
    discription: "The Nike Air Force 1 Mid '07 is everything you know best: '80s construction, smooth leather and nothing-but-net style. Plus, we're taking it up a notch with a padded, mid-cut collar with an adjustable strap.",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "BLAZER",
    price: 99,
    discription: "Praised by many for its enduring look and feel, the wardrobe staple hits refresh with the Nike Blazer Mid '77 Jumbo.Harnessing the old-school look you love, it now has an elastic heel with corduroy-like texture and large pull tabs for easy on and off.The oversized Swoosh design and jumbo laces add a fun twist.",
    colors: [
      {
        code: "green",
        img: "./img/blazer2.png",
      },
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
    ],
  },
  {
    id: 3,
    title: "CRATER",
    price: 199,
    discription: 'When it fits this good and looks this great, it does not need a Swoosh. From its Crater rubber outsole to its woven, checkerboard textile detailing to its stretchy, "hug your foot" fabric and Nike Air cushioning, the Huarache is bragging rights for your feet.',
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 4,
    title: "HIPPIE",
    price: 99,
    discription: "Space Hippie is an exploratory footwear collection inspired by life on Mars where materials are scarce and there is no resupply mission. Created from scraps, or “space junk,” Space Hippie is the result of sustainable practices meeting radical design.",
    colors: [
      {
        code: "black",
        img: "./img/hippie2.png",
      },
      {
        code: "gray",
        img: "./img/hippie.png",
      },
    ],
  },
  {
    id: 5,
    title: "AIR JORDAN",
    price: 299,
    discription: "This iteration of the AJ1 re-imagines MJ's first signature shoe with a fresh mix of colours. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
];

let chossenProduct = products[0] 

menuItemEl.forEach((item,index)=>{
item.addEventListener("click",()=>{
    wrapperEl.style.transform = `translateX(${-100*index}vw)`
    chossenProduct= products[index]
    currentProductName.textContent = chossenProduct.title
    currentProductprice.textContent = "$" + chossenProduct.price
    currentProductDics.textContent = chossenProduct.discription
    currentProductImg.src = chossenProduct.colors[0].img;
    currentColour.forEach((colour,index)=>{
      colour.style.backgroundColor = chossenProduct.colors[index].code
    })
})
})

currentColour.forEach((colour,index)=>{
  colour.addEventListener("click",()=>{
    currentProductImg.src = chossenProduct.colors[index].img
  })
})

currentSizes.forEach((size,index)=>{
size.addEventListener("click",()=>{
  currentSizes.forEach((size)=>{
    size.style.backgroundColor = "white"
    size.style.color = "black"
  })
  size.style.backgroundColor = "black"
  size.style.color = "white"
})
})


const productButton = document.querySelector(".productBuy")
const Payment = document.querySelector(".payment")
const Close = document.querySelector(".closeTab")
Payment.style.display = "none"
productButton.addEventListener("click",()=>{
  Payment.style.display = "flex"
})
Close.addEventListener("click",()=>{
  Payment.style.display = "none"
})