import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface ICustomProps {
  data: any;
}

const RichText = (props: ICustomProps) => {
  return (
    props?.data&&
    <>
  <BlocksRenderer content={props?.data} />
  </>
)
};

export default RichText;
