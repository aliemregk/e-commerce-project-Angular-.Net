export interface OrderDetail {
    id: number;
    orderDate: string;
    isDelivered: boolean;
    deliveryDate: string;
    quantity: number;
    totalPrice: number;
    userName:string;
    productName: string;
}