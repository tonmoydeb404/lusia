/* eslint-disable @next/next/no-img-element */
import HeaderSection from "@/components/sections/header-section";
import LabelSection from "@/components/sections/label-section";
import { Badge } from "@/components/ui/badge";
import { stacks } from "@/db/stacks";

type Props = {};

const StacksView = (props: Props) => {
  return (
    <>
      <HeaderSection
        title="Stacks"
        description="Tools and technologies I use regularly"
      />
      <section className="container space-y-5">
        {stacks.map((item) => (
          <LabelSection label={item.title} key={item.id}>
            <section className="grid grid-cols-1 md:grid-cols-2 p-1 sm:p-2 gap-2">
              {item.items.map((item) => (
                <article
                  key={item.id}
                  className="flex items-start p-3 gap-x-4 hover:bg-accent rounded-xl duration-200"
                >
                  <div className="shrink-0 size-8 inline-flex items-center justify-center bg-accent rounded-md">
                    <img
                      src={item.icon.url}
                      alt={item.icon?.alt || item.title}
                      width={20}
                    />
                  </div>
                  <section>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-base font-bold">{item.title}</h4>{" "}
                      {item.level ? (
                        <Badge variant={"outline"} className="text-xs">
                          {item.level}
                        </Badge>
                      ) : null}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </section>
                </article>
              ))}
            </section>
          </LabelSection>
        ))}
      </section>
    </>
  );
};

export default StacksView;
