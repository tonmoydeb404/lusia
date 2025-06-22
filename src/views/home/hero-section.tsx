import { getIcon } from "@/common/icons";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { Props } from ".";

const HeroSection = async (props: Props) => {
  const { page, profile } = props;

  return (
    <section className="container pb-24">
      {profile?.avatar && (
        <Image
          src={profile.avatar.url}
          alt={profile.avatar.alt}
          width={100}
          height={100}
          className="mb-7 rounded-full"
        />
      )}
      <h2 className="text-4xl font-bold mb-2">{page.title}</h2>
      <p className="text-lg mb-10">{page.description}</p>
      <div className="flex items-center flex-wrap gap-2">
        {profile?.callToActions?.map((item, index) => {
          const Icon = getIcon(item.ref);

          return (
            <Button
              className="rounded-full"
              asChild
              key={item.href}
              variant={index === 0 ? "default" : "outline"}
            >
              <Link
                href={item.href}
                target={item.newTab ? "_blank" : undefined}
              >
                {item.ref && <Icon />} {item.title}
              </Link>
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;
