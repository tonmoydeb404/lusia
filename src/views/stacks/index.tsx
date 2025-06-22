import StackItemCard from "@/components/cards/stack-item-card";
import HeaderSection from "@/components/sections/header-section";
import LabelSection from "@/components/sections/label-section";
import { fetchStacks } from "@/services/cms/stack";

type Props = {};

const StacksView = async (props: Props) => {
  const stacksRes = await fetchStacks();

  return (
    <>
      <HeaderSection
        title="Stacks"
        description="Tools and technologies I use regularly"
      />
      <section className="container space-y-8">
        {stacksRes.map((item) => (
          <LabelSection label={item.title} key={item.id}>
            <section className="grid grid-cols-1 md:grid-cols-2 p-1 sm:p-2 gap-2">
              {item.items.map((item) => (
                <StackItemCard key={item.id} data={item} />
              ))}
            </section>
          </LabelSection>
        ))}
      </section>
    </>
  );
};

export default StacksView;
