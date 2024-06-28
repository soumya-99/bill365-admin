import React, { useEffect, useState } from "react";
import axios from "axios";
import DatatableAdv from "../../../Components/DatatableAdv";
import { useNavigate, useParams } from "react-router-dom";
import { Message } from "../../../Components/Message";
import useAPI from "../../../Hooks/useApi";
import HeaderLayout from "../../../Components/HeaderLayout";
import { url } from "../../../Address/baseURL";

function ManageCategoriesView() {
  const params = useParams();
  const navigation = useNavigate();
  const [called, setCalled] = useState(false);
  const { response, callApi } = useAPI();
  const [resp, setRestp] = useState();
  const [isReport, setIsReport] = useState(false);
  const [dataSet, setDataSet] = useState();
  const [search, setSearch] = useState();

  var comp;

  useEffect(() => {
    console.log(response);
    setDataSet(response?.data?.msg);

    if (response?.data?.msg?.length <= 0) {
      Message("error", "No data!");
      setIsReport(false);
    } else {
      if (called) {
        setDataSet(response?.data?.msg);
        setIsReport(true);
        setCalled(false);
      }
    }
  }, [response]);

  useEffect(() => {
    // comp = localStorage.getItem("comp_id");
    callApi(`/admin/S_Admin/select_category?comp_id=${0}&catg_id=${0}`, 0);
    // callApi(`/admin/S_Admin/select_one_outlet?comp_id=${0}&br_id=${0}`, 0);
  }, []);

  const onPress = (data) => {
    console.log(data);
    navigation(
      "/home/superadmin/managecategories/managecategory/" +
        data.sl_no +
        "/" +
        data.comp_id
    );
  };

  useEffect(() => {
    setDataSet(
      response?.data?.msg?.filter(
        (e) =>
          e.category_name
            .toLowerCase()
            .includes(search?.toString().toLowerCase()) ||
          e.comp_id
            ?.toString()
            .toLowerCase()
            .includes(search?.toString().toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="py-1 w-full ">
      <HeaderLayout
        title={"Manage Categories"}
        btnText={"Add Category"}
        onPress={() => onPress({ sl_no: 0 })}
      />
      <section class="bg-gray-50 dark:bg-gray-900 p-3 ">
        <div class="mx-auto w-full">
          <div class="bg-blue-900 dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="overflow-x-auto">
              <DatatableAdv
                onPress={(data) => onPress(data)}
                setSearch={(val) => setSearch(val)}
                title={"Manage Categories"}
                btnText={"Add Category"}
                onclick={() => onPress({ sl_no: 0 })}
                flag={1}
                headers={[
                  { name: "sl_no", value: "Category ID" },
                  { name: "comp_id", value: "Company ID" },
                  { name: "category_name", value: "Category Name" },
                ]}
                data={dataSet}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManageCategoriesView;
