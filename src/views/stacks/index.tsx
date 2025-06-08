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
            <section className="grid grid-cols-2">
              {item.items.map((item) => (
                <article key={item.id} className="flex items-start p-4">
                  <div className="shrink-0 p-3">
                    <img
                      src={item.icon.url}
                      alt={item.icon?.alt || item.title}
                      width={30}
                    />
                  </div>
                  <section>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
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
