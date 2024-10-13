import { productImages } from "../app/constants/imagePaths";

export interface ProductShape {
  id: string;
  image: string;
  name: string;
  price: number;
  size: string;
  weight: string;
  description: string;
  spec: string;
  color: string;
  quantity: number;
}

export const productData: ProductShape[] = [
  {
    id: "1",
    image: `${productImages.euphoria_blue}`,
    name: "EUPHORIA",
    price: 2500,
    size: "Medium",
    weight: "14.18Kg",
    color: "blue",
    description: `The EUPHORIA turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: `HI-TENSILE STEEL FRAME WITH WATER DECALS,  STEEL FORK,  SADDLE BACK REST`,
    quantity: 1,
  },
  {
    id: "2",
    image: `${productImages.lucid}`,
    name: "lucid",
    price: 2200,
    size: "Medium",
    color: "red",
    weight: "14.18Kg",
    description: `The LUCID turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: "HI-TENSILE STEEL FRAME WITH WATER DECALS,STEEL FORK, SADDLE BACK REST,",
    quantity: 1,
  },
  {
    id: "3",
    image: `${productImages.bullet}`,
    name: "Bullet",
    price: 1500,
    size: "Medium",
    color: "red",
    weight: "14.18Kg",
    description: `The BULLET turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: "HI-TENSILE STEEL FRAME WITH WATER DECALS,STEEL FORK, SADDLE BACK REST,",
    quantity: 1,
  },

  {
    id: "4",
    image: `${productImages.bbtm}`,
    name: "bbtm",
    price: 2800,
    size: "Medium",
    color: "red",
    weight: "14.18Kg",
    description: `The BBTM turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: `HI-TENSILE STEEL FRAME WITH WATER DECALS,  STEEL FORK, SADDLE BACK REST`,
    quantity: 1,
  },
  {
    id: "5",
    image: `${productImages.ah500}`,
    name: "ah500",
    price: 3500,
    size: "Medium",
    color: "red",
    weight: "14.18Kg",
    description: `The AH500 turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: "HI-TENSILE STEEL FRAME WITH WATER DECALS,STEEL FORK, SADDLE BACK REST,",
    quantity: 1,
  },
  {
    id: "6",
    image: `${productImages.aloe}`,
    name: "aloe",
    price: 5500,
    size: "Medium",
    color: "red",
    weight: "14.18Kg",
    description: `The ALOE turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: "HI-TENSILE STEEL FRAME WITH WATER DECALS,STEEL FORK, SADDLE BACK REST,",
    quantity: 1,
  },

  {
    id: "7",
    image: `${productImages.euphoria_red}`,
    name: "Euphoria",
    price: 2800,
    size: "Medium",
    color: "red",
    weight: "14.18Kg",
    description: `The EUPHORIA turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: `HI-TENSILE STEEL FRAME WITH WATER DECALS, STEEL FORK, SADDLE BACK REST`,
    quantity: 1,
  },
  {
    id: "8",
    image: `${productImages.lucid_blue}`,
    name: "Lucid",
    price: 3500,
    size: "Medium",
    color: "blue",
    weight: "14.18Kg",
    description: `The LUCID turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: "HI-TENSILE STEEL FRAME WITH WATER DECALS,STEEL FORK, SADDLE BACK REST,",
    quantity: 1,
  },
  {
    id: "9",
    image: `${productImages.bullet_white}`,
    name: "bullet",
    price: 5500,
    size: "Medium",
    color: "white",
    weight: "14.18Kg",
    description: `The BULLET turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: "HI-TENSILE STEEL FRAME WITH WATER DECALS,STEEL FORK, SADDLE BACK REST,",
    quantity: 1,
  },

  {
    id: "10",
    image: `${productImages.bbtm_blue}`,
    name: "bbtm",
    price: 2800,
    size: "Medium",
    color: "blue",
    weight: "14.18Kg",
    description: `The BBTM turns obstacles into features. Its nimble, poppy feel makes even the most mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike that makes new trails feel as familiar as the back of your hand. ${(
      <br />
    )} 27.5 is the fun-sized wheel size. Smaller wheels provide an ideal balance between toughness and weight saving making them the most fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and agile character, the 5010 has become a go-to plaything for progressive riders the world over and the only contender on any backyard trails.`,
    spec: `HI-TENSILE STEEL FRAME WITH WATER DECALS, STEEL FORK, SADDLE BACK REST`,
    quantity: 1,
  },
  {
    id: "11",
    image: `${productImages.lava_dome}`,
    name: "LAVA DOME",
    price: 3500,
    size: "Medium",
    color: "red",
    weight: "14.18Kg",
    description: `The Lava Dome is kind of like your best friend, but in bike form. It’s awesome in the dirt. It’s awesome to rally around town. It’s awesome poking around neighborhood singletrack, and it does it all in a dependable way. The Lava Dome features an easy-to-use 9-speed drivetrain with a clutch rear derailleur as well as sleek internal cable routing and dropouts. With strong 29” wheels that can accept up to a 2.6” tires, this bike is ready for everything in its path!`,
    spec: "HI-TENSILE STEEL FRAME WITH WATER DECALS,STEEL FORK, SADDLE BACK REST,",
    quantity: 1,
  },
  {
    id: "12",
    image: `${productImages.rockhopper}`,
    name: "Rockhopper Sport",
    price: 5500,
    size: "Medium",
    color: "red",
    weight: "14.18Kg",
    description: `This Kona classic brings some of the finer things to light. The Fire Mountain is running a smooth-shifting 9-speed drivetrain to keep things manageable across varying terrain and hydraulic disc brakes to stop on a dime. With 100mm of adjustable suspension and sturdy tires aboard wider 27mm rims, the Fire Mountain helps build confidence off-road. Available for smaller riders in a 26” wheeled XS version and a 27.5” wheel for sizes S-XL.`,
    spec: "HI-TENSILE STEEL FRAME WITH WATER DECALS,STEEL FORK, SADDLE BACK REST,",
    quantity: 1,
  },

  {
    id: "13",
    image: `${productImages.marlin}`,
    name: "Marlin 6 Gen 2",
    price: 5500,
    size: "Medium",
    color: "red",
    weight: "14.18Kg",
    description: `A 27.5″ / 29″ aluminum frame hardtail crosscountry bike with upper mid-range components.`,
    spec: "HI-TENSILE STEEL FRAME WITH WATER DECALS,STEEL FORK, SADDLE BACK REST,",
    quantity: 1,
  },
];
