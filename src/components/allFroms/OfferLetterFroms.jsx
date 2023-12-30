import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import OfferLetterShare from "../share/OfferLetterShare";
import OfferLetterData from "../share/OfferLetterData";
import OfferLetterUpload from "../share/OfferLetterUpload";
const OfferLetterForms = () => {
  const religions = [
    {
      name: "Christianity",
    },
    {
      name: "Islam",
    },
    {
      name: "Hinduism",
    },
    {
      name: "Buddhism",
    },
    {
      name: "Sikhism",
    },
    {
      name: "Judaism",
    },
    {
      name: "Bahá'í Faith",
    },
    {
      name: "Jainism",
    },
    {
      name: "Shinto",
    },
    {
      name: "Taoism",
    },
    {
      name: "Zoroastrianism",
    },
    {
      name: "Confucianism",
    },
    {
      name: "Rastafari",
    },
    {
      name: "Druidry",
    },
    {
      name: "Wicca",
    },
  ];

  const MaritalStatus = [
    {
      status: "Single",
    },
    {
      status: "Married",
    },
    {
      status: "Divorced",
    },
    {
      status: "Widowed",
    },
    {
      status: "Separated",
    },
    {
      status: "In a Relationship",
    },
    {
      status: "Civil Partnership",
    },
    {
      status: "Domestic Partnership",
    },
  ];

  const { handleSubmit, control, register } = useForm();
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  useEffect(() => {
    // Fetch data from an API or any other source
    // For demonstration purposes, let's use a simple array
    const fetchData = async () => {
      const response = await fetch("/public/countrysName.json");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" lg:ml-72 lg:mr-5 lg:my-5 mg:ml-30 min-h-[calc(100vh-40px)]  flex flex-col  text-gray-800 rounded-xl bg-gray-200"
    >
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-8 ">
        <div className=" lg:col-span-2 container px-2 rounded-md mt-2">
          <p className="text-center mx-auto items-center font-mono text-teal-600 bg-white w-32 rounded-lg">
            Basic Details{" "}
          </p>
          <div className="font-serif rounded-lg ">
            {/* Applicant Details */}
            <div className="flex gap-2 ">
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block font-medium text-gray-600">
                  Applicant ID
                </label>
                <input
                  type="number"
                  placeholder="Applicant ID"
                  {...register("applicantId", { required: true })}
                  className="mt-1 p-2 min-w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
              <div className="mb-4 space-y-1 text-sm  w-1/2">
                <label className="block font-medium text-gray-600">
                  First Name English
                </label>
                <input
                  type="text"
                  {...register("firstNameEnglish", {
                    maxLength: 256,
                  })}
                  placeholder="First Name English"
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block text-sm font-medium text-gray-600">
                  Middle Name English
                </label>
                <input
                  type="text"
                  {...register("middleNameEnglish", { maxLength: 256 })}
                  className="mmt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                  placeholder=" Middle Name English"
                />
              </div>
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block text-sm font-medium text-gray-600">
                  Thrid Name English
                </label>
                <input
                  placeholder="Thrid Name English"
                  type="text"
                  {...register("ThridNameEnglish", { maxLength: 256 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block text-sm font-medium text-gray-600">
                  Fourth Name English
                </label>
                <input
                  placeholder=" Fourth Name English"
                  type="text"
                  {...register("FourthNameEnglish", {
                    maxLength: 256,
                    required: true,
                  })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block text-sm font-medium text-gray-600">
                  First Name Arabic
                </label>
                <input
                  placeholder="First Name Arabic"
                  type="text"
                  {...register("FirstNameArabic", {
                    maxLength: 256,
                    required: true,
                  })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block text-sm font-medium text-gray-600">
                  Middle Name Arabic
                </label>
                <input
                  type="text"
                  {...register("middleNameArabic", { maxLength: 256 })}
                  className="mmt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                  placeholder=" Middle Name Arabic"
                />
              </div>
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block text-sm font-medium text-gray-600">
                  Thrid Name Arabic
                </label>
                <input
                  placeholder="Thrid Name Arabic"
                  type="text"
                  {...register("ThridNameArabic", { maxLength: 256 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block text-sm font-medium text-gray-600">
                  Fourth Name Arabic
                </label>
                <input
                  type="text"
                  {...register("FourthNameEnglish", { maxLength: 256 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                  placeholder="Fourth Name Arabic"
                />
              </div>

              <div className="space-y-1 text-sm w-1/2">
                <label htmlFor="category" className="block text-gray-600">
                  Country
                </label>
                <select
                  required
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600 rounded-md"
                  name="country"
                >
                  {data.map((country) => (
                    <option value={country.label} key={country.code}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="space-y-1 text-sm w-1/3">
                <label htmlFor="category" className="block text-gray-600">
                  Gender
                </label>
                <select
                  {...register("gender")}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                >
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="space-y-1 text-sm w-1/3">
                <label htmlFor="category" className="block text-gray-600">
                  Religion
                </label>
                <select
                  {...register("religion")}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                >
                  {religions.map((religion) => (
                    <option value={religion.name}>{religion.name}</option>
                  ))}

                  <option value="other">other</option>
                </select>
              </div>
              <div className="space-y-1 text-sm w-1/3">
                <label htmlFor="datePicker">Select a Date:</label>
                <input
                  type="date"
                  id="datePicker"
                  name="selectedDate"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
                {/* Display the selected date */}
              </div>
            </div>
            <div className="flex gap-2">
              <div className=" mb-4 space-y-1 text-sm w-1/2">
                <label htmlFor="category" className="block text-gray-600">
                  Marital Status
                </label>
                <select
                  {...register("MaritalStatus")}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                >
                  {MaritalStatus.map((statusbar) => (
                    <option value={statusbar.status}>{statusbar.status}</option>
                  ))}

                  <option value="other">other</option>
                </select>
              </div>

              <div className="mb-4 space-y-1 text-sm  w-1/2">
                <label className="block font-medium text-gray-600">
                  Company
                </label>
                <input
                  type="text"
                  {...register("company", {
                    required: true,
                    maxLength: 256,
                  })}
                  placeholder=" Company"
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block font-medium text-gray-600">
                  Education
                </label>
                <input
                  type="nvarchar"
                  placeholder="Education"
                  {...register("education", { required: true })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
              <div className="mb-4 space-y-1 text-sm  w-1/2">
                <label className="block font-medium text-gray-600">
                  Specialization
                </label>
                <input
                  placeholder="Specialization"
                  type="nvarchar"
                  {...register("specialization", {
                    required: true,
                    maxLength: 256,
                  })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>

            {/* Continue adding other fields based on the pattern above */}

            {/* Contact Details */}
            <p className="text-center mx-auto items-center font-mono text-teal-600 bg-white w-40 rounded-lg">
              Contact Details{" "}
            </p>
            <div className="flex gap-2">
              <div className=" space-y-1 text-sm w-1/2">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Mobile
                  </label>
                  <input
                    type="text"
                    {...register("mobile", { maxLength: 15 })}
                    className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                  />
                </div>
              </div>
              <div className=" space-y-1 text-sm w-1/2">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true, maxLength: 256 })}
                    className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                  />
                </div>
              </div>
            </div>

            <p className="text-center  mx-auto items-center font-mono text-teal-600 bg-white w-48 rounded-lg">
              Contract Duration
            </p>
            <div className="flex gap-2 ">
              <div className="mb-4 w-1/4">
                <label
                  htmlFor="contractDuration"
                  className="block text-sm font-medium text-gray-600"
                >
                  Contract Duration
                </label>
                <input
                  type="number"
                  id="contractDuration"
                  {...register("contractDuration", { required: true })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>{" "}
              {/* Salary */}
              <div className="mb-4 w-1/4">
                <label
                  htmlFor="salary"
                  className="block text-sm font-medium text-gray-600"
                >
                  Salary
                </label>
                <input
                  type="text"
                  id="salary"
                  {...register("salary", {
                    required: true,
                    pattern: /^\d+(\.\d{1,2})?$/,
                  })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>{" "}
              {/* Job Title */}
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-medium text-gray-600"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  {...register("jobTitle", { maxLength: 256 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2 ">
              {/* Housing */}
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="housing"
                  className="block text-sm font-medium text-gray-600"
                >
                  Housing
                </label>
                <input
                  type="text"
                  id="housing"
                  {...register("housing", { maxLength: 30 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>

              {/* Transportation */}
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="transportation"
                  className="block text-sm font-medium text-gray-600"
                >
                  Transportation
                </label>
                <input
                  type="text"
                  id="transportation"
                  {...register("transportation", { maxLength: 30 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {/* Medical Insurance */}
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="medicalInsurance"
                  className="block text-sm font-medium text-gray-600"
                >
                  Medical Insurance
                </label>
                <input
                  type="text"
                  id="medicalInsurance"
                  {...register("medicalInsurance", { maxLength: 30 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>

              {/* Vacation */}
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="vacation"
                  className="block text-sm font-medium text-gray-600"
                >
                  Vacation
                </label>
                <input
                  type="text"
                  id="vacation"
                  {...register("vacation", { maxLength: 30 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {/* Probation Period */}
              <div className="mb-4">
                <label
                  htmlFor="probationPeriod"
                  className="block text-sm font-medium text-gray-600"
                >
                  Probation Period
                </label>
                <input
                  type="text"
                  id="probationPeriod"
                  {...register("probationPeriod", { maxLength: 30 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>

              {/* Day Off */}
              <div className="mb-4">
                <label
                  htmlFor="dayOff"
                  className="block text-sm font-medium text-gray-600"
                >
                  Day Off
                </label>
                <input
                  type="text"
                  id="dayOff"
                  {...register("dayOff", { maxLength: 30 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>

              {/* Working Hours */}
              <div className="mb-4">
                <label
                  htmlFor="workingHours"
                  className="block text-sm font-medium text-gray-600"
                >
                  Working Hours
                </label>
                <input
                  type="text"
                  id="workingHours"
                  {...register("workingHours", { maxLength: 30 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {/* Department */}
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-600"
                >
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  {...register("department", { maxLength: 30 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>

              {/* Department Manager */}
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="departmentManager"
                  className="block text-sm font-medium text-gray-600"
                >
                  Department Manager
                </label>
                <input
                  type="text"
                  id="departmentManager"
                  {...register("departmentManager", { maxLength: 30 })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
            </div>
            <p className="text-center  mx-auto items-center font-mono text-teal-600 bg-white w-44 rounded-lg">
              Upload Documents
            </p>
            <OfferLetterUpload />

            {/* Continue adding other fields based on the pattern above */}
          </div>
        </div>
        <div className="">
          <OfferLetterShare />
        </div>
        <div className=" ">
          <OfferLetterData />
        </div>
     
      </div> 
        {/* Submit Button */}
      <div className=" text-center ">
     
     {/* Hover */}

<button  type="submit" className="group w-96 relative inline-block focus:outline-none focus:ring">
 <span
   className="absolute mb-5 inset-0 translate-x-0 translate-y-0 bg-teal-600 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
 ></span>

 <span
   className="relative text-white  mb-5 inline-block w-96 border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
 >
submit
 </span>
</button>
   </div>
    </form>
  );
};

export default OfferLetterForms;
