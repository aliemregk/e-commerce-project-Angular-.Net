import { Photo } from "./photo";

export interface ProductDetails {
    productId: number;
    categoryName: string;
    unitPrice: number;
    photos: Photo[];
}
