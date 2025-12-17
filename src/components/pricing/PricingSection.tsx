
'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

type PricingPeriod = 'monthly' | 'yearly' | 'oneTime';

interface PlanDetails {
  price: string;
  period: string;
  billingKey: string;
}

interface PricingTier {
  basic: PlanDetails;
  pro: PlanDetails;
}

const PRICING_OPTIONS: Record<PricingPeriod, PricingTier> = {
  monthly: {
    basic: {
      price: '6.99',
      period: 'month',
      billingKey: 'basicBilling'
    },
    pro: {
      price: '11.99',
      period: 'month',
      billingKey: 'proBilling'
    }
  },
  yearly: {
    basic: {
      price: '69.99',
      period: 'periodYear',
      billingKey: 'basicBillingYearly'
    },
    pro: {
      price: '119.99',
      period: 'periodYear',
      billingKey: 'proBillingYearly'
    }
  },
  oneTime: {
    basic: {
      price: '29.99',
      period: 'periodOnce',
      billingKey: 'basicBillingOneTime'
    },
    pro: {
      price: '49.99',
      period: 'periodOnce',
      billingKey: 'proBillingOneTime'
    }
  }
};

export default function PricingSection() {
  const t = useTranslations('Pricing');
  const [period, setPeriod] = useState<PricingPeriod>('monthly');

  const currentPricing = PRICING_OPTIONS[period];

  return (
    <div className="py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <Tabs defaultValue="monthly" className="w-fit" onValueChange={(value) => setPeriod(value as PricingPeriod)}>
          <TabsList>
            <TabsTrigger value="monthly">{t('monthly')}</TabsTrigger>
            <TabsTrigger value="yearly">{t('yearly')}</TabsTrigger>
            <TabsTrigger value="oneTime">{t('oneTime')}</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Basic Plan */}
        <div className="rounded-2xl border p-8">
          <h3 className="text-xl font-semibold">{t('basicTitle')}</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-bold">{currentPricing.basic.price}</span>
            <span className="ml-1 text-muted-foreground">/ {t(currentPricing.basic.period)}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{t(currentPricing.basic.billingKey)}</p>

          <Button className="mt-6 w-full">{t('upgrade')}</Button>

          <div className="mt-8 space-y-4">
            <h4 className="text-sm font-semibold">{t('basicFeatureTitle')}</h4>
            <ul className="space-y-3">
              {['credits', 'generation', 'cover', 'scripts', 'download'].map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">{t(`basic.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl border p-8">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold">{t('proTitle')}</h3>
            <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
              {t('popular')}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-bold">{currentPricing.pro.price}</span>
            <span className="ml-1 text-muted-foreground">/ {t(currentPricing.pro.period)}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{t(currentPricing.pro.billingKey)}</p>

          <Button className="mt-6 w-full">{t('upgrade')}</Button>

          <div className="mt-8 space-y-4">
            <h4 className="text-sm font-semibold">{t('proFeatureTitle')}</h4>
            <ul className="space-y-3">
              {['credits', 'basic', 'llm', 'tts', 'styles'].map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">{t(`pro.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}