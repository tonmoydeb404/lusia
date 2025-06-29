import { generateOrganizationSchema } from "@/helpers/schema-org";
import { TCMSWork } from "@/types/cms/work";
import Script from "next/script";

type Props = {
  data: TCMSWork;
};

const WorkCard = (props: Props) => {
  const { data } = props;
  return (
    <article className="flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-1">
      <div className="flex items-center gap-x-2 gap-y-1 flex-wrap">
        <h4 className="text-base font-medium">{data.position},</h4>
        <h5 className="text-muted-foreground">{data.company}</h5>
      </div>
      <div className="flex-1 border-b border-dashed border-gray-300 dark:border-gray-700 mx-2 hidden sm:block" />
      <span className="text-sm text-muted-foreground">
        {data.startYear} - {data.endYear ?? "Present"}
      </span>

      <Script
        id={"schema-org-" + data.id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema(data)),
        }}
      />
    </article>
  );
};

export default WorkCard;
