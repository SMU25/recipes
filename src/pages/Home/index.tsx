import React, { FC } from "react";
import { PageLayout } from "src/components/Layouts/PageLayout";
import { Categories } from "src/page-components/home/Categories";
import { Meals } from "src/page-components/home/Meals";

const Home: FC = () => (
  <PageLayout>
    <Categories />
    <Meals />
  </PageLayout>
);

export default Home;
