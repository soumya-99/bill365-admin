import React, { useEffect, useState } from "react";
import DatatableAdv from "../../../Components/DatatableAdv";
import { useNavigate } from "react-router-dom";
import { Message } from "../../../Components/Message";
import useAPI from "../../../Hooks/useApi";
import HeaderLayout from "../../../Components/HeaderLayout";

function ManageUsersView() {
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
    callApi(`/admin/S_Admin/select_user?id=${0}`, 0);
  }, []);

  const onPress = (data) => {
    console.log(data);
    navigation("/home/superadmin/manageusers/manageuser/" + data.id);
  };

  useEffect(() => {
    setDataSet(
      response?.data?.msg?.filter(
        (e) =>
          e.user_name
            .toLowerCase()
            .includes(search?.toString().toLowerCase()) ||
          e.user_id
            ?.toString()
            .toLowerCase()
            .includes(search?.toString().toLowerCase())
      )
    );
  }, [search]);
  return (
    <div className="py-1 w-full ">
      <HeaderLayout
        title={"Manage Users"}
        btnText={"Add User"}
        onPress={() => onPress({ id: 0 })}
      />
      <section class="bg-gray-50 dark:bg-gray-900 p-3 ">
        <div class="mx-auto w-full">
          <div class="bg-blue-900 dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="overflow-x-auto">
              <DatatableAdv
                onPress={(data) => onPress(data)}
                setSearch={(val) => setSearch(val)}
                title={"Manage Users"}
                btnText={"Add User"}
                onclick={() => onPress({ id: 0 })}
                flag={1}
                headers={[
                  { name: "id", value: "#" },
                  { name: "comp_id", value: "Company ID" },
                  { name: "br_id", value: "Branch ID" },
                  { name: "user_name", value: "User" },
                  { name: "user_id", value: "User ID" },
                  { name: "active_flag", value: "Active Flag" },
                  { name: "login_flag", value: "Login Flag" },
                ]}
                data={dataSet}
              />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
    </div>
  );
}

export default ManageUsersView;
