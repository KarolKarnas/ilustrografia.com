import { Product } from "../types/Product";
import { v4 as uuidv4 } from 'uuid';
export const products: Product[] = [

  {
    _id:uuidv4(),
    details: {
      latinName: "Reprivatus Camenisus",
      ytLink: "u8d6Pbykjgg",
      occurrence: "Warsaw / Old Town / Krzywe Koło Street",
      story: `In the heart of Warsaw resides a tale of ancient vengeance, kept alive by the enigmatic figure of Anna Bronkiewicz-Faltz, the last surviving basilisk.
			
			Centuries ago, Warsaw was a city filled with legends, and the Basilisk of Warsaw was one of its most sinister. It was said to have the power to kill with a single gaze and turn people into stone. Yet, in reality, basilisks were a humanoid race that settled in European cities.

However, fear led to their downfall. Johan Faltz, a prosperous magnate, joined the hunt for the basilisk, leading to tragedy. His wife, Anna, survived and vowed revenge. Disguised as a beggar, she wandered the streets, focusing her anger on Krzywe Koło Street.

Anna's revenge simmered beneath her beggarly facade. She sought to reclaim her family's wealth and make the descendants of the hunters pay. While her beggarly form was common, she could transform into her true basilisk shape when needed. Those who encountered her learned that offering gold coins could briefly engage her.

The legend of Anna Bronkiewicz-Faltz, the last basilisk of Warsaw, endures—a tale of vengeance, the power of anger, and a city haunted by its history. Beware if you encounter her, for her grand revenge plan awaits the right moment to unfold.`,
    },
    name: "Basilisk",
    slug: "basilisk",
    rating: {
      rating: 5,
      numReviews: 2,
    },
    categories: [
      {
        name: "Neo-Slavic Census",
        slug: "neo-slavic-census",
      },
    ],
    tags: [{ name: "", slug: "" }],
    images: ["/images/neo-slavic-census/basilisk-1.jpg"],
    statistics: [
      "+50 to the skill of creating calluses",
      "+10 for knowledge of Warsaw's topography",
      "+25% protection against turning into stone",
      "It's safest to keep the property deed with a printout",
    ],
    options: {
      material: {
        optionName: "Material",
        "art-print": {
          title: "Art Print",
          images: ["/images/neo-slavic-census/basilisk-art-print-1.jpg"],
        },
        "painting-on-canvas": {
          title: "Painting On Canvas",
          images: [
            "/images/neo-slavic-census/basilisk-painting-on-canvas-1.jpg",
          ],
        },
        poster: {
          title: "Poster",
          images: ["/images/neo-slavic-census/basilisk-poster-1.jpg"],
        },
        "premium-print": {
          title: "Premium Print",
          images: ["/images/neo-slavic-census/basilisk-premium-print-1.jpg"],
        },
      },
      size: {
        optionName: "Size",
        s20x30: {
          title: "20x30",
          images: [],
        },
        s20x40: {
          title: "20x40",
          images: [],
        },
        s30x40: {
          title: "30x40",
          images: [],
        },
        s40x60: {
          title: "40x60",
          images: [],
        },
        s50x70: {
          title: "50x70",
          images: [],
        },
        s60x90: {
          title: "60x90",
          images: [],
        },
        s70x100: {
          title: "70x100",
          images: [],
        },
      },
    },
    variations: [
      //ART-PRINT
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "art-print", size: "s20x40" },
        SKU: "basilisk-art-print-s20x40",
        price: 109,
        countInStock: 2,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "art-print", size: "s30x40" },
        SKU: "basilisk-art-print-s30x40",
        price: 179,
        countInStock: 0,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "art-print", size: "s40x60" },
        SKU: "basilisk-art-print-s40x60",
        price: 259,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "art-print", size: "s50x70" },
        SKU: "basilisk-art-print-s50x70",
        price: 319,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "art-print", size: "s60x90" },
        SKU: "basilisk-art-print-s60x90",
        price: 399,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "art-print", size: "s70x100" },
        SKU: "basilisk-art-print-s70x100",
        price: 499,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      //CANVAS
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "painting-on-canvas", size: "s20x40" },
        SKU: "basilisk-painting-on-canvas-s20x40",
        price: 209,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "painting-on-canvas", size: "s30x40" },
        SKU: "basilisk-painting-on-canvas-s30x40",
        price: 249,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "painting-on-canvas", size: "s40x60" },
        SKU: "basilisk-painting-on-canvas-s40x60",
        price: 299,
        countInStock: 15,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "painting-on-canvas", size: "s50x70" },
        SKU: "basilisk-painting-on-canvas-s50x70",
        price: 349,
        countInStock: 12,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "painting-on-canvas", size: "s60x90" },
        SKU: "basilisk-painting-on-canvas-s60x90",
        price: 449,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "painting-on-canvas", size: "s70x100" },
        SKU: "basilisk-painting-on-canvas-s70x100",
        price: 569,
        countInStock: 3,
        tags: [{ name: "", slug: "" }],
      },
      // POSTER
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "poster", size: "s20x30" },
        SKU: "basilisk-poster-s20x30",
        price: 49,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "poster", size: "s30x40" },
        SKU: "basilisk-poster-s30x40",
        price: 59,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "poster", size: "s40x60" },
        SKU: "basilisk-poster-s40x60",
        price: 99,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "poster", size: "s50x70" },
        SKU: "basilisk-poster-s50x70",
        price: 129,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "poster", size: "s60x90" },
        SKU: "basilisk-poster-s60x90",
        price: 129,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "poster", size: "s70x100" },
        SKU: "basilisk-poster-s70x100",
        price: 209,
        countInStock: 11,
        tags: [{ name: "", slug: "" }],
      },
      // PREMIUM PRINT
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "premium-print", size: "s20x30" },
        SKU: "basilisk-premium-print-s20x30",
        price: 59,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "premium-print", size: "s30x40" },
        SKU: "basilisk-premium-print-s30x40",
        price: 99,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "premium-print", size: "s40x60" },
        SKU: "basilisk-premium-print-s40x60",
        price: 149,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "premium-print", size: "s50x70" },
        SKU: "basilisk-premium-print-s50x70",
        price: 209,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "premium-print", size: "s60x90" },
        SKU: "basilisk-premium-print-s60x90",
        price: 269,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "basilisk",
        options: { material: "premium-print", size: "s70x100" },
        SKU: "basilisk-premium-print-s70x100",
        price: 299,
        countInStock: 1,
        tags: [{ name: "", slug: "" }],
      },
    ],
  },
  //BOBO
  {
    _id:uuidv4(),
    details: {
      latinName: "Vampus Trampus",
      ytLink: "enO_H99fqv8",
      occurrence:
        "The entire Slavic lands, the remnants of ancient forests, especially the entrances to expressways, or the Borowy Circles.",
      story: `As you know, dear Slavs, there aren't many vampire species left in Slavic lands. It's not easy to come across these undead creatures anymore, especially since the more attractive and elegant types of vampires, born from humans, have mostly emigrated to America, pursuing careers or seeking other pleasures in the New World. As for the wild, unclassifiable creatures created by divine will in the early days of history, they either perished or went unnoticed and disappeared on their own.

If you were to seek a vampire, it would be easiest to encounter a Forest Bobo. This species predates the human race and did not originate from a cursed human corpse. However, it bears a striking resemblance to humans. We'll delve into this curiosity a bit later. But thanks to the fact that Forest Bobos are not repulsive in appearance and do not overly bother Slavic communities, you can still encounter them in the wild.

A New World for Forest Bobo

Dear Slavs, times have changed greatly. There are fewer forests, and more roads. Unfortunately, along with the trees, many creatures, including Forest Bobos, have diminished. The few vampires that remain in this part of the world have had to adapt to the new conditions. After all, there are no longer horse-drawn carriages, and few people walk through the woods on foot. They are left with those dizzyingly fast and noisy cars. It is these cars that now contain the energy that Forest Bobos have come to love. However, to hunt down the unfortunate Slavic men who now travel in such great haste, they must exert much more effort. Their enchanting spells have become even stronger. After all, the spell's purpose is to penetrate the armor of a speeding vehicle and reach the man's head. Forest Bobos have also improved their visibility so that travelers can spot them from afar. That's why their colors and shine are becoming more vibrant. They have also quickly realized that noble stones and gold are no longer carried by anyone. But they are not foolish and have quickly discovered the peculiar value of banknotes. They now bring them to Borowy, who exchanges them for the desired trinkets and baubles.

To the extent they could, Forest Bobos adapted to these new, challenging times.

As I mentioned at the beginning of this story, if you ever decide to seek out these fascinating vampires, remember to be cautious. But most importantly, if it ever occurs to you to come to the aid of an enchanted driver, I strongly discourage it!

He will be drained of vigor and a few gold pieces, but great harm will not befall him.

Interference is not allowed!

For this is how Mother Nature works, and we must not interfere with her will.
`,
    },
    name: "Forest Bobo",
    slug: "forest-bobo",
    rating: {
      rating: 5,
      numReviews: 3,
    },
    categories: [
      {
        name: "Neo-Slavic Census",
        slug: "neo-slavic-census",
      },
    ],
    tags: [{ name: "", slug: "" }],
    images: ["/images/neo-slavic-census/forest-bobo-1.jpg"],
    statistics: [
      "+10 life energy on Mondays",
      "+50 for dealings with the Forest Guardian",
      "+15% for fern growth in the living room",
      "Hanging in the bedroom improves the mattress's bed elasticity",
    ],
    options: {
      material: {
        optionName: "Material",
        "art-print": {
          title: "Art Print",
          images: ["/images/neo-slavic-census/forest-bobo-art-print-1.jpg"],
        },
        "painting-on-canvas": {
          title: "Painting On Canvas",
          images: [
            "/images/neo-slavic-census/forest-bobo-painting-on-canvas-1.jpg",
          ],
        },
        poster: {
          title: "Poster",
          images: ["/images/neo-slavic-census/forest-bobo-poster-1.jpg"],
        },
        "premium-print": {
          title: "Premium Print",
          images: ["/images/neo-slavic-census/forest-bobo-premium-print-1.jpg"],
        },
      },
      size: {
        optionName: "Size",
        s20x30: {
          title: "20x30",
          images: [],
        },
        s20x40: {
          title: "20x40",
          images: [],
        },
        s30x40: {
          title: "30x40",
          images: [],
        },
        s40x60: {
          title: "40x60",
          images: [],
        },
        s50x70: {
          title: "50x70",
          images: [],
        },
        s60x90: {
          title: "60x90",
          images: [],
        },
        s70x100: {
          title: "70x100",
          images: [],
        },
      },
    },
    variations: [
      //ART-PRINT
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "art-print", size: "s20x40" },
        SKU: "forest-bobo-art-print-s20x40",
        price: 109,
        countInStock: 2,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "art-print", size: "s30x40" },
        SKU: "forest-bobo-art-print-s30x40",
        price: 179,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "art-print", size: "s40x60" },
        SKU: "forest-bobo-art-print-s40x60",
        price: 259,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "art-print", size: "s50x70" },
        SKU: "forest-bobo-art-print-s50x70",
        price: 319,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "art-print", size: "s60x90" },
        SKU: "forest-bobo-art-print-s60x90",
        price: 399,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "art-print", size: "s70x100" },
        SKU: "forest-bobo-art-print-s70x100",
        price: 499,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      //CANVAS
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "painting-on-canvas", size: "s20x40" },
        SKU: "forest-bobo-painting-on-canvas-s20x40",
        price: 209,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "painting-on-canvas", size: "s30x40" },
        SKU: "forest-bobo-painting-on-canvas-s300x40",
        price: 249,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "painting-on-canvas", size: "s40x60" },
        SKU: "forest-bobo-painting-on-canvas-s40x60",
        price: 299,
        countInStock: 15,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "painting-on-canvas", size: "s50x70" },
        SKU: "forest-bobo-painting-on-canvas-s50x70",
        price: 349,
        countInStock: 12,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "painting-on-canvas", size: "s60x90" },
        SKU: "forest-bobo-painting-on-canvas-s60x90",
        price: 449,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "painting-on-canvas", size: "s70x100" },
        SKU: "forest-bobo-painting-on-canvas-s70x100",
        price: 569,
        countInStock: 3,
        tags: [{ name: "", slug: "" }],
      },
      // POSTER
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "poster", size: "s20x30" },
        SKU: "forest-bobo-poster-s20x30",
        price: 49,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "poster", size: "s30x40" },
        SKU: "forest-bobo-poster-s30x40",
        price: 59,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "poster", size: "s40x60" },
        SKU: "forest-bobo-poster-s40x60",
        price: 99,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "poster", size: "s50x70" },
        SKU: "forest-bobo-poster-s50x70",
        price: 129,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "poster", size: "s60x90" },
        SKU: "forest-bobo-poster-s60x90",
        price: 129,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "poster", size: "s70x100" },
        SKU: "forest-bobo-poster-s70x100",
        price: 209,
        countInStock: 11,
        tags: [{ name: "", slug: "" }],
      },
      // PREMIUM PRINT
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "premium-print", size: "s20x30" },
        SKU: "forest-bobo-premium-print-s20x30",
        price: 59,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "premium-print", size: "s30x40" },
        SKU: "forest-bobo-premium-print-s30x40",
        price: 99,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "premium-print", size: "s40x60" },
        SKU: "forest-bobo-premium-print-s40x60",
        price: 149,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "premium-print", size: "s50x70" },
        SKU: "forest-bobo-premium-print-s50x70",
        price: 209,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "premium-print", size: "s60x90" },
        SKU: "forest-bobo-premium-print-s60x90",
        price: 269,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "forest-bobo",
        options: { material: "premium-print", size: "s70x100" },
        SKU: "forest-bobo-premium-print-s70x100",
        price: 299,
        countInStock: 1,
        tags: [{ name: "", slug: "" }],
      },
    ],
  },
  // Shopping Baba
  {
    _id:uuidv4(),
    details: {
      latinName: "Hitruos Babuos",
      ytLink: "cMflnJD-Gxk",
      occurrence:
        "Across Slavic Lands / Discount Stores / Mainly in the vicinity of shopping carts and clearance shelves.",
      story: `It's an unbelievable thing that in these times, honest Slavic people like us still have to contend with babs.

			Damn it! We can eat strawberries in December and split atoms, but we can't deal with these ghosts? Absurd!
			
			Nevertheless, for millennia now, we've been trying to solve the problem of babs. Unfortunately, their annoying ability to reappear two-fold after we've chased one away is overwhelming. Scientists are working tirelessly to do something about this phenomenon. Recent reports from alchemical laboratories about the discovery of a potion that some babs react to with panic fill us with optimism. However, don't get too hopeful just yet. Dear Slavic people, there's still a long way to go before we can get rid of these tormenting apparitions for good.
			
			For now, you must arm yourselves with patience and be prepared for the hardships they bring, especially those we encounter at every turn. And it's not hard to guess that currently, the most abundant species of babs is the Shopkeeper Baba. Depending on the region of our land, some of you may know her as Lichodle or Biedronie. Yes, it's the one that most often causes you to cry and gnash your teeth. She has seeped into our Slavic society like spilled beer on a mattress. Getting rid of her is difficult, and we've had to live with that yellow stain. We simply cover our beds with a blanket and pretend the stain isn't there.
			
			In simpler terms, without metaphors, Shopping Babas are terribly annoying and troublesome.`,
    },
    name: "Shopping Baba",
    slug: "shopping-baba",
    rating: {
      rating: 4.5,
      numReviews: 2,
    },
    categories: [
      {
        name: "Neo-Slavic Census",
        slug: "neo-slavic-census",
      },
    ],
    tags: [{ name: "", slug: "" }],
    images: ["/images/neo-slavic-census/shopping-baba-1.jpg"],
    statistics: [
      "+50 to searching for all kinds of discounts",
      "+25 for patience while shopping",
      "+19% for potato selection skills",
      "Suspended in the kitchen, she guards the fridge against intruders",
    ],
    options: {
      material: {
        optionName: "Material",
        "art-print": {
          title: "Art Print",
          images: ["/images/neo-slavic-census/shopping-baba-art-print-1.jpg"],
        },
        "painting-on-canvas": {
          title: "Painting On Canvas",
          images: [
            "/images/neo-slavic-census/shopping-baba-painting-on-canvas-1.jpg",
          ],
        },
        poster: {
          title: "Poster",
          images: ["/images/neo-slavic-census/shopping-baba-poster-1.jpg"],
        },
        "premium-print": {
          title: "Premium Print",
          images: [
            "/images/neo-slavic-census/shopping-baba-premium-print-1.jpg",
          ],
        },
      },
      size: {
        optionName: "Size",
        s20x30: {
          title: "20x30",
          images: [],
        },
        s20x40: {
          title: "20x40",
          images: [],
        },
        s30x40: {
          title: "30x40",
          images: [],
        },
        s40x60: {
          title: "40x60",
          images: [],
        },
        s50x70: {
          title: "50x70",
          images: [],
        },
        s60x90: {
          title: "60x90",
          images: [],
        },
        s70x100: {
          title: "70x100",
          images: [],
        },
      },
    },
    variations: [
      //ART-PRINT
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "art-print", size: "s20x40" },
        SKU: "shopping-baba-art-print-s20x40",
        price: 109,
        countInStock: 2,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "art-print", size: "s30x40" },
        SKU: "shopping-baba-art-print-s30x40",
        price: 179,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "art-print", size: "s40x60" },
        SKU: "shopping-baba-art-print-s40x60",
        price: 259,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "art-print", size: "s50x70" },
        SKU: "shopping-baba-art-print-s50x70",
        price: 319,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "art-print", size: "s60x90" },
        SKU: "shopping-baba-art-print-s60x90",
        price: 399,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "art-print", size: "s70x100" },
        SKU: "shopping-baba-art-print-s70x100",
        price: 499,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      //CANVAS
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "painting-on-canvas", size: "s20x40" },
        SKU: "shopping-baba-painting-on-canvas-s20x40",
        price: 209,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "painting-on-canvas", size: "s30x40" },
        SKU: "shopping-baba-painting-on-canvas-s300x40",
        price: 249,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "painting-on-canvas", size: "s40x60" },
        SKU: "shopping-baba-painting-on-canvas-s40x60",
        price: 299,
        countInStock: 15,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "painting-on-canvas", size: "s50x70" },
        SKU: "shopping-baba-painting-on-canvas-s50x70",
        price: 349,
        countInStock: 12,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "painting-on-canvas", size: "s60x90" },
        SKU: "shopping-baba-painting-on-canvas-s60x90",
        price: 449,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "painting-on-canvas", size: "s70x100" },
        SKU: "shopping-baba-painting-on-canvas-s70x100",
        price: 569,
        countInStock: 3,
        tags: [{ name: "", slug: "" }],
      },
      // POSTER
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "poster", size: "s20x30" },
        SKU: "shopping-baba-poster-s20x30",
        price: 49,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "poster", size: "s30x40" },
        SKU: "shopping-baba-poster-s30x40",
        price: 59,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "poster", size: "s40x60" },
        SKU: "shopping-baba-poster-s40x60",
        price: 99,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "poster", size: "s50x70" },
        SKU: "shopping-baba-poster-s50x70",
        price: 129,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "poster", size: "s60x90" },
        SKU: "shopping-baba-poster-s60x90",
        price: 129,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "poster", size: "s70x100" },
        SKU: "shopping-baba-poster-s70x100",
        price: 209,
        countInStock: 11,
        tags: [{ name: "", slug: "" }],
      },
      // PREMIUM PRINT
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "premium-print", size: "s20x30" },
        SKU: "shopping-baba-premium-print-s20x30",
        price: 59,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "premium-print", size: "s30x40" },
        SKU: "shopping-baba-premium-print-s30x40",
        price: 99,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "premium-print", size: "s40x60" },
        SKU: "shopping-baba-premium-print-s40x60",
        price: 149,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "premium-print", size: "s50x70" },
        SKU: "shopping-baba-premium-print-s50x70",
        price: 209,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "premium-print", size: "s60x90" },
        SKU: "shopping-baba-premium-print-s60x90",
        price: 269,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "shopping-baba",
        options: { material: "premium-print", size: "s70x100" },
        SKU: "shopping-baba-premium-print-s70x100",
        price: 299,
        countInStock: 1,
        tags: [{ name: "", slug: "" }],
      },
    ],
  },
  // Wetlinka Goddess
  {
    _id:uuidv4(),
    details: {
      latinName: "Karpatus Partihardis",
      ytLink: "W3tEopU5Ju8",
      occurrence: "The entire Slavic lands / River currents, lakes, and ponds.",
      story: `The Magic of Bieszczady

			Few of you, Dear Slavs, need an introduction to Bieszczady. It's a place that many of you often choose to spend your free time or to find inspiration in your work. There are also those who have abandoned everything they did in life and eagerly set off for these mountains to change their fate.
			
			And no wonder!
			
			This land is adorned with beautiful mountain meadows, rushing streams, and beech forests. The sun shines brighter here, and the greenery is the greenest. Days are filled with the footsteps of wandering boots, the chirping of birds, and the sound of the wind carrying the purest air. In the evenings, there is no shortage of gatherings of happy Slavs who celebrate around bonfires and lose themselves in moments of joy. Here, time flows differently, and past problems seem trivial.
			
			"I left everything behind, came here, and... it's the best thing I've ever done."
			
			Bieszczady is also an area of powerful magical energy, vibrating with the force of a plucked guitar string. This power has attracted those among you who dabble in enchanted arts for centuries, as well as those who are just beginning to explore these mysteries. You'll find fields and veins of magic aplenty, as well as more enchanted creatures.
			
			Oh, and what creatures they are!
			
			Bieszczady transform not only humans but also other races with their uniqueness. In particular, this land served a certain water goddess, who is a true rarity and phenomenon among her kind.
			
			Of course, I'm talking about the Wetlinka Goddess, whom many of you are already familiar with.
			
			Meeting her is a great opportunity to remember a thing or two about these extraordinary nymphs.
			
			What has Wetlinka become?

Over the decades of her play, she has grown more and more human-like. To the point that often when Wetlinka joins those who have newly arrived in these lands, none of them even suspects that she is a rusalka, an ancient creature. Only when they take a closer look at the incredible color of her eyes, honey-green in the sun and silvery in the moonlight, or her skin so white it seems translucent, do they recognize the non-human elements in her. But when this water maiden is already in the midst of play, guided by the freedom natural as the wind, everyone around forgets that Wetlinka didn't arrive with them. The freedom, straightforwardness, and sincerity she exudes infect and soothe.

You won't have deep conversations with her about important topics. But what's there to discuss with a rusalka? With her, you can at most sing until your throat is sore, or laugh until you're breathless, like only a child can. With her, you can gaze at the stars at night and assign them strange names amidst giggles. With her, you can chase fireflies or catch frogs. With her, you can gather water lilies and send them floating down the river. And then you can lie together on the grass and watch the flickering of the stars against the inky canvas of the połonina and the sharp nose of Smerek nudging the moon.

And when the dawn calls you into the embrace of sleep, Wetlinka will dissolve like a dream. She'll enter her river and merge with the water, drifting away like every joy. And you, as you feel the sand beneath your eyelids, even though your mind will be filled with song and your blood warmed by wine, you will wonder—will you meet her again tomorrow?

Will she choose your campfire tomorrow as well?
			
			`,
    },
    name: "Wetlinka Goddess",
    slug: "wetlinka-goddess",
    rating: {
      rating: 4.9,
      numReviews: 12,
    },
    categories: [
      {
        name: "Neo-Slavic Census",
        slug: "neo-slavic-census",
      },
    ],
    tags: [{ name: "", slug: "" }],
    images: ["/images/neo-slavic-census/wetlinka-goddess-1.jpg"],
    statistics: [
      "+30 to improving the taste of cheap wine",
      "-60% to worrying",
      "+20% to dropping everything and heading to the Bieszczady Mountains",
      "+15 to finding first fleeting love",
    ],
    options: {
      material: {
        optionName: "Material",
        "art-print": {
          title: "Art Print",
          images: [
            "/images/neo-slavic-census/wetlinka-goddess-art-print-1.jpg",
          ],
        },
        "painting-on-canvas": {
          title: "Painting On Canvas",
          images: [
            "/images/neo-slavic-census/wetlinka-goddess-painting-on-canvas-1.jpg",
          ],
        },
        poster: {
          title: "Poster",
          images: ["/images/neo-slavic-census/wetlinka-goddess-poster-1.jpg"],
        },
        "premium-print": {
          title: "Premium Print",
          images: [
            "/images/neo-slavic-census/wetlinka-goddess-premium-print-1.jpg",
          ],
        },
      },
      size: {
        optionName: "Size",
        s20x30: {
          title: "20x30",
          images: [],
        },
        s20x40: {
          title: "20x40",
          images: [],
        },
        s30x40: {
          title: "30x40",
          images: [],
        },
        s40x60: {
          title: "40x60",
          images: [],
        },
        s50x70: {
          title: "50x70",
          images: [],
        },
        s60x90: {
          title: "60x90",
          images: [],
        },
        s70x100: {
          title: "70x100",
          images: [],
        },
      },
    },
    variations: [
      //ART-PRINT
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "art-print", size: "s20x40" },
        SKU: "wetlinka-goddess-art-print-s20x40",
        price: 109,
        countInStock: 2,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "art-print", size: "s30x40" },
        SKU: "wetlinka-goddess-art-print-s30x40",
        price: 179,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "art-print", size: "s40x60" },
        SKU: "wetlinka-goddess-art-print-s40x60",
        price: 259,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "art-print", size: "s50x70" },
        SKU: "wetlinka-goddess-art-print-s50x70",
        price: 319,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "art-print", size: "s60x90" },
        SKU: "wetlinka-goddess-art-print-s60x90",
        price: 399,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "art-print", size: "s70x100" },
        SKU: "wetlinka-goddess-art-print-s70x100",
        price: 499,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      //CANVAS
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "painting-on-canvas", size: "s20x40" },
        SKU: "wetlinka-goddess-painting-on-canvas-s20x40",
        price: 209,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "painting-on-canvas", size: "s30x40" },
        SKU: "wetlinka-goddess-painting-on-canvas-s300x40",
        price: 249,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "painting-on-canvas", size: "s40x60" },
        SKU: "wetlinka-goddess-painting-on-canvas-s40x60",
        price: 299,
        countInStock: 15,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "painting-on-canvas", size: "s50x70" },
        SKU: "wetlinka-goddess-painting-on-canvas-s50x70",
        price: 349,
        countInStock: 12,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "painting-on-canvas", size: "s60x90" },
        SKU: "wetlinka-goddess-painting-on-canvas-s60x90",
        price: 449,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "painting-on-canvas", size: "s70x100" },
        SKU: "wetlinka-goddess-painting-on-canvas-s70x100",
        price: 569,
        countInStock: 3,
        tags: [{ name: "", slug: "" }],
      },
      // POSTER
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "poster", size: "s20x30" },
        SKU: "wetlinka-goddess-poster-s20x30",
        price: 49,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "poster", size: "s30x40" },
        SKU: "wetlinka-goddess-poster-s30x40",
        price: 59,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "poster", size: "s40x60" },
        SKU: "wetlinka-goddess-poster-s40x60",
        price: 99,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "poster", size: "s50x70" },
        SKU: "wetlinka-goddess-poster-s50x70",
        price: 129,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "poster", size: "s60x90" },
        SKU: "wetlinka-goddess-poster-s60x90",
        price: 129,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "poster", size: "s70x100" },
        SKU: "wetlinka-goddess-poster-s70x100",
        price: 209,
        countInStock: 11,
        tags: [{ name: "", slug: "" }],
      },
      // PREMIUM PRINT
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "premium-print", size: "s20x30" },
        SKU: "wetlinka-goddess-premium-print-s20x30",
        price: 59,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "premium-print", size: "s30x40" },
        SKU: "wetlinka-goddess-premium-print-s30x40",
        price: 99,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "premium-print", size: "s40x60" },
        SKU: "wetlinka-goddess-premium-print-s40x60",
        price: 149,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "premium-print", size: "s50x70" },
        SKU: "wetlinka-goddess-premium-print-s50x70",
        price: 209,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "premium-print", size: "s60x90" },
        SKU: "wetlinka-goddess-premium-print-s60x90",
        price: 269,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "wetlinka-goddess",
        options: { material: "premium-print", size: "s70x100" },
        SKU: "wetlinka-goddess-premium-print-s70x100",
        price: 299,
        countInStock: 1,
        tags: [{ name: "", slug: "" }],
      },
    ],
  },
  // FANTASY ILLUSTRATIONS
  //Spring Nymph
  {
    _id:uuidv4(),
    details: {
      story: `In a serene grove nestled within the heart of an ancient forest, a Spring Nymph, the harbinger of the forthcoming season, gracefully danced among the budding wildflowers. Her presence was a true sign of the impending springtime, the eternal rebirth in which Mother Nature bestowed the Earth with blossoms and abundant life.

			The nymph, a symbol of fortune, had long been regarded as a bearer of good tidings. Folklore whispered that glimpsing her in the early days of spring would bestow happiness and bountiful harvests upon the fortunate observer.
			
			As the sun's golden rays filtered through the forest canopy, the Spring Nymph's radiant aura seemed to illuminate the entire glade. Her steps were light as a zephyr, and her laughter echoed like the melodious trill of songbirds. With each pirouette and twirl, she brought forth a cascade of vibrant flowers in a kaleidoscope of colors, painting the glen with the hues of a thousand sunsets.
			
			Her mystical presence, however, was not limited to the realm of symbolism alone. The Spring Nymph possessed unique abilities, bestowed upon her by the enchanting essence of the season. With each graceful motion, she could sway the weather and whims of nature, making it nearly impossible for mortals to enjoy their outdoor repasts undisturbed.
			
			With a gentle touch and a whispered word, she could persuade the shyest blossoms to reveal their splendor, even during the most unexpected moments. Her connection to nature allowed her to shield herself from the allergenic effects of pollen, giving her an advantage in encounters among the wild meadows and fields.
			
			The Spring Nymph possessed a unique skill to produce the sounds of leafy laughter. This whimsical ability caused her enemies to lose concentration and accuracy, providing her with a potent defense when facing threats.
			
			As the Spring Nymph continued her dance, her laughter filled the forest, and her enchanting presence beckoned all creatures to celebrate the imminent arrival of spring. Her existence was not merely a symbol; it was a living testament to the wonder and magic that nature bestows upon the world with each passing season, reminding all who witnessed her of the eternal cycle of rebirth and renewal.`,
    },
    name: "Spring Nymph",
    slug: "spring-nymph",
    rating: {
      rating: 4.2,
      numReviews: 7,
    },
    categories: [
      {
        name: "Fantasy Illustrations",
        slug: "fantasy-illustrations",
      },
    ],
    tags: [{ name: "", slug: "" }],
    images: ["/images/fantasy-illustrations/spring-nymph-1.jpg"],
    statistics: [
      "+50 to the ability to disrupt human picnic plans",
      "+25 to convincing flowers to bloom at the most inappropriate times",
      "+10% to the chance of avoiding pollen allergies when battling in grassy areas",
      "Ability 'Nature's Chuckle': Spring Nymph can produce sounds of leafy laughter, causing enemies to lose concentration and accuracy",
    ],
    options: {
      material: {
        optionName: "Material",
        "art-print": {
          title: "Art Print",
          images: [
            "/images/fantasy-illustrations/spring-nymph-art-print-1.jpg",
          ],
        },
        "painting-on-canvas": {
          title: "Painting On Canvas",
          images: [
            "/images/fantasy-illustrations/spring-nymph-painting-on-canvas-1.jpg",
          ],
        },
        poster: {
          title: "Poster",
          images: ["/images/fantasy-illustrations/spring-nymph-poster-1.jpg"],
        },
        "premium-print": {
          title: "Premium Print",
          images: [
            "/images/fantasy-illustrations/spring-nymph-premium-print-1.jpg",
          ],
        },
      },
      size: {
        optionName: "Size",
        s20x30: {
          title: "20x30",
          images: [],
        },
        s20x40: {
          title: "20x40",
          images: [],
        },
        s30x40: {
          title: "30x40",
          images: [],
        },
        s40x60: {
          title: "40x60",
          images: [],
        },
        s50x70: {
          title: "50x70",
          images: [],
        },
        s60x90: {
          title: "60x90",
          images: [],
        },
        s70x100: {
          title: "70x100",
          images: [],
        },
      },
    },
    variations: [
      //ART-PRINT
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "art-print", size: "s20x40" },
        SKU: "spring-nymph-art-print-s20x40",
        price: 109,
        countInStock: 2,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "art-print", size: "s30x40" },
        SKU: "spring-nymph-art-print-s20x40",
        price: 179,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "art-print", size: "s40x60" },
        SKU: "spring-nymph-art-print-s40x60",
        price: 259,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "art-print", size: "s50x70" },
        SKU: "spring-nymph-art-print-s50x70",
        price: 319,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "art-print", size: "s60x90" },
        SKU: "spring-nymph-art-print-s60x90",
        price: 399,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "art-print", size: "s70x100" },
        SKU: "spring-nymph-art-print-s70x100",
        price: 499,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      //CANVAS
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "painting-on-canvas", size: "s20x40" },
        SKU: "spring-nymph-na-painting-on-canvas-s20x40",
        price: 209,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "painting-on-canvas", size: "s30x40" },
        SKU: "spring-nymph-na-painting-on-canvas-s30x40",
        price: 249,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "painting-on-canvas", size: "s40x60" },
        SKU: "spring-nymph-na-painting-on-canvas-s40x60",
        price: 299,
        countInStock: 15,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "painting-on-canvas", size: "s50x70" },
        SKU: "spring-nymph-na-painting-on-canvas-s50x70",
        price: 349,
        countInStock: 12,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "painting-on-canvas", size: "s60x90" },
        SKU: "spring-nymph-na-painting-on-canvas-s60x90",
        price: 449,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "painting-on-canvas", size: "s70x100" },
        SKU: "spring-nymph-na-painting-on-canvas-s70x100",
        price: 569,
        countInStock: 3,
        tags: [{ name: "", slug: "" }],
      },
      // POSTER
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "poster", size: "s20x30" },
        SKU: "spring-nymph-poster-s20x30",
        price: 49,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "poster", size: "s30x40" },
        SKU: "spring-nymph-poster-s30x40",
        price: 59,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "poster", size: "s40x60" },
        SKU: "spring-nymph-poster-s40x60",
        price: 99,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "poster", size: "s50x70" },
        SKU: "spring-nymph-poster-s50x70",
        price: 129,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "poster", size: "s60x90" },
        SKU: "spring-nymph-poster-s60x90",
        price: 129,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "poster", size: "s70x100" },
        SKU: "spring-nymph-poster-s70x100",
        price: 209,
        countInStock: 11,
        tags: [{ name: "", slug: "" }],
      },
      // PREMIUM PRINT
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "premium-print", size: "s20x30" },
        SKU: "spring-nymph-premium-print-s20x30",
        price: 59,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "premium-print", size: "s30x40" },
        SKU: "spring-nymph-premium-print-s30x40",
        price: 99,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "premium-print", size: "s40x60" },
        SKU: "spring-nymph-premium-print-s40x60",
        price: 149,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "premium-print", size: "s50x70" },
        SKU: "spring-nymph-premium-print-s50x70",
        price: 209,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "premium-print", size: "s60x90" },
        SKU: "spring-nymph-premium-print-s60x90",
        price: 269,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "spring-nymph",
        options: { material: "premium-print", size: "s70x100" },
        SKU: "spring-nymph-premium-print-s70x100",
        price: 299,
        countInStock: 1,
        tags: [{ name: "", slug: "" }],
      },
    ],
  },

  // FIRE MAGIC

  {
    _id:uuidv4(),
    details: {
      story: `In the ancient annals of history, a powerful heroine emerged, bearing a name that would become legend itself—Fire Magic. She was unlike any mortal, a being seemingly wrought entirely from the flames and inferno she wielded with unparalleled mastery.

			In a world where the elements held sway and the forces of nature were revered and feared, Fire Magic was the embodiment of both awe and trepidation. Her very existence was a testament to the inherent duality of fire, the most dangerous and yet beguiling of elements.
			
			Fire Magic was known for her ethereal beauty, her form a mesmerizing dance of reds, oranges, and yellows, as if she were a living flame. Wherever she walked, embers trailed behind her, creating a blazing trail that marked her presence. Her eyes shimmered with the inner fire of the Elemental Flame, reflecting the depths of her power.
			
			She was a guardian and a destroyer, a symbol of the dual nature of fire itself. Her purpose was not to control the flames but to understand them, to ensure their power was harnessed for the greater good.
			
			In her wake, villages flourished with the controlled warmth of fire, their hearths burning brightly through the darkest of nights. Yet, when disaster loomed, when wildfires threatened to devour the land, Fire Magic would step forward, her very essence becoming a raging inferno, to quell the flames and protect the innocent.
			
			Her name became synonymous with hope and courage, a beacon of light in the face of overwhelming darkness. Fire Magic's legend served as a reminder of the untamed forces that exist in the world and the individuals who, through their wisdom and valor, seek to harness these elements for the betterment of all. She remained a symbol of the delicate balance between creation and destruction, a living testament to the power and unpredictability of the Elemental Fire, and a heroine whose name would be remembered for eternity.`,
    },
    name: "Fire Magic",
    slug: "fire-magic",
    rating: {
      rating: 4.2,
      numReviews: 7,
    },
    categories: [
      {
        name: "Fantasy Illustrations",
        slug: "fantasy-illustrations",
      },
    ],
    tags: [{ name: "", slug: "" }],
    images: ["/images/fantasy-illustrations/fire-magic-1.jpg"],
    statistics: [
      "+100 to setting things on fire unintentionally",
      "+75 to making marshmallows the perfect level of toasted",
      "+50 to lighting up a room (literally)",
      '-10 to participating in "Cool Down" contests (because, well, fire)',
      "Ability 'Inferno Disco': Fire Magic can turn any gathering into a blazing dance party, complete with fiery light show and scorching beats! 🔥🕺💃",
    ],
    options: {
      material: {
        optionName: "Material",
        "art-print": {
          title: "Art Print",
          images: ["/images/fantasy-illustrations/fire-magic-art-print-1.jpg"],
        },
        "painting-on-canvas": {
          title: "Painting On Canvas",
          images: [
            "/images/fantasy-illustrations/fire-magic-painting-on-canvas-1.jpg",
          ],
        },
        poster: {
          title: "Poster",
          images: ["/images/fantasy-illustrations/fire-magic-poster-1.jpg"],
        },
        "premium-print": {
          title: "Premium Print",
          images: [
            "/images/fantasy-illustrations/fire-magic-premium-print-1.jpg",
          ],
        },
      },
      size: {
        optionName: "Size",
        s20x30: {
          title: "20x30",
          images: [],
        },
        s20x40: {
          title: "20x40",
          images: [],
        },
        s30x40: {
          title: "30x40",
          images: [],
        },
        s40x60: {
          title: "40x60",
          images: [],
        },
        s50x70: {
          title: "50x70",
          images: [],
        },
        s60x90: {
          title: "60x90",
          images: [],
        },
        s70x100: {
          title: "70x100",
          images: [],
        },
      },
    },
    variations: [
      //ART-PRINT
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "art-print", size: "s20x40" },
        SKU: "fire-magic-art-print-s20x40",
        price: 109,
        countInStock: 2,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "art-print", size: "s30x40" },
        SKU: "fire-magic-art-print-s20x40",
        price: 179,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "art-print", size: "s40x60" },
        SKU: "fire-magic-art-print-s40x60",
        price: 259,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "art-print", size: "s50x70" },
        SKU: "fire-magic-art-print-s50x70",
        price: 319,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "art-print", size: "s60x90" },
        SKU: "fire-magic-art-print-s60x90",
        price: 399,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "art-print", size: "s70x100" },
        SKU: "fire-magic-art-print-s70x100",
        price: 499,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      //CANVAS
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "painting-on-canvas", size: "s20x40" },
        SKU: "fire-magic-na-painting-on-canvas-s20x40",
        price: 209,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "painting-on-canvas", size: "s30x40" },
        SKU: "fire-magic-na-painting-on-canvas-s30x40",
        price: 249,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "painting-on-canvas", size: "s40x60" },
        SKU: "fire-magic-na-painting-on-canvas-s40x60",
        price: 299,
        countInStock: 15,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "painting-on-canvas", size: "s50x70" },
        SKU: "fire-magic-na-painting-on-canvas-s50x70",
        price: 349,
        countInStock: 12,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "painting-on-canvas", size: "s60x90" },
        SKU: "fire-magic-na-painting-on-canvas-s60x90",
        price: 449,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "painting-on-canvas", size: "s70x100" },
        SKU: "fire-magic-na-painting-on-canvas-s70x100",
        price: 569,
        countInStock: 3,
        tags: [{ name: "", slug: "" }],
      },
      // POSTER
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "poster", size: "s20x30" },
        SKU: "fire-magic-poster-s20x30",
        price: 49,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "poster", size: "s30x40" },
        SKU: "fire-magic-poster-s30x40",
        price: 59,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "poster", size: "s40x60" },
        SKU: "fire-magic-poster-s40x60",
        price: 99,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "poster", size: "s50x70" },
        SKU: "fire-magic-poster-s50x70",
        price: 129,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "poster", size: "s60x90" },
        SKU: "fire-magic-poster-s60x90",
        price: 129,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "poster", size: "s70x100" },
        SKU: "fire-magic-poster-s70x100",
        price: 209,
        countInStock: 11,
        tags: [{ name: "", slug: "" }],
      },
      // PREMIUM PRINT
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "premium-print", size: "s20x30" },
        SKU: "fire-magic-premium-print-s20x30",
        price: 59,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "premium-print", size: "s30x40" },
        SKU: "fire-magic-premium-print-s30x40",
        price: 99,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "premium-print", size: "s40x60" },
        SKU: "fire-magic-premium-print-s40x60",
        price: 149,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "premium-print", size: "s50x70" },
        SKU: "fire-magic-premium-print-s50x70",
        price: 209,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "premium-print", size: "s60x90" },
        SKU: "fire-magic-premium-print-s60x90",
        price: 269,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "fire-magic",
        options: { material: "premium-print", size: "s70x100" },
        SKU: "fire-magic-premium-print-s70x100",
        price: 299,
        countInStock: 1,
        tags: [{ name: "", slug: "" }],
      },
    ],
  },
  // QUEEN OF HEARTS

  {
    _id:uuidv4(),
    details: {
      story: `In the heart of the enchanting Slavic region, there lived a woman who had earned a notorious reputation. She was known far and wide as the Queen of Hearts, a moniker she had acquired through her cunning and deceitful ways. Her real name had been lost to time, for she operated in the shadows, away from the prying eyes of society.

			The Queen of Hearts was a mysterious figure, one who never set foot in the inns and taverns that dotted the crossroads of the land. It wasn't that she wasn't welcome; it was that her presence carried an air of foreboding, like a dark cloud looming over merry gatherings. Her ill-reputed name sent shivers down the spines of the townsfolk, for they knew of her crafty tricks and silver-tongued persuasion.
			
			Amongst the card society, she was both a legend and a menace. The Queen of Hearts was renowned for her mastery of deception and her uncanny ability to win games of chance. Her opponents, be they unsuspecting travelers or seasoned gamblers, found themselves entranced by her ethereal beauty and charming demeanor. But beneath the facade of grace lay a heart as cold as ice.
			
			The Queen of Hearts would invite unsuspecting players to engage in games of chance, usually involving cards. She would lure them into her world of illusion and sweet-talk them into high-stake bets. With every turn of the card, she manipulated the outcome to her advantage, leaving her adversaries bewildered and penniless. Those who dared to challenge her soon learned the high cost of crossing the Queen of Hearts.
			
			As her reputation grew, so did the tales of her wickedness. It was said that she consorted with ogres and other dark creatures of the night, seeking their aid in her devious endeavors. Whispers in the taverns spoke of mysterious incantations and rituals performed under the pale moonlight, all to ensure her victories at the card table.
			
			Despite the fear she instilled in the hearts of the people, there was an undeniable allure about the Queen of Hearts. Her enchanting beauty and beguiling charm drew many into her web of deceit, like moths to a flame. Those who escaped her clutches would recount tales of their encounters, warning others to steer clear of her siren's call.
			
			In the Slavic region, the legend of the Queen of Hearts became a cautionary tale, a reminder that not everything that glitters is gold. She remained a shadowy figure, forever banned from the inns and taverns at the crossroads. Her legacy lived on, a testament to the power of deception and the enduring legend of the enigmatic Queen of Hearts.`,
    },
    name: "Queen of Hearts",
    slug: "queen-of-hearts",
    rating: {
      rating: 4.2,
      numReviews: 7,
    },
    categories: [
      {
        name: "Fantasy Illustrations",
        slug: "fantasy-illustrations",
      },
    ],
    tags: [{ name: "", slug: "" }],
    images: ["/images/fantasy-illustrations/queen-of-hearts-1.jpg"],
    statistics: [
      "+99% to dramatic entrances, complete with swirling capes and a cloud of glitter",
      "+33% to confusing opponents with a deck of cards that never runs out",
      '+10 to making grandiose declarations of "Off with their heads!" in everyday situations',
      `-40 to maintaining healthy relationships (it's hard when you're always shouting "Off with their heads!"`,
      "Weakness 'Frozen Heart': Despite her charm, she has a heart as cold as ice, making you vulnerable to acts of genuine kindness",
    ],
    options: {
      material: {
        optionName: "Material",
        "art-print": {
          title: "Art Print",
          images: [
            "/images/fantasy-illustrations/queen-of-hearts-art-print-1.jpg",
          ],
        },
        "painting-on-canvas": {
          title: "Painting On Canvas",
          images: [
            "/images/fantasy-illustrations/queen-of-hearts-painting-on-canvas-1.jpg",
          ],
        },
        poster: {
          title: "Poster",
          images: [
            "/images/fantasy-illustrations/queen-of-hearts-poster-1.jpg",
          ],
        },
        "premium-print": {
          title: "Premium Print",
          images: [
            "/images/fantasy-illustrations/queen-of-hearts-premium-print-1.jpg",
          ],
        },
      },
      size: {
        optionName: "Size",
        s20x30: {
          title: "20x30",
          images: [],
        },
        s20x40: {
          title: "20x40",
          images: [],
        },
        s30x40: {
          title: "30x40",
          images: [],
        },
        s40x60: {
          title: "40x60",
          images: [],
        },
        s50x70: {
          title: "50x70",
          images: [],
        },
        s60x90: {
          title: "60x90",
          images: [],
        },
        s70x100: {
          title: "70x100",
          images: [],
        },
      },
    },
    variations: [
      //ART-PRINT
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "art-print", size: "s20x40" },
        SKU: "queen-of-hearts-art-print-s20x40",
        price: 109,
        countInStock: 2,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "art-print", size: "s30x40" },
        SKU: "queen-of-hearts-art-print-s20x40",
        price: 179,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "art-print", size: "s40x60" },
        SKU: "queen-of-hearts-art-print-s40x60",
        price: 259,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "art-print", size: "s50x70" },
        SKU: "queen-of-hearts-art-print-s50x70",
        price: 319,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "art-print", size: "s60x90" },
        SKU: "queen-of-hearts-art-print-s60x90",
        price: 399,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "art-print", size: "s70x100" },
        SKU: "queen-of-hearts-art-print-s70x100",
        price: 499,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      //CANVAS
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "painting-on-canvas", size: "s20x40" },
        SKU: "queen-of-hearts-na-painting-on-canvas-s20x40",
        price: 209,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "painting-on-canvas", size: "s30x40" },
        SKU: "queen-of-hearts-na-painting-on-canvas-s30x40",
        price: 249,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "painting-on-canvas", size: "s40x60" },
        SKU: "queen-of-hearts-na-painting-on-canvas-s40x60",
        price: 299,
        countInStock: 15,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "painting-on-canvas", size: "s50x70" },
        SKU: "queen-of-hearts-na-painting-on-canvas-s50x70",
        price: 349,
        countInStock: 12,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "painting-on-canvas", size: "s60x90" },
        SKU: "queen-of-hearts-na-painting-on-canvas-s60x90",
        price: 449,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "painting-on-canvas", size: "s70x100" },
        SKU: "queen-of-hearts-na-painting-on-canvas-s70x100",
        price: 569,
        countInStock: 3,
        tags: [{ name: "", slug: "" }],
      },
      // POSTER
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "poster", size: "s20x30" },
        SKU: "queen-of-hearts-poster-s20x30",
        price: 49,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "poster", size: "s30x40" },
        SKU: "queen-of-hearts-poster-s30x40",
        price: 59,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "poster", size: "s40x60" },
        SKU: "queen-of-hearts-poster-s40x60",
        price: 99,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "poster", size: "s50x70" },
        SKU: "queen-of-hearts-poster-s50x70",
        price: 129,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "poster", size: "s60x90" },
        SKU: "queen-of-hearts-poster-s60x90",
        price: 129,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "poster", size: "s70x100" },
        SKU: "queen-of-hearts-poster-s70x100",
        price: 209,
        countInStock: 11,
        tags: [{ name: "", slug: "" }],
      },
      // PREMIUM PRINT
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "premium-print", size: "s20x30" },
        SKU: "queen-of-hearts-premium-print-s20x30",
        price: 59,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "premium-print", size: "s30x40" },
        SKU: "queen-of-hearts-premium-print-s30x40",
        price: 99,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "premium-print", size: "s40x60" },
        SKU: "queen-of-hearts-premium-print-s40x60",
        price: 149,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "premium-print", size: "s50x70" },
        SKU: "queen-of-hearts-premium-print-s50x70",
        price: 209,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "premium-print", size: "s60x90" },
        SKU: "queen-of-hearts-premium-print-s60x90",
        price: 269,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "queen-of-hearts",
        options: { material: "premium-print", size: "s70x100" },
        SKU: "queen-of-hearts-premium-print-s70x100",
        price: 299,
        countInStock: 1,
        tags: [{ name: "", slug: "" }],
      },
    ],
  },

  // --------------- POLISH LEGENDS -----------------
  //Mermaid of Warsaw
  {
    _id:uuidv4(),
    details: {
      story: `In the heart of Warsaw, where history and folklore intertwine, there existed a tale that combined two legends: Wars, Sawa, and the Mermaid of Warsaw.

			Long ago, when the region was still a pristine wilderness, Wars, a brave and gallant warrior, and Sawa, a wise and compassionate maiden, met and fell deeply in love. Their love was a beacon of hope in a land filled with challenges and uncertainties.
			
			Together, Wars and Sawa set out to create a thriving city in the midst of the untamed wilderness. They toiled tirelessly, building bridges, forging alliances with neighboring tribes, and establishing order and justice. Their efforts were not in vain, and over time, a vibrant city began to emerge along the banks of the Vistula River.
			
			As Wars and Sawa continued their mission of unity and prosperity, they encountered another remarkable figure—the Mermaid of Warsaw. This mermaid, with her shimmering scales and melodious voice, was known as a guardian of the city. She had watched over Warsaw for centuries, ensuring its safety and well-being.
			
			Upon their first meeting, Wars and Sawa were captivated by the mermaid's enchanting presence. They listened to her beautiful songs, which spoke of the city's history and the enduring spirit of its people. The Mermaid of Warsaw, in turn, was moved by the couple's love and dedication to their city.
			
			Recognizing the kindred spirits in Wars and Sawa, the mermaid offered her guidance and protection, vowing to watch over the city alongside them. Together, the three legendary figures became the guardians of Warsaw, each contributing their unique strengths to the city's well-being.
			
			Wars protected the city with his strength and valor, Sawa guided its people with her wisdom and compassion, and the Mermaid of Warsaw watched over the Vistula River, ensuring its waters remained clear and bountiful. The city prospered under their combined care, and the legend of their unity spread far and wide.
			
			To this day, the stories of Wars, Sawa, and the Mermaid of Warsaw live on in the hearts of the city's inhabitants. Their intertwined legacies remind the people of Warsaw of the strength of love, unity, and the enduring spirit of their beloved city, which thrives along the banks of the Vistula River, under the watchful eyes of its legendary guardians.`,
    },
    name: "Mermaid of Warsaw",
    slug: "mermaid-of-warsaw",
    rating: {
      rating: 4.2,
      numReviews: 7,
    },
    categories: [
      {
        name: "Polish Legends",
        slug: "polish-legends",
      },
    ],
    tags: [{ name: "", slug: "" }],
    images: ["/images/polish-legends/mermaid-of-warsaw-1.jpg"],
    statistics: [
      "+40 to captivating the hearts of passersby with her ethereal beauty",
      "+30 to persuading the Vistula River to flow peacefully through the city",
      "+20% to the chance of a romantic encounter while wandering along the riverbanks",
      `Ability: "Vistulan Waters" - The Warsaw Mermaid can call upon the river's protective embrace, granting her a shield against harm for a limited time`,
    ],
    options: {
      material: {
        optionName: "Material",
        "art-print": {
          title: "Art Print",
          images: ["/images/polish-legends/mermaid-of-warsaw-art-print-1.jpg"],
        },
        "painting-on-canvas": {
          title: "Painting On Canvas",
          images: [
            "/images/polish-legends/mermaid-of-warsaw-painting-on-canvas-1.jpg",
          ],
        },
        poster: {
          title: "Poster",
          images: ["/images/polish-legends/mermaid-of-warsaw-poster-1.jpg"],
        },
        "premium-print": {
          title: "Premium Print",
          images: [
            "/images/polish-legends/mermaid-of-warsaw-premium-print-1.jpg",
          ],
        },
      },
      size: {
        optionName: "Size",
        s20x30: {
          title: "20x30",
          images: [],
        },
        s20x40: {
          title: "20x40",
          images: [],
        },
        s30x40: {
          title: "30x40",
          images: [],
        },
        s40x60: {
          title: "40x60",
          images: [],
        },
        s50x70: {
          title: "50x70",
          images: [],
        },
        s60x90: {
          title: "60x90",
          images: [],
        },
        s70x100: {
          title: "70x100",
          images: [],
        },
      },
    },
    variations: [
      //ART-PRINT
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "art-print", size: "s20x40" },
        SKU: "mermaid-of-warsaw-art-print-s20x40",
        price: 109,
        countInStock: 2,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "art-print", size: "s30x40" },
        SKU: "mermaid-of-warsaw-art-print-s20x40",
        price: 179,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "art-print", size: "s40x60" },
        SKU: "mermaid-of-warsaw-art-print-s40x60",
        price: 259,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "art-print", size: "s50x70" },
        SKU: "mermaid-of-warsaw-art-print-s50x70",
        price: 319,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "art-print", size: "s60x90" },
        SKU: "mermaid-of-warsaw-art-print-s60x90",
        price: 399,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "art-print", size: "s70x100" },
        SKU: "mermaid-of-warsaw-art-print-s70x100",
        price: 499,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      //CANVAS
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "painting-on-canvas", size: "s20x40" },
        SKU: "mermaid-of-warsaw-na-painting-on-canvas-s20x40",
        price: 209,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "painting-on-canvas", size: "s30x40" },
        SKU: "mermaid-of-warsaw-na-painting-on-canvas-s30x40",
        price: 249,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "painting-on-canvas", size: "s40x60" },
        SKU: "mermaid-of-warsaw-na-painting-on-canvas-s40x60",
        price: 299,
        countInStock: 15,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "painting-on-canvas", size: "s50x70" },
        SKU: "mermaid-of-warsaw-na-painting-on-canvas-s50x70",
        price: 349,
        countInStock: 12,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "painting-on-canvas", size: "s60x90" },
        SKU: "mermaid-of-warsaw-na-painting-on-canvas-s60x90",
        price: 449,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "painting-on-canvas", size: "s70x100" },
        SKU: "mermaid-of-warsaw-na-painting-on-canvas-s70x100",
        price: 569,
        countInStock: 3,
        tags: [{ name: "", slug: "" }],
      },
      // POSTER
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "poster", size: "s20x30" },
        SKU: "mermaid-of-warsaw-poster-s20x30",
        price: 49,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "poster", size: "s30x40" },
        SKU: "mermaid-of-warsaw-poster-s30x40",
        price: 59,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "poster", size: "s40x60" },
        SKU: "mermaid-of-warsaw-poster-s40x60",
        price: 99,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "poster", size: "s50x70" },
        SKU: "mermaid-of-warsaw-poster-s50x70",
        price: 129,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "poster", size: "s60x90" },
        SKU: "mermaid-of-warsaw-poster-s60x90",
        price: 129,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "poster", size: "s70x100" },
        SKU: "mermaid-of-warsaw-poster-s70x100",
        price: 209,
        countInStock: 11,
        tags: [{ name: "", slug: "" }],
      },
      // PREMIUM PRINT
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "premium-print", size: "s20x30" },
        SKU: "mermaid-of-warsaw-premium-print-s20x30",
        price: 59,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "premium-print", size: "s30x40" },
        SKU: "mermaid-of-warsaw-premium-print-s30x40",
        price: 99,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "premium-print", size: "s40x60" },
        SKU: "mermaid-of-warsaw-premium-print-s40x60",
        price: 149,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "premium-print", size: "s50x70" },
        SKU: "mermaid-of-warsaw-premium-print-s50x70",
        price: 209,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "premium-print", size: "s60x90" },
        SKU: "mermaid-of-warsaw-premium-print-s60x90",
        price: 269,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "mermaid-of-warsaw",
        options: { material: "premium-print", size: "s70x100" },
        SKU: "mermaid-of-warsaw-premium-print-s70x100",
        price: 299,
        countInStock: 1,
        tags: [{ name: "", slug: "" }],
      },
    ],
  },
  //Black Lady
  {
    _id:uuidv4(),
    details: {
      story: `The Legend of the Black Lady of Janowiec

			In the heart of Poland, along the banks of the mighty Vistula River, lies the ancient town of Janowiec. This town is not only known for its stunning natural beauty but also for the mysterious legend of the Black Lady.
			
			Centuries ago, when Janowiec was but a small village, there lived a noble family known as the Wolski. They were revered by the townsfolk for their wisdom, kindness, and generosity. At the heart of the Wolski family was Lady Elzbieta, known as the "Black Lady" due to her raven-black hair that cascaded down her back like a silken waterfall.
			
			Lady Elzbieta was not only strikingly beautiful but also possessed a gentle and compassionate heart. She was beloved by everyone in the village, from the lowliest peasant to the most distinguished noble. Her beauty was captivating, but it was her kindness and compassion that truly set her apart.
			
			One fateful summer, a warlord named Radovan invaded Janowiec with his ruthless band of warriors. They pillaged and plundered, causing fear and suffering throughout the land. Lady Elzbieta, with a heart full of empathy, offered refuge to the desperate villagers within the walls of her family's castle.
			
			As the warlord's forces closed in, Lady Elzbieta stood firm, defending her people with unwavering courage. She led the villagers in a valiant fight to protect their homes and loved ones. Her determination and bravery inspired even the most timid among them to stand and fight.
			
			As the battle raged on, Lady Elzbieta was struck down by an arrow, sacrificing her life to protect her people. Her dying wish was that her people would always remember the importance of unity, kindness, and standing up against tyranny.
			
			The warlord Radovan was defeated, but the cost was high. The people of Janowiec mourned their beloved Black Lady and buried her with honors on a hill overlooking the castle. It is said that her spirit, still dressed in her flowing black gown, now watches over the town, ensuring its safety and wellbeing.
			
			To this day, the legend of the Black Lady of Janowiec serves as a reminder of the enduring power of kindness, courage, and unity. The people of Janowiec honor her memory with acts of kindness, and it is believed that when the town faces its greatest challenges, the spirit of the Black Lady guides them to victory.`,
    },
    name: "Black Lady",
    slug: "black-lady",
    rating: {
      rating: 5,
      numReviews: 3,
    },
    categories: [
      {
        name: "Polish Legends",
        slug: "polish-legends",
      },
    ],
    tags: [{ name: "", slug: "" }],
    images: ["/images/polish-legends/black-lady-1.jpg"],
    statistics: [
      "+25% to inspiring courage and unity among allies",
      "+13 to radiating an aura of kindness and compassion, calming turbulent emotions",
      "x3 to resistance against fear and intimidation in battle",
      `Ability: "Eternal Vigilance" - The Black Lady can call upon her spirit to shield allies, providing enhanced protection and determination for a limited time`,
    ],
    options: {
      material: {
        optionName: "Material",
        "art-print": {
          title: "Art Print",
          images: ["/images/polish-legends/black-lady-art-print-1.jpg"],
        },
        "painting-on-canvas": {
          title: "Painting On Canvas",
          images: [
            "/images/polish-legends/black-lady-painting-on-canvas-1.jpg",
          ],
        },
        poster: {
          title: "Poster",
          images: ["/images/polish-legends/black-lady-poster-1.jpg"],
        },
        "premium-print": {
          title: "Premium Print",
          images: ["/images/polish-legends/black-lady-premium-print-1.jpg"],
        },
      },
      size: {
        optionName: "Size",
        s20x30: {
          title: "20x30",
          images: [],
        },
        s20x40: {
          title: "20x40",
          images: [],
        },
        s30x40: {
          title: "30x40",
          images: [],
        },
        s40x60: {
          title: "40x60",
          images: [],
        },
        s50x70: {
          title: "50x70",
          images: [],
        },
        s60x90: {
          title: "60x90",
          images: [],
        },
        s70x100: {
          title: "70x100",
          images: [],
        },
      },
    },
    variations: [
      //ART-PRINT
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "art-print", size: "s20x40" },
        SKU: "black-lady-art-print-s20x40",
        price: 109,
        countInStock: 2,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "art-print", size: "s30x40" },
        SKU: "black-lady-art-print-s20x40",
        price: 179,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "art-print", size: "s40x60" },
        SKU: "black-lady-art-print-s40x60",
        price: 259,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "art-print", size: "s50x70" },
        SKU: "black-lady-art-print-s50x70",
        price: 319,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "art-print", size: "s60x90" },
        SKU: "black-lady-art-print-s60x90",
        price: 399,
        countInStock: 10,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "art-print", size: "s70x100" },
        SKU: "black-lady-art-print-s70x100",
        price: 499,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      //CANVAS
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "painting-on-canvas", size: "s20x40" },
        SKU: "black-lady-na-painting-on-canvas-s20x40",
        price: 209,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "painting-on-canvas", size: "s30x40" },
        SKU: "black-lady-na-painting-on-canvas-s30x40",
        price: 249,
        countInStock: 8,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "painting-on-canvas", size: "s40x60" },
        SKU: "black-lady-na-painting-on-canvas-s40x60",
        price: 299,
        countInStock: 15,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "painting-on-canvas", size: "s50x70" },
        SKU: "black-lady-na-painting-on-canvas-s50x70",
        price: 349,
        countInStock: 12,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "painting-on-canvas", size: "s60x90" },
        SKU: "black-lady-na-painting-on-canvas-s60x90",
        price: 449,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "painting-on-canvas", size: "s70x100" },
        SKU: "black-lady-na-painting-on-canvas-s70x100",
        price: 569,
        countInStock: 3,
        tags: [{ name: "", slug: "" }],
      },
      // POSTER
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "poster", size: "s20x30" },
        SKU: "black-lady-poster-s20x30",
        price: 49,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "poster", size: "s30x40" },
        SKU: "black-lady-poster-s30x40",
        price: 59,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "poster", size: "s40x60" },
        SKU: "black-lady-poster-s40x60",
        price: 99,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "poster", size: "s50x70" },
        SKU: "black-lady-poster-s50x70",
        price: 129,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "poster", size: "s60x90" },
        SKU: "black-lady-poster-s60x90",
        price: 129,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "poster", size: "s70x100" },
        SKU: "black-lady-poster-s70x100",
        price: 209,
        countInStock: 11,
        tags: [{ name: "", slug: "" }],
      },
      // PREMIUM PRINT
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "premium-print", size: "s20x30" },
        SKU: "black-lady-premium-print-s20x30",
        price: 59,
        countInStock: 5,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "premium-print", size: "s30x40" },
        SKU: "black-lady-premium-print-s30x40",
        price: 99,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "premium-print", size: "s40x60" },
        SKU: "black-lady-premium-print-s40x60",
        price: 149,
        countInStock: 7,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "premium-print", size: "s50x70" },
        SKU: "black-lady-premium-print-s50x70",
        price: 209,
        countInStock: 16,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "premium-print", size: "s60x90" },
        SKU: "black-lady-premium-print-s60x90",
        price: 269,
        countInStock: 6,
        tags: [{ name: "", slug: "" }],
      },
      {
        _id: uuidv4(),
        productSlug: "black-lady",
        options: { material: "premium-print", size: "s70x100" },
        SKU: "black-lady-premium-print-s70x100",
        price: 299,
        countInStock: 1,
        tags: [{ name: "", slug: "" }],
      },
    ],
  },
];
