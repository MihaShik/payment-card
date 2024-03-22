interface totalPrice {
	rubles: number;
	kopecks: number;
}

export interface ReceiptProps {
	title: string;
	message: string; 
	totalPrice: totalPrice;
}