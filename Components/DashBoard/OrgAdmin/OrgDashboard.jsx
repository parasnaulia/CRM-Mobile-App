import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import StatCard from "../StatCard";
import { Url } from "../../Constants/Constants";

import { View } from "react-native";
import LeadsByStageCharts from "./Charts/LeadsByStageCharts";

const OrganizationDashBoard = () => {
  const MainName = 87;
  const [project, setProjects] = useState([]);
  const [totalSale, setTotalSale] = useState("");

  const [totalRevenue, setOrgRevenue] = useState("s");

  useEffect(() => {
    const projectFetcher = async () => {
      try {
        const data = await fetch(`${Url}properties/project/${MainName}`);
        const jsonData = await data.json();
        if (jsonData?.success) {
          console.log(jsonData?.data);
          console.log("This is The Project Data");

          setProjects(jsonData?.data);
        }
      } catch (e) {
        console.log(
          "There Is Some Error In Getting Project Organization: " + e
        );
      }
    };

    // const projectAdmin = async () => {
    //   try {
    //     const data = await fetch(`${Url}projectAdmin`);
    //     const jsonData = await data.json();
    //     dispatch(AddProjectData(jsonData.data));
    //   } catch (e) {
    //     console.log("There Is Error In inserting Project data: " + e);
    //   }    // };

    if (MainName) {
      projectFetcher();
    }

    // else if (cred.role === "Admin") {
    //   projectAdmin();
    // }
  }, [MainName]);

  useEffect(() => {
    const projectFetcher = async () => {
      const data = await fetch(
        `${Url}OrganizationDashBoard/total-sales/${MainName}`
      );
      const jsonData = await data.json();
      if (jsonData?.success) {
        setTotalSale(jsonData?.totalSales);
      }
    };
    if (MainName) {
      projectFetcher();
    }
  }, [MainName]);

  useEffect(() => {
    const projectFetcher = async () => {
      const data = await fetch(
        `${Url}OrganizationDashBoard/total-revenue/${MainName}`
      );
      const jsonData = await data.json();

      // dispatch(AddProjectData(jsonData.data))
      if (jsonData?.success) {
        setOrgRevenue(jsonData?.totalRevenue);
      }
    };
    if (MainName) {
      projectFetcher();
    }
  }, [MainName]);

  return (
    <ScrollView>
      <View>
        <View>
          {" "}
          <StatCard
            iconName="analytics-outline"
            iconColor="#ffeb3b"
            heading="Total Sale"
            description={totalSale}
            backgroundColor="#673AB7"
            borderColor="#512DA8"
          />
        </View>
        <View>
          {" "}
          <StatCard
            iconName="code-slash-outline"
            iconColor="#ffeb3b"
            heading="Projects"
            description={project?.length}
            backgroundColor="#2196F3"
            borderColor="#1976D2"
          />
        </View>
        <View>
          <StatCard
            iconName="trending-up-outline"
            iconColor="#E91E63"
            heading="Total Revenue"
            description={`₹ ${Number(totalRevenue)?.toLocaleString("en-IN")}`}
            backgroundColor="#FFC107"
            borderColor="#FFA000"
          />
        </View>
      </View>
      <View>
        <LeadsByStageCharts />
      </View>

      {/* <View>
        <LeadsByStageCharts />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default OrganizationDashBoard;
