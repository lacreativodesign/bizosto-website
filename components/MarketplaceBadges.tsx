import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const directoryProfiles = [
  {
    name: "G2",
    href: "https://www.g2.com/sellers/bizosto",
    logo: "/marketplaces/g2.svg",
  },
  {
    name: "Capterra",
    href: "https://www.capterra.com/p/10045962/Bizosto/",
    logo: "/marketplaces/capterra.svg",
  },
  {
    name: "Product Hunt",
    href: "https://www.producthunt.com/products/bizosto",
    logo: "/marketplaces/product-hunt.svg",
  },
  {
    name: "Crunchbase",
    href: "https://www.crunchbase.com/organization/bizosto",
    logo: "/marketplaces/crunchbase.svg",
  },
] as const;

export default function MarketplaceBadges() {
  return (
    <div className="marketplace-rail" aria-label="Find Bizosto on independent software directories">
      <div className="marketplace-rail__label">
        <span className="marketplace-rail__pulse" aria-hidden="true" />
        <span>Find Bizosto on independent software directories</span>
      </div>

      <div className="marketplace-rail__badges">
        <a
          href="https://www.saashub.com/bizosto?utm_source=badge&utm_campaign=badge&utm_content=bizosto&badge_variant=color&badge_kind=approved"
          target="_blank"
          rel="noopener noreferrer"
          className="marketplace-badge marketplace-badge--saashub"
          aria-label="View Bizosto's approved listing on SaaSHub (opens in a new tab)"
        >
          <span className="marketplace-badge__saashub-plate">
            <Image
              src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1"
              alt="SaaSHub Approved badge for Bizosto"
              width={150}
              height={50}
              unoptimized
              className="h-auto w-[132px] sm:w-[142px]"
            />
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-white/45" aria-hidden="true" />
        </a>

        {directoryProfiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            className="marketplace-badge"
            aria-label={`View Bizosto on ${profile.name} (opens in a new tab)`}
          >
            <span className="marketplace-badge__logo-plate" aria-hidden="true">
              <Image src={profile.logo} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
            </span>
            <span className="marketplace-badge__copy">
              <span className="marketplace-badge__overline">View profile</span>
              <span className="marketplace-badge__name">{profile.name}</span>
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-white/45" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
