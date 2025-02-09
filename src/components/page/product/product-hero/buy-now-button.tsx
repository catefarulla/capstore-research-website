import {
  generateBuyNowButtonText,
  purchaseConfirmation,
  generateSurveyUrl,
} from "../../../../data/products/shared";
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
import { useEffect, useState } from "react";

interface BuyNowButtonProps {
  price: number;
  productName: string;
}

export default function BuyNowButton({
  price,
  productName,
}: BuyNowButtonProps) {
  const [prolificId, setProlificId] = useState<string | null>(null);

  useEffect(() => {
    // Get PROLIFIC_PID from URL parameters when component mounts
    const urlParams = new URLSearchParams(window.location.search);
    const pid = urlParams.get("PROLIFIC_PID");
    if (pid) setProlificId(pid);
  }, []);

  const handlePurchase = () => {
    // Redirect to checkout/payment page with product details and Prolific ID if available
    const params: Record<string, string | number> = {
      productName,
      price,
    };

    if (prolificId) {
      params.PROLIFIC_PID = prolificId;
    }

    window.location.href = generateSurveyUrl(params);
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
          <AlertDialogTitle>{purchaseConfirmation.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {purchaseConfirmation.description(productName, price)}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            {purchaseConfirmation.cancelButton}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handlePurchase}>
            {purchaseConfirmation.confirmButton}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
