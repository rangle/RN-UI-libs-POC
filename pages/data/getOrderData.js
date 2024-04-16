export default function getOrderData() {
  return {
    storeLogo: "https://reactnative.dev/img/tiny_logo.png",
    pickup: "Wed Nov 20, 8am - 9pm",
    orderNumber: "2000023452435",
    order: [
      {
        img: "https://reactnative.dev/img/tiny_logo.png",
        title: "Fish market seafood",
        expiry: "Nov 26",
        costEach: 2.5,
        amount: 2,
      },
      {
        img: "https://reactnative.dev/img/tiny_logo.png",
        title: "Chips",
        expiry: "Dec 24",
        costEach: 1.35,
        amount: 1,
      },
      {
        img: "https://reactnative.dev/img/tiny_logo.png",
        title: "Onions",
        expiry: "Jun 2",
        costEach: 0.35,
        amount: 8,
      },
    ],
  };
}
