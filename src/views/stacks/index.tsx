import StackItemCard from "@/components/cards/stack-item-card";
import HeaderSection from "@/components/sections/header-section";
import LabelSection from "@/components/sections/label-section";
import { TCMSPage } from "@/types/cms/page";
import { TCMSStack } from "@/types/cms/stack";

type Props = {
  page: TCMSPage;
  stacks: TCMSStack[];
};

const StacksView = async (props: Props) => {
  const { page, stacks } = props;

  return (
    <>
      <HeaderSection title={page.title} description={page.description} />
      <section className="container space-y-8">
        {stacks.map((item) => (
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
