"use client";

import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./back-button";
import Header from "./header";
import { Socials } from "./socials";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLbel: string;
  backButtonHref: string;
  showSocials?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLbel,
  backButtonHref,
  showSocials = false,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLbel} />
      </CardFooter>
    </Card>
  );
};
