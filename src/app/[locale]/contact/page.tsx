
import ContactForm from '@/components/contact/ContactForm';
import { getTranslations } from 'next-intl/server';
import { type Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('Contact');
    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
    };
}

export default async function ContactPage() {
    const t = await getTranslations('Contact');

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t('description')}
                </p>
            </div>
            <ContactForm />
        </div>
    );
}
