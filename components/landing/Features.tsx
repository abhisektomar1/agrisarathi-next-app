import React from 'react';
import { Card, CardContent } from '../ui/card';
import { AtSign, DollarSign, Droplets, FileText, Leaf, Search, Shovel, Sprout } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: '🌾',
      text: "Multiple Crops' Advisory based on Package of Practices",
    },
    {
      icon: '🌐',
      text: 'Available in Ten Languages',
    },
    {
      icon: '🦠',
      text: 'Disease Detection to Cure - Linkage to Input Suppliers',
    },
    {
      icon: '🧪',
      text: 'Fertilizer Calculator - as per Soil Structure and Application at Different Stages',
    },
    {
      icon: '🌡️',
      text: 'Production and Cultivation Tips - Climate Tips I Crop Recommendations',
    },
    {
      icon: '📊',
      text: 'Crop Analytics - Cost/Selling price I Yield per Hectare I Price Comparison Across Different Varieties',
    },
    {
      icon: '🧬',
      text: 'Soil Testing',
    },
    {
      icon: '🏪',
      text: "Buying and Selling Information through 'Dukan' and 'Mandi'",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Salient Features/Core Functions</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8">
              <Card className="w-full max-w-sm bg-green-500">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Leaf className="h-8 w-8 text-white mb-2" />
                  <h3 className="font-semibold text-center text-white">Production</h3>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <AtSign className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="font-semibold text-center">
                    Fertilizer Calculator
                  </h3>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Search className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="font-semibold text-center">Detect Disease</h3>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Sprout className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="font-semibold text-center">Crop Suggestion</h3>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <DollarSign className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="font-semibold text-center">
                    Farmer Economics
                  </h3>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Droplets className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="font-semibold text-center">
                    Irrigation Alarm
                  </h3>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <Shovel className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="font-semibold text-center">Soil Testing</h3>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <FileText className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="font-semibold text-center">Govt. Schemes</h3>
                </CardContent>
              </Card>
            </div>
    </div>
  );
}