import Content from "@/components/projects/Content";
import List from "@/components/projects/List";
import Layout from "@/components/UI/Layout";

export default function Projects() {
  return <Layout leftComponent={<List />} contentComponent={<Content />} />;
}
