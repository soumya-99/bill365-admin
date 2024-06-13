import React, { useEffect, useState } from "react";
import SearchForm from "../../Components/SearchForm";
import { useNavigate } from "react-router-dom";
import DatatableAdv from "../../Components/DatatableAdv";
import { Message } from "../../Components/Message";
import useAPI from "../../Hooks/useApi";
function Byphone() {
  const navigate = useNavigate();
  const [called, setCalled] = useState(false);
  const { response, callApi } = useAPI();
  const [resp, setRestp] = useState();
  const [isReport, setIsReport] = useState(false);
  const [dataSet, setDataSet] = useState();
  const [search, setSearch] = useState();
  var comp;

  useEffect(() => {
    // console.log(response?.data?.msg?.length<=0)
    // if(!called)
    // setRestp(response?.data?.msg)
    if (response?.data?.msg?.length <= 0) {
      Message("error", "No data!");
      setIsReport(false);
    } else {
      if (called) {
        setDataSet(response?.data?.msg);
        setIsReport(true);
        // setCalled(false)
      }
    }
  }, [response]);
  useEffect(() => {
    comp = localStorage.getItem("comp_id");
    // callApi('/admin/search_by_date',1,{comp_id:+comp});
  }, []);
  const onPress = (data) => {
    console.log(data);
    comp = localStorage.getItem("comp_id");
    setCalled(true);
    setDataSet([]);

    callApi("/admin/search_by_phone", 1, {
      from_date: data.from_dt,
      to_date: data.to_dt,
      phone_no: data.phone.toString(),
      comp_id: +comp,
    });
  };
  const onView = (data) => {
    navigate(
      "/home/search/printbill/" + data.receipt_no + "/" + data.created_by,
    );
  };

  useEffect(() => {
    setDataSet(
      response?.data?.msg?.filter((e) =>
        e?.receipt_no
          ?.toString()
          ?.toLowerCase()
          ?.includes(search?.toString()?.toLowerCase()),
      ),
    );

    console.log("RRRRRRR", response?.data?.msg);
  }, [search]);
  return (
    <div>
      <SearchForm
        title="Search by phone"
        products={""}
        flag={1}
        onPress={(data) => onPress(data)}
      />
      {called && (
        <div class="bg-blue-900 dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <DatatableAdv
            flag={2}
            title={"By Phone"}
            btnText={""}
            setSearch={(val) => setSearch(val)}
            headers={[
              { name: "receipt_no", value: "Receipt No." },
              { name: "trn_date", value: "Date" },
              { name: "created_by", value: "Created User" },
              { name: "net_amt", value: "Net Amount" },
              { name: "pay_mode", value: "Mode" },
            ]}
            data={dataSet}
            onPress={(data) => onView(data)}
            searchBy={"Receipt Number"}
          />
        </div>
      )}
    </div>
  );
}

export default Byphone;
