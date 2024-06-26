import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
   
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "length",
        data: [28, 14, 19, 22, 26,10],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#348ACF"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 1,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#348ACF",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#348ACF",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#BBBBBB",
        strokeDashArray: 0,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 10,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
   
  export default function IntAirBubble() {
    return (
      <div className="bg-[white] p-2 rounded-xl  border border-sky-500 mx-3 ">

      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
          <Typography variant="small" color="gray" className="max-w-sm md:flex-row md:items-center font-normal">
            Intensity of drip flow
           </Typography>
        </CardBody>
      
      </Card>
      </div>
    );
  }