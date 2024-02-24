import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'soon',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'moon',
      email: 'root@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  productData: [
    {
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops ',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      count: 400,
      numReviews: 10,
      rating: 5,
    },
    {
      title: 'Silicon Power 256GB SSD 3D NAND A55 SLC ',
      price: 109,
      description: '3D NAND flash are applied to deliver .',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
      count: 400,
      numReviews: 10,
      rating: 5,
    },
    {
      title:
        'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
      price: 114,
      description: 'Expand your PS4 gaming experience',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
      count: 400,
      numReviews: 10,
      rating: 5,
    },
    {
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 12.99,
      description: '95%Cotton,5%Spandex, Features:',
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
      count: 400,
      numReviews: 14,
      rating: 5,
    },
    {
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description: 'From our Legends Collection.',
      category: 'jewelery silver',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      cont: 400,
      numReviews: 10,
      rating: 5,
    },

    {
      title: 'Nike Slim shirt',

      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      count: 400,

      rating: 5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      title: 'Adidas Fit Shirt',

      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      count: 400,

      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      title: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      count: 400,

      rating: 5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      title: 'Adidas Fit Pant',

      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      count: 400,

      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
}
export default data
