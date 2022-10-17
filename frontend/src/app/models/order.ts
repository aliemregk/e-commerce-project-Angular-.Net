export interface Order {
    id: number;
    orderDate: string;
    isDelivered: boolean;
    deliveryDate: string;
    quantity: number;
    totalPrice: number;
    userId: number;
    productId: number;
}