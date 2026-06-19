import type { Metadata } from "next";
import { SeoLanding } from "@/components/SeoLanding";

export const metadata: Metadata = {
  title: "Kaygı Günlüğü ve Korku Takibi — DidntHappen",
  description:
    "DidntHappen, kaygılı tahminlerini yazıp daha sonra gerçekten ne olduğunu kontrol etmene yardımcı olan iPhone uygulamasıdır.",
  alternates: { canonical: "/tr/kaygi-gunlugu" },
};

export default function KaygiGunluguPage() {
  return (
    <SeoLanding
      eyebrow="Kaygı günlüğü"
      title="Korkularının kaç tanesi gerçekten oluyor?"
      subtitle="DidntHappen kaygılı düşüncelerini bir tahmin gibi yazmanı, tarih koymanı ve sonra gerçek sonuçla karşılaştırmanı sağlar. Amaç kendine gaz vermek değil; kendi kanıtını biriktirmek."
      primaryKeyword="kaygı günlüğü ve korku takibi"
      features={[
        {
          title: "Kaygıyı tahmine çevir",
          body: "Aklındaki felaket senaryosunu net yaz. Ne olmasından korkuyorsun, ne kadar olası geliyor, ne zaman belli olacak?",
        },
        {
          title: "Sonucu kontrol et",
          body: "Zamanı gelince gerçekten oldu mu, kısmen mi oldu, yoksa hiç mi olmadı işaretle.",
        },
        {
          title: "Kendi oranını gör",
          body: "Zamanla beyninin ne kadar sık felaket tahmini yaptığını ve gerçeğin nasıl çıktığını görürsün.",
        },
      ]}
      comparison={[
        {
          title: "Meditasyon değil",
          body: "DidntHappen nefes alıp geç demiyor; korkunun tahminini kayda alıp sonra kanıtla kontrol ettiriyor.",
        },
        {
          title: "Terapi değil",
          body: "Bu bir tıbbi ürün veya tedavi değildir. Kişisel farkındalık ve günlük tutma aracıdır.",
        },
        {
          title: "Özel kayıt",
          body: "Girdiğin korkular senin özel kaydındır. Paylaşım kartları isteğe bağlıdır.",
        },
      ]}
      faqs={[
        {
          question: "DidntHappen ne işe yarar?",
          answer: "Kaygılı tahminlerini yazmana ve daha sonra gerçekten ne olduğunu kontrol etmene yarar.",
        },
        {
          question: "Türkçe kullanılabilir mi?",
          answer: "Web sayfası Türkçe destek verir; iOS uygulama deneyimi App Store sürümüne göre değişebilir.",
        },
        {
          question: "Bu terapi yerine geçer mi?",
          answer: "Hayır. DidntHappen terapi, teşhis veya kriz desteği değildir. Ciddi durumda profesyonel destek alınmalıdır.",
        },
      ]}
    />
  );
}
