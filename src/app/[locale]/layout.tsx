import React from "react";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import Navbar from "@/components/common/Navbar";
import Footer from '@/components/common/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'
import { env } from "@/env";
import { type Metadata } from "next";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({
    params
}: Omit<Props, "children">): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = "https://andresgilli.vercel.app";

    return {
        metadataBase: new URL(baseUrl),
        alternates: {
            // Canonical is always the full absolute URL for the current locale
            canonical: locale === "es" ? baseUrl : `${baseUrl}/${locale}`,
            languages: {
                "x-default": baseUrl,
                es: baseUrl,
                en: `${baseUrl}/en`,
                pt: `${baseUrl}/pt`,
            },
        },
    };
}

export default function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = useLocale();
    const messages = useMessages();
    return (
        <html lang={locale} className={cn(GeistSans.variable, "scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100")}>
            <body suppressHydrationWarning>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
                {env.GA_ID && <GoogleAnalytics gaId={env.GA_ID} />}
            </body>
        </html>
    );
}
