import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import "../styles/dataset.scss";
import sort from "../components/assets/sort.png";

function Dataset() {
  return (
    <>
      <DashboardNavbar />
      <div className="dataset-main-div">
        <div>
          {" "}
          <h1 style={{ margin: "0" }} className="dataset-content">
            Datasets
          </h1>
          <div className="dataset-content">
            Explore, analyze, and share quality data.
          </div>
          <div className="dataset-content" style={{ margin: "20px 0px" }}>
            <button className="data-btn">Create Dataset</button>
          </div>{" "}
        </div>
        <div
          class="relative mb-4 flex w-full flex-wrap items-stretch"
          style={{
            display: "flex",
            alignItems: "center",
            width: "75%",
            position: "relative",
            padding: "20px 0px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
            width={20}
            style={{ padding: "10px", position: "absolute" }}
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="search"
            class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            style={{ padding: "10px 40px", margin: "0 auto", width: "100%" }}
          />
          <div className="filter-flex">
            <img src={sort} className="sort-icon"></img>
            <div>filter</div>
          </div>
        </div>
        <div className="tab-btn">
          <button className="tab-list">All dataset</button>
          <button className="tab-list">Eduaction</button>
          <button className="tab-list">Drugs & Medical</button>
          <button className="tab-list">Earth & nature</button>
          <button className="tab-list">Scie & Technology</button>
        </div>
      </div>
    </>
  );
}

export default Dataset;
