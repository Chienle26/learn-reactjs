import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "features/Cart/selectors";
import { Typography } from "@mui/material";
import { formatPrice } from "utils";

export function ShoppingCart() {
  const cartTotal = useSelector(cartTotalSelector);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const columns = [
    { field: "id", headerName: "ID" },
    // {
    //   field: "product",
    //   headerName: "Product",
    //   width: 300,
    // },
    { field: "productName", headerName: "Product Name", width: 400 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 90,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      description: "This column has a value getter and is not sortable.",
      type: "number",
      sortable: false,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    // {
    //   field: "totalPrice",
    //   headerName: "Total Price",
    //   type: "number",
    // },
    // { field: "actions", headerName: "Action", width: 130 },
  ];

  const rows = cartItems?.map((x) => ({
    id: x.id,
    product: x.product.thumbnail.url,
    productName: x.product.name,
    price: x.product.salePrice,
    quantity: x.quantity,
    totalPrice: 100,
  }));

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <Typography fontWeight="bold" variant="h5" padding={2}>
        Total: {formatPrice(cartTotal)}
      </Typography>
    </div>
  );
}

export default ShoppingCart;
