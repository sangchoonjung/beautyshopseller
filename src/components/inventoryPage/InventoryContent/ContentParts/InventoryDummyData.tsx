export interface InventoryItemData {
  Status: string;
  Image: string;
  SKU: number;
  Name: string;
  Created: string;
  Available: string;
  FeePerSold: number;
  Price: number;
  ProductQuantity: number;
}

// function createData(
//   Status: string,
//   //상태
//   Image: string,
//   //이미지
//   SKU: number,
//   //단위
//   Name: string,
//   //이름
//   Created: string,
//   //등록
//   Available: string,
//   //활성화
//   FeePerSold: number,
//   //수수료
//   Price: number,
//   //가격
//   ProductQuantity:number
// ): InventoryItemData {
//   return {
//     Name,
//     Status,
//     Image,
//     SKU,
//     Created,
//     Available,
//     FeePerSold,
//     Price,
//     ProductQuantity,
//   };
// }

// export const datas = [
//   createData(
//     "Active",
//     "null",
//     3.7,
//     "Cupcake",
//     "20221202",
//     "Available",
//     0.05,
//     20
//   ),
//   createData(
//     "Inactive",
//     "null",
//     25.0,
//     "Donut",
//     "20221227",
//     "Available",
//     0.051,
//     4.9
//   ),
//   createData(
//     "Incomplete",
//     "null",
//     16.0,
//     "Eclair",
//     "20211011",
//     "Available",
//     0.024,
//     6.0
//   ),
//   createData(
//     "Listing Removed",
//     "null",
//     6.0,
//     "Frozen yoghurt",
//     "20221108",
//     "Available",
//     0.024,
//     4.0
//   ),
//   createData(
//     "Search Suppressed",
//     "null",
//     16.0,
//     "Gingerbread",
//     "20220812",
//     "Available",
//     0.049,
//     3.9
//   ),
//   createData(
//     "Active",
//     "null",
//     3.2,
//     "Honeycomb",
//     "20220505",
//     "Available",
//     0.087,
//     6.5
//   ),
//   createData(
//     "Inactive",
//     "null",
//     9.0,
//     "Ice cream sandwich",
//     "20220105",
//     "Available",
//     0.037,
//     4.3
//   ),
//   createData(
//     "Incomplete",
//     "null",
//     0.1,
//     "Jelly Bean",
//     "20220308",
//     "Unavailable",
//     0.05,
//     94
//   ),
//   createData(
//     "Listing Removed",
//     "null",
//     26.0,
//     "KitKat",
//     "20220404",
//     "Unavailable",
//     0.065,
//     7.0
//   ),
//   createData(
//     "Search Suppressed",
//     "null",
//     0.2,
//     "Lollipop",
//     "20220812",
//     "Unavailable",
//     0.098,
//     0.03
//   ),
//   createData(
//     "Active",
//     "null",
//     1,
//     "Marshmallow",
//     "20220701",
//     "Unavailable",
//     0.081,
//     2.0
//   ),
//   createData(
//     "Inactive",
//     "null",
//     19.0,
//     "Nougat",
//     "20221208",
//     "Unavailable",
//     0.09,
//     37.0
//   ),
//   createData(
//     "Incomplete",
//     "null",
//     18.0,
//     "Oreo",
//     "20221231",
//     "Unavailable",
//     0.063,
//     4.0
//   ),
// ];
