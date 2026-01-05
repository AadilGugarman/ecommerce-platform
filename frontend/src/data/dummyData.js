

export const fashionProducts = [...Array(20)].map((_, i) => ({
  title: `Fashion Item ${i + 1}`,
  price: `$${(i + 1) * 10}`,
  image: `https://picsum.photos/200/200?random=${i + 1}`,
}));

export const electronicsProducts = [...Array(20)].map((_, i) => ({
  title: `Electronics Item ${i + 1}`,
  price: `$${(i + 1) * 15}`,
  image: `https://picsum.photos/200/200?random=${i + 30}`,
}));

export const beautyProducts = [...Array(20)].map((_, i) => ({
  title: `Beauty Item ${i + 1}`,
  price: `$${(i + 1) * 12}`,
  image: `https://picsum.photos/200/200?random=${i + 50}`,
}));
