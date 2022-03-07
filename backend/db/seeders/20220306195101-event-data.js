'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Events', [
      {
        hostId: 1,
        categoryId: 7,
        title:'Soundgasm San Jose',
        description:'Have fun with us!! Dress Code: Sexy, Swaggy & Sophisticated.',
        imgUrl:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F237069949%2F232815302468%2F1%2Foriginal.20220226-014351?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C686%2C3648%2C1824&s=4661f4c6d9f68b214675563145875c33',
        price: 0,
        date: "2022-04-22",
        startTime:'13:30',
        endTime:'16:30',
        address: '32 South 3rd Street',
        city:'San Jose',
        state:'CA',
        zipCode:'95113',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 1,
        categoryId: 5,
        title: 'Official Nicky Jam Concert After Party',
        description: 'The best After Party ever! This event will sell out, hurry!!',
        imgUrl:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F239125839%2F202130416373%2F1%2Foriginal.20220301-221848?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C335%2C1024%2C512&s=cfb7b515ccb572835e98e82f268643ba',
        price: 15,
        date: '2022-06-09',
        startTime:'13:30',
        endTime:'16:30',
        address:'58 South First Street',
        city:'San Jose',
        state:'CA',
        zipCode:'95113',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 1,
        categoryId: 7,
        title: 'MaroonSix World Tour 2022',
        description: 'Get ready to high!',
        imgUrl:'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 300,
        date: '2022-07-08',
        startTime:'13:30',
        endTime:'16:30',
        address:'620 Atlantic Ave',
        city:'Brooklyn',
        state:'NY',
        zipCode:'11217',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 1,
        categoryId: 7,
        title: 'MaroonSix World Tour 2022',
        description: 'Get ready to high!',
        imgUrl:'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 500,
        date: '2022-08-05',
        startTime:'10:30',
        endTime:'12:30',
        address:'680 Valencia st',
        city:'San Francisco',
        state:'CA',
        zipCode:'94110',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 3,
        categoryId: 7,
        title: 'Sony Music 50 years Concert',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        imgUrl:'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 299,
        date: '2022-05-13',
        startTime:'13:30',
        endTime:'16:30',
        address:'848 Mission Street',
        city:'San Francisco',
        state:'CA',
        zipCode:'94103',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        categoryId: 1,
        title: 'Bay area Career Fair',
        description: 'Join us for this exciting career fair! Meet face to face with recruiters and HR managers from local and Fortune 500 companies to learn about open career opportunities. Dress to impress and please bring an updated resume. 100% free event for job seekers to attend.',
        imgUrl:'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        price: 5,
        date: '2022-04-25',
        startTime:'09:30',
        endTime:'12:30',
        address:'848 Mission Street',
        city:'San Francisco',
        state:'CA',
        zipCode:'94103',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 3,
        categoryId: 3,
        title: 'SF Gay Pride 2022!',
        description: 'Bearracuda returns to San Francisco after almost a year away! We\'re bringing you THE Friday night kick-off to Pride with DJs David Harness & Paul Goodyear on the main floor and Bearracuda LA resident DJ, Ryan Jones, in the Loft.Sexy decor, clothes check down to your undies and 1000 guys await you in San Francisco for PRIDE!',
        imgUrl:'https://images.unsplash.com/photo-1605816789011-ec492509c31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        price: 5,
        date: '2022-06-24',
        startTime:'09:30',
        endTime:'21:30',
        address:'161 Erie Street',
        city:'San Francisco',
        state:'CA',
        zipCode:'94103',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        categoryId: 4,
        title: '2022 LA Beer Fest',
        description: 'The 14 annual LA Beer Festival finally returns! The event will feature over 80 breweries, 200 beers, LA\'s best food trucks, live music, and much more!The 2022 LA Beer Festival will take place at LA Center Studios Studios from noon to 3pm and 5pm to 8pm. GA tickets include unlimited beer tastings with food sold separately. Connoisseur\'s Ticket ($90) are limited and offer attendees exclusive air conditioned bathrooms, an indoor/outdoor event deck overlooking the event featuring limited beers/one-offs not available to general admission, festival T shirt, and commemorative glassware.',
        imgUrl:'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 90,
        date: '2022-07-30',
        startTime:'12:00',
        endTime:'20:00',
        address:'1201 W 5th St',
        city:'Los Angeles',
        state:'CA',
        zipCode:'90017',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 3,
        categoryId: 4,
        title: 'FoodieLand Night Market',
        description: 'FoodieLand is the perfect outdoor food event for everyone. A must-attend for foodies, this exclusive festival in the heart of Pasadena is inspired by the Night Markets of Asia. Bring your friends together for late-night sounds, tastes, and scents where you can experience a street food festival this summer in the greater Los Angeles area.',
        imgUrl:'https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        price: 3,
        date: '2022-06-30',
        startTime:'15:00',
        endTime:'22:00',
        address:'1001 Rose Bowl Drive',
        city:'Pasadena',
        state:'CA',
        zipCode:'91103',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 3,
        categoryId: 4,
        title: '2022 LONG BEACH SEAFOOD FESTIVAL',
        description: 'The Annual Seafood Festival is happening again! Seafood lovers from all over California eagerly await the Long Beach Seafood Festival.  This event celebrates the region\'s delicious seafood and unique recipes from local chefs to the finest restaurants throughout Los Angeles and Orange County. This is an all age outdoor event alongside the Lighthouse in Long Beach, California with a stunning view of the ocean and the Queen Mary.',
        imgUrl:'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 20,
        date: '2022-08-01',
        startTime:'11:00',
        endTime:'19:30',
        address:'200 Aquarium Way',
        city:'Long Beach',
        state:'CA',
        zipCode:'90802',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        categoryId: 4,
        title: 'Travel the CA Coast - Wine & Food Pairing',
        description: 'Join us for a culinary adventure as our in-house sommelier, Kaiy Smith-Biesman, aka THEsommmom, guide you through California with an amazing food and wine pairing evening! We will start in Southern California and make our way up the Coast. As you enjoy 6 wines, your palate will discover new flavors and pairings that will blow your mind.',
        imgUrl:'https://images.unsplash.com/photo-1558346489-19413928158b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 109,
        date: '2022-07-25',
        startTime:'19:00',
        endTime:'21:30',
        address:'474 South Arroyo Parkway',
        city:'Pasadena',
        state:'CA',
        zipCode:'91105',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        categoryId: 9,
        title: 'Outdoor Social Distancing Yoga',
        description: 'Join us for a culinary adventure as our in-house sommelier, Kaiy Smith-Biesman, aka THEsommmom, guide you through California with an amazing food and wine pairing evening! We will start in Southern California and make our way up the Coast. As you enjoy 6 wines, your palate will discover new flavors and pairings that will blow your mind.',
        imgUrl:'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 15,
        date: '2022-07-25',
        startTime:'08:00',
        endTime:'11:30',
        address:'Santa Cruz Beach',
        city:'Santa Cruz',
        state:'CA',
        zipCode:'95060',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        categoryId: 9,
        title: 'FHS to Fairwood Park Bike Ride',
        description: 'We will meet outside of the South East side of the Main Building at Fremont High School and ride to Fairwood Park. Along the way we will highlight the transportation challenges FHS students in North Sunnyvale face while biking to and from school. We will also share what is being done to improve the situation. ',
        imgUrl:'https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 0,
        date: '2022-06-17',
        startTime:'15:00',
        endTime:'18:30',
        address:'575 West Fremont Avenue',
        city:'Sunnyvale',
        state:'CA',
        zipCode:'94087',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        categoryId: 6,
        title: 'HellaSecret Outdoor Comedy & Cocktail Night 2022',
        description: 'We\'ll take over a new venue and you\'ll get notified of the secret location. This HellaSecret Comedy Show takes place at an new parklet in San Francisco with built-in "surround" seating plus a spotlight for the comics and a stage.',
        imgUrl:'https://images.unsplash.com/photo-1571456331030-a1369bc759dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 0,
        date: '2022-06-17',
        startTime:'17:00',
        endTime:'21:30',
        address:'473 Broadway',
        city:'San Francisco',
        state:'CA',
        zipCode:'94133',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        categoryId: 6,
        title: 'Dinner & Outdoor Movie: Legend',
        description: 'Movie will start at 7:00pm. Rotating Gourmet Food Trucks on site, plus Local Craft Beer, Signature Cocktails & Popcorn! Full Table service with servers & touch-less menus!',
        imgUrl:'https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
        price: 10,
        date: '2022-08-13',
        startTime:'17:00',
        endTime:'21:30',
        address:'2112 North Main Street',
        city:'Walnut Creek',
        state:'CA',
        zipCode:'94596',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        categoryId: 2,
        title: 'Fashion Fantasia: Charity Fashion Show Event',
        description: 'Charity fashion show event in the heart of San Francisco to benefit children & adults with disabilities, sponsored by Osha Thai & the IAMA',
        imgUrl:'https://images.unsplash.com/flagged/photo-1568988039441-11f295d74d89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 400,
        date: '2022-08-13',
        startTime:'13:00',
        endTime:'16:30',
        address:'1023 Market Street',
        city:'San Francisco',
        state:'CA',
        zipCode:'94103',
        createdAt: new Date(),
        updatedAt: new Date(),
      },


    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Events', null, {});

  }
};
