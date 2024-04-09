import { loadStorePageSeo } from "@/apiService/apiService";
import { ISeo } from "@/model/models";
import imageUrl from "@/utils/generate-image-url";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seo: ISeo = await loadStorePageSeo(params?.slug);
  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
    openGraph: {
      type: seo?.ogType ?? "website",
      url: seo?.ogUrl,
      title: seo?.ogTitle,
      description: seo?.ogDescription,
      siteName: seo?.ogSiteName,
      images: [imageUrl(seo?.ogImage?.data?.attributes?.url)],
    },
  };
}

export default function StoreLayout(props: any) {
  return <>{props?.children}</>;
}
