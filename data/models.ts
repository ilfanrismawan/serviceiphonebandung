import type { IPhoneModel } from "@/types";

export const models: IPhoneModel[] = [
  { slug: "iphone-7", name: "iPhone 7", variants: ["iPhone 7"], year: 2016, port: "Lightning" },
  { slug: "iphone-7-plus", name: "iPhone 7 Plus", variants: ["iPhone 7 Plus"], year: 2016, port: "Lightning" },
  { slug: "iphone-8", name: "iPhone 8", variants: ["iPhone 8"], year: 2017, port: "Lightning" },
  { slug: "iphone-8-plus", name: "iPhone 8 Plus", variants: ["iPhone 8 Plus"], year: 2017, port: "Lightning" },
  { slug: "iphone-x", name: "iPhone X", variants: ["iPhone X"], year: 2017, port: "Lightning" },
  { slug: "iphone-xr", name: "iPhone XR", variants: ["iPhone XR"], year: 2018, port: "Lightning" },
  { slug: "iphone-xs", name: "iPhone XS", variants: ["iPhone XS"], year: 2018, port: "Lightning" },
  { slug: "iphone-xs-max", name: "iPhone XS Max", variants: ["iPhone XS Max"], year: 2018, port: "Lightning" },
  { slug: "iphone-11", name: "iPhone 11", variants: ["iPhone 11"], year: 2019, port: "Lightning" },
  { slug: "iphone-11-pro", name: "iPhone 11 Pro", variants: ["iPhone 11 Pro"], year: 2019, port: "Lightning" },
  { slug: "iphone-11-pro-max", name: "iPhone 11 Pro Max", variants: ["iPhone 11 Pro Max"], year: 2019, port: "Lightning" },
  { slug: "iphone-12-mini", name: "iPhone 12 Mini", variants: ["iPhone 12 Mini"], year: 2020, port: "Lightning" },
  { slug: "iphone-12", name: "iPhone 12", variants: ["iPhone 12"], year: 2020, port: "Lightning" },
  { slug: "iphone-12-pro", name: "iPhone 12 Pro", variants: ["iPhone 12 Pro"], year: 2020, port: "Lightning" },
  { slug: "iphone-12-pro-max", name: "iPhone 12 Pro Max", variants: ["iPhone 12 Pro Max"], year: 2020, port: "Lightning" },
  { slug: "iphone-13-mini", name: "iPhone 13 Mini", variants: ["iPhone 13 Mini"], year: 2021, port: "Lightning" },
  { slug: "iphone-13", name: "iPhone 13", variants: ["iPhone 13"], year: 2021, port: "Lightning" },
  { slug: "iphone-13-pro", name: "iPhone 13 Pro", variants: ["iPhone 13 Pro"], year: 2021, port: "Lightning" },
  { slug: "iphone-13-pro-max", name: "iPhone 13 Pro Max", variants: ["iPhone 13 Pro Max"], year: 2021, port: "Lightning" },
  { slug: "iphone-14", name: "iPhone 14", variants: ["iPhone 14"], year: 2022, port: "Lightning" },
  { slug: "iphone-14-plus", name: "iPhone 14 Plus", variants: ["iPhone 14 Plus"], year: 2022, port: "Lightning" },
  { slug: "iphone-14-pro", name: "iPhone 14 Pro", variants: ["iPhone 14 Pro"], year: 2022, port: "Lightning" },
  { slug: "iphone-14-pro-max", name: "iPhone 14 Pro Max", variants: ["iPhone 14 Pro Max"], year: 2022, port: "Lightning" },
  { slug: "iphone-15", name: "iPhone 15", variants: ["iPhone 15"], year: 2023, port: "USB-C" },
  { slug: "iphone-15-plus", name: "iPhone 15 Plus", variants: ["iPhone 15 Plus"], year: 2023, port: "USB-C" },
  { slug: "iphone-15-pro", name: "iPhone 15 Pro", variants: ["iPhone 15 Pro"], year: 2023, port: "USB-C" },
  { slug: "iphone-15-pro-max", name: "iPhone 15 Pro Max", variants: ["iPhone 15 Pro Max"], year: 2023, port: "USB-C" },
  { slug: "iphone-16", name: "iPhone 16", variants: ["iPhone 16"], year: 2024, port: "USB-C" },
  { slug: "iphone-16-plus", name: "iPhone 16 Plus", variants: ["iPhone 16 Plus"], year: 2024, port: "USB-C" },
  { slug: "iphone-16-pro", name: "iPhone 16 Pro", variants: ["iPhone 16 Pro"], year: 2024, port: "USB-C" },
  { slug: "iphone-16-pro-max", name: "iPhone 16 Pro Max", variants: ["iPhone 16 Pro Max"], year: 2024, port: "USB-C" },
];

export function getModel(slug: string): IPhoneModel | undefined {
  return models.find((m) => m.slug === slug);
}
