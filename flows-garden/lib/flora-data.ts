export type FloraItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageClassName: "leaf-mask-a" | "leaf-mask-b" | "leaf-mask-c";
};

export const floraData: FloraItem[] = [
  {
    id: "fern-atelier",
    name: "Fern Atelier",
    description:
      "An archival fern study prized for soft frond architecture and resilient structure in filtered light.",
    image: "/images/flora-fern.svg",
    imageClassName: "leaf-mask-a",
  },
  {
    id: "ivy-script",
    name: "Ivy Script",
    description:
      "A trailing cultivar selected for elegant movement and seasonal variation across warm stone surfaces.",
    image: "/images/flora-ivy.svg",
    imageClassName: "leaf-mask-b",
  },
  {
    id: "bonsai-canon",
    name: "Bonsai Canon",
    description:
      "A sculptural canopy species trained in measured cycles, balancing pruning ritual and organic growth.",
    image: "/images/flora-bonsai.svg",
    imageClassName: "leaf-mask-c",
  },
  {
    id: "moss-manuscript",
    name: "Moss Manuscript",
    description:
      "A dense-texture ground specimen that preserves moisture and introduces quiet visual depth to compositions.",
    image: "/images/flora-moss.svg",
    imageClassName: "leaf-mask-b",
  },
];
