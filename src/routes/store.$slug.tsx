import { BASE_URL } from "@/config/site";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowLeft, Check } from "lucide-react";
import { PageFrame } from "@/components/site";
import { products } from "@/data/site";

export const Route = createFileRoute("/store/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    links: [
      { rel: "canonical", href: `${BASE_URL}/store/${loaderData?.slug ?? ""}` },
    ],
    meta: [
      { title: `${loaderData?.name ?? "Software"} — BuildMyApp by Ravana` },
      { name: "description", content: loaderData?.description ?? "Ready-made software by Ravana." },
      { property: "og:title", content: `${loaderData?.name ?? "Software"} — BuildMyApp by Ravana` },
      { property: "og:description", content: loaderData?.description ?? "Ready-made software by Ravana." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: () => (
    <PageFrame index="404" title="Software not found" description="The download you are looking for is not here.">
      <section className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-6 py-8 sm:px-10 md:py-12 lg:px-16 xl:px-20">
        <Link to="/store" className="text-volt hover:underline">
          Back to store
        </Link>
      </section>
    </PageFrame>
  ),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const product = Route.useLoaderData();

  return (
    <PageFrame index="Ready-Made Software" title={product.name} description={product.description}>
      <section className="mx-auto grid w-full max-w-[1800px] flex-1 gap-8 px-6 py-8 sm:px-10 md:grid-cols-[1.1fr_.9fr] md:py-12 lg:px-16 xl:px-20">
        <div>
          <div className="grid min-h-[280px] place-items-center rounded-2xl border border-glass-border bg-ink-soft">
            <span className="font-display text-7xl text-volt">{product.icon}</span>
          </div>
          <div className="mt-7">
            <h2 className="font-display text-xl font-bold text-frost">What is included</h2>
            <ul className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-frost-muted">
                  <Check className="size-4 text-volt" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-glass-border bg-glass p-6">
          <span className="text-xs uppercase tracking-[.16em] text-volt font-mono">{product.category}</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-frost">{product.name}</h2>
          <p className="mt-2 text-sm text-frost-muted">Ready to download and use immediately.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-y border-glass-border py-4 text-sm">
            <span className="text-frost-muted">Version</span>
            <span className="text-right text-frost">{product.version}</span>
            <span className="text-frost-muted">File size</span>
            <span className="text-right text-frost">{product.size}</span>
            <span className="text-frost-muted">Price</span>
            <span className="text-right font-bold text-volt">{product.price}</span>
            <span className="text-frost-muted">Requirements</span>
            <span className="text-right text-frost">{(product as any).requirements || "Web browser"}</span>
          </div>
          <a
            href={product.file}
            download
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-volt px-4 text-sm font-semibold text-ink hover:bg-volt/90 transition"
          >
            <ArrowDownToLine className="size-4" /> Download now
          </a>
          <p className="mt-3 text-center text-xs text-frost-muted">{(product as any).requirements ? "Windows desktop installer (.exe). 100% offline." : "Works in your browser. No sign up needed."}</p>
        </aside>

        <div className="md:col-span-2 pt-4">
          <Link to="/store" className="inline-flex items-center gap-2 text-sm font-semibold text-volt hover:underline">
            <ArrowLeft className="size-4" /> Back to store
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: product.name,
            applicationCategory: product.category === "Desktop" ? "BusinessApplication" : "WebApplication",
            operatingSystem: (product as any).requirements || "Windows, Web",
            softwareVersion: product.version,
            description: product.description,
            author: { "@type": "Person", name: "Ravana" },
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </PageFrame>
  );
}