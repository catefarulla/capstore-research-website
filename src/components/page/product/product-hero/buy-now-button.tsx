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
import { Button } from "../../../ui/button";
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
        <Button variant="accent" className="w-full" size="lg">
          {generateBuyNowButtonText(price)}
        </Button>
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
