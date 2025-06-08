/* eslint-disable @next/next/no-img-element */
import ViewHeader from "@/components/common/view-header";
import LabelSection from "@/components/sections/label-section";
import { stacks } from "@/db/stacks";

type Props = {};

const StacksView = (props: Props) => {
  return (
    <>
      <ViewHeader
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
                    <h4 className="text-base font-bold">{item.title}</h4>
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
