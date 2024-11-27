// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-white border-white

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
  {
    label: "White", value: "white", tw: "white",
  },
  {
    label: "Blue", value: "blue", tw: "blue-950",
  },
  {
    label: "Black", value: "black", tw: "zinc-900",
  }
] as const

export const SIZES = 
  {
    name: "sizes",
    options: [
      {
        label: "Small",
        value: "small",
        description: "Small",
      },
      {
        label: "Medium",
        value: "medium",
        description: "Medium",
      },
      {
        label: "Large",
        value: "large",
        description: "Large",
      },
      {
        label: "Extra Large",
        value: "extralarge", 
        description: "Extra Large",
      },
    ]
  } as const

export const MODELS = 
  {
    name: "models",
    options: [
      {
        label: "iPhone X",
        value: "iphonex",
      },
      {
        label: "iPhone XS",
        value: "iphonexs"
      },
      {
        label: "iPhone 11",
        value: "iphone11"
      },
      {
        label: "iPhone 12",
        value: "iphone12"
      },
      {
        label: "iPhone 13",
        value: "iphone13"
      },
      {
        label: "iPhone 14",
        value: "iphone14"
      },
      {
        label: "iPhone 15",
        value: "iphone15"
      },
      {
        label: "iPhone 16",
        value: "iphone16"
      }
    ]
  } as const

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Polyester",
      value: "polyester",
      description: undefined,
      price: PRODUCT_PRICES.material.polyester,
    },
    {
      label: "Cotton",
      value: "cotton",
      description: "Soft and durable",
      price: PRODUCT_PRICES.material.cotton,
    },
  ]
} as const

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finsih",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ]
} as const