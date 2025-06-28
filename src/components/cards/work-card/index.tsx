import { TCMSWork } from "@/types/cms/db/work";

type Props = {
  data: TCMSWork;
};

const WorkCard = (props: Props) => {
  const { data } = props;
  return (
    <article className="flex items-center gap-2">
      <h4 className="text-base font-medium">{data.position},</h4>
      <h5 className="text-muted-foreground">{data.company}</h5>
      <div className="flex-1 border-b border-dashed border-gray-300 dark:border-gray-700 mx-2" />
      <span className="text-sm text-muted-foreground">
        {data.startYear} - {data.endYear ?? "Present"}
      </span>
    </article>
  );
};

export default WorkCard;
