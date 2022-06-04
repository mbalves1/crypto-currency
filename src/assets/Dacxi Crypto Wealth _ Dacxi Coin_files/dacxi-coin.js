$(document).ready(function () {
  // Banner
  gsap
    .timeline()
    .to(".dacxi-coin.banner h1", {
      duration: 2,
      text: "Dacxi Coin. <br>The cryptocurrency of the Dacxi Chain.",
    })
    .from(".dacxi-coin.banner p", { opacity: 0, duration: 1 }, "-=1");

  // Coin
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".dacxi-coin.coin",
        start: "top center",
      },
    })
    .from(".dacxi-coin.coin .left", {
      opacity: 0,
      duration: 0.5,
    })
    .from(".dacxi-coin.coin .right .international", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    })
    .from(".dacxi-coin.coin .right .blockchain", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    })
    .from(".dacxi-coin.coin .right .node", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    })
    .from(".dacxi-coin.coin .right .exchange", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    })
    .from(".dacxi-coin.coin .right .ecommerce", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    });
});
