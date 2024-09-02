import Layout from "@/components/UI/Layout";
import Info from "@/components/home/Info";
import Content from "@/components/home/Content";

export default function Home() {
  return <Layout leftComponent={<Info />} contentComponent={<Content />} />;
}
