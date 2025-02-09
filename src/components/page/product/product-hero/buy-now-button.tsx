import { generateBuyNowButtonText } from "../../../../data/products/shared";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../ui/alert-dialog";

interface BuyNowButtonProps {
  price: number;
  productName: string;
}

export default function BuyNowButton({
  price,
  productName,
}: BuyNowButtonProps) {
  const handlePurchase = () => {
    // Redirect to checkout/payment page
    window.location.href =
      "https://qualtricsxmfkz7rl8n3.pdx1.qualtrics.com/jfe/preview/previewId/2e65311a-4baf-4132-927f-a259b2cce5ae/SV_3DlfLuw5gk5H1Pw?Q_CHL=preview&Q_SurveyVersionID=current";
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2">
          <span>{generateBuyNowButtonText(price)}</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Purchase</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to purchase the {productName} for £{price}?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handlePurchase}>
            Confirm Purchase
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
