const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;
    console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 4;
loadMoreBtn.onclick= () =>{
  let boxes=[...document.querySelectorAll('.container .row .box')];
  for(var i=currentItem; i < currentItem + 4; i++){
    boxes[i].style.display='inline-block';
  }
  currentItem+=4;

}

