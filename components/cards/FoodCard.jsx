import { Icon } from "@iconify/react";

export default function FoodCard({ item }) {
  return (
    <div className="rounded-xl border border-[#2e474d] border-dashed overflow-hidden group p-3 relative">
      <div
        className="w-40 h-16 bg-main rounded-full blur-2xl opacity-30 rotate-12 bottom-2 absolute right-[-5%]"
        aria-hidden="true"
      />

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="w-full h-52 bg-[#152225] rounded-md center ">
          {" "}
          <Icon icon="ep:food" className="size-16 text-main/30" />
        </div>
        <span className="absolute top-3 right-3 text-xs text-main bg-main/10 px-2.5 py-1 rounded-full">
          {item?.category}
        </span>
      </div>

      {/* Content Section */}
      <div className="pt-4 px-1 pb-2 z-[10] relative">
        <div className="mb-3">
          <h3 className="font-medium text-xl  mb-1 text-white">{item.name}</h3>
          <p className="text-stone-400 text-sm leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Rating and Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                icon="mdi:star"
                className="w-4 h-4 text-amber-400"
              />
            ))}
            <span className="text-sm text-stone-300 ml-2">
              {" "}
              ({item.reviewCount})
            </span>
          </div>

          <span className=" font-semibold text-xl text-main ">
            {item.price}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-main/80 text-white h-10 text-sm px-4 rounded center gap-2">
            <Icon icon="ep:food" className="w-4 h-4" />
            Add to Cart
          </button>
          <button className="size-10 center bg-white border border-white  text-black rounded-md transition-colors">
            <Icon icon="mdi:heart-outline" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { Icon } from "@iconify/react";

// export default function FoodCard({
//   item,
//   onAddToCart,
//   onToggleFavorite,
//   isFavorite = false,
// }) {
//   return (
//     <div className="rounded-xl border border-[#2e474d] border-dashed overflow-hidden group p-3 relative hover:border-main/50 transition-all duration-300">
//       <div
//         className="w-40 h-16 bg-main rounded-full blur-2xl opacity-30 rotate-12 bottom-2 absolute right-[-5%] group-hover:opacity-40 transition-opacity"
//         aria-hidden="true"
//       />

//       {/* Image Section */}
//       <div className="relative overflow-hidden">
//         <div className="w-full h-52 bg-[#152225] rounded-md flex items-center justify-center group-hover:bg-[#1a2a2f] transition-colors">
//           <Icon icon="ep:food" className="w-16 h-16 text-main/30" />
//         </div>

//         {/* Badges */}
//         <div className="absolute top-3 left-3 flex flex-col gap-2">
//           {item?.isPopular && (
//             <span className="text-xs text-white bg-amber-500/90 px-2 py-1 rounded-full font-medium flex items-center gap-1">
//               <Icon icon="mdi:crown" className="w-3 h-3" />
//               Popular
//             </span>
//           )}
//           {item?.isSpicy && (
//             <span className="text-xs text-white bg-red-500/90 px-2 py-1 rounded-full font-medium flex items-center gap-1">
//               <Icon icon="mdi:chili-hot" className="w-3 h-3" />
//               Spicy
//             </span>
//           )}
//         </div>

//         <span className="absolute top-3 right-3 text-xs text-main bg-main/10 px-2.5 py-1 rounded-full border border-main/20">
//           {item.category}
//         </span>
//       </div>

//       {/* Content Section */}
//       <div className="pt-4 px-1 pb-2 z-[10] relative">
//         <div className="mb-5">
//           <h3 className="font-medium text-xl mb-2 text-white group-hover:text-main transition-colors">
//             {item.name}
//           </h3>
//           <p className="text-stone-400 text-sm leading-relaxed line-clamp-2">

//           </p>
//         </div>

//         {/* Rating and Info */}
//         <div className="flex items-center justify-between mb-5">
//           <div className="flex items-center space-x-1">
//             <div className="flex items-center">
//               {[...Array(5)].map((_, i) => (
//                 <Icon
//                   key={i}
//                   icon="mdi:star"
//                   className={`w-4 h-4 ${
//                     i < Math.floor(item.rating)
//                       ? "text-amber-400"
//                       : "text-stone-600"
//                   }`}
//                 />
//               ))}
//             </div>
//             <span className="text-sm text-stone-300 ml-2">
//               ({item.reviewCount})
//             </span>
//           </div>
//           <span className="font-semibold text-xl text-main">{item.price}</span>
//         </div>

//         {/* Additional Info */}
//         <div className="flex items-center gap-3 mb-4 text-xs text-stone-400">
//           <div className="flex items-center gap-1">
//             <Icon icon="mdi:clock-outline" className="w-3 h-3" />
//             {item.preparationTime}
//           </div>
//           {item.calories && (
//             <div className="flex items-center gap-1">
//               <Icon icon="mdi:fire" className="w-3 h-3" />
//               {item.calories} cal
//             </div>
//           )}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => onAddToCart(item)}
//             className="flex-1 bg-main/80 hover:bg-main text-white h-10 text-sm px-4 rounded flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105"
//           >
//             <Icon icon="mdi:cart-plus" className="w-4 h-4" />
//             Add to Cart
//           </button>
//           <button
//             onClick={() => onToggleFavorite(item)}
//             className={`size-10 flex items-center justify-center border rounded-md transition-all duration-200 hover:scale-105 ${
//               isFavorite
//                 ? "bg-main text-white border-main"
//                 : "bg-white/10 border-white/20 text-white hover:border-main hover:text-main"
//             }`}
//           >
//             <Icon
//               icon={isFavorite ? "mdi:heart" : "mdi:heart-outline"}
//               className="size-5"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
