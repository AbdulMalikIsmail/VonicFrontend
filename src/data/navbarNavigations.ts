const navbarNavigations = [
  {
    title: "Home",
    child: [
      {
        title: "Super Store",
        url: "/",
        badge: "Pro",
      },
      {
        title: "Grocery",
        url: "/home-2",
        badge: "Pro",
      },
      {
        title: "Niche Market 1",
        url: "/home-3",
        badge: "Pro",
      },
      {
        title: "Niche Market 2",
        url: "/home-4",
      },
    ],
  },
  {
    title: "Pages",
    child: [
      {
        title: "Sale Page",
        badge: "Pro",
        child: [
          {
            title: "Version 1",
            url: "/sale-page-1",
          },
          {
            title: "Version 2",
            url: "/sale-page-2",
          },
        ],
      },
      {
        title: "Vendor",
        badge: "Pro",
        child: [
          {
            title: "All vendors",
            url: "/shops",
          },
          {
            title: "Vendor store",
            url: "/shop/34324",
          },
        ],
      },
      {
        title: "Shop",
        child: [
          {
            title: "Search product",
            url: "/product/search/mobile phone",
          },
          {
            title: "Single product",
            url: "/product/34324321",
          },
          {
            title: "Cart",
            url: "/cart",
          },
          {
            title: "Checkout",
            url: "/checkout",
          },
          {
            title: "Alternative Checkout",
            url: "/checkout-alternative",
            badge: "Pro",
          },
        ],
      },
    ],
  },
  {
    title: "User Account",
    child: [
      {
        title: "Orders",
        child: [
          {
            title: "Order List",
            url: "/orders",
          },
          {
            title: "Order Details",
            url: "/orders/5452423",
          },
        ],
      },
      {
        title: "Profile",
        child: [
          {
            title: "View Profile",
            url: "/profile",
          },
          {
            title: "Edit Profile",
            url: "/profile/edit",
          },
        ],
      },
      {
        title: "Address",
        child: [
          {
            title: "Address List",
            url: "/address",
          },
          {
            title: "Add Address",
            url: "/address/512474",
          },
        ],
      },
      {
        title: "Support tickets",
        badge: "Pro",
        child: [
          {
            title: "All tickets",
            url: "/support-tickets",
          },
          {
            title: "Ticket details",
            url: "/support-tickets/512474",
          },
        ],
      },
      {
        title: "Wishlist",
        url: "/wish-list",
      },
    ],
  },
  {
    title: "Vendor Account",
    badge: "Pro",
    child: [
      {
        title: "Dashboard",
        url: "/vendor/dashboard",
        badge: "Pro",
      },
      {
        title: "Products",
        badge: "Pro",
        child: [
          {
            title: "All products",
            url: "/vendor/products",
          },
          {
            title: "Add/Edit product",
            url: "/vendor/products/248104",
          },
        ],
      },
      {
        title: "Orders",
        badge: "Pro",
        child: [
          {
            title: "All orders",
            url: "/vendor/orders",
          },
          {
            title: "Order details",
            url: "/vendor/orders/248104",
          },
        ],
      },
      {
        title: "Profile",
        badge: "Pro",
        url: "/vendor/account-settings",
      },
    ],
  },
  {
    title: "Track My Orders",
    url: "/orders",
    badge: "Pro",
  },
  {
    title: "Back to Demos",
    url: "/landing",
  },
  // {
  //   title: "Documentation",
  //   url:
  //     "https://docs.google.com/document/d/13Bnyugzcty75hzi9GdbVh01YV75a7AhViZws0qGf5yo/edit?usp=sharing",
  //   extLink: true,
  // },
];

export default navbarNavigations;
