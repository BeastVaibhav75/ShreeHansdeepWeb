export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
};

export const products: Product[] = [
  // Home Furniture
  {
    id: "hf-1",
    name: "Modern Sofa Set",
    description: "Contemporary 3+2+1 sofa set with premium upholstery and wooden frame",
    category: "home-furniture",
    image: "/images/products/sofa-set.jpg",
  },
  {
    id: "hf-2",
    name: "Traditional Sofa Set",
    description: "Classic design sofa set with intricate wood carvings and comfortable seating",
    category: "home-furniture",
    image: "/images/products/traditional-sofa.jpg",
  },
  {
    id: "hf-3",
    name: "Dining Table Set",
    description: "Elegant dining table with 6 matching chairs, perfect for family gatherings",
    category: "home-furniture",
    image: "/images/products/dining-table.jpg",
  },
  {
    id: "hf-4",
    name: "King Size Bed",
    description: "Sturdy king-size bed with storage drawers and premium wood finish",
    category: "home-furniture",
    image: "/images/products/king-bed.jpg",
  },
  {
    id: "hf-5",
    name: "Queen Size Bed",
    description: "Beautiful queen-size bed with headboard and matching side tables",
    category: "home-furniture",
    image: "/images/products/queen-bed.jpg",
  },
  {
    id: "hf-6",
    name: "Upholstered Bed",
    description: "Modern upholstered bed with soft fabric headboard and elegant design",
    category: "home-furniture",
    image: "/images/products/upholstered-bed.jpg",
  },
  {
    id: "hf-7",
    name: "Coffee Table",
    description: "Stylish center table with glass top and wooden base",
    category: "home-furniture",
    image: "/images/products/coffee-table.jpg",
  },
  {
    id: "hf-8",
    name: "Wardrobe",
    description: "Spacious wardrobe with sliding doors and multiple storage compartments",
    category: "home-furniture",
    image: "/images/products/wardrobe.jpg",
  },
  {
    id: "hf-9",
    name: "Storage Unit",
    description: "Multi-purpose storage unit with shelves and drawers",
    category: "home-furniture",
    image: "/images/products/storage-unit.jpg",
  },
  
  // Office Furniture
  {
    id: "of-1",
    name: "Executive Office Chair",
    description: "Ergonomic executive chair with premium leather and adjustable features",
    category: "office-furniture",
    image: "/images/products/executive-chair.jpg",
  },
  {
    id: "of-2",
    name: "Revolving Chair",
    description: "Comfortable revolving office chair with lumbar support",
    category: "office-furniture",
    image: "/images/products/revolving-chair.jpg",
  },
  {
    id: "of-3",
    name: "Office Table",
    description: "Professional office desk with drawers and cable management",
    category: "office-furniture",
    image: "/images/products/office-table.jpg",
  },
  {
    id: "of-4",
    name: "Workstation",
    description: "Modular workstation setup for multiple employees",
    category: "office-furniture",
    image: "/images/products/workstation.jpg",
  },
  {
    id: "of-5",
    name: "Conference Table",
    description: "Large conference table for boardrooms and meeting rooms",
    category: "office-furniture",
    image: "/images/products/conference-table.jpg",
  },
  {
    id: "of-6",
    name: "Reception Seating",
    description: "Elegant reception area seating with modern design",
    category: "office-furniture",
    image: "/images/products/reception-seating.jpg",
  },
  
  // Industrial Items
  {
    id: "ind-1",
    name: "Wooden Packing Material",
    description: "Heavy-duty wooden packing materials for industrial use",
    category: "industrial",
    image: "/images/products/wooden-packing.jpg",
  },
  {
    id: "ind-2",
    name: "Industrial Pallet (Standard)",
    description: "Standard size wooden pallet for warehouse and shipping",
    category: "industrial",
    image: "/images/products/pallet-standard.jpg",
  },
  {
    id: "ind-3",
    name: "Industrial Pallet (Large)",
    description: "Large size pallet for heavy machinery and bulk goods",
    category: "industrial",
    image: "/images/products/pallet-large.jpg",
  },
  {
    id: "ind-4",
    name: "Heavy-Duty Wooden Crate",
    description: "Custom-sized wooden crates for secure transportation",
    category: "industrial",
    image: "/images/products/wooden-crate.jpg",
  },
  {
    id: "ind-5",
    name: "Factory Furniture",
    description: "Customized furniture solutions for factory and warehouse spaces",
    category: "industrial",
    image: "/images/products/factory-furniture.jpg",
  },
  {
    id: "ind-6",
    name: "Storage Rack",
    description: "Heavy-duty storage racks for industrial warehouses",
    category: "industrial",
    image: "/images/products/storage-rack.jpg",
  },
  
  // Custom Woodwork
  {
    id: "cw-1",
    name: "Modular Furniture",
    description: "Custom modular furniture designed to fit your space perfectly",
    category: "custom-woodwork",
    image: "/images/products/modular-furniture.jpg",
  },
  {
    id: "cw-2",
    name: "CNC Design Panels",
    description: "Intricate CNC-carved design panels for interior decoration",
    category: "custom-woodwork",
    image: "/images/products/cnc-panels.jpg",
  },
  {
    id: "cw-3",
    name: "Interior Woodwork",
    description: "Complete interior woodwork solutions for homes and offices",
    category: "custom-woodwork",
    image: "/images/products/interior-woodwork.jpg",
  },
  {
    id: "cw-4",
    name: "Custom Doors",
    description: "Bespoke doors and frames crafted to your specifications",
    category: "custom-woodwork",
    image: "/images/products/custom-doors.jpg",
  },
  {
    id: "cw-5",
    name: "Wooden Partitions",
    description: "Elegant wooden partitions for space division",
    category: "custom-woodwork",
    image: "/images/products/wooden-partitions.jpg",
  },
  
  // Metal Works
  {
    id: "mw-1",
    name: "Stainless Steel Railings",
    description: "Premium S.S. railings for stairs, balconies, and terraces",
    category: "metal-works",
    image: "/images/products/ss-railings.jpg",
  },
  {
    id: "mw-2",
    name: "Mild Steel Fabrication",
    description: "Custom M.S. fabrication for industrial and commercial use",
    category: "metal-works",
    image: "/images/products/ms-fabrication.jpg",
  },
  {
    id: "mw-3",
    name: "Industrial Frames",
    description: "Heavy-duty metal frames and structures for factories",
    category: "metal-works",
    image: "/images/products/industrial-frames.jpg",
  },
  {
    id: "mw-4",
    name: "Mixed Wood-Metal Furniture",
    description: "Designer furniture combining wood and metal for modern aesthetics",
    category: "metal-works",
    image: "/images/products/mixed-furniture.jpg",
  },
];

export const categories = [
  {
    id: "home-furniture",
    name: "Home Furniture",
    description: "Elegant and durable furniture for your home",
  },
  {
    id: "office-furniture",
    name: "Office Furniture",
    description: "Professional workspace solutions",
  },
  {
    id: "industrial",
    name: "Factory & Industrial Items",
    description: "Heavy-duty packing materials and industrial solutions",
  },
  {
    id: "custom-woodwork",
    name: "Custom Woodwork",
    description: "Bespoke interior and furniture solutions",
  },
  {
    id: "metal-works",
    name: "Metal Works (M.S. & S.S.)",
    description: "Metal fabrication and structures",
  },
];

