import { Button, ButtonProps } from "@/components/ui/button";
import CTAPopup from "@/components/ui/cta-popup";
import { useCTAPopup } from "@/hooks/use-cta";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const CTAButton = ({
  children,
  className,
  variant = "default",
  ...props
}: CTAButtonProps) => {
  const { isOpen, openPopup, closePopup } = useCTAPopup();

  return (
    <>
      <Button
        onClick={openPopup}
        className={cn(
          "bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90",
          className
        )}
        variant={variant}
        {...props}
      >
        {children}
      </Button>
      <CTAPopup isOpen={isOpen} onClose={closePopup} />
    </>
  );
}; 