import Content from "@/components/profile/Content";
import Index from "@/components/profile/Index";
import Layout from "@/components/UI/Layout";
import React from "react";

export default function page() {
  return <Layout leftComponent={<Index />} contentComponent={<Content />} />;
}
