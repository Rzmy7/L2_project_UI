import React from "react";
import ReviewItem from "./ReviewItem";
import "./ReviewList.css";

const ReviewList = () => {
  // Dummy Data matching your screenshot
  const reviews = [
  {
    "id": 1,
    "rating": 4,
    "userName": "Prem",
    "text": "Screens and Water cans. The screens in the room could have been little darker, since it is connecting with another room, privacy is a bit worry. Also a water can could be kept in the property, to take water whenever necessary. Great view, beach, good price all great.",
    "sentiment": "Neutral",
    "categories": [
      "Privacy"
    ],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 2,
    "rating": 4,
    "userName": "Shanuki",
    "text": "Very quiet and relaxed. Enjoyed the property during a two-day stay for work purposes. Private and comfortable, with all basic needs met. Enjoyed the beachfront and easy access to the main town, and the property’s lovely dog Charlie who spent time with us. The spacious, large room with enormous four-poster bed was a treat. The staff/caretaker was not always around for inquiries and support. There was no kitchen for preparing food.",
    "sentiment": "Positive",
    "categories": [
      "Comfort",
      "Location",
      "Staff"
    ],
    "source": "Booking.com",
    "date": "Jun 01, 2025",
    "status": "Pending"
  },
  {
    "id": 3,
    "rating": 4,
    "userName": "Tedesco",
    "text": "Very quiet and peaceful place, except on the second night had some people who stayed at the hotel who played loud music. Very kind owner, swimming pool open 24hours, clean bathroom. It’s not so close to the main beach it takes 10/15mins walk.",
    "sentiment": "Neutral",
    "categories": [
      "Location",
      "Noise",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Jul 01, 2025",
    "status": "Pending"
  },
  {
    "id": 4,
    "rating": 4,
    "userName": "Kerry",
    "text": "Very good. Very friendly staff. Lovely pool. Great beach access.",
    "sentiment": "Positive",
    "categories": [
      "Staff",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Jun 01, 2025",
    "status": "Pending"
  },
  {
    "id": 5,
    "rating": 4,
    "userName": "Mohit",
    "text": "Good place if you are coming with a bunch of friends. Rooms were very big and spacious, bathroom has a bathtub. Location although was infront of beach but good cafes are not near.",
    "sentiment": "Neutral",
    "categories": [
      "Comfort",
      "Location"
    ],
    "source": "Booking.com",
    "date": "Jun 01, 2025",
    "status": "Pending"
  },
  {
    "id": 6,
    "rating": 4,
    "userName": "Kate",
    "text": "Very functional and peaceful. Location was good. The house and grounds were pleasant and there was nobody else staying so it was very quiet. Breakfast was left out for us before we came down and was covered in flies so we gave it a miss.",
    "sentiment": "Neutral",
    "categories": [
      "Location",
      "Food"
    ],
    "source": "Booking.com",
    "date": "Mar 01, 2025",
    "status": "Pending"
  },
  {
    "id": 7,
    "rating": 5,
    "userName": "Ruchith",
    "text": "Superb. Amazing pool with a nice sea view. Great place for a family vacation",
    "sentiment": "Positive",
    "categories": [
      "Facilities",
      "Location"
    ],
    "source": "Booking.com",
    "date": "Feb 01, 2025",
    "status": "Pending"
  },
  {
    "id": 8,
    "rating": 4,
    "userName": "SSampath",
    "text": "Peaceful stay. The room was clean and comfortable, and the staff were courteous and obliging. We definitely felt it was good value for money. Pool should be maintained in a better manner, and the garden area would benefit with better lighting in the night. While the staff are very helpful, it would be beneficial in the long run to give them more training to improve.",
    "sentiment": "Neutral",
    "categories": [
      "Cleanliness",
      "Staff",
      "Value"
    ],
    "source": "Booking.com",
    "date": "Jan 01, 2025",
    "status": "Pending"
  },
  {
    "id": 9,
    "rating": 4,
    "userName": "Rafael",
    "text": "Very good. The property is beach front, nice swimming pool, bedroom is big. We stayed for 4 nights and the breakfast was the same every day. Only change is how they prepare the eggs (omelet or scrambled). So we even decided to skip the breakfast on 3rd day. On the last day they served us moldy bread and we had to ask for it to be changed.",
    "sentiment": "Negative",
    "categories": [
      "Food",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Jan 01, 2025",
    "status": "Pending"
  },
  {
    "id": 10,
    "rating": 4,
    "userName": "AAmy",
    "text": "Great hotel with lovely views and staff. The hotel was lovely - very modern, very secure, and right on the beach. The room was large and modern so everything you'd hope for. We told the hotel it was my partners 30th birthday and they decorated the room lovely, with balloons and a cake - and even bought him a gift! It was so lovely and so much more than they needed to do. They were also very approachable with back and fourth on Whatsapp. It felt like it was our own villa as there's only a few rooms in the hotel. The pool was warm and had great access to the warm waves on the beach in front. It started raining when we had an evening swim and the garden filled with large snails which was very cool! The room size was good with good furniture on the balcony, and a nice size bathroom. The parking area was very secure with a gate and door also. Great location for surfers as you can walk to the surfing stands on the beach from the front of the hotel (go right at the beach). There was a lot of noise both mornings which woke us up early - one morning it sounded like checkouts, but another sounded like drilling which wasn't great. Our air con broke during our stay which although late at night, the team came to mop our room and try to solve. Wasn't too much of a bother as we checked out the next day, but they were very responsive when reported. The bathroom could be improved with a shower curtain (water went everywhere) and a sink plug. The team were always there but don't leave your belongings near the beach as when I left my sliders at the edge of the path from the hotel, they were stolen. So make sure you leave things by the pool and the team can keep an eye on it. It would therefore be nicer if the path was cleared of weeds from the hotel to the beach so you don't need sandals. The hotel is a little further away from bars so you'd have to walk on a dark main road for food, so best to have some transport.",
    "sentiment": "Neutral",
    "categories": [
      "Staff",
      "Location",
      "Noise"
    ],
    "source": "Booking.com",
    "date": "Nov 01, 2024",
    "status": "Pending"
  },
  {
    "id": 11,
    "rating": 4,
    "userName": "Mark",
    "text": "Peaceful stay at the quiet end of the bay. Directly on the beach with a pool. No breakfast",
    "sentiment": "Neutral",
    "categories": [
      "Location",
      "Food"
    ],
    "source": "Booking.com",
    "date": "Nov 01, 2024",
    "status": "Pending"
  },
  {
    "id": 12,
    "rating": 4,
    "userName": "Maximilian",
    "text": "We really enjoyed our stay! Very private, great location right at the beach. Nice pool and a little bit more quiet than in the city center. It’s a little walk at the beach for surfing because the main breaks are towards the city center.",
    "sentiment": "Positive",
    "categories": [
      "Privacy",
      "Location",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Oct 01, 2024",
    "status": "Pending"
  },
  {
    "id": 13,
    "rating": 5,
    "userName": "Zoltán",
    "text": "Friendly boutique hotel. A cozy place with 3 rooms right at the beach with a nice pool. We occupied all 3 rooms, so we had our own pool. Sangeeth and his collegues we very kind and helpful. The beach is not managed well at the area of the hotel, so one have to walk a bit to find beach bar and restaurant.",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Staff",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Aug 01, 2024",
    "status": "Pending"
  },
  {
    "id": 14,
    "rating": 4,
    "userName": "Saxby",
    "text": "Relaxed beach side stay. The staff were very kind and friendly enquiring what we would like to eat and what time we would like our food served. The rooms were clean and the location was very peaceful. The food was prepared fresh and was very tasty. The staff took the initiative to prepare a very nice whole fish for us without being asked. Since it is a collection of 3 rooms it is not crowded at all and feels like your own hotel by the beach. The location on the water meant we could fall asleep and wake up to the relaxing sound of waves crashing on the beach. And a relaxing stroll on the beach on the door step. Although the food options seemed very open I think it may benefit to provide some suggested menus to choose from. We weren't sure what was a reasonable expectation to request as we didn't want to be too demanding. That being said - the food we were served was very good.",
    "sentiment": "Positive",
    "categories": [
      "Staff",
      "Cleanliness",
      "Location"
    ],
    "source": "Booking.com",
    "date": "Mar 01, 2024",
    "status": "Pending"
  },
  {
    "id": 15,
    "rating": 5,
    "userName": "Christian",
    "text": "Superb. Good stay only 3 Rooms. Quite Place",
    "sentiment": "Positive",
    "categories": [
      "Privacy",
      "Location"
    ],
    "source": "Booking.com",
    "date": "Dec 01, 2023",
    "status": "Pending"
  },
  {
    "id": 16,
    "rating": 5,
    "userName": "Henry",
    "text": "Lovely cute home stay. Very clean , location is amazing and bed was really comfortable compared to anything else we have stayed in so far. nothing it was perfect",
    "sentiment": "Positive",
    "categories": [
      "Cleanliness",
      "Location",
      "Comfort"
    ],
    "source": "Booking.com",
    "date": "Nov 01, 2025",
    "status": "Pending"
  },
  {
    "id": 17,
    "rating": 2,
    "userName": "AAimee",
    "text": "Very disappointed. Good location, right on the beach & you can easily walk up the beach to the main bits of Weligama but it will take a good 20mins or so depending on your pace. Beautiful view of the sea from the bedroom. Bed was comfy. Breakfast was nice. Had early check in confirmed by the property for 11am, we arrived at 12pm to find our room wasn't ready. We could leave our luggage but there was no toilet to change or wee. Went for lunch & came back at 1:30pm to find our room still wasn't ready (despite normal check in being from 1pm). We'd booked half board but only once we were checked in did they tell us this wasn't available but that they \"would do a discount\". Turns out they wanted to take off only 10k rupee from the price but the actual price difference was more like 18k! Eventually we agreed on 16K & he had the cheek to say he'd given \"a big discount\"!!! There's no cupboard space for clothes etc just 1 small side table & a small luggage table thing. There's no fridge in the room. Everything is falling apart. The bath towel had holes in it. The bedside table knobs were coming off, some of the pool surround was missing, the pool stairs were coming loose, the outdoor shower breaking, just generally needs some really good TLC. Could be a really lovely property with a bit of TLC, add in cupboards & a fridge & better communication.",
    "sentiment": "Negative",
    "categories": [
      "Location",
      "Comfort",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Oct 01, 2025",
    "status": "Pending"
  },
  {
    "id": 18,
    "rating": 5,
    "userName": "Martin",
    "text": "Exceptional. Great sea view, clean and comfortable rooms. Friendly staff. Kind helpful manager sangeeth. Good breakfast available. Nothing",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Cleanliness",
      "Staff"
    ],
    "source": "Booking.com",
    "date": "Oct 01, 2025",
    "status": "Pending"
  },
  {
    "id": 19,
    "rating": 5,
    "userName": "Vaknin",
    "text": "Exceptional. Everything good",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Oct 01, 2025",
    "status": "Pending"
  },
  {
    "id": 20,
    "rating": 5,
    "userName": "Sanzone",
    "text": "Exceptional. Nice Place",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 21,
    "rating": 5,
    "userName": "Pasan",
    "text": "A perfect beach house. It's a beautiful beach house by the surfing beach of Weligama. Everything was super perfect about this 3-bedroom villa. The staff was very friendly and helpful. You can walk to the beach anytime you want, and it's like 20 meters. Also, it's very calm and quiet, so this is the place for anyone who would like to stay by the beach and away from the noise. Nothing",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Staff",
      "Noise"
    ],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 22,
    "rating": 5,
    "userName": "Sanzone",
    "text": "Exceptional. Great view and nice location. So quiet. Friendly staff and helpfull",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Staff",
      "Noise"
    ],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 23,
    "rating": 5,
    "userName": "Anthony",
    "text": "Great place to stay! Located on the beachfront just 2 km from the Weligama railway station. I had one of two first story rooms with a veranda overlooking the ocean - bliss! The staff were great as were the generous-sized breakfasts. There was a double bed and a single bed 🛌 in the room, a kettle, cups and saucers plus tea bags and instant coffee. The bathroom was huge. I’d described be 360 Surf as five star backpacker accommodation or a budget boutique hotel. There’s a swimming pool as well as the beach. I’d happily stay there again and recommend it to those travelling on a more limited budget. The only criticism I’d make is the state of some parts of the building where there’s some mould (I think) in my room and a couple of holes in the concrete floor to n the common area of the first floor",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Staff",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 24,
    "rating": 5,
    "userName": "SSamri",
    "text": "Overall, a great place to stay if you’re looking for comfort, views, and convenience on the south coast! The location is absolutely superb! The hotel offers stunning views of the beach, with a lovely pool and a small, peaceful garden that add to the relaxing atmosphere. It’s also perfectly located—just a short distance from Weligama town, Mirissa, Matara, and several other must-visit spots in the area. The staff were very accommodating and welcoming, making the stay even more enjoyable. The rooms, bathrooms, pool, garden, and all common areas are well maintained and clean. The environment is very quiet and peaceful, ideal for relaxing. The balcony view of the sea was a highlight—just beautiful. Highly recommend this place for anyone looking to unwind and enjoy the south coast of Sri Lanka! One thing to note: there are quite a few mosquitoes in the hotel area during the evening, so it’s a good idea to bring repellent",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Staff",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Aug 01, 2025",
    "status": "Pending"
  },
  {
    "id": 25,
    "rating": 1,
    "userName": "Shriram",
    "text": "Bad. The beach view. The entire property is in shambles.",
    "sentiment": "Negative",
    "categories": [
      "Location",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Aug 01, 2025",
    "status": "Pending"
  },
  {
    "id": 26,
    "rating": 5,
    "userName": "JJonathan",
    "text": "Exceptional. Friendly staff",
    "sentiment": "Positive",
    "categories": [
      "Staff"
    ],
    "source": "Booking.com",
    "date": "Jun 01, 2025",
    "status": "Pending"
  },
  {
    "id": 27,
    "rating": 3,
    "userName": "D",
    "text": "Pleasant. Location. Service, foods , staff, facilities..",
    "sentiment": "Negative",
    "categories": [
      "Location",
      "Staff",
      "Food"
    ],
    "source": "Booking.com",
    "date": "Apr 01, 2025",
    "status": "Pending"
  },
  {
    "id": 28,
    "rating": 5,
    "userName": "Juan",
    "text": "Lovely place. Really good place to be =)",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Apr 01, 2025",
    "status": "Pending"
  },
  {
    "id": 29,
    "rating": 5,
    "userName": "Ricard",
    "text": "Really really nice house. Good price / qualuty",
    "sentiment": "Positive",
    "categories": [
      "Value"
    ],
    "source": "Booking.com",
    "date": "Apr 01, 2025",
    "status": "Pending"
  },
  {
    "id": 30,
    "rating": 5,
    "userName": "Konstantin",
    "text": "Secluded and peaceful. Absolutely amazing location, very secluded and right on the beach. We've used the beach as a main avenue to get to the restaurants, surf spots and around. That allowed to avoid using roads altogether. The villa itself has just 3 rooms and feels very cozy. It is overall well maintained, thanks to Sashi and Sandu. Guys are doing great job, always happy to help if you just ask. Clean outdoor pool with parasols end sunbeds. Every morning we've been served with a healthy and satisfying breakfasts, which included: 1) main plate - eggs, sausages, spicy potato wedges, cabbage salad, cucumber, tomato. 2) Mix fruit plate - mango, papaya, banana 3) freshly squeezed watermelon juice 4) Tea and coffee We stayed for 12 nights. Our room was well sized, comfy mattress, has AC, kettle/cups and tea/coffee. We were on a 1st floor with a huge balcony, which was perfect for a morning yoga or pre-surf stretch and pop-ups. Our main goal for the trip was to surf, do yoga and eat healthy and that all we got for 120% Despite the great effort from the guys looking after villa, there is still some advice for the owner to refurbish showers, balcony doors, repair ventilator. And buy some new towels and linen.",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Facilities",
      "Food"
    ],
    "source": "Booking.com",
    "date": "Jan 01, 2025",
    "status": "Pending"
  },
  {
    "id": 31,
    "rating": 5,
    "userName": "CCatharina",
    "text": "Exceptional. beautiful place verry quiet",
    "sentiment": "Positive",
    "categories": [
      "Noise",
      "Location"
    ],
    "source": "Booking.com",
    "date": "Nov 01, 2024",
    "status": "Pending"
  },
  {
    "id": 32,
    "rating": 2,
    "userName": "Dmitriy",
    "text": "Unsanitary and poorly maintained property with dirty rooms and bed bugs ! Quiet ocean front location right on the beach. Large room with terrace, pool, and ocean views. The bed had bed bugs and my back was destroyed the next day! Older property that needs a deep cleaning, especially the bathrooms. Fan was covered in black grime. Window ledges haven't been cleaned in ages... Worst part was the bedding and the pillows/mattress- the pillows on the bed were absolutely disgusting and the extra pillows left in the room even worse. Had to ask for clean pillows and the staff provided brand-new ones. Sheets were ok, but not super clean. Only one bath towel and one hand towel left in the room that was clearly booked for 2. Internet is metered and they had already run out of their GB allowance when I got there. The next day they added more GBs- why not have sufficient/unlimited Internet being a guest house of all things?? Basically, they need to get professional management and cleaning for this property to fix all these glaring issues. Bed bugs and gross pillows are unacceptable.",
    "sentiment": "Negative",
    "categories": [
      "Cleanliness",
      "Facilities",
      "Staff"
    ],
    "source": "Booking.com",
    "date": "Nov 01, 2024",
    "status": "Pending"
  },
  {
    "id": 33,
    "rating": 5,
    "userName": "Aleksandr",
    "text": "Excellent hotel on the ocean shore. It's in a good location in front of the ocean. There's a lot of space (Large foyer. Only three rooms in the huge mansion.) There's fresh air (no unpleasant smells). The staff is friendly and ready to help (laundry service was provided). There is a comfortable toilet, hot water, and plenty of sockets to charge all your devices.",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Staff",
      "Comfort"
    ],
    "source": "Booking.com",
    "date": "Oct 01, 2024",
    "status": "Pending"
  },
  {
    "id": 34,
    "rating": 5,
    "userName": "CCatharina",
    "text": "Exceptional. Beautiful place and privet villa... Good breakfast, clean pool and garden. ocean view i love it, highly recommended",
    "sentiment": "Positive",
    "categories": [
      "Food",
      "Facilities",
      "Location"
    ],
    "source": "Booking.com",
    "date": "Mar 01, 2024",
    "status": "Pending"
  },
  {
    "id": 35,
    "rating": 5,
    "userName": "JJustin",
    "text": "Exceptional. Nice place👍❤️❤️❤️",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Feb 01, 2024",
    "status": "Pending"
  },
  {
    "id": 36,
    "rating": 3,
    "userName": "AAnonymous",
    "text": "Pleasant. Place was good and clean. Rooms were comfortable with all the mentioned facilities. However, can do a lot more with customer care. Customer care, bushes covering the beach view",
    "sentiment": "Negative",
    "categories": [
      "Cleanliness",
      "Comfort",
      "Staff"
    ],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 37,
    "rating": 4,
    "userName": "Vigara",
    "text": "Hotel básico en primera línea de playa. La ubicación y las vistas, en primera línea de playa. Desayuno bueno y completo. Baño grande. Edificio y habitaciones simples. No en perfecto estado.",
    "sentiment": "Neutral",
    "categories": [
      "Location",
      "Food",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Nov 01, 2025",
    "status": "Pending"
  },
  {
    "id": 38,
    "rating": 4,
    "userName": "Or",
    "text": "Tranquilidad y bien situado. La habitación y la ubicación. La puerta de salida de la habitación al jardín, no se podía cerrar con llave desde fuera . Falta ofrecer café o té en el desayuno . Faltaba jabón y champú en el baño. Son pequeños detalles que faltan para la excelencia.",
    "sentiment": "Neutral",
    "categories": [
      "Comfort",
      "Location",
      "Food"
    ],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 39,
    "rating": 5,
    "userName": "Natalia",
    "text": "Alojamiento perfecto para disfrutar y descansar! La habitación muy amplia y las vistas y terraza inmejorable! La piscina genial también! Todo correcto.",
    "sentiment": "Positive",
    "categories": [
      "Comfort",
      "Location",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 40,
    "rating": 5,
    "userName": "Andre",
    "text": "Tolle Lage direkt am Strand. Lage direkt am Strand. Schöne geräumige und helle Zimmer. Etwas wenig Ablagemöglichkeiten. Betten sind sehr bequem. Die Unterkunft liegt etwas weit entfernt vom Zentrum und den Lokalen. Der Weg über die Straße zu Fuß zieht sich. Aber mit einem schönen Strandspaziergang ist man in 15-20 Minuten auch im Zentrum von Weligama. Der Pool usw. bräuchten eine kleine Renovierung. Das Personal teilte uns mit, dass man nach der Saison diese Sachen in Angriff nehmen möchte.",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Comfort",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Aug 01, 2025",
    "status": "Pending"
  },
  {
    "id": 41,
    "rating": 5,
    "userName": "Anonym",
    "text": "Superb. Top Lage, direkt am Strand, etwas abseits, daher sehr ruhig! Das Frühstück war ok, aber eher wenig und nicht das tolle typische SriLanka Frühstück, das wir sonst bekommen haben.",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Noise",
      "Food"
    ],
    "source": "Booking.com",
    "date": "Aug 01, 2025",
    "status": "Pending"
  },
  {
    "id": 42,
    "rating": 4,
    "userName": "BBelén",
    "text": "Privacidad frente al mar. Pocas habitaciones en la villa, por lo tanto más privacidad. Estás frente al mar y la piscina está muy bien. Apenas tuve contacto con el personal, por la noche no había nada cerca si iba a pie y lo poco que había alrededor estaba cerrado.",
    "sentiment": "Neutral",
    "categories": [
      "Privacy",
      "Location",
      "Staff"
    ],
    "source": "Booking.com",
    "date": "Aug 01, 2025",
    "status": "Pending"
  },
  {
    "id": 43,
    "rating": 4,
    "userName": "Alina",
    "text": "Good. Персонал. Цена",
    "sentiment": "Neutral",
    "categories": [
      "Staff",
      "Value"
    ],
    "source": "Booking.com",
    "date": "May 01, 2025",
    "status": "Pending"
  },
  {
    "id": 44,
    "rating": 4,
    "userName": "Alina",
    "text": "Good. Персонал. Цена, басейн",
    "sentiment": "Neutral",
    "categories": [
      "Staff",
      "Value",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "May 01, 2025",
    "status": "Pending"
  },
  {
    "id": 45,
    "rating": 4,
    "userName": "Alina",
    "text": "Good. Хорошее расположение, чисто, отзывчевый персонал. Цена сильно завышена, невероятно перехлорированый бассейн",
    "sentiment": "Negative",
    "categories": [
      "Location",
      "Cleanliness",
      "Staff"
    ],
    "source": "Booking.com",
    "date": "May 01, 2025",
    "status": "Pending"
  },
  {
    "id": 46,
    "rating": 4,
    "userName": "LLeire",
    "text": "Very good. Buena ubicación y las habitaciones bien equipadas. Podrían invertir en poner mejor los baños. No pudimos disfrutar de la piscina porque estaba sucia pero ya se estaban ocupando del problema.",
    "sentiment": "Neutral",
    "categories": [
      "Location",
      "Comfort",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Mar 01, 2025",
    "status": "Pending"
  },
  {
    "id": 47,
    "rating": 5,
    "userName": "Marc",
    "text": "Bon séjour. emplacement, au calme, peu de monde, face à la plage, petit dej bon. manque d' information car pas de check in",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Noise",
      "Food"
    ],
    "source": "Booking.com",
    "date": "Feb 01, 2025",
    "status": "Pending"
  },
  {
    "id": 48,
    "rating": 4,
    "userName": "Katharina",
    "text": "Very good. Das Hotel war direkt am Strand und gut gelegen. Das Zimmer war sehr groß, mit tollem Balkon inklusive Meerblick und auch das Badezimmer war super. Leider war die Bettwäsche nicht sauber und hatte Flecken.",
    "sentiment": "Neutral",
    "categories": [
      "Location",
      "Comfort",
      "Cleanliness"
    ],
    "source": "Booking.com",
    "date": "Feb 01, 2025",
    "status": "Pending"
  },
  {
    "id": 49,
    "rating": 4,
    "userName": "Natalie",
    "text": "Perfekt für einen kurzen Aufenthalt. Zimmer wie auf den Bildern zu sehen. Wir waren nur zum übernachten dort und kamen abends an. Im Pool waren wir nicht.. fanden wir auch nicht einladend, ebenfalls die Liegen. Wie in den Bewertungen schon oft erwähnt, ist der Ausblick aufs Meer sehr schön. Trinkwasser gab es leider nicht- war bisher das erste Hotel, wo im Zimmer keine Flasche zur Verfügung gestellt wurde. Keine Kartenzahlung möglich! Im Großen und ganzen war’s perfekt zum übernachten :)",
    "sentiment": "Positive",
    "categories": [
      "Comfort",
      "Facilities",
      "Location"
    ],
    "source": "Booking.com",
    "date": "Dec 01, 2024",
    "status": "Pending"
  },
  {
    "id": 50,
    "rating": 4,
    "userName": "BBirgitte",
    "text": "Fantastisk personale og beliggenhed. Simpel overnatning og god værdi for pengene særligt pga placering. Fantastisk venligt og serviceminded personale. Fantastisk beliggenhed. Stedet manglede vedligeholdelse",
    "sentiment": "Positive",
    "categories": [
      "Staff",
      "Location",
      "Value"
    ],
    "source": "Booking.com",
    "date": "Dec 01, 2024",
    "status": "Pending"
  },
  {
    "id": 51,
    "rating": 5,
    "userName": "Martin",
    "text": "Super Lage zu angemessenen Preis. Super Lage direkt am Strand. Sauberer, jedoch recht kleiner Pool. In der Unterkunft gibt es lediglich drei Zimmer, weshalb man (wie wir) das Glück haben kann, die gesamte Villa (nebst Personal) für sich zu haben. Restaurants / Cafés alle fußläufig oder mit TukTuk erreichbar. Gut ausgestattetes Zimmer, welches jedoch etwas sauberer hätte sein können (leichte Flecken auf der Wäsche). Parkplätze sind auf dem Grundstück verfügbar. Super Strand vor der Tür, welcher sich auch zum Surfen eignet. Balkontür ist nicht mit dem Zimmerschlüssel bedienbar (Mechanismus anscheinend kaputt). Eine längere Dusche flutet das halbe Bad. Grundstück ist nicht vollständig umzäunt, sodass Jedermann zu jeder Zeit daraufgehen kann.",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Value",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Sep 01, 2024",
    "status": "Pending"
  },
  {
    "id": 52,
    "rating": 5,
    "userName": "VValentina",
    "text": "Exceptional. camera grandissima \nAria condizionata e ventilatore \ncolazione buonissima \nvista mare \nstaff cortese. un po lontano dal centro e con poche attività attorno ( ma siamo venuti in bassa stagione quindi é normale che non ci sia niente di aperto)",
    "sentiment": "Positive",
    "categories": [
      "Comfort",
      "Food",
      "Staff"
    ],
    "source": "Booking.com",
    "date": "Oct 01, 2025",
    "status": "Pending"
  },
  {
    "id": 53,
    "rating": 5,
    "userName": "Adam",
    "text": "Bardzo polecam to miejsce do pobytu w Weligamie, super lokalizacja i bardzo miła obsługa. Bardzo profesjonalna uśmiechnięta obsługa, czystość pokoju i piękny widok",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Staff",
      "Cleanliness"
    ],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 54,
    "rating": 5,
    "userName": "Anonym",
    "text": "Exceptional. Sehr schöner Ort , tolle Lage, alles sehr sauber! Toller Pool!",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Cleanliness",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Aug 01, 2025",
    "status": "Pending"
  },
  {
    "id": 55,
    "rating": 3,
    "userName": "Elke",
    "text": "Pleasant. Privatsphäre, Meerblick, Pool, großes Bett, perfekte etwas ruhigere Lage",
    "sentiment": "Positive",
    "categories": [
      "Privacy",
      "Location",
      "Comfort"
    ],
    "source": "Booking.com",
    "date": "Jun 01, 2025",
    "status": "Pending"
  },
  {
    "id": 56,
    "rating": 2,
    "userName": "JJanine",
    "text": "Perfekte Lage aber kein Charme. Keine Liebe. Große kolonial Möbel. Kein Kontakt.",
    "sentiment": "Negative",
    "categories": [
      "Location",
      "Staff"
    ],
    "source": "Booking.com",
    "date": "May 01, 2025",
    "status": "Pending"
  },
  {
    "id": 57,
    "rating": 5,
    "userName": "CCathrine",
    "text": "Sehr schöne Strandvilla mit nur 3 Zimmern. Tolle Lage und Ausblick aufs Meer von den Zimmern im 1.Stock. Nur 3 Zimmer von denen wir die beiden im 1. Stock hatten. Sehr groß, hell und stilvoll eingerichtet. Schöner, sauberer Strand direkt vor der Unterkunft - gut für Surfanfänger mit Surfschulen auch gleich dort. War nicht günstig.",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Comfort",
      "Cleanliness"
    ],
    "source": "Booking.com",
    "date": "Apr 01, 2025",
    "status": "Pending"
  },
  {
    "id": 58,
    "rating": 2,
    "userName": "GGuillaume",
    "text": "Disappointing. La vue et l’emplacement de l’hôtel : parfait ! Par contre piscine non fonctionnelle, fuite d’eau dans une chambre, pas d’explication à l’arrivée… C’est un airbnb et non un hôtel.",
    "sentiment": "Negative",
    "categories": [
      "Location",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Oct 01, 2024",
    "status": "Pending"
  },
  {
    "id": 59,
    "rating": 5,
    "userName": "MMarta",
    "text": "Perfetto lo consiglio vivamente!!! La posizione…sulla spiaggia e lontana dai rumori della strada!!!!",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Noise"
    ],
    "source": "Booking.com",
    "date": "Apr 01, 2024",
    "status": "Pending"
  },
  {
    "id": 60,
    "rating": 5,
    "userName": "Aidar",
    "text": "Exceptional. Все прошло отлично, персонал внимательный и учтительный. Рядом пляж полупустой, есть бассейн.",
    "sentiment": "Positive",
    "categories": [
      "Staff",
      "Location",
      "Facilities"
    ],
    "source": "Booking.com",
    "date": "Mar 01, 2024",
    "status": "Pending"
  },
  {
    "id": 61,
    "rating": 5,
    "userName": "Sandra",
    "text": "Herrlich. Fantastische Lage, wie eine Privatvilla, da nur ganz wenige Zimmer;-)",
    "sentiment": "Positive",
    "categories": [
      "Location",
      "Privacy"
    ],
    "source": "Booking.com",
    "date": "Feb 01, 2024",
    "status": "Pending"
  },
  {
    "id": 62,
    "rating": 3,
    "userName": "Alina",
    "text": "Pleasant. Хороший гостевой дом прям на пляже, уютно, чистенько, просторно. Бронировали номер с балконом на втором этаже, по приезду выяснилось что на втором этаже все занято, хотя в описании номера был именно указан балкон, заселили на первый этаж, что очень огорчило, так как хотели с видом на океан. Персонал потупил, сделал небольшую скидку и развел руками",
    "sentiment": "Negative",
    "categories": [
      "Location",
      "Comfort",
      "Staff"
    ],
    "source": "Booking.com",
    "date": "Jan 01, 2024",
    "status": "Pending"
  },
  {
    "id": 63,
    "rating": 4,
    "userName": "DDulani",
    "text": "Very good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Oct 01, 2025",
    "status": "Pending"
  },
  {
    "id": 64,
    "rating": 4,
    "userName": "OOssman",
    "text": "Good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 65,
    "rating": 4,
    "userName": "Elbio",
    "text": "Very good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Aug 01, 2025",
    "status": "Pending"
  },
  {
    "id": 66,
    "rating": 4,
    "userName": "Anna",
    "text": "Very good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Jun 01, 2025",
    "status": "Pending"
  },
  {
    "id": 67,
    "rating": 4,
    "userName": "ZZerin",
    "text": "Good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Apr 01, 2025",
    "status": "Pending"
  },
  {
    "id": 68,
    "rating": 5,
    "userName": "PPurrvaja",
    "text": "Superb. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Mar 01, 2025",
    "status": "Pending"
  },
  {
    "id": 69,
    "rating": 5,
    "userName": "Thameera",
    "text": "Superb. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Feb 01, 2025",
    "status": "Pending"
  },
  {
    "id": 70,
    "rating": 4,
    "userName": "KKelly",
    "text": "Good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Feb 01, 2025",
    "status": "Pending"
  },
  {
    "id": 71,
    "rating": 4,
    "userName": "Sherley",
    "text": "Good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Aug 01, 2024",
    "status": "Pending"
  },
  {
    "id": 72,
    "rating": 5,
    "userName": "Thayaparan",
    "text": "Superb. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Apr 01, 2024",
    "status": "Pending"
  },
  {
    "id": 73,
    "rating": 4,
    "userName": "BBenitah",
    "text": "Good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Feb 01, 2024",
    "status": "Pending"
  },
  {
    "id": 74,
    "rating": 3,
    "userName": "AAshan",
    "text": "Pleasant. There are no comments available for this review",
    "sentiment": "Negative",
    "categories": [],
    "source": "Booking.com",
    "date": "Jun 01, 2025",
    "status": "Pending"
  },
  {
    "id": 75,
    "rating": 5,
    "userName": "NNimesh",
    "text": "Exceptional. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Apr 01, 2025",
    "status": "Pending"
  },
  {
    "id": 76,
    "rating": 5,
    "userName": "JJanez",
    "text": "Exceptional. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Feb 01, 2025",
    "status": "Pending"
  },
  {
    "id": 77,
    "rating": 5,
    "userName": "Pasan",
    "text": "Exceptional. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Oct 01, 2024",
    "status": "Pending"
  },
  {
    "id": 78,
    "rating": 4,
    "userName": "Paweł",
    "text": "Good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Sep 01, 2025",
    "status": "Pending"
  },
  {
    "id": 79,
    "rating": 4,
    "userName": "Martina",
    "text": "Good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Aug 01, 2025",
    "status": "Pending"
  },
  {
    "id": 80,
    "rating": 5,
    "userName": "AAraceli",
    "text": "Superb. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Apr 01, 2025",
    "status": "Pending"
  },
  {
    "id": 81,
    "rating": 5,
    "userName": "Nikolett",
    "text": "Superb. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Mar 01, 2025",
    "status": "Pending"
  },
  {
    "id": 82,
    "rating": 4,
    "userName": "Veronika",
    "text": "Very good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Jan 01, 2025",
    "status": "Pending"
  },
  {
    "id": 83,
    "rating": 4,
    "userName": "EEsther",
    "text": "Very good. There are no comments available for this review",
    "sentiment": "Neutral",
    "categories": [],
    "source": "Booking.com",
    "date": "Jan 01, 2025",
    "status": "Pending"
  },
  {
    "id": 84,
    "rating": 5,
    "userName": "Anastasiia",
    "text": "Superb. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Apr 01, 2024",
    "status": "Pending"
  },
  {
    "id": 85,
    "rating": 5,
    "userName": "Oliver",
    "text": "Superb. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Sep 01, 2023",
    "status": "Pending"
  },
  {
    "id": 86,
    "rating": 5,
    "userName": "קקרן",
    "text": "Exceptional. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Oct 01, 2025",
    "status": "Pending"
  },
  {
    "id": 87,
    "rating": 3,
    "userName": "CCarmine",
    "text": "Pleasant. There are no comments available for this review",
    "sentiment": "Negative",
    "categories": [],
    "source": "Booking.com",
    "date": "Aug 01, 2025",
    "status": "Pending"
  },
  {
    "id": 88,
    "rating": 5,
    "userName": "Jürgen",
    "text": "Exceptional. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Feb 01, 2025",
    "status": "Pending"
  },
  {
    "id": 89,
    "rating": 5,
    "userName": "Valeriia",
    "text": "Exceptional. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Jan 01, 2025",
    "status": "Pending"
  },
  {
    "id": 90,
    "rating": 5,
    "userName": "SSarah",
    "text": "Exceptional. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Jul 01, 2024",
    "status": "Pending"
  },
  {
    "id": 91,
    "rating": 5,
    "userName": "Emelie",
    "text": "Exceptional. There are no comments available for this review",
    "sentiment": "Positive",
    "categories": [],
    "source": "Booking.com",
    "date": "Mar 01, 2024",
    "status": "Pending"
  }
];

  return (
    <div className="review-list-container">
      {/* HEADER ROW */}
      <div className="review-header-row">
        <div className="h-col">RATING</div>
        <div className="h-col">REVIEW SNIPPET</div>
        <div className="h-col">SENTIMENT</div>
        <div className="h-col">CATEGORY</div>
        <div className="h-col">SOURCE</div>
        <div className="h-col">DATE</div>
        <div className="h-col">REPLY STATUS</div>
        <div className="h-col">ACTIONS</div>
      </div>

      {/* DATA ROWS */}
      <div className="review-rows">
        {reviews.map((review) => (
          // @ts-expect-error: ReviewItem prop types don’t match mock review shape yet (temporary suppression)
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
