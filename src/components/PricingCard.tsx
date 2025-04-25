
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  paymentType: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  popular,
  buttonText = "Jetzt auswählen",
  paymentType
}) => {
  return (
    <Card className={`relative flex flex-col ${popular ? 'border-purple-500 bg-gradient-to-b from-purple-900/50 to-background' : 'bg-card'}`}>
      {popular && (
        <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-purple-500">
          Beliebteste Wahl
        </Badge>
      )}
      
      <CardHeader className="text-center">
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}€</span>
          <span className="text-muted-foreground ml-2">{paymentType}</span>
        </div>
        <p className="text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check size={18} className={feature.included ? 'text-green-500' : 'text-gray-500'} />
              <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
