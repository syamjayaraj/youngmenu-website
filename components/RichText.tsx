import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface ICustomProps {
  data: any;
}

const RichText = (props: ICustomProps) => {
  return <BlocksRenderer content={props?.data} />;
};

export default RichText;
