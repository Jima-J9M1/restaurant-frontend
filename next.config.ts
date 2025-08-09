import type { NextConfig } from "next";
/*
[
    {
        "createdAt": "2025-06-26T12:47:21.614Z",
        "name": "abdi",
        "avatar": "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&w=600&h=400&fit=crop",
        "rating": "5",
        "open": false,
        "logo": "https://foodwagen.netlify.app/",
        "Price": "0.00",
        "id": "22",
        "price": "232"
    },
    {
        "createdAt": "2025-06-29T23:56:34.443Z",
        "name": "your food",
        "avatar": "https://media.istockphoto.com/id/2166737641/photo/food-and-drink-ready-to-eat-for-breakfast-in-restaurant-fried-egg-on-sandwich-with-cappuccino.jpg?s=1024x1024&w=is&k=20&c=LYiJFiHn6M51pBKxMqaWgQ_C8dPKC0KDVgxzHvI6iVI=",
        "rating": "3933",
        "open": true,
        "logo": "https://t3.ftcdn.net/jpg/01/82/15/16/240_F_182151684_KDNq3UrX0MAlrw0eW4TarQ9CT30nzp0A.jpg",
        "Price": "2",
        "id": "28",
        "restaurant_name": "dodo"
    },
    {
        "createdAt": "2025-06-30T05:44:50.702Z",
        "name": "test 3",
        "avatar": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2024/12/foodiesfeed-2024-12-15-085326.png",
        "rating": "306",
        "open": true,
        "logo": "https://t3.ftcdn.net/jpg/01/82/15/16/240_F_182151684_KDNq3UrX0MAlrw0eW4TarQ9CT30nzp0A.jpg",
        "Price": "5",
        "id": "29",
        "restaurant_name": "new resturant"
    },
    {
        "createdAt": "2025-06-29T16:10:22.983Z",
        "name": "coffee",
        "avatar": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2024/12/foodiesfeed-2024-12-15-085326.png",
        "rating": "946",
        "open": true,
        "logo": "https://t3.ftcdn.net/jpg/01/82/15/16/240_F_182151684_KDNq3UrX0MAlrw0eW4TarQ9CT30nzp0A.jpg",
        "Price": "5",
        "id": "30",
        "restaurant_name": "new cafe"
    },
    {
        "createdAt": "2025-06-29T17:04:11.110Z",
        "name": "ne",
        "avatar": "",
        "rating": "98776",
        "open": true,
        "logo": "",
        "Price": "5",
        "id": "31",
        "restaurant_name": ""
    },
    {
        "createdAt": "2025-06-29T13:32:57.482Z",
        "name": "ne",
        "avatar": "",
        "rating": "92784",
        "open": true,
        "logo": "",
        "Price": "5",
        "id": "32",
        "restaurant_name": ""
    },
    {
        "createdAt": "2025-06-29T14:11:46.899Z",
        "name": "nn",
        "avatar": "",
        "rating": "48960",
        "open": true,
        "logo": "",
        "Price": "5",
        "id": "33",
        "restaurant_name": ""
    },
    {
        "createdAt": "2025-06-30T00:25:14.322Z",
        "name": "new food",
        "avatar": "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2024/12/foodiesfeed-2024-12-15-085326.png",
        "rating": "108",
        "open": true,
        "logo": "https://t3.ftcdn.net/jpg/01/82/15/16/240_F_182151684_KDNq3UrX0MAlrw0eW4TarQ9CT30nzp0A.jpg",
        "Price": "5",
        "id": "34",
        "restaurant_name": "new  resturant"
    }
]
*/
const nextConfig: NextConfig = {
  images:{
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.pexels.com",
    },
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "t3.ftcdn.net",
    },
    {
      protocol: "https",
      hostname: "www.foodiesfeed.com",
    },
    {
      protocol: "https",
      hostname: "media.istockphoto.com",
    },
    {
      protocol: "https",
      hostname: "foodwagen.netlify.app",
    },
    {
      protocol: "https",
      hostname: "picsum.photos",
    },
    {
      protocol: "https",
      hostname: "cdn.jsdelivr.net",
    },
    {
      protocol: "https",
      hostname: "192.168.1.100",
    },
  ],
}
  /* config options here */
};

export default nextConfig;
